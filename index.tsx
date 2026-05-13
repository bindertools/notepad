import React, { useEffect, useState, useRef } from 'react'
import type { Plugin, PluginTabProps } from '@cmdide/plugin-sdk'
import './notepad.css'

interface Note {
  id: string
  title: string
  body: string
  updated: number
}

function loadNotes(): Note[] {
  try {
    const raw = localStorage.getItem('notepad:notes')
    return raw ? JSON.parse(raw) : []
  } catch { return [] }
}

function saveNotes(notes: Note[]) {
  try { localStorage.setItem('notepad:notes', JSON.stringify(notes)) } catch {}
}

function NotepadTab({ active }: PluginTabProps) {
  const [notes, setNotes] = useState<Note[]>(loadNotes)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [editingTitle, setEditingTitle] = useState(false)
  const bodyRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (notes.length > 0 && !selectedId) {
      setSelectedId(notes[0].id)
    }
  }, [])

  const newNote = () => {
    const note: Note = {
      id: Date.now().toString(),
      title: 'Untitled',
      body: '',
      updated: Date.now(),
    }
    const updated = [note, ...notes]
    setNotes(updated)
    saveNotes(updated)
    setSelectedId(note.id)
    setTimeout(() => setEditingTitle(true), 50)
  }

  const deleteNote = (id: string) => {
    const updated = notes.filter(n => n.id !== id)
    setNotes(updated)
    saveNotes(updated)
    if (selectedId === id) setSelectedId(updated[0]?.id ?? null)
  }

  const updateBody = (body: string) => {
    const updated = notes.map(n =>
      n.id === selectedId ? { ...n, body, updated: Date.now() } : n
    )
    setNotes(updated)
    saveNotes(updated)
  }

  const updateTitle = (title: string) => {
    const updated = notes.map(n =>
      n.id === selectedId ? { ...n, title } : n
    )
    setNotes(updated)
    saveNotes(updated)
  }

  const selected = notes.find(n => n.id === selectedId)

  return (
    <div className="notepad">
      <div className="notepad__sidebar">
        <button className="notepad__new" onClick={newNote}>+ New Note</button>
        <div className="notepad__list">
          {notes.map(n => (
            <div
              key={n.id}
              className={`notepad__item${n.id === selectedId ? ' notepad__item--active' : ''}`}
              onClick={() => setSelectedId(n.id)}
            >
              <div className="notepad__item-title">{n.title}</div>
              <div className="notepad__item-preview">{n.body.slice(0, 60)}</div>
              <button
                className="notepad__item-del"
                onClick={e => { e.stopPropagation(); deleteNote(n.id) }}
              >×</button>
            </div>
          ))}
          {notes.length === 0 && (
            <div className="notepad__empty">No notes yet</div>
          )}
        </div>
      </div>

      <div className="notepad__editor">
        {selected ? (
          <>
            {editingTitle ? (
              <input
                className="notepad__title-input"
                value={selected.title}
                autoFocus
                onChange={e => updateTitle(e.target.value)}
                onBlur={() => setEditingTitle(false)}
                onKeyDown={e => { if (e.key === 'Enter') setEditingTitle(false) }}
              />
            ) : (
              <div className="notepad__title" onClick={() => setEditingTitle(true)}>
                {selected.title}
              </div>
            )}
            <textarea
              ref={bodyRef}
              className="notepad__body"
              value={selected.body}
              onChange={e => updateBody(e.target.value)}
              placeholder="Start writing…"
            />
          </>
        ) : (
          <div className="notepad__placeholder">Select or create a note</div>
        )}
      </div>
    </div>
  )
}

const notepadPlugin: Plugin = {
  id: 'notepad',
  name: 'Notepad',
  description: 'Persistent in-app note-taking with a sidebar list and full editor.',
  author: 'built-in',
  version: '1.0.0',
  tabType: 'notepad',
  tabTitle: 'notepad',
  TabComponent: NotepadTab,
}

export default notepadPlugin

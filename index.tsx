import React, { useEffect, useRef, useState } from 'react'
import type { Plugin, PluginTabProps } from '@cmdide/plugin-sdk'

const CSS = `
.notepad{display:flex;height:100%;background:var(--app-bg,#1e1e1e);color:#ccc;font-family:'Cascadia Code',monospace;font-size:13px}
.notepad__sidebar{width:220px;border-right:1px solid var(--border-color,#333);display:flex;flex-direction:column;overflow:hidden}
.notepad__new{margin:10px;background:rgba(79,195,247,.1);border:1px solid rgba(79,195,247,.25);border-radius:5px;color:#4fc3f7;padding:7px;font-size:12px;cursor:pointer}
.notepad__new:hover{background:rgba(79,195,247,.18)}
.notepad__list{flex:1;overflow-y:auto}
.notepad__item{position:relative;padding:9px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.04)}
.notepad__item:hover{background:rgba(255,255,255,.04)}
.notepad__item--active{background:rgba(79,195,247,.08)}
.notepad__item-title{font-size:12px;color:#ddd;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.notepad__item-preview{font-size:11px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px}
.notepad__item-del{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#555;cursor:pointer;font-size:14px;opacity:0;line-height:1}
.notepad__item:hover .notepad__item-del{opacity:1}
.notepad__item-del:hover{color:#f48fb1}
.notepad__empty{color:#555;font-size:12px;text-align:center;padding:20px}
.notepad__editor{flex:1;display:flex;flex-direction:column;overflow:hidden}
.notepad__title{font-size:16px;font-weight:600;color:#ddd;padding:16px 20px 8px;cursor:text;border-bottom:1px solid var(--border-color,#333)}
.notepad__title-input{font-size:16px;font-weight:600;background:none;border:none;border-bottom:1px solid var(--border-color,#333);color:#ddd;padding:16px 20px 8px;outline:none;width:100%}
.notepad__body{flex:1;background:none;border:none;color:#ccc;padding:16px 20px;font-size:13px;font-family:inherit;resize:none;outline:none;line-height:1.65}
.notepad__placeholder{display:flex;align-items:center;justify-content:center;height:100%;color:#555}
`

let stylesInjected = false
function injectStyles() {
  if (stylesInjected || typeof document === 'undefined') return
  stylesInjected = true
  const el = document.createElement('style')
  el.textContent = CSS
  document.head.appendChild(el)
}

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
  injectStyles()

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
  author: 'Command-IDE',
  version: '1.0.0',
  tabType: 'notepad',
  tabTitle: 'Notepad',
  TabComponent: NotepadTab,
  commands: [
    { name: 'notepad', description: 'open notepad tab' },
    { name: 'note',    description: 'open notepad tab' },
  ],
}

export default notepadPlugin

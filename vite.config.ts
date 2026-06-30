import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    // Classic JSX runtime so the bundle uses React.createElement from the
    // global window.React rather than importing from 'react/jsx-runtime'.
    react({ jsxRuntime: 'classic' }),
  ],
  resolve: {
    alias: {
      '@binder/app-sdk': path.resolve(__dirname, '../plugin-sdk/index.ts'),
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.tsx'),
      formats: ['iife'],
      name: 'window.__binder_app__',
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // React is provided by the host app via window.React, not bundled.
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist',
    minify: true,
  },
})

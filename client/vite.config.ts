import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'stream': 'stream-browserify',
      'util': 'util/',
      'buffer': 'buffer/',
      'process': 'process/browser',
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  define: {
    'process.env': {},
    'global': 'window'
  }
})

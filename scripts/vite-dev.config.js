import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const HOME = path.join(__dirname, '..', 'home')

export default defineConfig({
  root: HOME,
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/essentialsy': { target: 'http://localhost:5174', changeOrigin: true, ws: true },
      '/discordlinkplus': { target: 'http://localhost:5175', changeOrigin: true, ws: true },
      '/papyrus-client': { target: 'http://localhost:5177', changeOrigin: true, ws: true },
      '/papyrus': { target: 'http://localhost:5176', changeOrigin: true, ws: true },
    },
  },
})

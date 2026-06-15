#!/usr/bin/env node
/**
 * Dev server for the full docs portal: home at /, project docs under subpaths.
 */
import { spawn } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createServer } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const VITEPRESS = path.join(ROOT, 'node_modules/vitepress/bin/vitepress.js')

const PROJECTS = [
  { dir: 'wiki', port: 5174 },
  { dir: 'discordlinkplus', port: 5175 },
  { dir: 'papyrus', port: 5176 },
  { dir: 'papyrus-client', port: 5177 },
]

const children = []

function shutdown(signal) {
  for (const child of children) {
    if (!child.killed) {
      child.kill(signal)
    }
  }
}

process.on('SIGINT', () => {
  shutdown('SIGTERM')
  process.exit(0)
})
process.on('SIGTERM', () => {
  shutdown('SIGTERM')
  process.exit(0)
})

for (const { dir, port } of PROJECTS) {
  const child = spawn(
    process.execPath,
    [VITEPRESS, 'dev', dir, '--port', String(port), '--strictPort'],
    { cwd: ROOT, stdio: 'inherit', env: process.env },
  )
  child.on('exit', (code, signal) => {
    if (signal) {
      return
    }
    if (code !== 0) {
      shutdown('SIGTERM')
      process.exit(code ?? 1)
    }
  })
  children.push(child)
}

const configFile = path.join(__dirname, 'vite-dev.config.js')
const server = await createServer({ configFile })
await server.listen()
server.printUrls()

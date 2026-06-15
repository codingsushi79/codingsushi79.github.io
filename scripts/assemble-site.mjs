#!/usr/bin/env node
/**
 * Assemble GitHub Pages output: home site at /, project docs under subpaths.
 * Usage: node scripts/assemble-site.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const HOME_DIR = path.join(ROOT, 'home')
const PROJECTS = [
  { name: 'essentialsy', outDir: path.join(ROOT, 'website') },
  { name: 'discordlinkplus', outDir: path.join(ROOT, 'website-discordlinkplus') },
  { name: 'papyrus', outDir: path.join(ROOT, 'website-papyrus') },
  { name: 'papyrus-client', outDir: path.join(ROOT, 'website-papyrus-client') },
]
const SITE_DIR = path.join(ROOT, '_site')
const CNAME = 'docs.sushii.dev'

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name)
    const to = path.join(dest, entry.name)
    if (entry.isDirectory()) {
      copyDir(from, to)
    } else {
      fs.copyFileSync(from, to)
    }
  }
}

function rmDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true })
  }
}

for (const project of PROJECTS) {
  if (!fs.existsSync(project.outDir)) {
    console.error(`[assemble-site] Missing ${project.outDir} — run \`npm run build\` first.`)
    process.exit(1)
  }
}

rmDir(SITE_DIR)
fs.mkdirSync(SITE_DIR, { recursive: true })

copyDir(HOME_DIR, SITE_DIR)
for (const project of PROJECTS) {
  copyDir(project.outDir, path.join(SITE_DIR, project.name))
}

fs.writeFileSync(path.join(SITE_DIR, 'CNAME'), `${CNAME}\n`)
fs.writeFileSync(path.join(SITE_DIR, '.nojekyll'), '')

console.log(`[assemble-site] Ready at ${SITE_DIR}`)

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
const WIKI_OUT = path.join(ROOT, 'website')
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

if (!fs.existsSync(WIKI_OUT)) {
  console.error('[assemble-site] Run `npm run build` first (missing website/).')
  process.exit(1)
}

rmDir(SITE_DIR)
fs.mkdirSync(SITE_DIR, { recursive: true })

copyDir(HOME_DIR, SITE_DIR)
copyDir(WIKI_OUT, path.join(SITE_DIR, 'essentialsy'))

fs.writeFileSync(path.join(SITE_DIR, 'CNAME'), `${CNAME}\n`)

console.log(`[assemble-site] Ready at ${SITE_DIR}`)

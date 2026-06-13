#!/usr/bin/env node
/**
 * Build algolia-records.json for manual upload in the Algolia dashboard.
 * Usage: node scripts/generate-algolia-records.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const WIKI_DIR = path.join(ROOT, 'wiki')
const OUT_FILE = path.join(ROOT, 'wiki', 'algolia-records.json')

const DOCS_ORIGIN = process.env.DOCS_ORIGIN || 'https://docs.sushii.dev'
const DOCS_BASE = process.env.DOCS_BASE || '/essentialsy/'

const SECTIONS = {
  'getting-started': 'Getting Started',
  configuration: 'Configuration',
  modules: 'Modules',
  commands: 'Commands',
  development: 'Development',
}

function mdPathToUrl(relPath) {
  if (relPath === 'index.md') {
    return `${DOCS_ORIGIN}${DOCS_BASE}`
  }
  const slug = relPath.replace(/\.md$/, '').replace(/\\/g, '/')
  return `${DOCS_ORIGIN}${DOCS_BASE}${slug}`
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

function stripMarkdown(text) {
  return text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/^#+\s+/gm, '')
    .replace(/[*_~>|]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function sectionForPath(relPath) {
  if (relPath === 'index.md') return 'EssentialsY'
  const top = relPath.split(/[/\\]/)[0]
  return SECTIONS[top] || 'Documentation'
}

function parseMarkdown(relPath, source) {
  const lines = source.replace(/\r\n/g, '\n').split('\n')
  const records = []
  const pageUrl = mdPathToUrl(relPath)
  const lvl0 = sectionForPath(relPath)

  let pageTitle = ''
  let current = null

  function pushRecord(type, title, content, level) {
    const anchor = slugify(title)
    const url = anchor ? `${pageUrl}#${anchor}` : pageUrl
    const hierarchy = { lvl0 }
    if (level >= 1) hierarchy.lvl1 = pageTitle
    if (level >= 2) hierarchy.lvl2 = title
    if (level >= 3) hierarchy.lvl3 = title

    const cleaned = stripMarkdown(content)
    if (!cleaned && type !== 'lvl1') return
    if (!title && !cleaned) return

    records.push({
      objectID: `${url}-${type}-${records.length}`,
      url,
      anchor,
      content: cleaned.slice(0, 2000),
      type,
      hierarchy,
    })
  }

  function flushSection() {
    if (!current) return
    pushRecord(`lvl${current.level}`, current.title, current.content.join('\n'), current.level)
    current = null
  }

  for (const line of lines) {
    const h1 = line.match(/^#\s+(.+)/)
    const h2 = line.match(/^##\s+(.+)/)
    const h3 = line.match(/^###\s+(.+)/)

    if (h1) {
      flushSection()
      pageTitle = h1[1].trim()
      pushRecord('lvl1', pageTitle, pageTitle, 1)
      continue
    }

    if (h2) {
      flushSection()
      current = { level: 2, title: h2[1].trim(), content: [] }
      continue
    }

    if (h3) {
      flushSection()
      current = { level: 3, title: h3[1].trim(), content: [] }
      continue
    }

    if (current) {
      current.content.push(line)
    } else if (pageTitle && line.trim()) {
      if (!current) {
        current = { level: 2, title: pageTitle, content: [] }
      }
      current.content.push(line)
    }
  }

  flushSection()
  return records
}

function walkMarkdownFiles(dir, base = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules') continue
    const rel = base ? `${base}/${entry.name}` : entry.name
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...walkMarkdownFiles(full, rel))
    } else if (entry.name.endsWith('.md')) {
      files.push(rel)
    }
  }
  return files.sort()
}

const files = walkMarkdownFiles(WIKI_DIR)
const records = []

for (const rel of files) {
  const source = fs.readFileSync(path.join(WIKI_DIR, rel), 'utf8')
  records.push(...parseMarkdown(rel, source))
}

fs.writeFileSync(OUT_FILE, `${JSON.stringify(records, null, 2)}\n`)
console.log(`Wrote ${records.length} records to ${path.relative(ROOT, OUT_FILE)}`)

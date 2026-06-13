# SushiMC Documentation Hub

Static documentation portal at **https://docs.sushii.dev/** with project docs under subpaths (e.g. `/essentialsy/`).

## Development

```bash
npm install
cp .env.example .env.local   # optional — Algolia search in EssentialsY docs
```

| Command | Description |
|---------|-------------|
| `npm run dev` | EssentialsY VitePress docs only → http://localhost:5173/essentialsy/ |
| `npm run dev:home` | Landing page only → http://localhost:5174 |
| `npm run build:site` | Build everything into `_site/` |
| `npm run preview:site` | Build + serve full site → http://localhost:4173 |

## Structure

```text
docs-site/
├── home/                 # Main landing page (docs.sushii.dev/)
├── wiki/                 # EssentialsY VitePress docs → /essentialsy/
├── scripts/
│   ├── assemble-site.mjs # Combines home + wiki build for deploy
│   └── generate-algolia-records.mjs
├── website/              # VitePress build output (gitignored)
├── _site/                # Full site output (gitignored)
└── .github/workflows/    # GitHub Pages deploy
```

## Adding another project

1. Add a new docs build under a subfolder (e.g. `other-project/` with its own VitePress `base: '/other-project/'`).
2. Copy its build output into `_site/other-project/` in `scripts/assemble-site.mjs`.
3. Add a card to `home/index.html`.

## Deploy (GitHub Pages)

1. Use this folder as the repo root.
2. **Settings → Pages → Source:** GitHub Actions
3. Custom domain: `docs.sushii.dev`
4. Secrets for Algolia (EssentialsY search): `ALGOLIA_APP_ID`, `ALGOLIA_API_KEY`, `ALGOLIA_INDEX_NAME`

## Search (Algolia — EssentialsY only)

1. Crawl **https://docs.sushii.dev/essentialsy/** via https://crawler.algolia.com/ using `wiki/.vitepress/algolia-crawler-config.js`
2. Or upload `wiki/algolia-records.json` — regenerate with `npm run algolia-export`

# SushiMC Documentation

Static documentation portal at **https://docs.sushii.dev/** with project docs under subpaths (e.g. `/essentialsy/`, `/discordlinkplus/`).

## Development

```bash
npm install
```

| Command | Description |
|---------|-------------|
| `npm run dev` | EssentialsY VitePress docs → http://localhost:5173/essentialsy/ |
| `npm run dev:discordlinkplus` | DiscordLink+ VitePress docs → http://localhost:5173/discordlinkplus/ |
| `npm run dev:home` | Landing page only → http://localhost:5174 |
| `npm run build:site` | Build everything into `_site/` |
| `npm run preview:site` | Build + serve full site → http://localhost:4173 |

## Structure

```text
docs-site/
├── home/                      # Main landing page (docs.sushii.dev/)
├── wiki/                      # EssentialsY VitePress docs → /essentialsy/
├── discordlinkplus/           # DiscordLink+ VitePress docs → /discordlinkplus/
├── scripts/
│   └── assemble-site.mjs      # Combines home + wiki builds for deploy
├── website/                   # EssentialsY build output (gitignored)
├── website-discordlinkplus/   # DiscordLink+ build output (gitignored)
├── _site/                     # Full site output (gitignored)
└── .github/workflows/         # GitHub Pages deploy
```

## Projects

| Project | Path | Repository |
|---------|------|------------|
| EssentialsY | `/essentialsy/` | [codingsushi79/EssentialsY](https://github.com/codingsushi79/EssentialsY) |
| DiscordLink+ | `/discordlinkplus/` | [codingsushi79/discordlinkplus](https://github.com/codingsushi79/discordlinkplus) |

## Adding another project

1. Add a new docs build under a subfolder (e.g. `other-project/` with its own VitePress `base: '/other-project/'`).
2. Register its build output in `scripts/assemble-site.mjs`.
3. Add a card to `home/index.html`.

## Deploy (GitHub Pages)

1. Use this folder as the repo root.
2. **Settings → Pages → Source:** GitHub Actions
3. Custom domain: `docs.sushii.dev`

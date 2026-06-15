---
title: Download
pageClass: download-page
---

<DownloadPicker />

The picker above selects by **platform** (launcher) or **Minecraft version** (mod-only). It always resolves to the latest stable release that ships that file — not a specific release tag.

## Manual download

### Launcher (recommended)

| Platform | File |
|----------|------|
| macOS | `.pkg` installer from [GitHub Releases](https://github.com/codingsushi79/Papyrus-Client/releases) |
| Windows | `.exe` installer from [GitHub Releases](https://github.com/codingsushi79/Papyrus-Client/releases) |

The launcher includes Microsoft sign-in, Fabric installation, mod profiles, and the bundled `papyrus-shield` integrity mod.

See [Installation](/getting-started/installation) for macOS `.pkg` setup and the `xattr` steps if Gatekeeper blocks the app.

### Mod only

Use these if you already have Fabric and another launcher but need integrity for a Papyrus server. One jar per supported Minecraft version:

| Minecraft | File pattern |
|-----------|--------------|
| **26.1.2** | `papyrus-shield-26.1.2-*.jar` |
| **1.21.11** | `papyrus-shield-1.21.11-*.jar` |
| **1.21.10** | `papyrus-shield-1.21.10-*.jar` |
| **1.21.8** | `papyrus-shield-1.21.8-*.jar` |
| **1.21.4** | `papyrus-shield-1.21.4-*.jar` |
| **1.21.1** | `papyrus-shield-1.21.1-*.jar` |

Place the jar in your instance `mods/` folder alongside other Fabric mods.

### Dev builds (CI)

1. Open [Build Papyrus Client](https://github.com/codingsushi79/Papyrus-Client/actions/workflows/build.yml) on GitHub Actions
2. Click the latest successful run on `main`
3. Download **`papyrus-client-macos-latest`**, **`papyrus-client-windows-latest`**, or **`papyrus-shield-<mc>`** (one artifact per Minecraft version: 26.1.2, 1.21.11, 1.21.10, 1.21.8, 1.21.4, 1.21.1)

## Requirements

- **Java 21+** for 1.21.x
- **Java 25+** for 26.1.2
- **Microsoft account** owning Minecraft Java Edition
- **Fabric Loader** (installed automatically by Papyrus Client)

## Next steps

- [Installation](/getting-started/installation) — macOS `.pkg` setup and `xattr` guide
- [Quick Start](/getting-started/quick-start) — Sign in and create an instance
- [Server Configuration](/server/configuration) — Enable client integrity on Papyrus

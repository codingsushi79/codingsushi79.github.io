---
title: Download
pageClass: download-page
---

<DownloadPicker />

## Manual download

### Launcher (recommended)

| Platform | File |
|----------|------|
| macOS | `.dmg` from [GitHub Releases](https://github.com/codingsushi79/Papyrus-Client/releases) |
| Windows | `.exe` installer from [GitHub Releases](https://github.com/codingsushi79/Papyrus-Client/releases) |

The launcher includes Microsoft sign-in, Fabric installation, mod profiles, and the bundled `papyrus-shield` integrity mod.

### Mod only

Use these if you already have Fabric and another launcher but need integrity for a Papyrus server:

| Minecraft | File |
|-----------|------|
| **26.1.2** | `papyrus-shield-26.1.2-*.jar` |
| **1.21.11** | `papyrus-shield-1.21.11-*.jar` |
| **1.21.10** | `papyrus-shield-1.21.10-*.jar` |
| **1.21.8** | `papyrus-shield-1.21.8-*.jar` |
| 1.21.4 | `papyrus-shield-1.21.4-*.jar` |
| 1.21.1 | `papyrus-shield-1.21.1-*.jar` |

Place the jar in your instance `mods/` folder alongside other Fabric mods.

### Dev builds (CI)

1. Open [Build Papyrus Client](https://github.com/codingsushi79/Papyrus-Client/actions/workflows/build.yml) on GitHub Actions
2. Click the latest successful run on `main`
3. Download **`papyrus-client-macos-latest`**, **`papyrus-client-windows-latest`**, or **`papyrus-shield-<mc>`** artifacts

## Requirements

- **Java 21+** for 1.21.x
- **Java 25+** for 26.1.2
- **Microsoft account** owning Minecraft Java Edition
- **Fabric Loader** (installed automatically by Papyrus Client)

## Next steps

- [Quick Start](/getting-started/quick-start) — Sign in and create a profile
- [Server Configuration](/server/configuration) — Enable client integrity on Papyrus

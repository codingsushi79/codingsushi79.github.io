---
title: Download
pageClass: download-page
---

::: warning Work in progress
Papyrus is a WIP project. Builds are provided for testing — not recommended for production servers yet.
:::

<DownloadPicker />

## Manual download

### Stable releases

Each release ships one jar per supported Minecraft version:

| Minecraft | File |
|-----------|------|
| **26.1.2** | `Papyrus-26.1.2.jar` |
| **1.21.11** | `Papyrus-1.21.11.jar` |
| **1.21.10** | `Papyrus-1.21.10.jar` |
| **1.21.8** | `Papyrus-1.21.8.jar` |
| **1.21.4** | `Papyrus-1.21.4.jar` |

Release tags use semantic fork versioning (`v1.0.0`, `v1.0.1`, …). Jar filenames always reflect the Minecraft version, not the release tag.

### Dev builds (CI)

1. Open [Build Papyrus](https://github.com/codingsushi79/Papyrus/actions/workflows/build.yml) on GitHub Actions
2. Click the latest successful run on `main`
3. Download the **`papyrus-server-<mc>`** artifact for your Minecraft version (e.g. `papyrus-server-26.1.2`)

### Build from source

```bash
git clone https://github.com/codingsushi79/Papyrus.git
cd Papyrus
./gradlew applyPatches createPaperclipJar syncPapyrusPaperclipJar
```

Output: `papyrus-server/build/distributions/papyrus-paperclip-<version>.jar`

See [Building](/development/building) for the full workflow.

## Requirements

- **Java 21+** to run (Java 25 recommended)
- Accept the Minecraft EULA on first boot (`eula.txt`)

## Next steps

- [Quick Start](/getting-started/quick-start) — First run and config generation
- [Production](/running/production) — Recommended JVM flags

---
title: Download
pageClass: download-page
---

<DownloadPicker />

## Manual download

### Stable releases

When a release is published, download `Papyrus-26.1.2.jar` (or `Papyrus-*.jar` for other Minecraft versions) from the [Releases](https://github.com/codingsushi79/Papyrus/releases) page.

### Dev builds (CI)

1. Open [Build Papyrus](https://github.com/codingsushi79/Papyrus/actions/workflows/build.yml) on GitHub Actions
2. Click the latest successful run on `main`
3. Download the **`papyrus-server`** artifact
4. Extract the `papyrus-paperclip-*.jar` from the zip

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

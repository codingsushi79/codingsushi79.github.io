# Project Structure

```text
Papyrus/
├── papyrus-api/          Public Bukkit/Paper plugin API (published as paper-api)
├── papyrus-server/       Server implementation
│   ├── patches/          Minecraft source patches (sources/, features/, resources/)
│   └── src/main/java/    Papyrus/Paper Java code (io.papermc.paper.*)
├── papyrus-generator/    Code generation utilities
├── build-data/           Access wideners and mapping data
├── scripts/
│   └── start.sh          Production JVM start script
├── gradle.properties     MC version, Maven group, Gradle tuning
└── .github/workflows/    CI build and test publishing
```

Maven coordinates remain `io.papermc.paper` for plugin compatibility. The display brand is **Papyrus** (`sushimc:papyrus`).

## Key files

| File | Purpose |
|------|---------|
| `gradle.properties` | `mcVersion`, `apiVersion`, `group`, `channel` |
| `build.gradle.kts` | Root build configuration |
| `papyrus-server/build.gradle.kts` | Server module build |
| `papyrus-api/build.gradle.kts` | API module build and publishing |

## Patch workflow

Minecraft source changes go through the patch system in `papyrus-server/patches/`. Direct edits to generated Minecraft sources are applied via patches, not committed directly.

See [Contributing](/development/contributing) and upstream [Paper contributing guide](https://github.com/PaperMC/Paper/blob/main/CONTRIBUTING.md).

# Project Structure

```text
Papyrus/
├── papyrus-api/          Public Bukkit/Paper plugin API (Gradle project :paper-api)
├── papyrus-server/       Server implementation (Gradle project :paper-server)
├── paper-server/         Symlink → papyrus-server (required by Paperweight patch tooling)
│   ├── patches/          Minecraft source patches (sources/, features/, resources/)
│   └── src/main/java/    Papyrus/Paper Java code (io.papermc.paper.*)
├── papyrus-generator/    Optional code generation utilities
├── build-data/           Access wideners and mapping data
├── scripts/
│   └── start.sh          Production JVM start script
├── gradle.properties     MC version, apiVersion, Maven group
└── .github/workflows/    CI build, tests, and release uploads
```

Gradle project names stay `:paper-api` and `:paper-server` so upstream Paperweight and plugin examples keep working. Physical directories use the `papyrus-*` prefix.

Maven coordinates remain `io.papermc.paper:paper-api` for plugin compatibility. The API jar embeds `apiVersioning.json` (from `apiVersion` in `gradle.properties`) for runtime version checks. The display brand is **Papyrus** (`sushimc:papyrus`).

## Key files

| File | Purpose |
|------|---------|
| `gradle.properties` | `mcVersion`, `apiVersion`, `group`, `channel` |
| `build.gradle.kts` | Root build configuration (Java 25 toolchain) |
| `papyrus-server/build.gradle.kts` | Server module build |
| `papyrus-api/build.gradle.kts` | API module build and publishing |

## Patch workflow

Minecraft source changes go through the patch system in `papyrus-server/patches/`. Direct edits to generated Minecraft sources are applied via patches, not committed directly.

See [Contributing](/development/contributing) and upstream [Paper contributing guide](https://github.com/PaperMC/Paper/blob/main/CONTRIBUTING.md).

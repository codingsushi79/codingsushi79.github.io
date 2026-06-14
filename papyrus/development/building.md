# Building

```bash
git clone https://github.com/codingsushi79/Papyrus.git
cd Papyrus

# Apply Minecraft patches and compile
./gradlew applyPatches build

# Create the runnable paperclip jar (copied to papyrus-paperclip-*.jar)
./gradlew createPaperclipJar syncPapyrusPaperclipJar
```

Output: `papyrus-server/build/distributions/papyrus-paperclip-<version>.jar`

GitHub [releases](/download) rename this to `Papyrus-<minecraft-version>.jar` (e.g. `Papyrus-26.1.2.jar`).

## Common Gradle tasks

| Task | Purpose |
|------|---------|
| `./gradlew applyPatches` | Apply all Minecraft source patches |
| `./gradlew build` | Compile and run tests |
| `./gradlew createPaperclipJar` | Build the downloadable server jar |
| `./gradlew syncPapyrusPaperclipJar` | Copy paperclip output to `papyrus-paperclip-*.jar` |
| `./gradlew rebuildPatches` | Regenerate patch files after editing `papyrus-server/src/minecraft` |
| `./gradlew fixupSourcePatches` | Fix patch context after manual edits |
| `./gradlew publishToMavenLocal` | Install `paper-api` locally for plugin dev |

Windows: use `gradlew` instead of `./gradlew`.

## Requirements

- **Git** — zip downloads will not build (`settings.gradle.kts` checks for `.git/`)
- **Java 25 JDK** to compile (Gradle toolchains can auto-provision if only JRE 21+ is installed)
- **~4 GB RAM** for Gradle (`org.gradle.jvmargs` in `gradle.properties`)

Development requires cloning with Git — the build system applies patches against a generated git tree inside `papyrus-server/src/minecraft`.

See [CONTRIBUTING.md](https://github.com/codingsushi79/Papyrus/blob/main/CONTRIBUTING.md) for the patch workflow.

## CI and releases

GitHub Actions builds on every push and pull request to `main`:

1. Apply Minecraft patches
2. Compile and run tests
3. Build the paperclip jar
4. Upload artifacts (`papyrus-server` jar + test results)

Pushing a version tag (e.g. `v1.0.1`) creates a [GitHub Release](https://github.com/codingsushi79/Papyrus/releases) with `Papyrus-<mcVersion>.jar` attached automatically.

Download CI builds from the [Actions tab](https://github.com/codingsushi79/Papyrus/actions) or the [Download](/download) page.

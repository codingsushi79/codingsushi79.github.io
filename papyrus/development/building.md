# Building

```bash
git clone https://github.com/codingsushi79/Papyrus.git
cd Papyrus

# Apply Minecraft patches and compile
./gradlew applyPatches build

# Create the runnable paperclip jar
./gradlew createPaperclipJar syncPapyrusPaperclipJar
```

Output: `papyrus-server/build/distributions/papyrus-paperclip-<version>.jar`

## Common Gradle tasks

| Task | Purpose |
|------|---------|
| `./gradlew applyPatches` | Apply all Minecraft source patches |
| `./gradlew build` | Compile and run tests |
| `./gradlew createPaperclipJar` | Build the downloadable server jar |
| `./gradlew rebuildPatches` | Regenerate patch files after editing `papyrus-server/src/minecraft` |
| `./gradlew fixupSourcePatches` | Fix patch context after manual edits |

Windows: use `gradlew` instead of `./gradlew`.

## Requirements

Development requires cloning with Git — the build system applies patches against a generated git tree inside `papyrus-server/src/minecraft`. Downloading a zip from GitHub will not work.

See [CONTRIBUTING.md](https://github.com/codingsushi79/Papyrus/blob/main/CONTRIBUTING.md) for the patch workflow.

## CI

GitHub Actions builds on every push and pull request to `main`:

1. Apply Minecraft patches
2. Compile and run tests
3. Build the paperclip jar
4. Upload artifacts (`papyrus-server` jar + test results)

Download builds from the [Actions tab](https://github.com/codingsushi79/Papyrus/actions) or the [Download](/download) page.

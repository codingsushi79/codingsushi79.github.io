# Building

## Requirements

- JDK 17 or higher
- Git

## Build

```bash
./gradlew :EssentialsY:build


Output: `jars/EssentialsY-*.jar`

```
## Test Server

```bash
./gradlew :EssentialsY:runServer


Starts a local Paper test server with the plugin loaded.

```
## Project Structure

```text

EssentialsY/
├── Essentials/              # Main plugin (EssentialsY)
│   └── src/main/java/
│       ├── com/earth2me/essentials/   # Core commands, settings
│       └── net/essentialsy/           # Module system, config
├── EssentialsChat/          # Chat module source (merged)
├── EssentialsSpawn/         # Spawn module source (merged)
├── EssentialsProtect/       # Protect module source (merged)
├── EssentialsAntiBuild/     # AntiBuild module source (merged)
├── EssentialsGeoIP/         # GeoIP module source (merged)
├── providers/               # Version-specific Bukkit providers
├── build-logic/             # Gradle convention plugins
└── docs-site/               # Documentation (VitePress — standalone)


```
## Generate Data

```bash
./gradlew :EssentialsY:commandData :EssentialsY:versionData


Outputs to `generated/` for the website and permission reference.

```
## Documentation

This VitePress site is self-contained in the docs project root:

```bash
npm install
npm run dev
npm run build
npm run preview
```
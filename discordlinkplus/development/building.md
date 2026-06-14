# Building

Build DiscordLink+ from source with Gradle.

## Prerequisites

- **JDK 25** (recommended for Discord voice/DAVE support)
- Git

## Build

```bash
git clone https://github.com/codingsushi79/discordlinkplus.git
cd discordlinkplus
./gradlew shadowJar
```

Output: `build/libs/DiscordLinkPlus-<version>.jar`

## CI/CD

The [Build workflow](https://github.com/codingsushi79/discordlinkplus/actions) on GitHub Actions:

- Runs on pushes and PRs to `main`/`master`
- Compiles the plugin and uploads the JAR as a workflow artifact
- On push to `main`, creates a git tag and GitHub Release if the version tag doesn't exist
- Publishes to [Modrinth](https://modrinth.com/plugin/discordlink+) as a draft version

### Cutting a Release

1. Bump the version in `gradle.properties`:
   ```properties
   pluginVersion=1.0.1
   ```
2. Commit and push to `main`:
   ```bash
   git add gradle.properties
   git commit -m "Release 1.0.1"
   git push origin main
   ```

To re-publish without bumping the version, go to **Actions → Build → Run workflow**.

## Folia Support

DiscordLink+ sets `folia-supported: true` and uses `FoliaScheduler` for region-safe task scheduling.

## License

MIT

# Branding & Compatibility

Papyrus identifies itself as **Papyrus by SushiMC** at runtime while remaining API-compatible with Paper plugins.

## Server brand

| Property | Paper | Papyrus |
|----------|-------|---------|
| Display name | Paper | Papyrus |
| Brand ID | `papermc:paper` | `sushimc:papyrus` |
| Maven group | `io.papermc.paper` | `io.papermc.paper` (unchanged) |
| Gradle modules | `:paper-api`, `:paper-server` | Same names; dirs are `papyrus-*` |
| Release jar | `paper-*.jar` | `Papyrus-<mcVersion>.jar` |
| CI / local jar | `paperclip-*.jar` | `papyrus-paperclip-*.jar` |

Startup message:

```text
Loading Papyrus <version> for Minecraft 26.1.2
```

## ServerBuildInfo

Use Paper's `ServerBuildInfo` API instead of hard-coded brand checks:

```java
import io.papermc.paper.ServerBuildInfo;

ServerBuildInfo info = ServerBuildInfo.buildInfo();

if (info.brandId().equals(ServerBuildInfo.BRAND_PAPYRUS_ID)) {
    // Papyrus-specific logic (sushimc:papyrus)
}

// Preferred for Paper-targeted plugins — works on Paper and Papyrus
if (info.isBrandCompatible(ServerBuildInfo.BRAND_PAPER_ID)) {
    // Paper-compatible server
}
```

Plugins that call `isBrandCompatible("papermc:paper")` are supported on Papyrus.

## Update checker

Papyrus disables the PaperMC update checker by default (`update-checker.enabled: false` in new configs). Fork builds are distributed via [GitHub Releases](/download) and CI.

## Versioning

| Scheme | Example | Used for |
|--------|---------|----------|
| Minecraft / API | `26.1.2` | Jar filename, `api-version` in plugins |
| Release tag | `v1.0.1` | GitHub Releases semver |
| CI build | `26.1.2.build.<N>-stable` | Internal build strings |

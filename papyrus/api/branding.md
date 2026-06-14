# Branding & Compatibility

Papyrus identifies itself as **Papyrus by SushiMC** at runtime while remaining API-compatible with Paper plugins.

## Server brand

| Property | Paper | Papyrus |
|----------|-------|---------|
| Display name | Paper | Papyrus |
| Brand ID | `papermc:paper` | `sushimc:papyrus` |
| Maven group | `io.papermc.paper` | `io.papermc.paper` (unchanged) |
| Jar name | `paperclip-*.jar` | `papyrus-paperclip-*.jar` |

Startup message:

```text
Loading Papyrus <version> for Minecraft 26.1.2
```

## ServerBuildInfo

Use Paper's `ServerBuildInfo` API instead of hard-coded brand checks:

```java
import io.papermc.paper.ServerBuildInfo;

ServerBuildInfo info = ServerBuildInfo.buildInfo();

// Preferred — works on Paper and Papyrus
if (info.isBrandCompatible("papermc:paper")) {
    // Paper-compatible server
}

// Raw brand (avoid when possible)
info.brandId();   // "sushimc:papyrus" on Papyrus
info.brandName(); // "Papyrus"
```

Plugins that call `isBrandCompatible("papermc:paper")` are supported on Papyrus.

## Update checker

Papyrus disables the PaperMC update checker by default (`update-checker.enabled: false` in new configs). Fork builds are distributed via [GitHub Releases](/download) and CI.

## FAQ

**Will my Paper plugin work?**  
Yes — same API package, same Maven artifact, same config files, same `paper-plugin.yml` format.

**Why is the jar named `papyrus-paperclip`?**  
The bootstrap tool (`paperclip`) comes from upstream Paper. Papyrus renames the output jar; the server still identifies itself as Papyrus at runtime.

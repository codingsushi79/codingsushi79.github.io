# API Overview

Papyrus exposes the same plugin API as Paper. Maven coordinates remain `io.papermc.paper` for compatibility — only the display brand and server jar naming differ.

## Maven dependency

```kotlin
repositories {
    maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:26.1.2-R0.1-SNAPSHOT")
}

java {
    toolchain.languageVersion.set(JavaLanguageVersion.of(21))
}
```

Check `apiVersion` in the [Papyrus `gradle.properties`](https://github.com/codingsushi79/Papyrus/blob/main/gradle.properties) for the current API version string to use in `paper-plugin.yml`.

Papyrus does not publish its own Maven repository — use Paper's `repo.papermc.io`. The API matches Paper's published `paper-api` artifact.

## Javadoc

The full API reference is identical to Paper's public API:

- [Paper Javadoc (26.1)](https://jd.papermc.io/paper/26.1/)
- [Paper documentation](https://docs.papermc.io/paper/dev/getting-started/paper-plugins)

Papyrus ships the API in the `papyrus-api` module (published artifact: `paper-api`).

## Key packages

| Package | Description |
|---------|-------------|
| `org.bukkit` | Core Bukkit API — events, blocks, entities, worlds |
| `org.bukkit.plugin` | Plugin loading, commands, permissions |
| `io.papermc.paper` | Paper extensions — registry, datapacks, dialogs, configuration |
| `com.destroystokyo.paper` | Legacy Paper API additions |
| `co.aikar.timings` | Timing/profiling utilities |

See [Packages](/api/packages) for a detailed breakdown.

## Compatibility notes

- Plugins checking `ServerBuildInfo.brandId()` for `papermc:paper` still work via `isBrandCompatible()`
- Use `ServerBuildInfo.BRAND_PAPYRUS_ID` for Papyrus-specific behavior
- Papyrus reports brand ID `sushimc:papyrus`
- Avoid hard-coded brand string checks when possible

## Next steps

- [Plugin Development](/api/plugin-development)
- [Branding & Compatibility](/api/branding)

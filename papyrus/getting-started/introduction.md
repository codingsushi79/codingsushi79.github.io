# Introduction

Papyrus is a Minecraft server software fork of [Paper](https://github.com/PaperMC/Paper) by [SushiMC](https://github.com/codingsushi79). It keeps full compatibility with the Paper plugin ecosystem while adding first-class options for vanilla parity and performance tuning.

## What Papyrus adds

Paper optimizes Minecraft in ways that sometimes diverge from vanilla behavior. Papyrus makes those trade-offs explicit and configurable instead of fixed.

| Area | Paper behavior | Papyrus change |
|------|----------------|----------------|
| Entity RNG | Shared random source across all entities (faster) | Configurable: `SHARED` or `VANILLA` per-entity RNG |
| Redstone | Vanilla by default; optional fast engines | Same engines, documented presets for vanilla vs tech servers |
| Experience orbs | Paper defaults | Configurable despawn, pickup radius, merge radius, and merge disable |
| Performance defaults | Paper defaults | Tuned defaults for chunk I/O, explosions, hoppers, idle worlds, JVM/Netty |
| Branding | Paper / PaperMC | **Papyrus by SushiMC** |
| Update checker | Checks PaperMC | Disabled by default (fork-specific builds) |

Everything else — Moonrise chunk system, incremental saves, hopper optimizations, plugin API, and the patch-based build — comes from upstream Paper unchanged.

## Compatibility

- **Plugins:** Paper plugins, `paper-plugin.yml`, and Bukkit API plugins
- **Configs:** Existing Paper `config/`, `spigot.yml`, and worlds work unchanged
- **Maven API:** `io.papermc.paper:paper-api` (same coordinates as Paper)
- **Brand ID:** `sushimc:papyrus` (Paper-compatible via `ServerBuildInfo.isBrandCompatible()`)

## Next steps

- [Download](/download) — Get the server jar
- [Quick Start](/getting-started/quick-start) — Set up your first server
- [Papyrus Options](/configuration/papyrus-options) — Fork-specific settings

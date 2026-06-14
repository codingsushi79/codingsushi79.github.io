# API Packages

Papyrus ships the Paper API from the `papyrus-api` module. The public surface matches Paper — browse the full reference on [jd.papermc.io](https://jd.papermc.io/paper/26.1/).

## org.bukkit

Core Bukkit API inherited from Spigot/CraftBukkit.

| Area | Examples |
|------|----------|
| Server | `Bukkit.getServer()`, `Server` |
| Worlds | `World`, `Chunk`, `Location` |
| Entities | `Entity`, `Player`, `LivingEntity` |
| Blocks | `Block`, `BlockState`, `Material` |
| Events | `Listener`, `Event`, `EventHandler` |
| Commands | `Command`, `CommandExecutor`, `PluginCommand` |
| Inventory | `Inventory`, `ItemStack`, `ItemMeta` |

## org.bukkit.plugin

Plugin lifecycle and registration.

- `JavaPlugin` — base class for Bukkit plugins
- `PluginManager` — load, enable, disable plugins
- `ServicesManager` — service registration and lookup
- `PluginLoader` — class loading

## io.papermc.paper

Modern Paper API additions.

| Area | Package / types |
|------|-----------------|
| Registry | `io.papermc.paper.registry.RegistryKey`, generated `*Keys` classes |
| Data components | `io.papermc.paper.datacomponent` |
| Dialogs | `io.papermc.paper.dialog` |
| Configuration | `io.papermc.paper.configuration` |
| Server build info | `io.papermc.paper.ServerBuildInfo` |
| Plugins | `io.papermc.paper.plugin` (Paper plugin bootstrap) |
| Events | `io.papermc.paper.event` |

## com.destroystokyo.paper

Legacy Paper-specific extensions.

- `ParticleBuilder`, `Title`, `SkinParts`
- Entity AI: `VanillaGoal`
- Block utilities: `TargetBlockInfo`, `BlockSoundGroup`
- Brigadier: `BukkitBrigadierCommand`

## co.aikar.timings

Timing and profiling (Timings v2).

- `Timings`, `TimingHandler`, `TimingsManager`
- Used internally; plugin authors rarely need direct access

## Generated registry keys

The `papyrus-api/src/generated/java/io/papermc/paper/registry/keys/` directory contains typed registry key constants (`BlockTypeKeys`, `ItemTypeKeys`, `EnchantmentKeys`, etc.) generated from Minecraft data.

## Source layout

```text
papyrus-api/
├── src/main/java/       Hand-written API
├── src/generated/java/  Generated registry keys and enums
└── build.gradle.kts     Published as paper-api
```

See [Project Structure](/development/project-structure) for the full repository layout.

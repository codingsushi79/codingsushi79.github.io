# Introduction

EssentialsY is a unified Minecraft essentials plugin by [SushiMC](https://github.com/codingsushi79). It transforms the legacy multi-plugin essentials architecture into a single, optimized plugin with split configuration and easy feature toggling.

## What Changed

| Legacy essentials suite | EssentialsY |
|---|---|
| 9 separate plugin JARs | **1 unified JAR** |
| Single 1300-line `config.yml` | **8 focused config files** |
| Remove JARs to disable features | **`modules.yml` toggles** |
| Per-command disable only | **Category-wide command control** |
| Multiple plugin load order issues | **Internal ModuleManager** |

## Key Features

### Single Plugin

All core modules — Chat, Spawn, Protect, AntiBuild, and GeoIP — are built into one JAR. Install one file, configure one data folder.

### Split Configuration

Settings are organized into focused files under `plugins/EssentialsY/config/`:

- `core.yml` — Global settings, teleport, AFK, nick
- `homes.yml` — Home system
- `economy.yml` — Economy and costs
- `chat.yml` — Chat formatting
- `protect.yml` — World protection
- `antibuild.yml` — Build restrictions
- `spawn.yml` — Spawn and new players

Plus top-level `modules.yml` and `commands.yml` for feature and command control.

### Module Toggles

Disable entire features without uninstalling anything:

```yaml
modules:
  geoip:
    enabled: false


```
### Command Categories

Disable whole groups of commands at once:

```yaml
categories:
  fun:
    enabled: false


```
## Requirements

- **Server:** CraftBukkit, Spigot, or Paper
- **Java:** 8 or higher (17 recommended for building)
- **Vault:** Optional, for economy and chat prefix integration
- **LuckPerms:** Recommended for permissions

## Next Steps

- [Installation](/getting-started/installation) — Set up EssentialsY on your server
- [Quick Start](/getting-started/quick-start) — Configure the basics
- [Configuration Overview](/configuration/overview) — Understand the config system

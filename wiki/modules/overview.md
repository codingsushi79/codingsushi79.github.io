# Modules Overview

EssentialsY uses an internal module system instead of separate plugin JARs. Each module can be toggled in `modules.yml`.

## Architecture

```text

EssentialsY.jar
└── ModuleManager
    ├── ChatModule
    ├── SpawnModule
    ├── ProtectModule
    ├── AntiBuildModule
    ├── GeoIPModule
    ├── DiscordModule
    └── DiscordLinkModule


Modules are loaded at startup based on `modules.yml`. Disabled modules skip listener registration and command handling entirely.

```
## Module Reference

| Module | Package | Description |
|--------|---------|-------------|
| [Chat](/modules/chat) | `com.earth2me.essentials.chat` | Chat formatting and local radius |
| [Spawn](/modules/spawn) | `com.earth2me.essentials.spawn` | Spawn points and respawn |
| [Protect](/modules/protect) | `com.earth2me.essentials.protect` | World protection |
| [AntiBuild](/modules/antibuild) | `com.earth2me.essentials.antibuild` | Build restrictions |
| [GeoIP](/modules/geoip) | `com.earth2me.essentials.geoip` | Country lookup on join |
| Discord | `net.essentialsx.discord` | Discord bridge and relay |
| DiscordLink | `net.essentialsx.discordlink` | Account linking and role sync |

## Enabling / Disabling

```yaml
```
# modules.yml
modules:
  chat:
    enabled: true
  geoip:
    enabled: false


Then `/essentials reload`.

## How It Works

1. `ModuleManager` reads `modules.yml` on load/reload
2. For each enabled module, calls `module.enable()`
3. Module registers event listeners with the main plugin
4. Commands are routed to the correct module via `ModuleManager.findModuleForCommand()`
5. On reload, modules are disabled and re-enabled with updated config

## Future Modules

XMPP remains as a separate source tree and will be merged in a future release.

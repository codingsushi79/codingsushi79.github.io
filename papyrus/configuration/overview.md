# Configuration Overview

Papyrus uses Paper's layered config system. Files are YAML; keys use kebab-case.

| File | Scope |
|------|-------|
| `config/paper-global.yml` | Server-wide settings |
| `config/paper-world-defaults.yml` | Defaults applied to every world |
| `<world>/paper-world.yml` | Overrides for a specific world |
| `spigot.yml` | Entity activation/tracking ranges, hopper rates, Netty threads |
| `bukkit.yml` | Spawn limits, chunk settings |
| `server.properties` | Port, gamemode, difficulty, etc. |

After editing configs, restart the server or use `/paper reload` where supported (some settings require a full restart).

For the full Paper config reference, see [docs.papermc.io](https://docs.papermc.io/paper/reference/global-configuration). The sections below cover **Papyrus-specific** behavior and recommended values.

## Related

- [Papyrus Options](/configuration/papyrus-options)
- [Performance](/configuration/performance)
- [Vanilla Preset](/configuration/vanilla-preset)

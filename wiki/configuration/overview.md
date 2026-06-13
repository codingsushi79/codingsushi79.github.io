# Configuration Overview

EssentialsY replaces the monolithic legacy `config.yml` with a split configuration system designed for easier reading and maintenance.

## File Layout

```text
plugins/EssentialsY/
├── config/
│   ├── core.yml          # Global, teleport, AFK, nick, signs
│   ├── homes.yml         # Home system settings
│   ├── economy.yml       # Economy, costs, baltop
│   ├── help.yml          # Help system
│   ├── chat.yml          # Chat formatting and radius
│   ├── protect.yml       # World protection flags
│   ├── antibuild.yml     # Build/use restrictions
│   └── spawn.yml         # Spawn, respawn, new players
├── modules.yml           # Feature module toggles
├── commands.yml          # Command enable/disable
├── geoip.yml             # GeoIP settings (if enabled)
├── kits.yml              # Kit definitions
├── worth.yml             # Item sell prices
├── tpr.yml               # Random teleport locations
└── warps/                # Per-warp YAML files
```

## How It Works

At runtime, `SplitConfigLoader` reads all files in `config/` and merges them into a single virtual configuration node. The rest of EssentialsY reads settings the same way as before — no code changes needed in command handlers.

Legacy `config.yml` files are automatically migrated on first load.

## Applying Changes

Most changes take effect with:

```bash
/essentials reload
```

Some settings (spawn listener priorities, Paper chat events) require a **server restart**.

## Configuration Files

| File | Purpose |
|------|---------|
| [modules.yml](/configuration/modules-yml) | Enable/disable feature modules |
| [commands.yml](/configuration/commands-yml) | Command and category toggles |
| [core.yml](/configuration/core-yml) | Global plugin settings |
| [economy.yml](/configuration/economy-yml) | Economy configuration |
| [chat.yml](/configuration/chat-yml) | Chat formatting |
| [protect.yml](/configuration/protect-yml) | World protection |
| [spawn.yml](/configuration/spawn-yml) | Spawn and respawn |

## Tips

- Edit only the file relevant to what you're changing
- Use `modules.yml` before editing module-specific configs — disabled modules ignore their config
- Use `commands.yml` category toggles instead of listing dozens of individual commands

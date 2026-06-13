# Commands Overview

EssentialsY provides 150+ commands covering teleportation, economy, moderation, utility, and more — all in a single plugin.

## Command Control

Three layers of control:

1. **Module toggles** — disable module commands when a module is off
2. **Category toggles** — disable groups in `commands.yml`
3. **Individual disable** — list specific commands in `commands.yml` or `core.yml`

## Command Prefix

All commands support an `e` prefix alias:

| Command | Alias |
|---------|-------|
| `/home` | `/ehome` |
| `/spawn` | `/espawn` |
| `/tp` | `/etp` |

## Usage

Commands follow EssentialsY conventions. Permission nodes use the `essentials.<command>` format.

```bash

/home              # Teleport to your home
/sethome           # Set your home
/spawn             # Teleport to spawn
/tpa <player>      # Request teleport to player
/balance [player]  # Check balance
/pay <player> <amount>  # Pay another player


```
## Reload Commands

```bash

/essentials reload   # Reload all configuration
/essentials version  # Show version info


```
## Learn More

- [Command Categories](/commands/categories) — Bulk disable by category
- [Permissions](/commands/permissions) — Permission node reference

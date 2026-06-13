# Quick Start

Get EssentialsY running by enabling only the modules you need.

## 1. Choose Your Modules

Edit `plugins/EssentialsY/modules.yml`. All modules are **disabled by default** — turn on what you need:

```yaml
modules:
  chat:
    enabled: true
  spawn:
    enabled: true
  protect:
    enabled: true
  antibuild:
    enabled: true
  geoip:
    enabled: false


Set `enabled: true` on each module you want active.

```
## 2. Set Your Spawn

```bash

/setspawn default


Players can now use `/spawn` to teleport there.

```
## 3. Configure Economy (Optional)

If using Vault, edit `config/economy.yml`:

```yaml
starting-balance: 0
currency-symbol: '$'
max-money: 10000000000000
min-money: -10000


```
## 4. Disable Unwanted Commands

Edit `commands.yml` to disable command categories you don't want:

```yaml
categories:
  fun:
    enabled: false     # disables burn, fireball, lightning, etc.


Or disable individual commands:

```yaml
disabled:
  - god
  - fly


## 5. Reload

```bash

/essentials reload


Changes to `modules.yml`, `commands.yml`, and split config files take effect immediately. Some spawn listener priority settings require a server restart.

```
## Common Tasks

| Task | Command / File |
|------|----------------|
| Set a home | `/sethome` |
| Create a warp | `/setwarp <name>` |
| Create a kit | `/createkit <name> <delay>` |
| Disable a module | `modules.yml` → `enabled: false` |
| Disable fun commands | `commands.yml` → `categories.fun.enabled: false` |
| Change chat format | `config/chat.yml` → `chat.format` |
| Protect spawn area | `config/protect.yml` → `protect.prevent.*` |

## Next Steps

- [Configuration Overview](/configuration/overview) — Deep dive into all config files
- [Module Toggles](/configuration/modules-yml) — Full module reference
- [Command Categories](/commands/categories) — All available categories

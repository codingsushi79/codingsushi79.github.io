# commands.yml

Fine-grained control over which commands are available. Disable individual commands or entire categories.

## File Location

```text

plugins/EssentialsY/commands.yml


```
## Three Ways to Disable

1. **Individual commands** — list under `disabled:`
2. **Categories** — set `enabled: false` on a category
3. **Legacy** — `disabled-commands` in `config/core.yml` (still supported)

## Format

```yaml
disabled:
  - god
  - fly

categories:
  teleport:
    enabled: true
    commands: [home, spawn, tp, tpa, warp, back, ...]

  economy:
    enabled: true
    commands: [balance, pay, eco, sell, kit, ...]

  moderation:
    enabled: true
    commands: [ban, kick, mute, jail, vanish, ...]

  fun:
    enabled: false
    commands: [burn, fireball, lightning, beezooka, ...]

  utility:
    enabled: true
    commands: [heal, feed, repair, give, hat, ...]

  signs:
    enabled: true
    commands: [edsign, essentials]


```
## Categories

| Category | Description | Example Commands |
|----------|-------------|------------------|
| `teleport` | Movement and warps | `home`, `spawn`, `tp`, `warp`, `back` |
| `economy` | Money and kits | `balance`, `pay`, `eco`, `kit` |
| `moderation` | Staff tools | `ban`, `kick`, `mute`, `jail` |
| `fun` | Entertainment | `burn`, `fireball`, `lightning` |
| `utility` | Player utilities | `heal`, `feed`, `repair`, `give` |
| `signs` | Sign commands | `edsign` |

## Examples

### Disable all fun commands

```yaml
categories:
  fun:
    enabled: false


```
### Disable fly and god only

```yaml
disabled:
  - god
  - fly


```
### Economy-free server

```yaml
categories:
  economy:
    enabled: false


```
## Priority

A command is disabled if **any** of these match:

1. Listed in `commands.yml` → `disabled`
2. In a category with `enabled: false`
3. Listed in `config/core.yml` → `disabled-commands`
4. Belongs to a disabled module

## Applying Changes

```bash

/essentials reload


Disabled commands return the standard "command disabled" message to players.

```
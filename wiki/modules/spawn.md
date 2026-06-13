# Spawn Module

Manages spawn points, player respawn behavior, and new player onboarding.

## Enable

```yaml
modules:
  spawn:
    enabled: true
```

## Configuration

- `config/spawn.yml` — Behavior settings (respawn, newbies, join teleport)
- `spawn.yml` — Spawn location data (created by `/setspawn`)

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/spawn [player]` | `essentials.spawn` | Teleport to spawn |
| `/setspawn <group>` | `essentials.setspawn` | Set spawn for a group |

## Spawn Groups

```bash
/setspawn default     # Default spawn
/setspawn newbies     # First-time players
/setspawn vip         # VIP group spawn
```

Configure which group new players use in `config/spawn.yml`:

```yaml
newbies:
  spawnpoint: newbies
```

## Permissions

| Permission | Description |
|-----------|-------------|
| `essentials.spawn` | Use `/spawn` |
| `essentials.spawn.others` | Teleport other players to spawn |
| `essentials.setspawn` | Use `/setspawn` |
| `essentials.spawn-on-join.exempt` | Skip spawn-on-join teleport |

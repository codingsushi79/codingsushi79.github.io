# Protect Module

Prevents block explosions, controls mob spawning, disables damage types, and manages weather.

## Enable

```yaml
modules:
  protect:
    enabled: true


```
## Configuration

`config/protect.yml` — see [protect.yml reference](/configuration/protect-yml)

## How It Works

Protect registers event listeners that check configuration flags before allowing game events. Each `protect.prevent.*` and `protect.disable.*` flag maps to a specific listener check.

## Common Use Cases

### PvP-free zones

Handled via permissions rather than config — set `protect.disable.pvp: true` and grant `essentials.protect.pvp` to players who should be able to fight.

### Mob-free worlds

```yaml
protect:
  prevent:
    spawn:
      creeper: true
      zombie: true
      skeleton: true


```
### Explosion-free build world

```yaml
protect:
  prevent:
    tnt-explosion: true
    creeper-explosion: true
    fireball-explosion: true
    ender-crystal-explosion: true


```
## Permissions

| Permission | Description |
|-----------|-------------|
| `essentials.protect.pvp` | Bypass PvP disable |
| `essentials.protect.entitytarget.bypass` | Bypass entity target block |
| `essentials.protect.alerts` | Receive protection alerts |

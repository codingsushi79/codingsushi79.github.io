# protect.yml

World protection — prevent explosions, mob spawning, damage types, and more.

## Structure

```yaml
protect:
  prevent:
    lava-flow: false
    tnt-explosion: false
    creeper-explosion: false
    spawn:
      creeper: false
      zombie: false
    # ... many more flags

  disable:
    fall: false
    pvp: false
    drown: false
    firedmg: false
    weather:
      storm: false
      thunder: false

  creeper:
    max-height: -1


```
## Common Configurations

### Safe spawn area

```yaml
protect:
  prevent:
    tnt-explosion: true
    creeper-explosion: true
    fire-spread: true
  disable:
    pvp: true


```
### No mob spawning

```yaml
protect:
  prevent:
    spawn:
      creeper: true
      zombie: true
      skeleton: true
      spider: true


```
## Permissions

- `essentials.protect.pvp` — Bypass PvP disable
- `essentials.protect.entitytarget.bypass` — Bypass entity target prevention
- `essentials.protect.alerts` — Receive anti-build alerts

## Requires

The `protect` module must be enabled in `modules.yml`.

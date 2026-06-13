# spawn.yml

Spawn points, respawn behavior, and new player setup.

## Key Settings

```yaml
newbies:
  announce-format: '&dWelcome {DISPLAYNAME}&d to the server!'
  spawnpoint: newbies
  kit: tools

respawn-listener-priority: high
spawn-join-listener-priority: high
respawn-at-home: false
respawn-at-home-bed: true
respawn-at-anchor: false
spawn-on-join: false
```

## Spawn Groups

Use `/setspawn <group>` to create named spawn points:

```bash
/setspawn default
/setspawn newbies
/setspawn vip
```

Set `newbies.spawnpoint` to control where first-time players appear.

## Respawn Behavior

| Setting | Effect |
|---------|--------|
| `respawn-at-home` | Respawn at first home instead of spawn |
| `respawn-at-home-bed` | Prefer bed location over home |
| `respawn-at-anchor` | Respect respawn anchors (1.16+) |
| `spawn-on-join` | Teleport to spawn on join (all or per-group) |

## Listener Priority

```yaml
respawn-listener-priority: high
spawn-join-listener-priority: high
```

Values: `none`, `lowest`, `low`, `normal`, `high`, `highest`

::: warning
Changing listener priorities requires a **server restart**.
:::

## Requires

The `spawn` module must be enabled in `modules.yml`.

Spawn locations are stored in `spawn.yml` (separate from `config/spawn.yml` behavior settings).

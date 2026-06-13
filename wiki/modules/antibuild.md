# AntiBuild Module

Restricts building and item usage for players without the `essentials.build` permission.

## Enable

```yaml
modules:
  antibuild:
    enabled: true


```
## Configuration

`config/antibuild.yml`:

```yaml
protect:
  build: true
  use: true
  warn-on-build-disallow: true
  alert:
    on-placement: LAVA,TNT,LAVA_BUCKET
    on-use: LAVA_BUCKET
  blacklist:
    placement: LAVA,TNT,LAVA_BUCKET
    usage: LAVA_BUCKET


```
## How It Works

- Players without `essentials.build` cannot place/break blocks or use restricted items
- Staff with `essentials.protect.alerts` receive notifications when restricted actions occur
- Blacklisted materials are blocked regardless of build permission

## Permissions

| Permission | Description |
|-----------|-------------|
| `essentials.build` | Allow building and using items |
| `essentials.build.<action>.<material>` | Per-material override |
| `essentials.protect.alerts` | Receive alert notifications |

## Alert Format

When a player attempts a restricted action, staff see:

```text

[AntiBuild] PlayerName tried to place LAVA at world,100,64,200


```
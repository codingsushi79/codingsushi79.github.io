# Migrating from EssentialsX

EssentialsY is designed as a drop-in replacement for EssentialsX core modules. Follow this guide to migrate safely.

## Before You Start

1. **Back up** your entire `plugins/Essentials/` folder
2. **Note** which EssentialsX module JARs you currently use
3. **Stop** the server before swapping plugins

## Plugin JARs

Remove these separate JARs (if installed):

| Remove | Replaced by |
|--------|-------------|
| `EssentialsX.jar` | `EssentialsY.jar` |
| `EssentialsXChat.jar` | Built-in (chat module) |
| `EssentialsXSpawn.jar` | Built-in (spawn module) |
| `EssentialsXProtect.jar` | Built-in (protect module) |
| `EssentialsXAntiBuild.jar` | Built-in (antibuild module) |
| `EssentialsXGeoIP.jar` | Built-in (geoip module) |
| `EssentialsXDiscord.jar` | Built-in (discord module) |
| `EssentialsXDiscordLink.jar` | Built-in (discordlink module) |

XMPP is not yet merged — keep that JAR if you use it.

## Configuration Migration

EssentialsY automatically migrates your existing `config.yml` on first load:

1. Detects legacy `config.yml`
2. Splits settings into `config/*.yml` files
3. Backs up the original as `config.yml.migrated`

No manual migration is needed for most servers.

### Manual Migration

If auto-migration doesn't run, delete the `config/` directory and restart. EssentialsY will regenerate split configs from templates. Then copy settings from your backup `config.yml` into the appropriate split files.

## Permissions

EssentialsY uses the same permission nodes as EssentialsX (`essentials.*`). No permission changes are required.

## Data Files

These are fully compatible and require no changes:

- `userdata/*.yml` — Player data
- `usermap.bin` — UUID cache
- `warps/*.yml` — Warp locations
- `kits.yml` — Kit definitions
- `worth.yml` — Item prices
- `spawn.yml` — Spawn locations

## Verify After Migration

```bash

/essentials version
/essentials reload
/home
/spawn
/balance


Check the server console for module load messages:

```text

[INFO] Enabled module: chat
[INFO] Enabled module: spawn
[INFO] Enabled module: protect
[INFO] Enabled module: antibuild


## Rollback

To revert to EssentialsX:

1. Stop the server
2. Remove `EssentialsY.jar`
3. Reinstall your original EssentialsX JARs
4. Restore `config.yml` from `config.yml.migrated` if needed
5. Delete the `config/` split directory

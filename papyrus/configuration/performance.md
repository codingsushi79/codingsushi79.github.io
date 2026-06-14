# Performance Tuning

Papyrus performance defaults apply to **new** config files. Existing servers keep saved values until you change them manually.

## Global defaults (`config/paper-global.yml`)

| Key | Papyrus default | Effect |
|-----|-----------------|--------|
| `chunk-system.io-threads` | auto | Scales chunk load/save throughput with CPU |
| `performance.entity-random-source` | `SHARED` | Fast entity RNG |
| `performance.apply-runtime-jvm-defaults` | `true` | Sets Netty buffer caps and `jna.nosys` at startup |
| `performance.netty-threads` | `-1` (auto) | Scales Netty event-loop threads (4–8) when not set in `spigot.yml` |
| `spark.enabled` | `false` | No Spark profiler overhead |
| `misc.region-file-cache-size` | `512` | Larger region file cache (uses more RAM) |
| `update-checker.enabled` | `false` | No PaperMC update checks |

## World defaults (`config/paper-world-defaults.yml`)

| Key | Papyrus default | Effect |
|-----|-----------------|--------|
| `misc.update-pathfinding-on-block-update` | `false` | Mobs don't repath on every nearby block change |
| `environment.optimize-explosions` | `true` | Faster TNT/creeper blast processing |
| `environment.experience-orb-despawn-rate` | `6000` | Ticks until XP orbs despawn (vanilla: 6000) |
| `environment.experience-orb-pickup-radius` | `8.0` | Player pickup range in blocks |
| `entities.spawning.experience-orb-merge-radius` | `1.0` | Radius for orb merge search |
| `entities.behavior.disable-experience-orb-merge` | `false` | When true, orbs never merge |
| `unsupported-settings.disable-world-ticking-when-empty` | `true` | Worlds with no players stop ticking |
| `hopper.ignore-occluding-blocks` | `true` | Hoppers skip entity scans under solid blocks |
| `entities.armor-stands.tick` | `false` | Armor stands don't tick |
| `entities.markers.tick` | `false` | Marker entities don't tick |
| `scoreboards.allow-non-player-entities-on-scoreboards` | `false` | Skips scoreboard team lookups for non-players |
| `chunks.entity-per-chunk-save-limit.*` | capped | Limits arrow/orb/pearl buildup per chunk |

## Spigot defaults (`spigot.yml`)

| Key | Papyrus default | Effect |
|-----|-----------------|--------|
| `commands.log` | `false` | No disk I/O logging every command |
| `settings.netty-threads` | auto | Scales Netty I/O threads with CPU when unset |

## Entity ranges (manual tuning)

For mob-heavy servers, lower tracking and activation ranges in `spigot.yml`:

```yaml
world-settings:
  default:
    entity-tracking-range:
      animals: 48
      monsters: 48
      misc: 32
    entity-activation-range:
      animals: 24
      monsters: 24
      water: 8
      villagers: 16
```

Tracking controls network packets; activation controls server-side AI ticks. Lower both before touching game rules.

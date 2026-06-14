# Papyrus Options

Fork-specific settings beyond standard Paper configuration.

## Entity random source

**File:** `config/paper-global.yml`

```yaml
performance:
  entity-random-source: SHARED   # or VANILLA
  apply-runtime-jvm-defaults: true # Netty buffer caps, JNA nosys
  netty-threads: -1                # -1 = auto (4–8 based on CPU)
```

| Value | Behavior | Use when |
|-------|----------|----------|
| `SHARED` | All entities share one random source (Paper default, faster) | Performance matters; enchantment seed manipulation is not needed |
| `VANILLA` | Each entity gets `RandomSource.create()` like vanilla | Speedrunners, enchantment seed manipulation, or vanilla-like RNG |

Paper's shared RNG breaks predictability that vanilla players rely on for enchantment table seed cycling.

### JVM and Netty defaults

| Key | Default | Effect |
|-----|---------|--------|
| `apply-runtime-jvm-defaults` | `true` | Sets Netty buffer caps and `jna.nosys` at startup |
| `netty-threads` | `-1` (auto) | Scales Netty event-loop threads (4–8) when not set in `spigot.yml` |

`performance.netty-threads` sets `io.netty.eventLoopThreads` when `spigot.yml` does not override Netty thread count. Set either one, not both, unless you need different values.

## Experience orbs

**File:** `config/paper-world-defaults.yml` or `<world>/paper-world.yml`

```yaml
environment:
  experience-orb-despawn-rate: 6000   # ticks (vanilla: 6000)
  experience-orb-pickup-radius: 8.0   # blocks (vanilla: 8)

entities:
  spawning:
    experience-orb-merge-radius: 1.0    # merge search radius in blocks
  behavior:
    disable-experience-orb-merge: false
```

Lower `experience-orb-pickup-radius` to reduce orb lag on grinder servers. Set `disable-experience-orb-merge: true` if you want orbs to stay separate.

## Redstone implementation

**File:** `config/paper-world-defaults.yml` or `<world>/paper-world.yml`

```yaml
misc:
  redstone-implementation: VANILLA   # VANILLA | EIGENCRAFT | ALTERNATE_CURRENT
  alternate-current-update-order: HORIZONTAL_FIRST_OUTWARD   # only for ALTERNATE_CURRENT
```

| Engine | Speed | Vanilla parity |
|--------|-------|----------------|
| `VANILLA` | Baseline | Full — same update order as Minecraft |
| `EIGENCRAFT` | ~95% fewer wire updates on depower | Different update order; fixes MC-11193 |
| `ALTERNATE_CURRENT` | Fastest in most benchmarks | Different update order; configurable direction |

Default is `VANILLA`. Switch to `EIGENCRAFT` or `ALTERNATE_CURRENT` only on redstone-heavy technical servers.

See [Redstone Presets](/configuration/redstone-presets) for copy-paste configs.

## Chunk system I/O threads

**File:** `config/paper-global.yml`

```yaml
chunk-system:
  io-threads: -1      # auto-detect from CPU count (recommended)
  worker-threads: -1  # auto-detect from CPU count (recommended)
```

Papyrus auto-scales I/O threads to `min(4, max(1, cpu_cores / 4))` when set to `-1` or `0`. Paper previously pinned this to a single I/O thread.

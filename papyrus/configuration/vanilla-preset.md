# Vanilla Compatibility Preset

Use this when vanilla behavior matters more than peak performance (speedrunning, strict survival, enchantment seed work):

```yaml
# config/paper-global.yml
performance:
  entity-random-source: VANILLA
```

```yaml
# config/paper-world-defaults.yml
misc:
  redstone-implementation: VANILLA
  update-pathfinding-on-block-update: true
environment:
  optimize-explosions: false
entities:
  armor-stands:
    tick: true
  markers:
    tick: true
```

Set `entity-random-source: VANILLA` if players use enchantment table seed manipulation — this restores per-entity RNG.

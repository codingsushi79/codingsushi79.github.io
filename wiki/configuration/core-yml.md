# core.yml

Global EssentialsY settings — teleport, AFK, nicknames, signs, locale, and more.

## Key Settings

### Teleport

```yaml
teleport-safety: true
teleport-cooldown: 0
teleport-delay: 0
teleport-invulnerability: 4
teleport-to-center: true
is-water-safe: false
```

### Nicknames

```yaml
nickname-prefix: '~'
max-nick-length: 16
allowed-nicks-regex: '^[a-zA-Z_0-9§]+$'
change-displayname: true
```

### AFK

```yaml
cancel-afk-on-interact: true
cancel-afk-on-move: false
afk-timeout: 300
broadcast-afk-message: true
```

### Commands (Legacy)

```yaml
overridden-commands: []
disabled-commands: []
verbose-command-usages: true
```

::: tip
Prefer `commands.yml` for disabling commands — it supports categories. The `disabled-commands` list in `core.yml` is kept for backward compatibility.
:::

### Signs

```yaml
enabledSigns:
  #- color
  #- balance
  #- buy
  #- sell
  #- trade
  #- free
  #- warp
  #- kit
  #- mail
  #- heal
```

Uncomment sign types to enable them.

### Locale

```yaml
locale: en
```

See `messages_*.properties` in the JAR for available locales.

## Full Reference

The complete list of `core.yml` settings matches the original global essentials config section. See the [configuration overview](/configuration/overview) for detailed descriptions of each option — the keys are identical.

# Split Config Files

EssentialsY splits the original 1300-line `config.yml` into focused files. Each file covers one area of functionality.

## File Reference

### core.yml (~770 lines)

Global plugin settings including:

- Nickname and display name options
- Teleport safety, cooldowns, and delays
- AFK settings and timeouts
- Item spawn blacklist
- Social spy commands
- Sign configuration
- Locale and update checker
- Command overrides and disabled commands (legacy)

### homes.yml

- `update-bed-at-daytime`
- `sethome-multiple` ranks
- `spawn-if-no-home`
- `confirm-home-overwrite`

### economy.yml

- `starting-balance`, `max-money`, `min-money`
- `currency-symbol` and formatting
- `command-costs` per command
- `sell-multipliers` ranks
- `baltop-requirements`

### help.yml

- `non-ess-in-help`
- `hide-permissionless-help`

### chat.yml

The entire `chat:` section:

- `radius` — local chat distance (0 = global)
- `format` — chat format string
- `group-formats` — per-group formats
- `shout-default`, `question-enabled`
- `paper-chat-events`

### protect.yml

The `protect:` section with all prevention flags:

- `protect.prevent.*` — block/explosion/spawn toggles
- `protect.disable.*` — damage type toggles
- `protect.creeper.max-height`

### antibuild.yml

Build and item-use restrictions:

- `protect.build`, `protect.use`
- `protect.alert.*` — alert materials
- `protect.blacklist.*` — blocked materials

### spawn.yml

Spawn and new player settings:

- `newbies` — first-join announce and kit
- `respawn-listener-priority`
- `respawn-at-home`, `respawn-at-home-bed`
- `spawn-on-join`

## Auto-Migration

When EssentialsY detects a legacy `config.yml` without a `config/` directory:

1. Creates `config/` with split files
2. Moves settings to the appropriate files
3. Renames original to `config.yml.migrated`

## Editing

Open only the file you need. For example, to change chat format, edit only `config/chat.yml` — no need to scroll through 1300 lines.

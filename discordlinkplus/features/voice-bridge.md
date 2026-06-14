# Voice Bridge

DiscordLink+ bridges **Simple Voice Chat** groups with Discord voice channels. Public in-game voice groups automatically get matching Discord VCs for cross-platform voice.

## How It Works

1. A player creates or joins a **public** Simple Voice Chat group (no password)
2. DiscordLink+ creates a Discord voice channel named `VC <group name>`
3. In-game players in that group are heard on Discord
4. Discord users in the bridged channel are heard in-game by group members
5. When the group is empty, the Discord channel can be auto-deleted (configurable)

## Requirements

- [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) installed on the server
- Clients must also have Simple Voice Chat installed
- UDP port **24454** open (or your configured SVC port)
- Bot permissions: **Manage Channels**, **Connect**, **Speak**

## Configuration

```yaml
voice-bridge:
  enabled: true
  channel-prefix: "VC "
  sync-interval-ticks: 40
  delete-empty-channels: true
  server-host: "127.0.0.1"
  server-port: 24454
```

| Option | Description |
|---|---|
| `enabled` | Turn voice bridging on or off |
| `channel-prefix` | Prefix for auto-created Discord voice channels |
| `sync-interval-ticks` | How often to poll for new SVC groups (40 ticks = 2 seconds) |
| `delete-empty-channels` | Remove Discord VCs when the in-game group is empty |
| `server-host` | SVC server bind address (informational) |
| `server-port` | SVC UDP port (informational) |

Set `discord.voice-category-id` to organize bridged channels under a Discord category.

## Limitations

- Only **public** groups (no password) are bridged
- Password-protected SVC groups are ignored
- Voice quality and latency depend on SVC and Discord network conditions

## Related

- [Setup](/getting-started/setup) — Voice bridge setup steps
- [config.yml](/configuration/config-yml) — Full configuration reference

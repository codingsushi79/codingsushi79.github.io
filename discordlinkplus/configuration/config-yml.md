# config.yml

Full reference for `plugins/DiscordLink+/config.yml`. Restart the server or run `/mcdiscord reload` after editing.

## discord

Discord bot connection and guild settings.

```yaml
discord:
  token: "YOUR_BOT_TOKEN_HERE"
  guild-id: "0"
  chat-channel-id: "0"
  voice-category-id: "0"
  verified-role-id: "0"
  activity: "Minecraft %online%/%max% players"
```

| Key | Description |
|---|---|
| `token` | Bot token from the [Developer Portal](https://discord.com/developers/applications) |
| `guild-id` | Numeric Discord server ID |
| `chat-channel-id` | Text channel for Minecraft chat relay |
| `voice-category-id` | Category for bridged voice channels (`0` = guild root) |
| `verified-role-id` | Role assigned after successful account link |
| `activity` | Bot status message. Placeholders: `%online%`, `%max%` |

## linking

Account linking gate configuration.

```yaml
linking:
  enabled: true
  code-expiry-seconds: 600
  code-length: 6
  kick-message: |
    &cYou must link your Discord account before playing.
    &7Your link code: &e%code%
    &7DM this code to the bot on Discord within &e%minutes% &7minutes.
    &7Discord: &b%discord-invite%
```

See [Account Linking](/getting-started/linking) for details.

## chat

Text chat bridge settings. See [Chat Bridge](/features/chat-bridge).

```yaml
chat:
  enabled: true
  minecraft-to-discord-format: "**%player%**: %message%"
  discord-to-minecraft-format: "&9[Discord] &b%user%&7: &f%message%"
  join-leave-messages: true
  death-messages: true
```

## voice-bridge

Simple Voice Chat bridging settings. See [Voice Bridge](/features/voice-bridge).

```yaml
voice-bridge:
  enabled: true
  channel-prefix: "VC "
  sync-interval-ticks: 40
  delete-empty-channels: true
  server-host: "127.0.0.1"
  server-port: 24454
```

## storage

```yaml
storage:
  links-file: "links.json"
```

| Key | Description |
|---|---|
| `links-file` | Filename for linked account data inside the plugin data folder |

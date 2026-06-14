# Chat Bridge

DiscordLink+ relays messages between Minecraft and Discord in both directions.

## Minecraft → Discord

When a player sends chat in-game, the message is posted to your configured Discord text channel.

```yaml
chat:
  enabled: true
  minecraft-to-discord-format: "**%player%**: %message%"
```

| Placeholder | Description |
|---|---|
| `%player%` | Minecraft player name |
| `%message%` | Chat message content |
| `%world%` | World name |

## Discord → Minecraft

Messages sent in the Discord chat channel are relayed to in-game chat.

```yaml
chat:
  discord-to-minecraft-format: "&9[Discord] &b%user%&7: &f%message%"
```

| Placeholder | Description |
|---|---|
| `%user%` | Discord display name |
| `%message%` | Message content |

## Event Notifications

Optional server event messages sent to Discord:

```yaml
chat:
  join-leave-messages: true
  death-messages: true
```

When enabled, player join, leave, and death events are posted to the chat channel.

## Permissions

| Permission | Description | Default |
|---|---|---|
| `mcdiscord.chat` | Send Minecraft chat to Discord | `true` |

Players without this permission can still chat in-game, but their messages won't be relayed to Discord.

## Related

- [config.yml](/configuration/config-yml) — Full chat configuration
- [Setup](/getting-started/setup) — Configure channel IDs

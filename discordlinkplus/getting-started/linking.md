# Account Linking

DiscordLink+ can require players to link their Discord account before joining the server. When enabled, unlinked players are kicked with a numeric code they must DM to the bot.

## How It Works

1. Player tries to join the server
2. If linking is enabled and they are not linked, they are **kicked** with a numeric code
3. They **DM the code** to the Discord bot
4. The bot links their Discord account to their Minecraft UUID, saves it, and assigns the **Verified** role

## Configuration

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

| Option | Description |
|---|---|
| `enabled` | Turn the link gate on or off |
| `code-expiry-seconds` | How long codes remain valid (default 600 = 10 minutes) |
| `code-length` | Number of digits in the code (default 6) |
| `kick-message` | Message shown when a player is blocked. Placeholders: `%code%`, `%minutes%`, `%discord-invite%` |

## Player Commands

Players can manage their link without reconnecting:

| Command | Description |
|---|---|
| `/mcdiscord link` | Generate a link code without being kicked |
| `/mcdiscord unlink` | Remove your link and Verified role |
| `/mcdiscord status` | Check if your account is linked |

Aliases: `/mcd`, `/mdb`

## Bypass Permission

Operators and players with `mcdiscord.bypass.link` can join without linking (default: op).

## Storage

Linked accounts are stored in `plugins/DiscordLink+/links.json` (configurable via `storage.links-file`).

## Next Steps

- [Chat Bridge](/features/chat-bridge) — Configure text relay
- [Commands](/commands/overview) — Full command reference

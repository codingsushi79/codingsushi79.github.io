# Commands

DiscordLink+ provides a single command with subcommands for administration and account linking.

## /mcdiscord

**Aliases:** `/mcd`, `/mdb`

**Usage:** `/mcdiscord <reload|link|unlink|status>`

### reload

Reload the plugin configuration and reconnect the Discord bot.

- **Permission:** `mcdiscord.admin` (default: op)
- **Console:** Yes

```
/mcdiscord reload
```

### link

Generate a link code without reconnecting. For players who need to link their Discord account.

- **Permission:** None (any player)
- **Console:** No (players only)

```
/mcdiscord link
```

### unlink

Remove your Discord link and Verified role.

- **Permission:** None (any player)
- **Console:** No (players only)

```
/mcdiscord unlink
```

### status

Check whether your Minecraft account is linked to Discord.

- **Permission:** None (any player)
- **Console:** No (players only)

```
/mcdiscord status
```

## Permissions

| Permission | Description | Default |
|---|---|---|
| `mcdiscord.admin` | Reload config and manage the bot | op |
| `mcdiscord.bypass.link` | Join without linking a Discord account | op |
| `mcdiscord.chat` | Send Minecraft chat to Discord | true |

## Related

- [Account Linking](/getting-started/linking) — Link flow for players
- [config.yml](/configuration/config-yml) — Configuration reference

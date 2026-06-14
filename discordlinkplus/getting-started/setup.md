# Setup

This guide walks through configuring DiscordLink+ from a fresh install.

## 1. Create a Discord Bot

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application → **Bot** → copy the **token**
3. Enable these **Privileged Gateway Intents**:
   - Message Content
   - Server Members
4. Invite the bot to your guild with these permissions:
   - Read/Send Messages in your chat channel
   - Manage Roles (for Verified role assignment)
   - Manage Channels, Connect, Speak (for voice bridging)

## 2. Copy Discord IDs

Enable **Developer Mode** in Discord (Settings → Advanced → Developer Mode), then right-click to copy IDs:

| ID | Where to find it |
|---|---|
| Guild ID | Right-click your server name |
| Chat channel ID | Right-click the text channel for Minecraft chat |
| Verified role ID | Server Settings → Roles → right-click the role |
| Voice category ID | Right-click a category (recommended for voice channels) |

## 3. Edit config.yml

Open `plugins/DiscordLink+/config.yml`:

```yaml
discord:
  token: "YOUR_BOT_TOKEN_HERE"
  guild-id: "123456789012345678"
  chat-channel-id: "123456789012345678"
  voice-category-id: "123456789012345678"
  verified-role-id: "123456789012345678"
  activity: "Minecraft %online%/%max% players"
```

Replace placeholder values with your actual IDs. Set `voice-category-id` to `"0"` to create voice channels at the guild root.

## 4. Reload

```bash
/mcdiscord reload
```

Or restart the server. Check the console for a successful Discord connection.

## 5. Voice Bridge (Optional)

If using Simple Voice Chat bridging:

1. Ensure **Simple Voice Chat** is installed on the server
2. Open UDP port **24454** (or your configured SVC port) on your host/firewall
3. Set `voice-bridge.server-host` and `server-port` in config for reference/logging
4. Create or join a **public** (no password) SVC group in-game — a Discord VC named `VC <group name>` should appear

## Troubleshooting

| Problem | Fix |
|---|---|
| Bot doesn't connect | Check token, intents, and that the bot is in your guild |
| Chat not relaying | Verify `chat.enabled: true` and correct `chat-channel-id` |
| Voice channels not created | Ensure SVC is installed, `voice-bridge.enabled: true`, and bot has Manage Channels |
| Link codes not working | Enable Direct Messages intent; players must DM the bot, not post in a channel |

## Next Steps

- [Account Linking](/getting-started/linking) — Configure the link gate
- [config.yml](/configuration/config-yml) — Full configuration reference

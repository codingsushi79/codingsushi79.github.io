# Introduction

DiscordLink+ is a **Paper/Bukkit/Folia-compatible** Minecraft plugin that bridges your server with Discord. It combines a chat relay, optional account linking gate, and Simple Voice Chat group bridging in one plugin.

## What It Does

| Feature | Description |
|---|---|
| **Chat bridge** | Minecraft chat → Discord channel, Discord messages → Minecraft chat |
| **Account linking** | Block unlinked players with a numeric code they DM to your bot |
| **Voice bridge** | Public Simple Voice Chat groups get matching Discord voice channels |
| **Notifications** | Optional join/leave and death messages to Discord |

## Requirements

- **Paper**, **Spigot**, or **Folia** on **Minecraft 26.1.2**
- **Java 25** recommended (required for Discord voice/DAVE support)
- [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) — for voice bridging
- A Discord bot with these intents in the [Developer Portal](https://discord.com/developers/applications):
  - Message Content
  - Server Members
  - Direct Messages

## Compared to DiscordSRV

DiscordLink+ focuses on three core integrations in a single lightweight plugin:

- Text chat relay with configurable formats
- Numeric-code account linking with Verified role assignment
- Automatic Simple Voice Chat group ↔ Discord voice channel bridging

## Next Steps

- [Installation](/getting-started/installation) — Get the plugin on your server
- [Setup](/getting-started/setup) — Configure the Discord bot and `config.yml`
- [Account Linking](/getting-started/linking) — Enable and explain the link flow

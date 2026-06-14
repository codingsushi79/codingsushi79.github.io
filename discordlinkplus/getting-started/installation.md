# Installation

## Download

### From GitHub Releases

Download the latest JAR from [GitHub Releases](https://github.com/codingsushi79/discordlinkplus/releases).

### From Modrinth

Find published builds on [Modrinth](https://modrinth.com/plugin/discordlink+).

### Build from Source

```bash
git clone https://github.com/codingsushi79/discordlinkplus.git
cd discordlinkplus
./gradlew shadowJar
```

Output: `build/libs/DiscordLinkPlus-1.0.0.jar`

## Server Setup

1. **Stop your server** before installing plugins.

2. **Copy** `DiscordLinkPlus-*.jar` into your server's `plugins/` folder.

3. **Install Simple Voice Chat** (optional, required for voice bridging):
   - Download from [Modrinth](https://modrinth.com/plugin/simple-voice-chat)
   - Place in `plugins/` and ensure clients also install the mod

4. **Start the server.** DiscordLink+ creates its data folder at `plugins/DiscordLink+/`.

5. **Edit** `plugins/DiscordLink+/config.yml` with your Discord bot token and IDs.

6. Run `/mcdiscord reload` or restart the server.

## Verify Installation

Check the server console for DiscordLink+ startup messages. The bot should connect to Discord if the token and guild ID are correct.

Test the chat bridge by sending a message in-game — it should appear in your configured Discord channel.

## Next Steps

- [Setup](/getting-started/setup) — Configure Discord bot permissions and IDs
- [Account Linking](/getting-started/linking) — Set up the link gate for players

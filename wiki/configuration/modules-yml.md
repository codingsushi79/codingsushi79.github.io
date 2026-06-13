# modules.yml

Control which feature modules are active. Disabled modules don't register listeners or handle commands.

## File Location

```text

plugins/EssentialsY/modules.yml


```
## Format

```yaml
modules:
  chat:
    enabled: false
    description: "Chat formatting, local chat radius, and shout/question modes"

  spawn:
    enabled: false
    description: "Spawn points, respawn handling, and new player setup"

  protect:
    enabled: false
    description: "World protection, damage prevention, and mob spawn control"

  antibuild:
    enabled: false
    description: "Build and item-use restrictions"

  geoip:
    enabled: false
    description: "GeoIP country lookup on player join"

  discord:
    enabled: false
    description: "Discord bridge integration (requires bot token in discord.yml)"

  discordlink:
    enabled: false
    description: "Discord account linking (requires discord module)"

  xmpp:
    enabled: false
    description: "XMPP messaging (not yet merged)"


```
## Available Modules

| Module | Default | Config File | Commands |
|--------|---------|-------------|----------|
| `chat` | disabled | `config/chat.yml` | `toggleshout` |
| `spawn` | disabled | `config/spawn.yml` | `spawn`, `setspawn` |
| `protect` | disabled | `config/protect.yml` | — |
| `antibuild` | disabled | `config/antibuild.yml` | — |
| `geoip` | disabled | `geoip.yml` | — |
| `discord` | disabled | `discord.yml` | `discord`, `discordbroadcast` |
| `discordlink` | disabled | `discord-link.yml` | `link`, `unlink` |
| `xmpp` | disabled | — | `xmpp`, `setxmpp`, `xmppspy` |

## Examples

### Minimal survival server

```yaml
modules:
  chat:
    enabled: true
  spawn:
    enabled: true
  protect:
    enabled: true
  antibuild:
    enabled: false
  geoip:
    enabled: false


```
### Creative server (no protection)

```yaml
modules:
  chat:
    enabled: true
  spawn:
    enabled: true
  protect:
    enabled: false
  antibuild:
    enabled: false


```
## Applying Changes

```bash

/essentials reload


Console output confirms which modules loaded:

```text

[INFO] Enabled module: chat
[INFO] Enabled module: spawn
[INFO] Skipped disabled modules: protect, antibuild, geoip, discord, discordlink, xmpp


::: tip
Disabling a module is cleaner than removing a JAR — no load-order issues, no missing dependency errors.
:::

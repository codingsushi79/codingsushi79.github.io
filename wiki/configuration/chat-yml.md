# chat.yml

Chat formatting, local radius, and shout/question modes.

## Key Settings

```yaml
chat:
  radius: 0
  format: '<{DISPLAYNAME}> {MESSAGE}'
  shout-default: false
  question-enabled: true
  paper-chat-events: true


```
## Chat Radius

- `0` — Global chat (default)
- `100` — Local chat within 100 blocks
- Players with `essentials.chat.shout` can prefix with `!` for global
- Players with `essentials.chat.question` can prefix with `?` for questions

## Format Placeholders

| Placeholder | Description |
|-------------|-------------|
| `{MESSAGE}` | Chat message content |
| `{USERNAME}` | Player's username |
| `{DISPLAYNAME}` | Display name (includes prefix/suffix) |
| `{NICKNAME}` | Essentials nickname |
| `{PREFIX}` | Permission plugin prefix |
| `{SUFFIX}` | Permission plugin suffix |
| `{GROUP}` | Primary group name |
| `{WORLD}` | World alias |
| `{WORLDNAME}` | Full world name |

## Group Formats

```yaml
chat:
  group-formats:
    admins: '&c[{GROUP}] {DISPLAYNAME}&7: &c{MESSAGE}'


```
## Requires

The `chat` module must be enabled in `modules.yml`.

Requires a permissions plugin (LuckPerms recommended) for prefix/suffix placeholders.

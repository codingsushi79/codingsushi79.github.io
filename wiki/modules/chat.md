# Chat Module

Handles chat formatting, local chat radius, shout/question modes, and Paper chat event integration.

## Enable

```yaml
modules:
  chat:
    enabled: true


```
## Configuration

`config/chat.yml` — see [chat.yml reference](/configuration/chat-yml)

## Commands

| Command | Permission | Description |
|---------|-----------|-------------|
| `/toggleshout [player] [on\|off]` | `essentials.toggleshout` | Toggle shout mode |

## Permissions

| Permission | Description |
|-----------|-------------|
| `essentials.chat.color` | Use color codes in chat |
| `essentials.chat.format` | Use format codes in chat |
| `essentials.chat.shout` | Send global shout messages (`!` prefix) |
| `essentials.chat.question` | Send question messages (`?` prefix) |
| `essentials.chat.local` | Send local chat messages |
| `essentials.chat.spy` | Spy on all chat regardless of radius |

## Paper Chat Events

On Paper 1.16.5+, EssentialsY can use Paper's modern chat event system:

```yaml
chat:
  paper-chat-events: true


Required for hover/click events in chat. Requires a server restart to change.

```
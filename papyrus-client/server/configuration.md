# Server Configuration

Enable client integrity in `config/paper-global.yml` on your Papyrus server:

```yaml
anticheat:
  client-integrity:
    enabled: true
    require-papyrus-client: true
    require-shield-mod: true
    response-timeout-seconds: 15
    download-url: https://docs.sushii.dev/papyrus-client/download
    banned-mod-ids:
      - meteor-client
      - wurst
      - aristois
    alerts:
      console: true
```

| Option | Default | Description |
|--------|---------|-------------|
| `enabled` | `false` | Master switch |
| `require-papyrus-client` | `true` | Require `client: papyrus-client` in the report |
| `require-shield-mod` | `true` | Require `papyrus-shield` handshake |
| `response-timeout-seconds` | `15` | Kick if no report received |
| `download-url` | docs link | Shown to players who fail the check |
| `banned-mod-ids` | see defaults | Substring match against reported mod ids |

**Bypass permission:** `papyrus.client.bypass`

When a player fails, they are disconnected with your `download-url` so they know where to get [Papyrus Client](/download).

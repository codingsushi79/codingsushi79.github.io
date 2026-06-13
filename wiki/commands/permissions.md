# Permissions

EssentialsY uses the same permission system as the legacy essentials suite. All permissions follow the `essentials.*` namespace.

## Permission Plugin

LuckPerms is recommended. EssentialsY also supports:

- Vault-compatible permission plugins
- Bukkit superperms (`use-bukkit-permissions: true` in `core.yml`)

## Common Permissions

### Player

| Permission | Description |
|-----------|-------------|
| `essentials.home` | Use `/home` |
| `essentials.sethome` | Use `/sethome` |
| `essentials.spawn` | Use `/spawn` |
| `essentials.tp` | Use `/tp` |
| `essentials.tpa` | Use `/tpa` |
| `essentials.warp` | Use `/warp` |
| `essentials.kit` | Use `/kit` |
| `essentials.balance` | Use `/balance` |
| `essentials.pay` | Use `/pay` |
| `essentials.msg` | Use `/msg` |
| `essentials.mail` | Use `/mail` |
| `essentials.afk` | Use `/afk` |

### Staff

| Permission | Description |
|-----------|-------------|
| `essentials.*` | All permissions |
| `essentials.ban` | Ban players |
| `essentials.kick` | Kick players |
| `essentials.mute` | Mute players |
| `essentials.socialspy` | Monitor private messages |
| `essentials.vanish` | Become invisible |
| `essentials.fly` | Toggle flight |
| `essentials.god` | Toggle god mode |
| `essentials.gamemode` | Change gamemode |

### Multi-home

| Permission | Description |
|-----------|-------------|
| `essentials.sethome.multiple` | Allow multiple homes |
| `essentials.sethome.multiple.<rank>` | Specific home count |

Configure home counts in `config/homes.yml`:

```yaml
sethome-multiple:
  default: 3
  vip: 5
  staff: 10


```
### Build

| Permission | Description |
|-----------|-------------|
| `essentials.build` | Allow building (AntiBuild module) |
| `essentials.build.place.<material>` | Place specific material |
| `essentials.build.break.<material>` | Break specific material |

## Wildcards

```text

essentials.*          # All commands
essentials.home.*     # All home-related
essentials.kits.*     # All kit-related


```
## Default Permissions

EssentialsY registers sensible defaults via `permissions.yml` in the JAR. Override with your permissions plugin.

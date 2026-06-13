# Command Categories

Disable entire groups of commands from `commands.yml`.

## Categories

### teleport

Movement and location commands.

```text

home, sethome, delhome, homes, spawn, setspawn,
tp, tpa, tpaccept, tpdeny, tpahere, tpall, tpauto,
tphere, tpohere, tppos, warp, setwarp, delwarp,
warps, back, jump, top, bottom, rtp


```
### economy

Money, kits, and trading.

```text

balance, bal, balancetop, baltop, pay, eco,
sell, worth, setworth, kit, kits, createkit, delkit


```
### moderation

Staff administration tools.

```text

ban, tempban, unban, kick, kickall, mute, unmute,
jail, unjail, setjail, deljail, jails, jailedplayers,
socialspy, vanish


```
### fun

Entertainment and joke commands.

```text

burn, fireball, firework, lightning, beezooka,
kittycannon, antioch, bigtree, ice, spawnmob, suicide


```
### utility

General player utilities.

```text

heal, feed, fly, god, speed, gamemode, gm, hat,
repair, enchant, give, item, clearinventory, clear,
exp, setxp, getpos, compass, depth, near, list,
who, afk, nick, realname, ignore, unignore, msg,
mail, me, broadcast, rules, motd, help, info


```
### signs

Essentials sign commands.

```text

edsign, essentials


```
## Examples

### Survival server (no fun, no moderation)

```yaml
categories:
  fun:
    enabled: false
  moderation:
    enabled: false


```
### Hub server (teleport only)

```yaml
categories:
  economy:
    enabled: false
  moderation:
    enabled: false
  fun:
    enabled: false
  utility:
    enabled: false


```
### Apply

```bash

/essentials reload


Console shows which categories were disabled:

```text

[INFO] Command category 'fun' is disabled (11 commands)


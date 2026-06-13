# Installation

## Download

### From GitHub Actions

Download the latest build artifact from the [Build EssentialsY](https://github.com/codingsushi79/EssentialsY/actions) workflow.

### Build from Source

```bash
git clone https://github.com/codingsushi79/EssentialsY.git
cd EssentialsY
./gradlew :EssentialsY:build


The JAR is output to `jars/EssentialsY-*.jar`.

```
## Server Setup

1. **Stop your server** before installing plugins.

2. **Remove old EssentialsY JARs** if upgrading:
   - `EssentialsY.jar`
   - `EssentialsYChat.jar`
   - `EssentialsYSpawn.jar`
   - `EssentialsYProtect.jar`
   - `EssentialsYAntiBuild.jar`
   - `EssentialsYGeoIP.jar`

3. **Copy** `EssentialsY-*.jar` into your server's `plugins/` folder.

4. **Start the server.** EssentialsY creates its data folder at `plugins/EssentialsY/` (or `plugins/Essentials/` depending on plugin name in `plugin.yml`).

5. **Install dependencies** (recommended):
   - [Vault](https://www.spigotmc.org/resources/vault.34315/) — Economy and permissions integration
   - [LuckPerms](https://luckperms.net/) — Permission management

## First Run

On first launch, EssentialsY generates:

```text

plugins/EssentialsY/
├── config/
│   ├── core.yml
│   ├── homes.yml
│   ├── economy.yml
│   ├── help.yml
│   ├── chat.yml
│   ├── protect.yml
│   ├── antibuild.yml
│   └── spawn.yml
├── modules.yml
├── commands.yml
├── kits.yml
├── worth.yml
├── tpr.yml
└── warps/


Run `/essentials reload` after editing any configuration file.

```
## Verify Installation

```bash

/essentials version


You should see the EssentialsY version string. Test a basic command like `/home` or `/spawn` to confirm modules loaded.

```
## Next Steps

- [Quick Start](/getting-started/quick-start) — Configure modules and commands
- [Migrating from EssentialsX](/getting-started/migration) — Upgrade an existing setup

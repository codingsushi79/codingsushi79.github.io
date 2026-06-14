# Quick Start

## 1. Download the jar

Use the [Download](/download) page to grab a **Stable** release or the latest **Dev** CI build.

Or build from source:

```bash
git clone https://github.com/codingsushi79/Papyrus.git
cd Papyrus
./gradlew applyPatches createPaperclipJar syncPapyrusPaperclipJar
```

## 2. First run

```bash
mkdir papyrus-server && cd papyrus-server
cp /path/to/Papyrus-26.1.2.jar .
java -jar Papyrus-26.1.2.jar
```

Accept the EULA in `eula.txt`, then start again. Papyrus generates configs on first boot:

```text
config/
  paper-global.yml          # Global server settings
  paper-world-defaults.yml  # Defaults for all worlds
world/
  paper-world.yml           # Per-world overrides (optional)
spigot.yml
bukkit.yml
server.properties
```

## 3. Verify branding

On startup you should see:

```text
Loading Papyrus <version> for Minecraft 26.1.2
```

The `/version` command reports **Papyrus** as the server brand.

## Next steps

- [Production](/running/production) — JVM flags and start script
- [Papyrus Options](/configuration/papyrus-options) — Fork-specific settings
- [Configuration Overview](/configuration/overview) — Config file reference

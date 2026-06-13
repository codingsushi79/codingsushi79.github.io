# Architecture

EssentialsY restructures the legacy multi-plugin essentials suite into a unified plugin with an internal module system.

## Package Layout

```text
net.essentialsy/
├── module/
│   ├── ModuleManager.java      # Central registry
│   ├── ModuleType.java         # Module enum
│   ├── EssentialsYModule.java  # Module interface
│   └── AbstractModule.java     # Base implementation
├── config/
│   ├── SplitConfigLoader.java  # Merges split YAMLs
│   ├── ModulesConfig.java      # modules.yml loader
│   └── CommandsConfig.java     # commands.yml loader

com.earth2me.essentials/         # Core plugin (unchanged API)
com.earth2me.essentials.chat/    # Chat module
com.earth2me.essentials.spawn/   # Spawn module
com.earth2me.essentials.protect/ # Protect module
com.earth2me.essentials.antibuild/
com.earth2me.essentials.geoip/
```

## Module Lifecycle

```mermaid
flowchart TD
    A[Server Start] --> B[Essentials.onEnable]
    B --> C[Load modules.yml]
    C --> D[ModuleManager.enableAll]
    D --> E{Module enabled?}
    E -->|Yes| F[module.onEnable]
    E -->|No| G[Skip module]
    F --> H[Register listeners]
    H --> I[Add reload listener]

    J[/essentials reload] --> K[ModuleManager.reloadConfig]
    K --> L[disableAll]
    L --> M[enableAll]
```

## Command Routing

Commands declared in `plugin.yml` all route through `Essentials.onCommand()`:

1. Check `commands.yml` — is command or category disabled?
2. Check `modules.yml` — does the owning module handle this command?
3. Check `core.yml` — legacy disabled-commands list
4. Load command class via reflection (`Command<name>` convention)
5. Execute with permission and cost checks

## Configuration Loading

```text
SplitConfigLoader
├── config/core.yml
├── config/homes.yml
├── config/economy.yml
├── ... (8 files)
└── → merged CommentedConfigurationNode
    └── Settings.java reads as before
```

Backward compatible — all existing `config.getBoolean("key")` calls work unchanged.

## Build System

Single Gradle project `:EssentialsY` with merged source sets:

```gradle
sourceSets {
    main {
        java {
            srcDir '../EssentialsChat/src/main/java'
            srcDir '../EssentialsSpawn/src/main/java'
            // ...
        }
    }
}
```

One shadow JAR bundles all modules and providers.

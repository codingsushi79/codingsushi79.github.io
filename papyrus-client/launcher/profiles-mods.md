# Instances & Mods

Papyrus Client uses Prism Launcher’s instance model.

## Instances

Each instance stores:

- Display name
- Minecraft version (from the supported whitelist)
- Fabric Loader
- Mods, resource packs, and worlds under `.minecraft/`

Instances live in the launcher data directory (default: `~/Library/Application Support/PapyrusClient/instances/` on macOS, `%APPDATA%\PapyrusClient\instances\` on Windows).

## User mods

Add Fabric `.jar` mods through the instance **Mods** page, or copy files into `<instance>/.minecraft/mods/`. Modrinth integration works like upstream Prism Launcher.

## Bundled integrity mod

`papyrus-shield` is **copied from the launcher install** into each new instance’s `mods/` folder. It:

- Reports all Fabric-loaded mods to the server
- Marks the client as `papyrus-client`
- Should not be removed if you play on integrity-enabled servers

Mod-only downloads from [Download](/download) are for users who manage their own Fabric instances in another launcher.

## Fabric only

New instances always use **Fabric Loader**. Forge and NeoForge are not available in Papyrus Client.

## Deleting instances

Right-click an instance → **Delete** to remove it from the launcher and delete its files on disk.

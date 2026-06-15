# Profiles & Mods

## Profiles

Each profile stores:

- Display name
- Minecraft version (Fabric)
- List of user mod jars

Profiles live in the launcher data directory under `instances/<profile-id>/`.

## User mods

Add `.jar` files to the launcher `mods/` folder. They appear in the UI and are copied into the instance on launch.

## Hidden integrity mod

`papyrus-shield` is **not shown** in the mod list. The launcher copies it from bundled resources every launch. This mod:

- Reports all Fabric-loaded mods to the server
- Marks the client as `papyrus-client`
- Cannot be removed from the launcher build (mod-only downloads are separate jars for advanced users)

## Fabric only

Profiles always install **Fabric Loader**. Forge mods are not supported.

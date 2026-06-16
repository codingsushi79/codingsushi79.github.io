# Installation

Download the launcher from [Download](/download), then follow the steps for your platform.

Papyrus Client is a fork of [Prism Launcher](https://prismlauncher.org/) with Fabric-only instances, a Minecraft version whitelist, and bundled `papyrus-shield`.

## macOS

Papyrus Client ships as a **`.pkg` installer** for Apple Silicon Macs (`arm64`).

### 1. Download the installer

Get the latest `Papyrus Client-<version>-arm64.pkg` from [GitHub Releases](https://github.com/codingsushi79/Papyrus-Client/releases) or the download picker on the docs site.

### 2. Remove the quarantine flag (if macOS blocks the file)

Browsers mark downloaded files with a quarantine attribute. If macOS refuses to open the installer, run this in **Terminal** (replace the path with your download location):

```bash
xattr -dr com.apple.quarantine ~/Downloads/Papyrus\ Client-*.pkg
```

Then double-click the `.pkg` again.

### 3. Run the installer

1. Open the `.pkg` file
2. Follow the installer prompts
3. Papyrus Client is installed to **Applications** as `PapyrusClient.app`

### 4. Allow the app to run (unsigned build)

Papyrus Client is not notarized yet. On first launch, macOS may say the app cannot be opened because the developer cannot be verified.

**Option A — Right-click open**

1. Open **Finder → Applications**
2. Right-click **Papyrus Client**
3. Choose **Open**
4. Click **Open** in the dialog

**Option B — Remove quarantine from the installed app**

If the app still will not launch, run:

```bash
xattr -cr "/Applications/PapyrusClient.app"
```

Then open Papyrus Client from Applications or Spotlight.

---

## Windows

Papyrus Client ships as an **NSIS installer** named `PapyrusClient-Setup.exe` for 64-bit Windows.

### 1. Download the installer

Get `PapyrusClient-Setup.exe` from [GitHub Releases](https://github.com/codingsushi79/Papyrus-Client/releases).

### 2. Run the installer

1. Double-click `PapyrusClient-Setup.exe`
2. If **SmartScreen** appears (“Windows protected your PC”), click **More info**, then **Run anyway**
3. Choose an install folder if prompted (default: `%LOCALAPPDATA%\Programs\PapyrusClient`)
4. Finish setup and launch from the Start menu shortcut

Papyrus Client is not code-signed yet, so SmartScreen may warn on the first install. This is expected for community builds.

---

## Mod only (no launcher)

If you use Prism Launcher or another Fabric launcher, download only the `papyrus-shield-<mc>-<version>.jar` files from the release page and place them in your instance `mods/` folder. See [Download](/download#mod-only).

---

## Next steps

- [Quick Start](/getting-started/quick-start) — Sign in, create an instance, and launch
- [Requirements](/getting-started/requirements) — Java and Minecraft account
- [Server Configuration](/server/configuration) — Enable client integrity on your server

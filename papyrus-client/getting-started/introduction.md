# Introduction

Papyrus Client is a **Fabric-only** Minecraft launcher for macOS and Windows. It is a fork of [Prism Launcher](https://prismlauncher.org/) and the companion client for [Papyrus server software](https://docs.sushii.dev/papyrus/).

## Why Papyrus Client?

Vanilla Fabric mods can choose whether to identify themselves to servers. Papyrus Client ships a bundled **`papyrus-shield`** mod that:

1. Collects **every** mod loaded by Fabric Loader (including mods that do not self-report)
2. Sends a signed integrity report to Papyrus servers over the `papyrus:integrity` channel
3. Is installed into every new instance automatically — you manage your own mods on top

Servers with `anticheat.client-integrity.enabled: true` reject players who do not send a valid report and show the [download page](/download).

## Fabric only

Papyrus Client does **not** support Forge, NeoForge, or Quilt. The new-instance dialog only offers **Fabric**, and other loader options are hidden.

## Supported versions

Pre-built **papyrus-shield** jars are published for:

- **26.1.2** (matches Papyrus server; unobfuscated)
- **1.21.11**, **1.21.10**, **1.21.8**
- 1.21.4, 1.21.1

When creating a new instance, **only these Minecraft versions** appear in the version list. Snapshots, betas, and unsupported releases are filtered out.

## Microsoft sign-in required

You must add a Microsoft account before launching. This matches official Minecraft authentication and prevents cracked clients from joining integrity-enabled servers.

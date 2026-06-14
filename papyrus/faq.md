# FAQ

**Is Papyrus compatible with Paper plugins?**  
Yes. Same API package (`io.papermc.paper`), same Maven artifact (`io.papermc.paper:paper-api`), same config file names, same `paper-plugin.yml` format. Gradle modules are named `:paper-api` / `:paper-server` but live in `papyrus-*` directories. Use `ServerBuildInfo.BRAND_PAPYRUS_ID` only if you need Papyrus-specific behavior.

**What's the difference between release tags and the jar filename?**  
GitHub release tags use semantic fork versioning (`v1.0.0`, `v1.0.1`, …). The downloadable jar is named after the Minecraft version: `Papyrus-26.1.2.jar`. Multiple release tags can ship the same MC version jar.

**What's the difference between `performance.netty-threads` and `spigot.yml` Netty settings?**  
`performance.netty-threads` in `paper-global.yml` sets `io.netty.eventLoopThreads` when `spigot.yml` does not override Netty thread count. Set either one, not both, unless you need different values.

**Will my existing Paper config work?**  
Yes. Drop in your existing `config/`, `spigot.yml`, and worlds. Papyrus-specific defaults only apply to keys that aren't already set.

**How do I restore enchantment seed manipulation?**  
Set `performance.entity-random-source: VANILLA` in `config/paper-global.yml` and restart.

**How do I get vanilla redstone behavior?**  
Set `misc.redstone-implementation: VANILLA` in your world config. This is already the default.

**Why is the release jar named `Papyrus-26.1.2.jar`?**  
GitHub releases ship a branded jar named after the Minecraft version. CI artifacts and local Gradle builds use the internal `papyrus-paperclip-*.jar` filename from upstream Paper's bootstrap tool.

**Does Papyrus publish its own Maven repository?**  
No. Use Paper's repository at `https://repo.papermc.io/repository/maven-public/`. The API matches Paper's published `paper-api` artifact.

**Where do I report bugs?**  
Open an issue at [github.com/codingsushi79/Papyrus/issues](https://github.com/codingsushi79/Papyrus/issues). Specify whether the bug exists in upstream Paper or is Papyrus-specific.

**Can I redistribute the built jar?**  
Yes, under the terms of the GPL/MIT licenses described in [LICENSE.md](https://github.com/codingsushi79/Papyrus/blob/main/LICENSE.md).

**Where do I download builds?**  
Use the [Download](/download) page for stable releases and dev CI builds.

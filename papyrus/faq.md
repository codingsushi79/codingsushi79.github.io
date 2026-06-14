# FAQ

**Is Papyrus compatible with Paper plugins?**  
Yes. Same API package (`io.papermc.paper`), same Maven artifact (`io.papermc.paper:paper-api`), same config file names, same `paper-plugin.yml` format.

**Will my existing Paper config work?**  
Yes. Drop in your existing `config/`, `spigot.yml`, and worlds. Papyrus-specific defaults only apply to keys that aren't already set.

**How do I restore enchantment seed manipulation?**  
Set `performance.entity-random-source: VANILLA` in `config/paper-global.yml` and restart.

**How do I get vanilla redstone behavior?**  
Set `misc.redstone-implementation: VANILLA` in your world config. This is already the default.

**Why is the release jar named `Papyrus-26.1.2.jar`?**  
GitHub releases ship a branded jar named after the Minecraft version (e.g. `Papyrus-26.1.2.jar`). CI artifacts and local Gradle builds still use the internal `papyrus-paperclip-*.jar` filename from upstream Paper's bootstrap tool.

**Where do I report bugs?**  
Open an issue at [github.com/codingsushi79/Papyrus/issues](https://github.com/codingsushi79/Papyrus/issues). Specify whether the bug exists in upstream Paper or is Papyrus-specific.

**Can I redistribute the built jar?**  
Yes, under the terms of the GPL/MIT licenses described in [LICENSE.md](https://github.com/codingsushi79/Papyrus/blob/main/LICENSE.md).

**Where do I download builds?**  
Use the [Download](/download) page for stable releases and dev CI builds.

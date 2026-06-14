# Contributing

Papyrus inherits Paper's patch-based development workflow.

1. Fork [codingsushi79/Papyrus](https://github.com/codingsushi79/Papyrus) to a **personal** account (not an organization — org forks block maintainer edits)
2. Clone your fork and create a feature branch from `main`
3. Make changes — Java code in `papyrus-server/src/main/java/` directly, Minecraft changes via the patch system
4. Run `./gradlew build` to verify
5. Open a pull request against `main`

See [CONTRIBUTING.md](https://github.com/codingsushi79/Papyrus/blob/main/CONTRIBUTING.md) for the full patch workflow, including:

- Per-file patch edits (`fixupSourcePatches`, `rebuildPatches`)
- Feature patches for larger changes
- Optional `test-plugin` module for API testing (`./gradlew runDev`)
- `[ci skip]` in PR titles for docs-only changes

Security vulnerabilities: see [SECURITY.md](https://github.com/codingsushi79/Papyrus/blob/main/SECURITY.md).

## License

Papyrus inherits licensing from Paper, Spigot, and CraftBukkit. See [LICENSE.md](https://github.com/codingsushi79/Papyrus/blob/main/LICENSE.md).

## Credits

- [Paper](https://github.com/PaperMC/Paper) by PaperMC — upstream server software
- Spigot / CraftBukkit — original Bukkit implementation
- **SushiMC** — Papyrus fork, configurability, and performance defaults

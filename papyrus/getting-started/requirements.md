# Requirements

## Running a server

- **Java 21+** to run the server jar (**Java 25 recommended**)
- **2 GB RAM minimum** for small servers; **8 GB+** recommended for production
- A machine capable of running a Paper-based server

Current Minecraft version: **26.1.2** (see `gradle.properties` in the repo).

## Building from source

- **Git** — you must clone the repository; zip downloads will not build
- **Java 25 JDK** to compile (Gradle can auto-provision via toolchains)
- **~4 GB RAM** for Gradle during compilation

## Plugin development

- **Java 21+** toolchain for compiling plugins against `paper-api`
- Maven repository: `https://repo.papermc.io/repository/maven-public/`

See [Plugin Development](/api/plugin-development) for dependency setup.

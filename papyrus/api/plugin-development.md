# Plugin Development

Papyrus is API-compatible with Paper plugins. Use the same dependency and plugin format.

## Gradle (Kotlin DSL)

```kotlin
repositories {
    maven("https://repo.papermc.io/repository/maven-public/")
}

dependencies {
    compileOnly("io.papermc.paper:paper-api:26.1.2-R0.1-SNAPSHOT")
}

java {
    toolchain.languageVersion.set(JavaLanguageVersion.of(21))
}
```

Replace the version with the current `apiVersion` from [`gradle.properties`](https://github.com/codingsushi79/Papyrus/blob/main/gradle.properties). Papyrus does not publish its own Maven repository.

## Maven

```xml
<repository>
    <id>papermc</id>
    <url>https://repo.papermc.io/repository/maven-public/</url>
</repository>

<dependency>
    <groupId>io.papermc.paper</groupId>
    <artifactId>paper-api</artifactId>
    <version>26.1.2-R0.1-SNAPSHOT</version>
    <scope>provided</scope>
</dependency>
```

## paper-plugin.yml

Use the standard Paper plugin format. Set `api-version` to match `apiVersion` in Papyrus `gradle.properties`:

```yaml
name: MyPlugin
version: 1.0.0
main: com.example.myplugin.MyPlugin
api-version: '26.1.2'
```

Paper plugins use `paper-plugin.yml`; legacy Bukkit plugins use `plugin.yml` instead.

## Detecting Papyrus at runtime

```java
import io.papermc.paper.ServerBuildInfo;

ServerBuildInfo info = ServerBuildInfo.buildInfo();

if (info.brandId().equals(ServerBuildInfo.BRAND_PAPYRUS_ID)) {
    // Running on Papyrus (sushimc:papyrus)
}

if (info.isBrandCompatible(ServerBuildInfo.BRAND_PAPER_ID)) {
    // true on both Paper and Papyrus — use for generic Paper-targeted plugins
}
```

## Local development against the fork

```kotlin
dependencies {
    compileOnly(project(":paper-api"))
}
```

Run `./gradlew publishToMavenLocal` to install `paper-api` locally, then add `mavenLocal()` above the PaperMC repository in your plugin project. See [CONTRIBUTING.md](https://github.com/codingsushi79/Papyrus/blob/main/CONTRIBUTING.md) for running the optional `test-plugin` module.

## Testing against Papyrus

1. [Download](/download) or build a Papyrus server jar
2. Drop your plugin jar in `plugins/`
3. Verify `/version` shows **Papyrus** and your plugin loads without brand errors

## Resources

- [Paper plugin development guide](https://docs.papermc.io/paper/dev/getting-started/paper-plugins)
- [Paper Javadoc](https://jd.papermc.io/paper/26.1/)
- [API Overview](/api/overview)
- [Branding & Compatibility](/api/branding)

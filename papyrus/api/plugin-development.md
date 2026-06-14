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

Use the standard Paper plugin format. Set `api-version` to match the current Minecraft API version from Papyrus `gradle.properties`:

```yaml
name: MyPlugin
version: 1.0.0
main: com.example.myplugin.MyPlugin
api-version: '26.1'
```

## Testing against Papyrus

1. [Download](/download) or build a Papyrus server jar
2. Drop your plugin jar in `plugins/`
3. Verify `/version` shows **Papyrus** and your plugin loads without brand errors

## Brand checks

Prefer `ServerBuildInfo.isBrandCompatible()` over checking raw brand strings. See [Branding & Compatibility](/api/branding).

## Resources

- [Paper plugin development guide](https://docs.papermc.io/paper/dev/getting-started/paper-plugins)
- [Paper Javadoc](https://jd.papermc.io/paper/26.1/)
- [API Overview](/api/overview)

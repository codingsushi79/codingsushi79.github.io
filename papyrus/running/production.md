# Production

## Start script

Papyrus includes a production start script with recommended G1GC flags:

```bash
# Copy your jar into the server directory (release or CI build)
cp /path/to/Papyrus-26.1.2.jar ./papyrus-paperclip.jar

# From the repo (or copy scripts/start.sh into your server dir)
JAR=papyrus-paperclip.jar ./scripts/start.sh
```

You can also set `JAR` to the release filename directly (e.g. `JAR=Papyrus-26.1.2.jar`).

| Variable | Default | Purpose |
|----------|---------|---------|
| `JAVA` | `java` | Path to Java binary |
| `JAR` | `papyrus-paperclip.jar` | Server jar filename |

Edit `-Xms8G -Xmx8G` in the script to match your host. **Always set `-Xms` equal to `-Xmx`** to avoid heap resize pauses during gameplay.

## Manual JVM flags

```bash
java -Xms8G -Xmx8G \
  -XX:+UseG1GC -XX:+ParallelRefProcEnabled -XX:MaxGCPauseMillis=200 \
  -XX:+UnlockExperimentalVMOptions -XX:+DisableExplicitGC -XX:+AlwaysPreTouch \
  -XX:G1NewSizePercent=30 -XX:G1MaxNewSizePercent=40 \
  -XX:G1HeapRegionSize=8M -XX:G1ReservePercent=20 \
  -XX:InitiatingHeapOccupancyPercent=15 -XX:MaxTenuringThreshold=1 \
  -XX:+PerfDisableSharedMem \
  -Dusing.aikars.flags=https://github.com/codingsushi79/Papyrus \
  -jar papyrus-paperclip.jar nogui
```

Paper's [Aikar flags](https://docs.papermc.io/paper/aikars-flags) documentation remains a good reference for tuning beyond these defaults.

## Moonrise system properties

Optional JVM flags for advanced tuning:

| Property | Example | Effect |
|----------|---------|--------|
| `Papyrus.WorkerThreadCount` | `-DPapyrus.WorkerThreadCount=4` | Override Moonrise worker thread count |
| `Papyrus.NumaScheduling` | `-DPapyrus.NumaScheduling=true` | NUMA-aware threading on multi-socket hosts |
| `Papyrus.MaxViewDistance` | `-DPapyrus.MaxViewDistance=32` | Hard cap on view distance |

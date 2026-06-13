# GeoIP Module

Shows player country information on join using the MaxMind GeoLite2 database.

## Enable

```yaml
modules:
  geoip:
    enabled: true


Disabled by default — requires a GeoLite2 database download.

```
## Configuration

`geoip.yml`:

```yaml
database:
  show-cities: false
  update-interval: 72
  # download-url: "https://download.maxmind.com/..."
  # license-key: "YOUR_LICENSE_KEY"


```
## Setup

1. Register for a free [MaxMind account](https://www.maxmind.com/en/geolite2/signup)
2. Generate a license key
3. Add the key to `geoip.yml`
4. Enable the module in `modules.yml`
5. `/essentials reload` — EssentialsY downloads the database automatically

## Permissions

| Permission | Description |
|-----------|-------------|
| `essentials.geoip.hide` | Hide country info for this player |

## Output

On join, staff see:

```text

PlayerName joined from United States


With `show-cities: true`:

```text

PlayerName joined from New York, New York, United States


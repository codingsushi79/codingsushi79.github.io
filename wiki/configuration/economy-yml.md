# economy.yml

Economy settings for servers using EssentialsY's built-in economy or Vault integration.

## Key Settings

```yaml
starting-balance: 0
currency-symbol: '$'
currency-symbol-suffix: false
max-money: 10000000000000
min-money: -10000
minimum-pay-amount: 0.001


```
## Command Costs

Charge players per command use:

```yaml
command-costs:
  # kit-tools: 1500
  # example: 1000


```
## Sell Multipliers

```yaml
sell-multipliers:
  default: 1.0
  double: 2.0
  triple: 3.0


Grant with permission: `essentials.sell.multiplier.<rank>`

```
## Balance Top

```yaml
show-zero-baltop: true
baltop-entry-limit: -1
baltop-requirements:
  minimum-balance: 0
  minimum-playtime: 0


```
## Vault Integration

EssentialsY registers its economy provider with Vault on load. If another economy plugin is present, EssentialsY defers to it automatically.

Requires Vault installed in `plugins/`.

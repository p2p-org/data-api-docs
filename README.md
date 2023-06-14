# Staking data API docs

This repository is a collection of documentation sites for various projects built by P2P's Tooling team. Some of the documents refer to working APIs, while others are only API blueprints prepared for sales purposes.

Refer to the specific project README files for more details:

* [stakingapi](stakingapi/) – Redocly documentation for commong staking data REST API
* [gear](gear/) – Redocly documentation for Gear staking data REST API
* [osmosis](osmosis/) – Magidoc documentation for Osmosis pools GraphQL API

## Adding new documentation site

If you want to add new section to P2P's [apidocs website](https://api.data.p2p.org/) follow these steps:

1. Create new directory for a section with API specs
2. Create new Github workflow for building and publishing docs

You can refer to general [stakingapi workflow](.github/workflows/publish-stakingapi-to-cloudflare.yml) as an example. It will be nice to provide a `package.json` file with a list of dependencies and `build` command.

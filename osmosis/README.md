# Osmosis pools sample GraphQL schema and docs

The purpose of this software is to provide a preview of the API to Glassmarkets. The API will contain data on Osmosis pool statistics. The schema is built using [GraphQL faker](https://github.com/graphql-kit/graphql-faker) and can be modified using it. Currently, there is very little automation since we are unsure if we will develop this project further or not.

This repo contains two GraphQL schemas. `schema.osmosis-pools-faked.graphql` is built for serving faked API, while `schema.osmosis-pools-cleared.graphql` is cleared from faked annotations and suitable for building documentation. Config for genetrating static documentation via [Magidoc](https://magidoc.js.org/introduction/welcome) in `magicdoc.mjs`.

## Running editor for mocked API

Schema can be modified by editor included in [GraphQL faker](https://github.com/graphql-kit/graphql-faker). This software also starts a GraphQL API endpoint with mocked data and a set of tools for working with it.

1. Install GraphQL faker with `yarn global add graphql-faker` since npm loader [is broken](https://github.com/graphql-kit/graphql-faker/issues/184)
2. Run `graphql-faker ./schema.osmosis-pools-faked.graphql --open` to open interactive editor

## Generating documentation with Graphdoc

The first try of docs generations uses [Graphdoc](https://github.com/2fd/graphdoc) and saved to `doc` directory. It turned out to lack some necessary features, i.e. custom pages and ability to switch off some of default objects from graphql-introspect. It is "take it or leave it" script without the ability to modify resulting documentation. But I decided it to keep here anyway.

1. Install Graphdoc with `npm install -g @2fd/graphdoc`
2. Run `graphdoc -s ./schema.osmosis-pools.graphql -o ./doc --force`

Documentation's root is then available in `doc/index.html` file.

## Generating documentation with Magidoc

[Magidoc](https://magidoc.js.org/) is more advanced documentation generating framework and have an ability to be modified with config file. You can generate documentation and view it locally by runnig the following set of commands:

```
pnpm add --global @magidoc/cli@latest
magidoc generate
magidoc preview
```

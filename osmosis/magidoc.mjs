// magidoc.mjs
import { fileURLToPath } from 'url'
import path from 'path'

function relativePath(target) {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), target)
}

export default {
  introspection: {
    type: 'sdl',
    paths: ['schema.osmosis-pools-cleared.graphql'],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: relativePath('./assets'),
    siteRoot: '/osmosis/docs',
    output: 'static/stakingapi/doc/',
    options: {
      appTitle: 'Osmosis Pools API',
      appLogo: '/p2p_logo_white@2x.png',
      appFavicon: 'https://p2p.org/images/favicon-current.ico',
      siteMeta: {
        description: 'This is a blueprinted API for retrieving the data on Osmosis Pools via GraphQL',
        keywords: 'osmosis,docs,graphql,api',
      },
      pages: [
        {
          title: 'Introduction',
          content: [
            {
              title: 'About',
              content: `
# Osmosis Pools API

Welcome to the Osmosis Pools data GraphQL documentation. This is not a real API, but rather a description of what we want to build for retrieving data from Osmosis.

The API contains methods for querying pools, pool participants, and liquidity information about tokens in the pools.

The data for this API is provided by [P2P.org](http://p2p.org/).
              `,
            },
          ],
        },
      ]
    }
  }
}

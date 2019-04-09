const pipe = require('tubo')
const withImages = require('next-images')
const withMDX = require('@next/mdx')()

function disableCacheDirectory (config) {
  config.module.rules
    .filter(({ use }) => use.loader === 'next-babel-loader')
    .map(({ use }) => (use.options.cacheDirectory = false))
}

module.exports = pipe(
  {
    webpack: (config, { defaultLoaders }) => {
      config.module.rules.push({
        test: /\.css$/,
        use: [
          defaultLoaders.babel,
          {
            loader: require('styled-jsx/webpack').loader,
            options: {
              type: 'global'
            }
          }
        ]
      })
      disableCacheDirectory(config)

      return config
    },
    pageExtensions: ['js', 'jsx', 'mdx']
  },
  withMDX,
  withImages
)

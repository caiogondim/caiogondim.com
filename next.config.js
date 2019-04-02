const pipe = require('tubo')
const withMDX = require('@zeit/next-mdx')()

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

      return config
    },
    pageExtensions: ['js', 'jsx', 'mdx'],
  },
  withMDX
)

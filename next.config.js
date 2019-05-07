const pipe = require('tubo')
const withMDX = require('@next/mdx')()

module.exports = pipe(
  {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.css$/,
        use: ['raw-loader']
      })

      return config
    },
    pageExtensions: ['js', 'jsx', 'mdx']
  },
  withMDX
)

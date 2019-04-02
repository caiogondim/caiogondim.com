// @preval

const { readdirSync, readFileSync } = require('fs')
const extractMetadata = require('./extract-mdx-metadata')

const postsPath = readdirSync('./pages/posts').filter(path => /\.mdx$/.test(path))
const posts = []

postsPath.forEach(postPath => {
  const content = readFileSync(`./pages/posts/${postPath}`)
  const meta = extractMetadata(content, { path: postPath.replace('.mdx', '') })
  posts.push(meta)
})

module.exports = posts

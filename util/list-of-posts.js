// @preval

const { readdirSync, readFileSync } = require('fs')
const extractMetadata = require('./extract-mdx-metadata')
const pipe = require('tubo')

const postsPath = readdirSync('./pages/posts').filter(path => /\.mdx$/.test(path))
const posts = []

postsPath.forEach(postPath => {
  const meta = pipe(
    readFileSync(`./pages/posts/${postPath}`),
    extractMetadata
  )
  meta.path = postPath.replace('.mdx', '')
  posts.push(meta)
})

module.exports = posts

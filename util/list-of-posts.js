// @preval

const { readdirSync, readFileSync, statSync } = require('fs')
const extractMetadata = require('./extract-mdx-metadata')
const pipe = require('tubo')

function getAllPosts (posts = [], depth = 0, basePath = './pages/posts/') {
  readdirSync(basePath).forEach(entry => {
    const fullPath = `${basePath}${entry}`
    const entryStat = statSync(fullPath)

    if (/\.mdx$/.test(fullPath)) {
      posts.push(fullPath)
    } else if (entryStat.isDirectory()) {
      getAllPosts(posts, depth + 1, `${basePath}${entry}/`)
    }
  })

  return posts
}

function sortPostsByDate (posts) {
  posts.sort((post1, post2) => {
    const date1 = new Date(post1.date)
    const date2 = new Date(post2.date)
    return date2.getTime() - date1.getTime()
  })

  return posts
}

function getPostsMeta (postsPath) {
  const postsMeta = []
  postsPath.forEach(postPath => {
    const meta = pipe(
      readFileSync(postPath),
      extractMetadata
    )
    postsMeta.push(meta)
  })
  return postsMeta
}

const postsMeta = pipe(
  getAllPosts(),
  getPostsMeta,
  sortPostsByDate
)
console.log(postsMeta)

module.exports = postsMeta

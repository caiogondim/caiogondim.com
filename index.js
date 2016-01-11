'use strict'

var metalsmith = require('metalsmith')
var layouts = require('metalsmith-layouts')
const watch = require('metalsmith-watch')
const serve = require('metalsmith-serve')
const markdown = require('metalsmith-markdown')
const partial = require('metalsmith-partial')
const metallic = require('metalsmith-metallic')
const collections = require('metalsmith-collections')
const permalinks = require('metalsmith-permalinks')

metalsmith(__dirname)
  .source('./src')
  .destination('./dist')
  .use(collections({
    posts: {
      pattern: 'posts/*.md'
    }
  }))
  .use(markdown())
  .use(metallic())
  .use(permalinks({
    linksets: [{
      match: {collection: 'posts'},
      pattern: 'posts/:title'
    }]
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: './partials'
  }))
  .use(serve({}))
  .use(watch({
    paths: {
      "${source}/**/*": true,
      "layouts/*": true,
      "partials/*": true
    }
  }))
  .build((error) => {
    if (error) throw error;
  })

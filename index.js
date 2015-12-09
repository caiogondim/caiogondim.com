'use strict'

var metalsmith = require('metalsmith')
var layouts = require('metalsmith-layouts')
const watch = require('metalsmith-watch')
const serve = require('metalsmith-serve')
const markdown = require('metalsmith-markdown')
const partial = require('metalsmith-partial')

metalsmith(__dirname)
    .use(serve({}))
    .use(markdown())
    .use(watch({
      paths: {
        "${source}/**/*": true,
        "layouts/*": true,
        "partials/*": true
      }
    }))
    .use(layouts({
      engine: 'handlebars',
      partials: './partials'
    }))
    .destination('./dist')
    .build((error) => {
      if (error) throw error;
    })

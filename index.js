'use strict'

var metalsmith = require('metalsmith')
var layouts = require('metalsmith-layouts')
const watch = require('metalsmith-watch')
const serve = require('metalsmith-serve')

metalsmith(__dirname)
    .use(serve({}))
    .use(watch({
      paths: {
        "${source}/**/*": true,
        "layouts/*": "**/*",
      }
    }))
    .use(layouts({
      engine: 'handlebars'
    }))
    .destination('./dist')
    .build((error) => {
      if (error) throw error;
    })

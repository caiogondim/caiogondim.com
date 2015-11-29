'use strict'

var metalsmith = require('metalsmith')
var layouts = require('metalsmith-layouts')
const watch = require('metalsmith-watch')

metalsmith(__dirname)
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

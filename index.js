'use strict'

var metalsmith = require('metalsmith')
var layouts = require('metalsmith-layouts')

metalsmith(__dirname)
    .use(layouts({
      engine: 'handlebars'
    }))
    .destination('./dist')
    .build((error) => {
      if (error) throw error;
    })

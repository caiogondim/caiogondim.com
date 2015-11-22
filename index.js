'use strict'

var metalsmith = require('metalsmith')

metalsmith(__dirname)
    .destination('./dist')
    .build((error) => {
      if (error) throw error;
    })

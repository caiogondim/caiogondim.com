module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-jekyll'

  grunt.initConfig(

    jekyll:
      server :
        src : '_source'
        dest: 'site'
        server : true
        server_port : 4000
        auto : true
      dev:
        src: '_source'
        dest: 'site'

    sass:
      dist:
        files:
          '_source/style/main.css': '_source/style/main.scss'
        options:
          style: 'compressed'

    watch:
      jekyll:
        files: ['_source/**/*.html']
        tasks: ['jekyll:dev']
      sass:
        files: ['_source/**/*.scss']
        tasks: ['sass:dist']
  )

  grunt.registerTask('default', ['jekyll:server', 'watch'])


module.exports = (grunt) ->

  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-jekyll'
  grunt.loadNpmTasks 'grunt-rsync'

  grunt.registerTask('fixPermissions', 'Corrige permissão dos arquivos antes do deploy', () ->
    exec = require('child_process').exec
    done = @async()

    fixPermissions = exec 'chmod -R 0755 site'
    fixPermissions.on('exit', () ->
      done(true)
    )
  )

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

    rsync:
      prod:
        src: './site/'
        dest: '~/caiogondim.com/'
        host: 'caiogondim@bugsy.dreamhost.com'
        recursive: true

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

  grunt.registerTask('run', ['jekyll:server', 'watch'])
  grunt.registerTask('deploy', ['fixPermissions', 'rsync:prod'])

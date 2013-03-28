module.exports = function(grunt) {

  grunt.initConfig({

    jekyll: {
      server : {
        src : '_source',
        dest: 'site',
        server : true,
        server_port : 4000,
        auto : true
      },
      dev: {
        src: '_source',
        dest: 'site'
      }
    },

    watch: {
      jekyll: {
        files: ['_source/**/*.html'],
        tasks: ['jekyll:dev']
      }
    }
  })

  grunt.registerTask('default', ['jekyll:server', 'watch'])

  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-jekyll')
}

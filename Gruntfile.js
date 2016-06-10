module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      livereload: {
        files: ['*'],
        options: {
          livereload: true
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: true,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            './'
          ]
        }
      }
    },
    serve: {
      options: {
        port: 9000
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['connect', 'watch']);
};

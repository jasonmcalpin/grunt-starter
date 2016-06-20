module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: '\n\n/*------------------------------------*/\n\n'
      },
      dist: {
        src: ['assets/js/_src/con.js', 'assets/js/_src/cat.js', 'assets/js/_src/alert.js'],
        dest: 'assets/js/script.js'
      }
    },
    watch: {
      livereload: {
        files: ['*'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['assets/js/_src/**/*.js'],
        tasks: ['dev-watch'],
        options: {
          interrupt: true
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('dev-watch', ['concat:dist']);

  grunt.registerTask('default', ['connect', 'watch', 'concat:dist']);
};

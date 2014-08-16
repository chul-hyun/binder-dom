module.exports = function (grunt) {
  var path = require('path')

  var port = 9000
    , host = 'localhost'

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: port,
          hostname:host
        }
      }
    },
    requirejs: {
      options: {
        baseUrl: "src",
        name: 'binderDOM'
      },
      compile: {
        options: {
          out: "dist/binderDOM.js",
          optimize: "none",
          paths: {
            'binder': '../bower_components/binder/dist/binder',
            'watchDOM': '../bower_components/watchDOM/dist/watchDOM'
          }
        }
      },
      compileMin: {
        options: {
          out: "dist/binderDOM.min.js",
          paths: {
            'binder': '../bower_components/binder/dist/binder.min',
            'watchDOM': '../bower_components/watchDOM/dist/watchDOM.min'
          }
        }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      files: ['src/**', 'test/**'],
      tasks: ['build']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.registerTask('build', ['requirejs']);
  grunt.registerTask('test', ['build', 'connect', 'watch']);
};

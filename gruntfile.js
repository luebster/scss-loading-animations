/// <binding ProjectOpened='watch' />

module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      sass: {
        options: {
          implementation: require('sass')
        },
        compile: {
          files: {
            './examples/style.css': './examples/scss/site.scss'
          }
        }
      },
      watch: {
        scss: {
          files: ['./examples/scss/style.scss'],
          tasks: ['sass']
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  };
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
          './docs/style.css': './docs/scss/style.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['./docs/scss/style.scss', './src/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
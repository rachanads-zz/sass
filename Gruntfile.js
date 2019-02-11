  module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      sass: {
        target: {
            files: [{
              expand: true,
              cwd: 'scss',
              src: ['*.scss'],
              dest: 'scssminified',
              ext: '.css'
            }]
          }     
    },

    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    grunt.registerTask('default', ['sass']);
  
  };
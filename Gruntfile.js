  module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

      htmlmin: {  
        target: {
            files: [{
              expand: true,
              cwd: 'html',
              src: ['*.html'],
              dest: 'htmlminified',
              ext: '.min.html'
            }]
          }                                
        // dist: {                                      
        //   options: {                                 
        //     removeComments: true,
        //     collapseWhitespace: true
        //   },
        //   files: {                               
        //     'dest/a.html': 'src/a.html',    
        //     'dest/b.html': 'src/b.html',
        //   }
        // },
      },

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
        // dist: {
        //     files: {
        //         'dest/a.css' : 'src/a.scss'
        //     }
        // }
    },

    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
  
    grunt.registerTask('default', ['htmlmin','sass']);
  
  };
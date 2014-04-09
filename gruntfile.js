module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    recess: {
      options: {
        compile: true
      },
      compileless: {
        options:{
          compress:true
        },
        src: ['app/less/app.less'],
        dest: 'app/app.css'
      }
    },

    concat:{
      compilejs:{
        src:[
          "app/bower_components/jquery/jquery.js",
          "app/bower_components/angularjs-bower/angular.js",
          "app/bower_components/raphael/raphael-min.js",
          "app/js/map/*.js",
          "app/js/app.js"
        ],
        dest:"app/js/app.cct.js"
      }
      ,
      compileshort:{
        src:[
          "app/bower_components/angularjs-bower/angular.min.js",
          "app/js/map/mapData.js",
          "app/js/map/svgMap.js",
          "app/js/app.js"
        ],
        dest:"app/js/app.cc2.js"
      }
    },

    watch:{
      recess:{
        files:["app/less/*"], tasks:['recess']
      },
      concat:{
        files:["app/js/**/*.js"], tasks:['concat']
      },
      html:{
        files:"app/**/*.html",
        tasks:[]
      },
      options:{spawn:false, livereload:true}
    }
  });

  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task(s).
  grunt.registerTask('dist-css', ['recess']);
  grunt.registerTask('default', ['recess', 'concat']);

};
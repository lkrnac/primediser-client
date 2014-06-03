// Generated on 2014-03-24 using generator-angular-fullstack 1.3.2

// jshint node: true
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    directory: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist',
      test: 'test',
      coverage: 'coverage'
    },
    watch: {
      jsClient: {
        files: ['<%= directory.app %>/scripts/{,*/}*.js'],
        tasks: ['karma:unit'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['<%= directory.test %>/spec/{,*/}*.js'],
        tasks: ['karma:unit']
      },
      styles: {
        files: ['<%= directory.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= directory.app %>/views/{,*//*}*.{html,jade}',
          '{.tmp,<%= directory.app %>}/styles/{,*//*}*.css',
          '{.tmp,<%= directory.app %>}/scripts/{,*//*}*.js',
          '<%= directory.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],

        options: {
          livereload: true
        }
      }
    },

    //    // The actual grunt server settings
    //    connect: {
    //      options: {
    //        port: 9000,
    //        // Change this to '0.0.0.0' to access the server from outside.
    //        hostname: 'localhost',
    //        livereload: 35729
    //      },
    //      livereload: {
    //        options: {
    //          open: true,
    //          base: [
    //            '.tmp',
    //            '<%= directory.app %>'
    //          ]
    //        }
    //      },
    //      test: {
    //        options: {
    //          port: 9001,
    //          base: [
    //            '.tmp',
    //            'test',
    //            '<%= directory.app %>'
    //          ]
    //        }
    //      },
    //      dist: {
    //        options: {
    //          base: '<%= directory.dist %>'
    //        }
    //      }
    //    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        ignore: '<%= directory.app %>/bower_components/**',
      },
      all: [
        '<%= directory.app %>/scripts/**/*.js'
      ],
      test: {
        options: {
          jshintrc: '<%= directory.test %>/.jshintrc'
        },
        src: ['<%= directory.test %>/spec/**/*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= directory.dist %>/*',
            '!<%= directory.dist %>/.git*',
            '!<%= directory.dist %>/Procfile'
          ]
        }]
      },
      coverage: {
        src: ['<%= directory.coverage %>/'],
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= directory.dist %>/public/scripts/{,*/}*.js',
            '<%= directory.dist %>/public/styles/{,*/}*.css',
            '<%= directory.dist %>/public/images/{,*/}' +
              '*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= directory.dist %>/public/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: [
        '<%= directory.app %>/views/index.html',
        '<%= directory.app %>/views/index.jade'
      ],
      options: {
        dest: '<%= directory.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= directory.dist %>/views/{,*/}*.html',
        '<%= directory.dist %>/views/{,*/}*.jade'
      ],
      css: ['<%= directory.dist %>/public/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= directory.dist %>/public']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= directory.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= directory.dist %>/public/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= directory.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= directory.dist %>/public/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          //collapseWhitespace: true,
          //collapseBooleanAttributes: true,
          //removeCommentsFromCDATA: true,
          //removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= directory.app %>/views',
          src: ['*.html', 'partials/**/*.html'],
          dest: '<%= directory.dist %>/views'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= directory.dist %>/views/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= directory.app %>',
          dest: '<%= directory.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{webp}',
            'fonts/**/*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= directory.app %>/views',
          dest: '<%= directory.dist %>/views',
          src: '**/*.jade'
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= directory.dist %>/public/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= directory.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS']
      },
      debug: {
        configFile: 'karma.conf.js',
        singleRun: false,
        autoWatch: true
      }
    },

    coveralls: {
      options: {
        force: true
      },
      client: {
        src: '<%= directory.coverage %>/PhantomJS*/lcov.info'
      },
    },

    requirejs: {
      dist: {
        options: {
          almond: true,

          replaceRequireScript: [{
            files: ['<%= directory.dist %>/views/index.html'],
            module: 'bootstrap'
          }],

          modules: [{
            name: 'bootstrap'
          }],
          // contains path specifications and nothing else important 
          // with respect to config
          mainConfigFile: '<%= directory.app %>/scripts/bootstrap.js',
          dir: '<%= directory.dist %>/public/scripts',
          baseUrl: '<%= directory.app %>/scripts',
          useStrict: true,
          removeCombined: true
        }
      }
    }
  });

  grunt.registerTask('coverage', [
    'clean:coverage',
    'karma',
    'coveralls',
  ]);

  grunt.registerTask('test', [
    'copy:styles',
    'autoprefixer',
    'karma:unit',
    'coveralls'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'copy:styles',
    'imagemin',
    'svgmin',
    'htmlmin',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'requirejs:dist',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
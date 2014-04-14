// Generated on 2014-03-24 using generator-angular-fullstack 1.3.2
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
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist',
      test: 'test',
      coverage: 'coverage'
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    watch: {
      jsClient: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['karma:unit'],
        //        options: {
        //          livereload: true
        //        }
      },
      jsTest: {
        files: ['<%= yeoman.test %>/spec/{,*/}*.js'],
        tasks: ['karma:unit']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= yeoman.app %>/views/{,*//*}*.{html,jade}',
          '{.tmp,<%= yeoman.app %>}/styles/{,*//*}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*//*}*.js',
          '<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
        ],

        options: {
          livereload: true
        }
      },
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
    //            '<%= yeoman.app %>'
    //          ]
    //        }
    //      },
    //      test: {
    //        options: {
    //          port: 9001,
    //          base: [
    //            '.tmp',
    //            'test',
    //            '<%= yeoman.app %>'
    //          ]
    //        }
    //      },
    //      dist: {
    //        options: {
    //          base: '<%= yeoman.dist %>'
    //        }
    //      }
    //    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: '<%= yeoman.test %>/.jshintrc'
        },
        src: ['<%= yeoman.test %>/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/Procfile'
          ]
        }]
      },
      coverage: {
        src: ['<%= yeoman.coverage %>/'],
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
            '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/public/styles/{,*/}*.css',
            '<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= yeoman.app %>/views/index.html',
        '<%= yeoman.app %>/views/index.jade'
      ],
      options: {
        dest: '<%= yeoman.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/views/{,*/}*.html',
        '<%= yeoman.dist %>/views/{,*/}*.jade'
      ],
      css: ['<%= yeoman.dist %>/public/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>/public']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/public/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/public/images'
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
          cwd: '<%= yeoman.app %>/views',
          src: ['*.html', 'partials/**/*.html'],
          dest: '<%= yeoman.dist %>/views'
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
        html: ['<%= yeoman.dist %>/views/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>/public',
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
          cwd: '<%= yeoman.app %>/views',
          dest: '<%= yeoman.dist %>/views',
          src: '**/*.jade'
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/public/images',
          src: ['generated/*']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },

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
        src: '<%= yeoman.coverage %>/PhantomJS*/lcov.info'
      },
    },

    requirejs: {
      dist: {
        options: {
          almond: true,

          replaceRequireScript: [{
            files: ['<%= yeoman.dist %>/views/index.html'],
            module: 'bootstrap'
          }],

          modules: [{
            name: 'bootstrap'
          }],

          mainConfigFile: '<%= yeoman.app %>/scripts/bootstrap.js', // contains path specifications and nothing else important with respect to config
          dir: '<%= yeoman.dist %>/public/scripts',
          baseUrl: '<%= yeoman.app %>/scripts',
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
    'concurrent:test',
    'autoprefixer',
    'karma:unit',
    'coveralls'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
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
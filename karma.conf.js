// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  'use strict';
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['requirejs', 'mocha', 'chai', 'sinon'],

    // list of files / patterns to load in the browser
    files: [
      'test/test-bootstrap.js', {
        pattern: 'app/bower_components/angular/angular.js',
        included: false
      }, {
        pattern: 'app/bower_components/angular-mocks/angular-mocks.js',
        included: false
      }, {
        pattern: 'app/bower_components/angular-resource/angular-resource.js',
        included: false
      }, {
        pattern: 'app/bower_components/angular-cookies/angular-cookies.js',
        included: false
      }, {
        pattern: 'app/bower_components/angular-sanitize/angular-sanitize.js',
        included: false
      }, {
        pattern: 'app/bower_components/angular-route/angular-route.js',
        included: false
      }, {
        pattern: 'app/scripts/*.js',
        included: false
      }, {
        pattern: 'app/scripts/**/*.js',
        included: false
      }, {
        pattern: 'test/**/*.js',
        included: false
      },
    ],

    // list of files / patterns to exclude
    exclude: [
      'app/scripts/bootstrap.js'
    ],

    // web server port
    port: 8080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],
    preprocessors: {
      'app/scripts/**/*.js': 'coverage'
    },

    //configure coverage reporter
    coverageReporter: {
      type: 'lcov',
      dir: 'coverage'
    },

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};

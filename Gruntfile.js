/*
 * grunt-buddha-creeper
 * 
 *
 * Copyright (c) 2015 creeperyang
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures']
    },

    copy: {
      tests: {
        expand: true,
        cwd: 'test/original',
        dest: 'test/fixtures/',
        src: '*.js'
      }
    },

    // Configuration to be run (and then tested).
    buddha: {
      options: {
        who: 'buddha', // buddha alpaca
        commentSymbol: '//'
      },
      dist: ['test/fixtures/*.js']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'buddha', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};

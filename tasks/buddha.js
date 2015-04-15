/*
 * grunt-buddha-creeper
 * 
 *
 * Copyright (c) 2015 creeperyang
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha', 'Buddha\'s grace illuminates code as sunshine', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      who: 'buddha', // buddha alpaca
      commentSymbol: '//'
    });

    var testExistRegexMap = {
      'buddha': /o8888888o/,
      'alpaca': /┗┓┓┏━┳┓┏┛/
    };

    var who = options.who;
    var commentSymbol = options.commentSymbol;
    var commentFilepathMap = {
      'buddha': 'assets/buddha.txt',
      'alpaca': 'assets/alpaca.txt'
    };
    var commentFilepath = path.join(__dirname, commentFilepathMap[who]);
    var commentContent = grunt.file.read(commentFilepath);
    var lineCommentArr = commentContent.split(grunt.util.normalizelf('\n'));

    lineCommentArr.forEach(function(value, index, arr) {
      arr[index] = commentSymbol + value;
    });

    commentContent = lineCommentArr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent = grunt.file.read(filepath);
        if(testExistRegexMap[who].test(originalFileContent)) {
          return;
        }
        grunt.file.write(filepath, commentContent + grunt.util.normalizelf('\n') + originalFileContent);
        // Print a success message.
        grunt.log.writeln('File "' + filepath + '" updated.');
      });

    });
  });

};

# grunt-buddha-creeper

> Buddha\'s grace illuminates code as sunshine

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-creeper --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-creeper');
```

## The "buddha" task

### Overview
In your project's Gruntfile, add a section named `buddha` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `buddha`

A string value that is used to specify who blesses code.

指明佛祖还是神兽保佑代码。

#### options.commentSymbol
Type: `String`
Default value: `//`

A string value that is used to specify comment symbol.

文件中拼接神兽或佛祖时使用的注释符。

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  buddha: {
    options: {
      'who': 'buddha',
      'commentSymbol': '//'
    },
    dist: ['examples/*.js']
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

2015-04-15&nbsp;&nbsp;&nbsp;v0.0.1&nbsp;&nbsp;&nbsp; init

## License
Copyright (c) 2015 creeperyang. Licensed under the MIT license.

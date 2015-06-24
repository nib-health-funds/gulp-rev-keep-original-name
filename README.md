# gulp-rev-keep-original-name

Keep the original file name for the rewritten file by [gulp-rev](https://github.com/sindresorhus/gulp-rev).

## Installation

    npm i --save gulp-rev-keep-original-name
  
## Usage

    var gulp = require('gulp');
    var rev = require('gulp-rev');
    var revcss = require('gulp-rev-css-url');
    var revkeep = require('gulp-rev-keep-original-name');
    
    gulp.task('rev', function () {
      return gulp.src('./app/**/*')
        .pipe(rev())
        .pipe(revcss())
        .pipe(revkeep())
        .pipe(gulp.dest('./build/'))
      ;
    });

## Options

#### include 

A filter `RegExp` or `function` that allows you to include certain files. 

##### Example

RegExp:

    revkeep({
      include: /build\.css$/  //specify which file to include
    });

Function: 

    revkeep({
      include: function(file) {
        if (/build\.css$/.test(file.name)) {
          return true; //specify which file to include
        }
      }
    });
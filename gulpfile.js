var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('compress', function(cb){
  pump(
    [
      gulp.src('lib/*.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});

gulp.task('default', function() {
  return gulp.src('lib/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'output.js'
    }))
    .pipe(gulp.dest('dist'));
});
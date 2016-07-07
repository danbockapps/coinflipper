var gulp = require('gulp');
var pump = require('pump');
var uglify = require('gulp-uglify');
var ts = require('gulp-typescript');
var shell = require('gulp-shell');

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

gulp.task('compile-typescript', function() {
  gulp.src('lib/**/*.ts')
    .pipe(ts({
      noImplicitAny: true,
      out: 'output.js'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('copy-html', function() {
  gulp.src('lib/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('rsync', shell.task('./rsync.sh'));

gulp.task('default', ['compile-typescript', 'copy-html', 'rsync'], function() {
  //console.log('default done.');
});

gulp.task('watch', function() {
  gulp.watch('lib/*', ['default']);
});
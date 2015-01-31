// include gulp
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size');

var jslist = [
    './build/*.js'
];

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  gulp.src(jslist)
    .pipe(uglify())
    .pipe(concat('jqlite.min.js'))
    .pipe(gulp.dest('./dist'))
    .pipe(size({title: 'Javascript'}))
    .pipe(size({title: 'Javascript', gzip: true}));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(['./js/build/*.js'], ['scripts']);
});

// default gulp task
gulp.task('default', ['scripts'/*, 'watch'*/]);
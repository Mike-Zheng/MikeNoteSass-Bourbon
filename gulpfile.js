/*mikeNote  http://mike-zheng.github.io/*/
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch');

// Paths
var paths = {
  	'source': './source/',
	'css': './css/',
	'sass': './scss/'

}

// Sass
gulp.task('sass', function() {
  gulp.src([paths.sass + '**/**.scss'])
    .pipe(plumber())
    .pipe(sass({outputStyle: 'nested'})
    .on('error', sass.logError))
      .pipe(gulp.dest('./css/'))
});

watch([paths.sass + '**/**.scss'], function() {
  gulp.start('sass');
});


gulp.task('default', ['sass']);
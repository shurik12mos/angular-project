var gulp = require('gulp'),
	concat = require('gulp-concat');
 
gulp.task('default', function() {
   gulp.src('./app/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
   gulp.src('./app/*.css')
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist/'));
});
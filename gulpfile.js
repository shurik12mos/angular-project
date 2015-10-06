var gulp = require('gulp'),
	concat = require('gulp-concat'),
	notify = require('gulp-notify'),
	watch = require('gulp-watch');
 
gulp.task('default', function() {
   gulp.src('./app/*.js')    
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'))
	.pipe(notify('Done js!'));
   gulp.src('./app/*.css')  
	.pipe(concat('all.css'))
	.pipe(gulp.dest('./dist/'))
	.pipe(notify('Done css!'));
	
	 watch('app/*.css', function() { gulp.start('default'); });
});


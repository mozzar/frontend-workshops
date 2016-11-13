var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('styles', function() {
  gulp.src('public_html/styles/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public_html/styles/'))
});

gulp.task('styles:watch',function() {
  gulp.watch('public_html/styles/*.scss',['styles']);
});

gulp.task('webserver', function() {
  gulp.src('public_html')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

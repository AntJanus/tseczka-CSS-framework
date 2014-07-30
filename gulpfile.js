var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var less = require('gulp-less');

gulp.task('styles', function() {
  gulp.src(['./less/tseczka.less'])
    .pipe(less())
    .pipe(gulp.dest('./dist/'))
  ;
});

gulp.task('default', ['styles'], function(){
  gulp.watch('./less/*.less', ['styles']);
});

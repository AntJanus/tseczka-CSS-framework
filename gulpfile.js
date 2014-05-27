var gulp = require('gulp');
var autoprefix = require('gulp-autoprefixer');
var less = require('gulp-less');

gulp.task('styles', function() {
  gulp.src('base.less')
    .pipe(autoprefix())
    .pipe(less())
    .pipe(gulp.dest('./dist/tseczka.css'))
  ;
});

gulp.task('default', 'styles', function(){
  gulp.watch('./less/*.less', ['styles']);
});

var gulp = require('gulp');

gulp.task('default', function() {
    gulp.src('src/client/*')
        .pipe(gulp.dest('public'))
});
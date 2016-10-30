var gulp = require('gulp');
var exec = require('child_process').exec;


gulp.task('build', function() {
    gulp.src('src/client/*')
        .pipe(gulp.dest('public'))
});

gulp.task('deploy', function (cb) {
    exec('firebase deploy', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});
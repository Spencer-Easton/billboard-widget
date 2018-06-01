var gulp = require('gulp');
var minify = require('gulp-minify');
var htmlmin = require('gulp-htmlmin');
var replace = require('gulp-replace');
var exec = require('child_process').exec;


gulp.task('jsMin', function() {
    gulp.src('src/client/*.js')
        .pipe(minify())
        .pipe(gulp.dest('public'))
});

gulp.task('htmlMin', function(){
    gulp.src('src/client/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(replace('billboard.js','billboard-min.js'))
        .pipe(gulp.dest('public'));
});

gulp.task('build', ['jsMin','htmlMin']);

gulp.task('deploy', function (cb) {
    exec('firebase deploy', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});


var gulp = require('gulp'),
    del = require('del'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    express = require('express'),
    uglifycss = require('gulp-uglifycss'),
    ngAnnotate = require('gulp-ng-annotate');

gulp.task('copy-images', function () {
    gulp.src(['lib/img/**.png'])
        .pipe(gulp.dest('dist/'));
});

gulp.task('compile-css', function () {
    gulp.src(['lib/css/emoji.css'])
        .pipe(gulp.dest('dist/'));

    gulp.src(['lib/css/emoji.css'])
        .pipe(uglifycss())
        .pipe(rename('emoji.min.css'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('compile-js', function () {
    gulp.src(['lib/js/**/**.js'])
        .pipe(concat('emoji.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('dist/'));

    gulp.src(['lib/js/**/**.js'])
        .pipe(concat('emoji.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('clean', function () {
    del('build');
});

gulp.task('build', ['copy-images', 'compile-css', 'compile-js']);

gulp.task('dev', ['build'], function () {
    watch(['lib/**/*.*', 'Gulpfile.js'], function () {
        gulp.start('build');
    });
});

gulp.task('serve', function () {
    var server = express();
    server.use(express.static('.'));
    server.listen(8989);
});

gulp.task('dev-serve', ['serve', 'dev']);
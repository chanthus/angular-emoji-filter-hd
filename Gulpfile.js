var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    uglifycss = require('gulp-uglifycss'),
    ngAnnotate = require('gulp-ng-annotate');

gulp.task('copy-images', function () {
    gulp.src(['lib/**/*.png'])
        .pipe(gulp.dest('build/'));
});

gulp.task('compile-sass', function () {
    gulp.src(['lib/scss/emoji.scss'])
        .pipe(gulp.dest('build/'));

    gulp.src(['lib/scss/emoji.scss'])
        .pipe(sass())
        .pipe(uglifycss())
        .pipe(rename('emoji.min.css'))
        .pipe(gulp.dest('build/'));
});

gulp.task('compile-js', function () {
    gulp.src(['lib/emoji.js'])
        .pipe(ngAnnotate())
        .pipe(gulp.dest('build/'));

    gulp.src(['lib/emoji.js'])
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename('emoji.min.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('clean', function () {
    del('build');
});

gulp.task('build', ['copy-images', 'compile-sass', 'compile-js']);

gulp.task('dev', ['build'], function () {
    watch(['lib/**/*.*', 'Gulpfile.js'], function () {
        gulp.start('build');
    });
});
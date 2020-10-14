/*
* Filename: gulpfile.js
* Author: Saif
* Project: watchmydom
*/
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    sass = require('gulp-sass'),
    injectPartials = require('gulp-inject-partials'),
    uglify = require('gulp-uglify'),
    pipeline = require('readable-stream').pipeline;

const minify = require("gulp-babel-minify");

/*
* Generating scripts
*/
gulp.task('script', () =>
    gulp.src('src/watchmydom.js')
        .pipe(minify())
        .pipe(gulp.dest('demo/js'))
);


gulp.task('scriptbuild', function (done) {
    gulp.src('src/*.js')
        .pipe(minify())
        .pipe(gulp.dest('build/'));
    done();
})



/*
* Sass to css
*/
gulp.task('sass', function () {
    return gulp.src('demo/sass/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('demo/css'));
});


gulp.task('index', function () {
    return gulp.src('demo/html/*.html')
        .pipe(injectPartials())
        .pipe(gulp.dest('./demo/'));
});


gulp.task('demo', gulp.series('script', function () {
    browserSync.init({
        server: {
            baseDir: "./demo"
        }
    });

    gulp.watch("src/*.js", gulp.series('script'));
    gulp.watch("demo/sass/**/*.scss", gulp.series('sass'));
    gulp.watch("demo/html/*.html", gulp.series('index'));
}));


gulp.task('build', gulp.series('scriptbuild', function (e) {
    console.log('build')
}));


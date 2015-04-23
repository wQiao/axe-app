
// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var ngHtml2Js = require("gulp-ng-html2js");

var minifyHtml = require("gulp-minify-html");


var paths = {
    scripts: ['src/js/**/*.js'],
    csses:['src/css/bootstrap.css','src/css/icon.css','src/css/app.css','src/css/animate.css'],
    tpls:['src/tpl/**/*.html']
};

// 检查脚本
gulp.task('lint', function() {
    gulp.src(paths.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
// Not all tasks need to use streams
// A gulpfile is just another node program and you can use all packages available on npm
gulp.task('clean', function(cb) {
    // You can use multiple globbing patterns as you would with `gulp.src`
    //del(['build'], cb);
});

gulp.task('scripts', function() {
    // Minify and copy all JavaScript (except vendor scripts)
    // with sourcemaps all the way down
    return gulp.src(paths.scripts)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
gulp.task('csses', function() {
    return gulp.src(paths.csses)
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist'));
});
gulp.task('tpls', function() {
    return gulp.src(paths.tpls)
        .pipe(minifyHtml({
            empty: true,
            spare: true,
            quotes: true
        }))
        .pipe(ngHtml2Js({
            moduleName: "ui.axe.tpls",
            prefix: "tpl/"
        }))
        .pipe(concat("ui-axe-tpls.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['csses','scripts','tpls']);
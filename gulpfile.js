var gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier-terser');
var htmlclean = require('gulp-htmlclean');
var terser = require('gulp-terser');
var sourcemaps = require('gulp-sourcemaps');

// 压缩css文件
const minify_css = () => (
    gulp.src(['./public/**/*.css','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public'))
);

// 压缩html文件
const minify_html = () => (
    gulp.src(['./public/**/*.html','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
)

// 压缩js文件
const minify_js = () => (
    gulp.src(['./public/**/*.js', '!./public/**/*.min.js','!./public/{lib,lib/**}','!./public/{libs,libs/**}','!./public/{media,media/**}'])
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public'))
)

gulp.task('minify', gulp.parallel(
    minify_html,
    minify_css,
    minify_js
))

gulp.task('default', gulp.series('minify'));
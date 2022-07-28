//list dependences

const gulp = require("gulp");
const {series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const prefix = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');

function buildStyles() {
  return gulp
    .src("./src/scss/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix())
    .pipe(minify())
    .pipe(gulp.dest("./dist/css"));
}

// exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch("./src/scss/*.scss", ["sass"]);
};
//create functions

//scss
// function compilesscss() {
//     return src('src/scss/style.scss')
//     .pipe(sass())
//     .pipe(prefix())
//     .pipe(minify())
//     .pipe(dest('/dist/css'))
// }

// //create watchtask

// function watchTask() {
//     watch('src/scss/style.scss',compilesscss())
// }

//default gulp
exports.default = series(
    buildStyles,
);

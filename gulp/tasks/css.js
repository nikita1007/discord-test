const path = require("../paths.js");

const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const bulk = require("gulp-sass-bulk-importer");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const clean = require("gulp-clean-css");
const concat = require("gulp-concat");
const map = require("gulp-sourcemaps");
const removeComments = require("gulp-strip-css-comments");

const bs = require("browser-sync");

module.exports = function css() {
  return src(path.src.css)
    .pipe(bulk())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(clean())
    .pipe(dest(path.dist.css))
    .pipe(removeComments())
    .pipe(concat("style.min.css"))
    .pipe(map.write("../sourcemaps/"))
    .pipe(dest(path.dist.css))
    .pipe(bs.reload({ stream: true }));
};
const path = require("../paths.js");

const { src, dest } = require("gulp");
const fileinclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const strip = require("gulp-strip-comments");

const bs = require("browser-sync");

module.exports = function html() {
  return src(path.src.html)
    .pipe(fileinclude())
    .pipe(strip())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(path.dist.html))
    .pipe(bs.reload({ stream: true }));
};

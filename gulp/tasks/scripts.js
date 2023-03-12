const path = require("../paths.js");

const { src, dest } = require("gulp");
const webpackStream = require("webpack-stream");

const bs = require("browser-sync");
const webpackConfig = require("../webpack.config.js");
const webpack = require("webpack");

module.exports = function scripts() {
  return src(path.src.scripts())
    .pipe(webpackStream(webpackConfig(), webpack))
    .on("error", function (err) {
      console.error("WEBPACK ERROR", err);
      this.emit("end"); // Don't stop the rest of the task
    })
    .pipe(dest(path.dist.scripts))
    .pipe(bs.reload({ stream: true }));
};
``
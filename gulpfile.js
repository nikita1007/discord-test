"use strict";

const { watch, parallel, series } = require('gulp');
const requireDir = require('require-dir');
const task = requireDir('./gulp/tasks/');

const path = require('./gulp/paths.js');
const browserSync = require("browser-sync").create();
const gulpConf = require('./gulp.config.js');

/* BrowserSync - Server Function */
function serve() {
  browserSync.init({
    server: {
      baseDir: path.dest + "/",
    },
  });
}

/* File Watcher */
function fileWatch() {
  watch(path.watch.html, task.html).on("change", series(task.html, browserSync.reload));
  watch(path.watch.css, task.css).on("change", series(task.css, browserSync.reload));
  watch(path.watch.scripts(), task.scripts).on("change", series(task.scripts, browserSync.reload));
  watch(path.watch.images, task.images).on("change", series(task.images, browserSync.reload));
  watch(path.watch.fonts, task.fonts).on("change", series(task.fonts, browserSync.reload));
}

/* Function that's starts project in production mode */
const build = series(task.clean, parallel(task.html, task.css, task.scripts, task.images, task.fonts));

/* Function that's starts project in dev mode */
const dev = parallel(build, fileWatch, serve);

const dflt = (gulpConf.mode == "dev" || gulpConf.mode == "development") ? dev : build;

exports.html = task.html;
exports.css = task.css;
exports.scripts = task.scripts;
exports.images = task.images;
exports.fonts = task.fonts;
exports.clean = task.clean;
exports.fwatch = fileWatch;
exports.serve = serve;
exports.dev = dev;
exports.build = build;
exports.default = dflt;
const path = require("path");
const gulpConf = require("../gulp.config.js");

/* Paths */
const src = "src";
const dist = "dist";

const glpath = {
  source: src,
  dest: dist,
  clean: dist,
  src: {
    html: [`${src}/**/*.html`, `!${src}/components/**/*.html`],
    css: [
      `${src}/assets/scss/**/*.scss`,
      `!${src}/assets/scss/components/**/*.scss`,
      `!${src}/assets/scss/UI/**/*.scss`,
    ],
    scripts: () => {
      if (gulpConf.scriptType == "js") return `${src}/assets/js/**/*.js`;
      else if (gulpConf.scriptType == "ts")
        return `${src}/assets/ts/**/*.+(js|ts)`;
    },
    images: {
      base: `${src}/assets/images/`,
      path: `${src}/assets/images/**/*.+(jpg|png|svg|gif|ico|webp|webmanifest|xml|json)`,
    },
    fonts: {
      path: `${src}/assets/fonts/**/*.+(eot|woff|woff2|ttf|svg)`,
      base: `${src}/assets/fonts/`,
    },
  },
  dist: {
    html: dist,
    css: `${dist}/assets/styles/`,
    scripts: `${dist}/assets/js/`,
    images: `${dist}/assets/images/`,
    fonts: `${dist}/assets/fonts/`,
  },
  watch: {
    html: [`${src}/**/*.html`, `${src}/components/**/*.html`],
    css: `${src}/assets/**/*.scss`,
    scripts: () => {
      if (gulpConf.scriptType == "js") return `${src}/assets/js/**/*.js`;
      else if (gulpConf.scriptType == "ts")
        return `${src}/assets/ts/**/*.+(js|ts)`;
    },
    images: `${src}/assets/images/**/*.+(jpg|png|svg|gif|ico|webp|webmanifest|xml|json)`,
    fonts: `${src}/assets/fonts/**/*.+(eot|woff|woff2|ttf|svg)`,
  },
  helpers: {
    scss: {
      fonts_store_file: `${src}/assets/fonts/`,
      scss_fonts_include_file: `${src}/assets/scss/_local-fonts.scss`,
      scss_mixins_file: `${src}/assets/scss/_mixins.scss`,
    },
  },
};

module.exports = glpath;

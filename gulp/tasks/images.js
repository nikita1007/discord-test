const fs = require('fs');
const ph = require('path');
const path = require("../paths.js");

const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");

const bs = require("browser-sync");
const changed = require('gulp-changed');

module.exports = async function images(done) {
  await toLowerFileExt(path.src.images.base);

  await new Promise((res, rej) => {
    src(path.src.images.path)
      .pipe(
        changed(path.dist.images, {
          hasChanged: changed.compareLastModifiedTime,
        })
      )
      .pipe(
        imagemin(
          [
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({ quality: 80, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
              plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
            }),
          ],
        )
      )
      .pipe(dest(path.dist.images))
      .pipe(bs.reload({ stream: true }))
      .on("end", res);
  });

  done();
}

async function toLowerFileExt(dir) {
  files = fs.readdirSync(dir);

  files.forEach(file_elem => {
    if (fs.lstatSync(ph.join(dir, file_elem)).isFile()) {
      if (ph.extname(file_elem) !== ph.extname(file_elem).toLowerCase()) {
        fs.renameSync(
          ph.join(dir, file_elem),
          ph.format({
            name: ph.join(dir, ph.parse(file_elem).name),
            ext: ph.parse(file_elem).ext.toLowerCase(),
          })
        );
      }
    } else if (fs.lstatSync(ph.join(dir, file_elem)).isDirectory()) {
      toLowerFileExt(ph.join(dir, file_elem));
    }
  });
}
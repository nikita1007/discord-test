const path = require("../paths.js");
const { cssFonts } = require("../cssFonts.js");

const { src, dest } = require("gulp");
const iconfont = require("gulp-iconfont");

const bs = require("browser-sync");
const changed = require("gulp-changed");

module.exports = async function fonts(done) {
  var runTimestamp = Math.round(Date.now() / 1000);
  let endpoint = 0;

  await new Promise((res, rej) => { 
    src(path.src.fonts.path)
      .pipe(
        changed(path.dist.fonts, {
          hasChanged: changed.compareLastModifiedTime,
        })
      )
      .pipe(
        iconfont({
          fontName: "myfont",
          prependUnicode: true,
          formats: ["woff"],
          timestamp: runTimestamp,
        })
      )
      .pipe(dest(path.dist.fonts))
      .pipe(bs.reload({ stream: true }))
      
      src(path.src.fonts.path)
        .pipe(
          changed(path.dist.fonts, {
            hasChanged: changed.compareLastModifiedTime,
          })
        )
        .pipe(
          iconfont({
            fontName: "myfont",
            prependUnicode: true,
            formats: ["woff2"],
            timestamp: runTimestamp,
          })
        )
        .pipe(dest(path.dist.fonts))
        .pipe(bs.reload({ stream: true }))
    
    fontsCssAdd();
  });
  
  await new Promise.resolve().then(()=> {done()});
};

async function fontsCssAdd() {
  const fnt = new cssFonts(
    {
      fonts_dir: path.helpers.scss.fonts_store_file,
      path_to_fontcss_src_file: path.helpers.scss.scss_fonts_include_file,
    },
    {
      path_to_mixins_src_file: path.helpers.scss.scss_mixins_file,
    }
  );
  await fnt.addFonts();
}
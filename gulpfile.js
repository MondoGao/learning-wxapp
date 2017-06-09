const gulp = require(`gulp`)
const extname = require(`gulp-extname`)

const utils = require(`./build/utils`)

const patterns = {
  scripts: `src/**/*.js`,
  jsons: `src/**/*.json.js`,
  styles: `src/**/+([^_]).${utils.getStyleLanguage()}`,
  stylesWatch: `src/**/*.${utils.getStyleLanguage()}`,
  xmls: `src/**/*.@(html|xml)`,
  assets: `src/**/*.@(json|wxml|wxss|png|gif|jp?(e)g|svg)`
}

gulp.task(`clean`, () => {
  const gulpClean = require(`gulp-clean`)
  
  return gulp.src(`dist`)
    .pipe(gulpClean())
})

gulp.task(`build:scripts`, () => (
  utils.webpackCompile()
))

gulp.task(`build:jsons`, () => (
  gulp.src(patterns.jsons)
    .pipe(utils.gulpRerwriteExt())
    .pipe(extname(`json`))
    .pipe(gulp.dest(`dist`))
))

gulp.task(`build:styles`, () => {
  const cssLang = utils.getStyleLanguage()
  const postcss = require(`gulp-postcss`)
  let postcssPlugins = [require(`autoprefixer`)]
  
  switch (cssLang) {
    case 'scss':
      postcssPlugins.unshift(require(`precss`))
      break
  }
  
  return gulp.src(patterns.styles)
    .pipe(postcss(postcssPlugins))
    .pipe(extname(`wxss`))
    .pipe(gulp.dest(`dist`))
})

gulp.task(`build:xmls`, () => (
  gulp.src(patterns.xmls)
    .pipe(extname(`wxml`))
    .pipe(gulp.dest(`dist`))
))

gulp.task(`build:copy`, () => (
  gulp.src(patterns.assets)
    .pipe(gulp.dest(`dist`))
))

gulp.task(`watch`, [`build:scripts`, `build:styles`, `build:copy`, `build:jsons`, `build:xmls`], () => {
  gulp.watch(patterns.scripts, [`build:scripts`])
  gulp.watch(patterns.jsons, [`build:jsons`])
  gulp.watch(patterns.stylesWatch, [`build:styles`])
  gulp.watch(patterns.xmls, [`build:xmls`])
  gulp.watch(patterns.assets, [`build:copy`])
})

gulp.task(`default`, [`watch`])
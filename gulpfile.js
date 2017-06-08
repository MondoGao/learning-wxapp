const gulp = require(`gulp`)
const extname = require(`gulp-extname`)

const utils = require(`./build/utils`)

gulp.task(`clean`, () => {
  const gulpClean = require(`gulp-clean`)
  
  return gulp.src(`dist`)
    .pipe(gulpClean())
})

gulp.task(`build:scripts`, () => (
  utils.webpackCompile()
))

gulp.task(`build:jsons`, () => (
  gulp.src(`src/**/*.json.js`)
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
  
  return gulp.src(`src/**/*.${cssLang}`)
    .pipe(postcss(postcssPlugins))
    .pipe(extname(`wxss`))
    .pipe(gulp.dest(`dist`))
})

gulp.task(`build:xmls`, () => (
  gulp.src(`src/**/*.@(html|xml)`)
    .pipe(extname(`wxml`))
    .pipe(gulp.dest(`dist`))
))

gulp.task(`build:copy`, () => (
  gulp.src([`src/**/*.@(json|wxml|wxss|png|gif|jp?(e)g|svg)`])
    .pipe(gulp.dest(`dist`))
))

gulp.task(`watch`, [`build:scripts`, `build:styles`, `build:copy`, `build:jsons`, `build:xmls`], () => {
  gulp.watch(`src/**/*.js`, [`build:scripts`])
  gulp.watch(`src/**/*.json.js`, [`build:jsons`])
  gulp.watch(`src/**/*.@(${utils.getStyleLanguage()})`, [`build:styles`])
  gulp.watch(`src/**/*.@(html|xml)`, [`build:xmls`])
  gulp.watch(`src/**/*.@(json|wxml|wxss|png|gif|jp?(e)g|svg)`, [`build:copy`])
})

gulp.task(`default`, [`watch`])
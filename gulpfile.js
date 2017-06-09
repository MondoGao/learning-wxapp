const gulp = require(`gulp`)
const resolve = require(`path`).resolve
const extname = require(`gulp-extname`)

const utils = require(`./build/utils`)

const patterns = {
  scripts: `src/**/*.js`,
  jsons: `src/**/*.json.js`,
  styles: `src/**/+([^_]).${utils.getStyleLanguage()}`,
  stylesWatch: `src/**/*.${utils.getStyleLanguage()}`,
  xmls: `src/**/*.@(html|xml)`,
  assetsImg: `src/**/*.@(png|gif|jp?(e)g|svg)`,
  assetsOther: `src/**/*.@(json|wxml|wxss)`
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
  
  postcssPlugins.unshift(require(`postcss-import`)({

  }))
  
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

gulp.task(`build:assets:images`, () => {
  const imagemin = require(`gulp-imagemin`)
  
  return gulp.src(patterns.assetsImg)
    .pipe(imagemin())
    .pipe(gulp.dest(`dist`))
})

gulp.task(`build:assets:other`, () => (
  gulp.src(patterns.assetsOther)
    .pipe(gulp.dest(`dist`))
))

gulp.task(`watch`, [`build:scripts`, `build:styles`, `build:assets:images`, `build:assets:other`, `build:jsons`, `build:xmls`], () => {
  gulp.watch(patterns.scripts, [`build:scripts`])
  gulp.watch(patterns.jsons, [`build:jsons`])
  gulp.watch(patterns.stylesWatch, [`build:styles`])
  gulp.watch(patterns.xmls, [`build:xmls`])
  gulp.watch(patterns.assetsImg, [`build:assets:images`])
  gulp.watch(patterns.assetsOther, [`build:assets:other`])
})

gulp.task(`default`, [`watch`])
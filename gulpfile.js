const gulp = require(`gulp`)

const utils = require(`./build/utils`)

gulp.task(`clean`, () => {
  const gulpClean = require(`gulp-clean`)
  
  return gulp.src(`dist`)
    .pipe(gulpClean())
})

gulp.task(`build:scripts`, () => (
  utils.webpackCompile()
))

gulp.task(`build:styles`, () => {
  const cssLang = utils.getStyleLanguage()
  const postcss = require(`gulp-postcss`)
  const extname = require(`gulp-extname`)
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

gulp.task(`build:copy`, () => (
  gulp.src([`src/**/*.@(json|wxml|wxss|png|gif|jp?(e)g|svg)`])
    .pipe(gulp.dest(`dist`))
))

gulp.task(`default`, [`build:scripts`, `build:styles`, `build:copy`])
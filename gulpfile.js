const gulp = require(`gulp`)
const gulpClean = require(`gulp-clean`)

const utils = require(`./build/utils`)

gulp.task(`clean`, () => (
  gulp.src(`dist`)
    .pipe(gulpClean())
))

gulp.task(`build:js`, () => (
  utils.webpackCompile()
))

gulp.task(`default`, [`clean`])
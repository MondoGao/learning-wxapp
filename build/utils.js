const webpack = require(`webpack`)
const resolve = require(`path`).resolve
const settings = require(`./settings`)

const getPages = () => {
  return require(`../src/app.json`).pages
}

const getWebpackConfig = (baseConfig = require(`./webpack.config.base`), pagesArr = getPages()) => {
  baseConfig.entry[`app`] = resolve(__dirname, `../src`, `app`)
  pagesArr.forEach(page => {
    baseConfig.entry[page] = resolve(__dirname, `../src`, page)
  })
  
  return baseConfig
}

const getWebpackCompiler = (config = getWebpackConfig()) => {
  return webpack(config)
}

const webpackCompile = (compiler = getWebpackCompiler()) => {
  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.compilation.errors.length > 0) {
        let message = err ? err : stats.compilation.errors
        console.error(message)
        reject(message)
      }
      
      resolve()
    })
  })
}

const getStyleLanguage = () => {
  return settings.css
}
module.exports = {
  getPages,
  getWebpackConfig,
  getWebpackCompiler,
  webpackCompile,
  getStyleLanguage
}
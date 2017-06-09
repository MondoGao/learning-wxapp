const webpack = require(`webpack`)
const resolve = require(`path`).resolve
const settings = require(`./settings`)

const getPages = () => {
  let pages = require(`../src/app.json`).pages
  pages = pages ? pages : []
  
  return pages
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

const gulpRerwriteExt = () => {
  const through = require(`through2`)
  
  return through.obj((file, encoding, callback) => {
    const contents = file.contents.toString()
    
    file.contents = Buffer.from(JSON.stringify(eval(contents)))
    file.path = file.path.replace(/\.json\./, `.`)
    
    callback(null, file)
  })
}

module.exports = {
  getPages,
  getWebpackConfig,
  getWebpackCompiler,
  webpackCompile,
  getStyleLanguage,
  gulpRerwriteExt
}
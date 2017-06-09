const resolve = require(`path`).resolve

module.exports = {
  entry: {},
  output: {
    path: resolve(__dirname, `../dist`),
    filename: `[name].js`,
  },
  module: {
    rules: [
    ]
  },
  resolve: {
    alias:{
      sources: resolve(__dirname, `../src/sources`)
    }
  }
}
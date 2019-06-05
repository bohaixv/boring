const WebpackHtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = (env) => ({
  mode: env.mode,
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css/,
      loader: 'css-loader'
    }]
  },
  plugins: [
    new WebpackHtmlPlugin(),
    new VueLoaderPlugin()
  ]
})
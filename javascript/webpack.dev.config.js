const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: './release/bundle.js'
  },
  
  module: {
    rules: [{ 
      test: /\.js?$/,  // 我们要去检验哪些文件
      exclude: /(node_modules)/,  // 跳过哪些文件
      loader: 'babel-loader'  // 使用的loader
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, './release'), // 设置根目录
    open: true,  // 自动打开浏览器
    port: 9000
  }
}
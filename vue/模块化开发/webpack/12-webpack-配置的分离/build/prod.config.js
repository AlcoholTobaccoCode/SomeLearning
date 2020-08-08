// 发布时配置
// 公共依赖
const uglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    // uglifyjs-webpack-plugin --> 压缩 js (会删掉注释)
    new uglifyJsWebpackPlugin()
  ]
});

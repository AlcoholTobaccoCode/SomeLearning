// 开发时配置// 公共依赖
const path = require('path'); // 引用 node 中的核心模块 -> path
const webpack = require('webpack');
const baseConfig = require('./base.config');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: '/dist',
    inline: true,
    port: 8883 // 默认 80 端口
  }
});

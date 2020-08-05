const path = require('path'); // 引用 node 中的核心模块 -> path

module.exports = {
  entry: './src/main.js', // 入口
  output: { // 出口 , 不能使用绝对路劲('./dist)
    path: path.resolve(__dirname /* node 上下文中自带的, 可以获取当前文件所在路劲 */ , 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // 配置css
      {
        test: /\.css$/,
        // 下面的 use 是从右向左加载的
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      // 配置less
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      // 配置图片
      {
        test: /\.(pbg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            option: {
              limit: 102400
            }
          }
        ]
      }
    ]
  }
}
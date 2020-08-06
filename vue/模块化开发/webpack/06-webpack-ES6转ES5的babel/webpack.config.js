const path = require('path'); // 引用 node 中的核心模块 -> path

module.exports = {
  entry: './src/main.js', // 入口
  output: { // 出口 , 不能使用绝对路劲('./dist)
    path: path.resolve(__dirname /* node 上下文中自带的, 可以获取当前文件所在路劲 */ , 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [
      // 配置css
      {
        test: /\.css$/,
        // 下面的 use 是从右向左加载的
        use: [{
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
        use: [{
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
        test: /\.(png|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            /**
             * 当图片大小 小于 limit 时, 会将图片转换成 base64 格式;
             * 
             * 当图片大小 大于 limit 时, 会使用 file-loader 来对图片进行加载
             * (若没有 file-loader 时会报错)
             * 此时图片会使用 file-loader (下载就好) 解析,
             * 但是直接打包会找不到静态资源, 如果入口 index.html 不在 dist 文件夹内的话需要配置 publicPath 参上↑;
             * 此时图片的名字是 32位的hash 值, 防止名字重复
             * 在真实开发中, 我们可能对打包的图片名字有一定的要求
             * 比如, 将所有图片放在一个文件夹中, 跟上图片原来的名称, 同时也要防止重复 img/name.hash:8(截取 hash 值的八位).ext
             * 
             * 所以, 我们可以在 options 中添加上如下选项:
             *  img: 文件要打包到的文件夹;
             *  name: 获取图片原来的名字, 放在该位置;
             *  hash:8 : 为了防止图片名字冲突, 依然使用 hash, 但是只保留八位
             *  ext: 使用原来的图片扩展名;
             *  
            */
            limit: 8192,
            name: 'img/[name].[hash:8].[ext]'
          },
        }]
      },
      // 配置 babel
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
    ]
  }
}
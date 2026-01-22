const path = require('path');

module.exports = {
  // 项目入口
  entry: './src/index.js',
  
  // 打包输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true // 每次打包清空 dist 目录
  },
  
  // 模块处理规则
  module: {
    rules: [
      // 1. 用 Babel 转译 JS/JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // 2. 处理 CSS（支持 CSS Modules）
      {
        test: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true }
          }
        ]
      },
      // 3. 处理普通 CSS
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 4. 处理图片/字体
      {
        test: /\.(png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  
  // 解析文件后缀
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  
  // 开发服务器配置
  devServer: {
    static: './dist',
    hot: true, // 热更新
    open: true // 自动打开浏览器
  },
  
  // 模式：开发模式不压缩代码，生产模式会压缩
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
};

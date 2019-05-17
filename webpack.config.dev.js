const path = require('path');

const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js',
    publicPath: "/assets/",
  },

  entry: path.resolve(__dirname, 'src/index.js'), // './src/index.js'와 같다.
  resolve: {
    // 프로젝트의 루트디렉토리를 설정하여, 나중에 ./components 혹은 ../components 이렇게 접근해야 되는 디렉토리를 바로 components 로 접근 할 수 있게 해줍니다.
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'sass-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [{
          loader: "html-loader",
          options: { minimize: true }
        }]
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
          limit: 10000,
        },
      },
      {
        test: /\.(wav|mp3|eot|ttf)$/,
        loader: 'file-loader',
      },
    ]
  },
  devServer: {
    index: 'index.html',
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
    open: true,
    publicPath: "/assets/",
    contentBase: path.join(__dirname, 'src/views'),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization, X-Riot-Token"
    },
    proxy: {
      "/api": "http://localhost:3000",
      '/lol/*': {
        target: 'https://kr.api.riotgames.com',
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'src/views/index.template.html'), // 사용할 html
      filename: path.resolve(__dirname, 'src/views/index.html'), // 만들어질 html
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
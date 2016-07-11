var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [
          {
            test: /\.js$/,
            loaders: ['eslint-loader'],
            include: [new RegExp(path.join(__dirname, 'src'))]
          }
        ],
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url?limit=10000"
    },
    {
      test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
      loader: 'file'
    },
    {
      test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery'
    }],
    eslint: {
      configFile: 'src/.eslintrc'
      },
    stats: {
      colors: true
    }
}};

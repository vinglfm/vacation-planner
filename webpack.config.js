var webpack = require('webpack');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var path = require('path'),
    join = path.join,
    resolve = path.resolve;

const root = resolve(__dirname);
const src = join(root, 'src');

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
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000'
      },
      {
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
      },
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
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
      }
    ],
    eslint: {
      configFile: '.eslintrc'
    },
    stats: {
      colors: true
    }
  },
  externals: {
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
    'react/addons': true
  },
  postcss: function() {
    return [precss, autoprefixer, cssnano];
  }
};

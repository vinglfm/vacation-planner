import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

import path, {join, resolve} from 'path';

const root = resolve(__dirname);
const src = join(root, 'src');

module.exports = {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
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
    ]
  },
  postcss: function() {
    return [precss, autoprefixer, cssnano];
  }
};

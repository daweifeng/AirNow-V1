const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './index.js',
  ],
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['react-hot-loader/webpack', 'babel-loader'],
      }, {
        test: /\.css$/, // Only .css files
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '/build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
    new ExtractTextPlugin('style.css'),
  ],
};

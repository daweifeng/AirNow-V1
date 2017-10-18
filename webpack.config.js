let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: [
    "babel-polyfill",
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
        loader: 'style!css' // Run both loaders  
      }
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: __dirname + '/build',
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}
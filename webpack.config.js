'use strict';

var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');

module.exports = {

  // Cache generated modules and chunks to improve performance for multiple incremental builds.
  // This is enabled by default in watch mode.
  cache: true,

  // Compile for usage in a browser-like environment (default)
  target: 'web',

  entry: APP_PATH, // index.js is the default load
  
  // output: {
  //  filename: 'bundle.js'
  // },

  module: {
    loaders: [
      {
        test: /.js?$/,
        include: APP_PATH,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    root: APP_PATH,
    // extensions: ['', '.js'],
    moduleDirectories: ['src']
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin(),

      new HtmlwebpackPlugin({
        inject: true,
        // template: './src/index.html'
        template: path.join(APP_PATH, 'index.html')
      }),

      // Avoid publishing files when compilation failed
      new webpack.NoErrorsPlugin()
    ],

    debug: true,

    devServer: {
      hot: true,

      //a small webpack-dev-server client entry is added to the bundle which refresh the page on change
      inline: true,

      progress: true,

      colors: true,

      historyApiFallback: true
    }
};
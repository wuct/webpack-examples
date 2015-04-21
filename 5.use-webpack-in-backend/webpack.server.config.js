var path = require('path');
var fs = require('fs');
var webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    path: path.resolve('./build/'),
    filename: 'server.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: [ 'babel-loader'] },
    ]
  },
  externals: nodeModules,
  plugins: [
    new webpack.BannerPlugin(
      'require("source-map-support").install();',
      { raw: true, entryOnly: false }),
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'sourcemap'
};

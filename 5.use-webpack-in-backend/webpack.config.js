module.exports = {
  context: __dirname,
  entry: "./entry.js",
  output: {
    path: __dirname + '/build', // __dirname is the path of this file.
    publicPath: "/", // this is where the webpack-dev-server serves files.
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ]
  },
  // devtool: 'eval-source-map' // do not use this in production.
};
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname, // __dirname is the path of this file.
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader'] },
    ]
  }
};
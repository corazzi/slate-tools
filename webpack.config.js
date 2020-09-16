const path = require('path');

const outputDir = path.resolve('dist/assets');

module.exports = {
  entry: path.resolve('src/scripts/es6'),
  output: {
    path: outputDir,
    filename: 'es6.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
};

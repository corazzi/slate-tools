const path = require('path');

const outputDir = path.resolve(__dirname, 'dist/assets');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/es6'),
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

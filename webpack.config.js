const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle.js'),
  },
};

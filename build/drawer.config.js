const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
    ],
  },
  entry: './src/CheckListDrawer/index.ts',
  output: {
    filename: 'drawer.js',
    path: path.resolve(__dirname, '../dist'),
  },
};

const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app/app.tsx'),
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../dist'),
  },
  devtool: 'source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
    ],
    // loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
  },
  plugins: [new HWP({ template: path.join(__dirname, '../src/app/index.html') })],
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
};

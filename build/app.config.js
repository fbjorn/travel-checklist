const path = require ('path');
const HWP = require ('html-webpack-plugin');

module.exports = {
  entry: path.join (__dirname, '../src/app/app.tsx'),
  output: {
    filename: 'app.js',
    path: path.join (__dirname, '../dist'),
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
        test: /\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: [
          'file-loader?name=[name].[ext]?[hash]',
          {
            loader: 'image-webpack-loader',
            options: {
              enforce: 'pre',
              // bypassOnDebug: true, // webpack@1.x
              // disable: true, // webpack@2.x and newer
            },
          },
        ],
      },

      // the following 3 rules handle font extraction
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].  [ext]&mimetype=application/font-otf',
      },
    ],
    // loaders: [{ test: /\.css$/, loader: 'style-loader!css-loader' }],
  },
  plugins: [
    new HWP ({template: path.join (__dirname, '../src/app/index.html')}),
  ],
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM',
  // },
};

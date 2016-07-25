var path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.ts',
      '.tsx',
      '.js'
    ]
  },
  module: {
    loaders: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'eval'
}
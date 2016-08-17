var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var stylelint = require('stylelint');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  devtool: 'source-map',

  debug: true,

  resolve: {
    root: path.resolve(__dirname),
    extensions: [
      '',
      '.ts',
      '.tsx',
      '.js',
      '.jsx'
    ]
  },

  entry: {
    app: [
      'webpack-hot-middleware/client',
      'babel-polyfill',
      './src/client.tsx',
      './src/vendor/main.ts'
    ],
  },

  output: {
    path: path.resolve('./build/public'),
    publicPath: '/public/',
    filename: 'js/[name].js',
    pathinfo: true,
  },

  module: {
    preLoaders: [
      {
        test: /\.tsx?$/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel-loader?presets[]=es2015&presets[]=react!ts-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.less$/,
        include: path.resolve('./src/app'),
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader',
          // 'postcss-loader',
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve('./src/app'),
          path.resolve('./semantic')
        ],
        loaders: [
          'style-loader',
          'css-loader?importLoaders=2&sourceMap&localIdentName=css_[local]___[hash:base64:5]',
        ]
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file?name=fonts/[hash].[ext]'
      },
      {
        test: /\.(woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[hash].[ext]'
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[hash].[ext]'
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[hash].[ext]'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url?limit=1000&name=images/[hash].[ext]'
      }
    ]
  },
  postcss: function () {
    return [
      stylelint({ files: '../../src/app/*.css' }),
      postcssNext(),
      postcssAssets({ relative: true })
    ];
  },

  tslint: {
    failOnHint: true
  },

  plugins: [
     new ManifestPlugin({
      fileName: '../manifest.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
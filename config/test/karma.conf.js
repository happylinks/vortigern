var path = require('path');
var webpack = require('webpack');
var postcssAssets = require('postcss-assets');
var postcssNext = require('postcss-cssnext');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var appConfig = require('../main');

module.exports = function (config) {
  var conf = {
    frameworks: ['mocha', 'chai', 'es6-shim'],
    browsers: ['PhantomJS'],
    files: [
      '../../node_modules/babel-polyfill/dist/polyfill.js',
      '../webpack/test.js'
    ],
    preprocessors: {
      '../src/**/*.ts': ['coverage'],
      '../src/**/*.tsx': ['coverage'],
      '../webpack/test.js': ['webpack']
    },
    plugins: ['karma-*'],
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: '../../coverage',
      reporters: []
    },
    hostname: appConfig.host,
    port: appConfig.karmaPort,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        root: path.resolve(__dirname),
        modulesDirectories: [
          '../../src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js', '.ts', '.tsx', '.jsx']
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
            test: /\.tsx?$/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react!ts-loader'
          },
          {
            test: /\.(jpe?g|png|gif)$/i,
            loader: 'url?limit=1000&name=images/[hash].[ext]'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.css$/,
            include: [
              path.resolve('./src/app'),
              path.resolve('./semantic')
            ],
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader?importLoaders=2&sourceMap&localIdentName=css_[local]___[hash:base64:5]',
            })
          },
          {
            test: /\.less$/,
            include: path.resolve('./src/app'),
            loader: ExtractTextPlugin.extract({
              fallbackLoader: 'style-loader',
              loader: 'css-loader!less-loader',
            })
          },
        ],
        postLoaders: [
          {
            test: /\.tsx?$/,
            loader: 'istanbul-instrumenter-loader',
            include: path.resolve('./src/app')
          }
        ]
      },
      postcss: function () {
        return [
          postcssNext(),
          postcssAssets({ relative: true })
        ];
      },
      tslint: {
        failOnHint: true
      },
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
      plugins: [
        new webpack.IgnorePlugin(/^fs$/),
        new webpack.IgnorePlugin(/^react\/addons$/),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('styles.css'),
        new webpack.DefinePlugin({
          'process.env': {
            BROWSER: JSON.stringify(true),
            NODE_ENV: JSON.stringify('development')
          }
        })
      ]
    },
    webpackServer: {
      noInfo: true
    }
  };

  if (process.env.NODE_ENV === 'ci') {
    conf.autoWatch = false;
    conf.singleRun = true;
    conf.browsers.push('Firefox');
    conf.coverageReporter.reporters.push({ type: 'lcov', subdir: '.' });
  } else {
    conf.coverageReporter.reporters.push({ type: 'html', subdir: 'html' });
    conf.browsers.push('Chrome');
  }

  config.set(conf);
};

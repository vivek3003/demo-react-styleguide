const autoprefixer = require('autoprefixer');


module.exports = {
  resolveLoader: {
    moduleExtensions: ['-loader'],
  },
  module: {
    rules: [{
      test: /\.scss$/,
      exclude: /(node_modules)/,
      use: [
        'style',
        'css',
        {
          loader: 'postcss',
          options: {
            plugins: [autoprefixer({ browsers: ['> 1%', 'last 2 versions'] })],
          },
        },
        {
          loader: 'sass',
          options: {
            includePaths: ['/scss/'],
          },
        },
      ],
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: [
        {
          loader: 'babel',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-runtime', 'lodash'],
          },
        },
      ],
    }],
  },
  externals: {
    // don't bundle the 'jquery' npm package with our bundle.js
    jquery: 'jQuery',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

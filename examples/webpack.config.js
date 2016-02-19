const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    app: `./entry.js`,
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: 'chunk.[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.svg$/,
        loaders: [
          '../lib/index.js'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].js'
    })
  ]
};
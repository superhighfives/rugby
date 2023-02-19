var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './lib/client.js',
  output: {
    path: './public/assets/js/',
    filename: 'main.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ]
}

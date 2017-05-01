const config = require('./webpack.config');
const paths = require('./paths');

config.devServer = {
  headers: { 'Access-Control-Allow-Origin': '*' },
  // publicPath: path + '/',
  contentBase: paths.appBuild,
  stats: 'errors-only',
  historyApiFallback: true,
  host: paths.webpackHost,
  port: paths.webpackPort
};

module.exports = config;

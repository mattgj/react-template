const path = require('path');

function resolvePath(relativePath) {
  return path.resolve(__dirname, relativePath);
}

module.exports = {
  appSrc: resolvePath('src'),
  appBuild: resolvePath('build'),
  appNodeModules: resolvePath('node_modules'),
  webpackHost: process.env._WEBPACK_HOST || '0.0.0.0',
  webpackPort: process.env.WEBPACK_PORT || 8082
};

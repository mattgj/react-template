const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const isProd = JSON.stringify(process.env.NODE_ENV) === '"production"';

let config = {
  bail: true,
  devtool: isProd ? 'nosources-source-map' : 'eval-source-map',
  entry: {
    app: [path.join(paths.appSrc, 'client')],
  },
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: [paths.appSrc, paths.appNodeModules],
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[hash:base64:8]&-autoprefixer',
        ],
      },
      {
        test: /\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        use: 'file-loader?name=static/media/[name].[ext]',
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules],
        use: 'url-loader?limit=10000&name=static/media/[name].[hash:8].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin(),
  ],
};

if (isProd) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },

      mangle: {
        screw_ie8: true,
      },

      output: {
        comments: false,
        screw_ie8: true,
      },

      sourceMap: true,
    })
  );
} else {
  config.entry.app.unshift('react-hot-loader/patch');
  config.plugins.push(new webpack.NamedModulesPlugin());
}

module.exports = config;

process.env.NODE_ENV = "production";

const webpack = require("webpack"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  es3ifyPlugin = require("es3ify-webpack-plugin"),
  merge = require("webpack-merge"),
  baseWebpackConfig = require("./webpack.base.config"),
  utils = require("./utils");

const assetsPath = utils.assetsPath;

const mergedConfig = merge(baseWebpackConfig, {
  output: {
    filename: assetsPath("js/[name].js"),
  },
  plugins: [
    new es3ifyPlugin(),
    new ExtractTextPlugin(assetsPath("./css/[name].css")),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      output: { keep_quoted_props: true },
      compress: { properties: false, drop_console: true },
      comments: false,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
      },
    }),
  ],
});

// console.log(mergedConfig)
module.exports = mergedConfig;

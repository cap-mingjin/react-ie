process.env.NODE_ENV = "dev";

const webpack = require("webpack"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  es3ifyPlugin = require("es3ify-webpack-plugin"),
  merge = require("webpack-merge"),
  baseWebpackConfig = require("./webpack.base.config"),
  webConfig = require("../web.config");

const mergedConfig = merge(baseWebpackConfig, {
  plugins: [
    new es3ifyPlugin(),
    new ExtractTextPlugin("./css/[name].css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"dev"',
      },
    }),
  ],
  devServer: webConfig.dev.devServer,
  devtool: "source-map",
});

module.exports = mergedConfig;

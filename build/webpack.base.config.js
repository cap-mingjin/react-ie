const webpack = require("webpack"),
  HtmlWebpackPlugin = require("html-webpack-plugin"),
  ExtractTextPlugin = require("extract-text-webpack-plugin"),
  autoprefixer = require("autoprefixer"),
  webConfig = require("../web.config"),
  CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
  utils = require("./utils");

let entry = { Vendor: ["babel-polyfill", "react"] };
let plugins = [];

let entryList = utils.getEntries();
let commonChunks = [];

for (const key in entryList) {
  if (entryList.hasOwnProperty(key)) {
    const item = entryList[key];

    commonChunks.push(item.chunk);
    entry[key] = item.js;
    plugins.push(
      new HtmlWebpackPlugin({
        filename: item.chunk + ".html",
        template: item.html,
        hash: true,
        chunks: ["Vendor", "Common", item.chunk],
        title: item.chunk,
        xhtml: true,
      })
    );
  }
}

plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: "Common",
    chunks: commonChunks,
    filename: "common.bundle.js",
    minChunks: 2,
    // children: true,
    // (select all children of chosen chunks)
  })
);
plugins.push(
  new CommonsChunkPlugin({
    name: "Vendor",
    chunks: ["Common"],
    // filename: "vendor.js",
    // (Give the chunk a different name)

    minChunks: Infinity,
    // (with more entries, this ensures that no other module
    // goes into the vendor chunk)
  })
);
module.exports = {
  // entry: {
  //   polyfill: "babel-polyfill",
  //   index: "./src/Pages/Index/index.js",
  // },
  entry: entry,
  output: {
    path: webConfig.build.assetsRoot,
    filename: "js/[name].js",
    publicPath:
      process.env.NODE_ENV == "production"
        ? webConfig.build.assetsPublicPath
        : webConfig.dev.assetsPublicPath,
    chunkFilename: "[name].js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      react: "anujs/dist/ReactIE.js",
      "react-dom": "anujs/dist/ReactIE.js",
      "prop-types": "anujs/lib/ReactPropTypes",
      devtools: "anujs/lib/devtools",
      "create-react-class": "anujs/lib/createClass",
    },
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)(\?.*$|$)/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      // {
      //   test: /\.(png|jpg|gif|bmp|svg|swf)(\?.*$|$)/,
      //   loader: "url?limit=2048&name=img/[name].[ext]",
      // },
      {
        test: /\.(png|jpg|gif|bmp|svg|swf)(\?.*$|$)/,
        loader: "url-loader",
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css?modules=true&sourceMap=false!postcss"
        ),
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css?modules=true&sourceMap=false!postcss!less",
          { publicPath: "./" }
        ),
      },
    ],
    postLoaders: [],
  },
  postcss: function () {
    return [autoprefixer];
  },
  plugins: plugins,
};

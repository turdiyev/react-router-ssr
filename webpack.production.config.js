const path = require("path")
const dist = path.join(__dirname, "dist")
const webpack = require("webpack")
const WebpackCleanupPlugin = require("webpack-cleanup-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const StatsPlugin = require("stats-webpack-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = [
  {
    name: "client",
    target: "web",
    entry: "./src/client.js",
    output: {
      path: path.join(__dirname, "static"),
      filename: "client.js",
      publicPath: "/static/"
    },
    resolve: {
      extensions: [".js", ".ts"]
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[hash:base64:10]",
                sourceMap: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        mangle: true,
        sourcemap: false,
        debug: false,
        minimize: true,
        compress: {
          warnings: false,
          screw_ie8: true,
          drop_console: true,
          drop_debugger: true,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true
        }
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  },
  {
    name: "server",
    target: "node",
    entry: "./src/server.js",
    output: {
      path: path.join(__dirname, "static"),
      filename: "server.js",
      libraryTarget: "commonjs2",
      publicPath: "/static/"
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".ts"]
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /(node_modules\/)/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: "isomorphic-style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  importLoaders: 1,
                  localIdentName: "[hash:base64:10]",
                  sourceMap: true
                }
              },
              {
                loader: "sass-loader"
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "styles.css",
        allChunks: true
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } }
      }),
      new StatsPlugin("stats.json", {
        chunkModules: true,
        modules: true,
        chunks: true,
        exclude: [/node_modules[\\\/]react/]
      })
    ]
  }
]

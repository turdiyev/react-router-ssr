const path = require("path")

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
                localIdentName: "[name]__[local]___[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    }
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
          use: [
            {
              loader: "isomorphic-style-loader"
            },
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: "[name]__[local]___[hash:base64:5]",
                sourceMap: true
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        }
      ]
    }
  }
]

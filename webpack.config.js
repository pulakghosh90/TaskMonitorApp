var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "public/js");
var APP_DIR = path.resolve(__dirname, "src");
var filename = "bundle.js";

module.exports = {
    entry: APP_DIR + "/app/App.jsx",
    output: {
        path: BUILD_DIR,
        filename: filename
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: filename + ".map"
        })
    ]
}
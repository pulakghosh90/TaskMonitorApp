var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "public/js");
var APP_DIR = path.resolve(__dirname, "src");

var alias = {};

module.exports = {
    entry: APP_DIR + "/app/App.jsx",
    output: {
        path: BUILD_DIR,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: APP_DIR,
        alias: alias
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    }
}
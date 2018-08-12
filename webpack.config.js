const webpack = require("webpack");
const path = require("path");
var glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production'

let config = {
    entry: {
        "styles": glob.sync("./src/styles/*.scss"),
        "scripts": glob.sync("./src/scripts/*.js")
    },
    output: {
        path: path.resolve(__dirname, "./public"),
        filename: "[name].js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: false
    },
    devtool: "eval-source-map"
};

module.exports = config;
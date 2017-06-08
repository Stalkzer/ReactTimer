var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery:"jquery"
        })
        //new UglifyJSPlugin()
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        alias: {
            Main:             path.resolve(__dirname, "app/components/Main"),
            Navigation:       path.resolve(__dirname, "app/components/Navigation"),
            Timer:            path.resolve(__dirname, "app/components/Timer"),
            Countdown:        path.resolve(__dirname, "app/components/Countdown"),
            applicationStyles:path.resolve(__dirname, "app/styles/app.scss")

        },
        extensions: [".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                loader: "babel-loader",
                query: {
                    presets: ["react","es2015","stage-0"]
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "inline-source-map"
};
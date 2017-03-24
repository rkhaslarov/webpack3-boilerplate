var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    context: __dirname + "/app",
    entry: "./source/app.js",
    output: {
        path: __dirname + "/app/build",
        filename: "bundle.js",
        publicPath: 'assets/'
    },
    watch: true,
    module: {
        rules: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}) },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=50000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test: /\.(png|jpg)$/, loader: "url-loader" },
            { test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'less-loader']})},
            { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader', query: { presets: ['es2015'],  plugins: ['transform-class-properties'] }}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery:"jquery"
        }),
        new ExtractTextPlugin('bundle.css'),
        // new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: 'app',
        port: 9000,
        // hot: true,
        watchContentBase: true,
        // inline: true
    },
}
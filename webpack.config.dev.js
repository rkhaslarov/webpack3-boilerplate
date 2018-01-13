const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    context: __dirname + "/app",
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        "./src/app.js"
    ],
    output: {
        path: __dirname + "/app/dist",
        filename: "bundle.js",
        publicPath: 'assets/'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watch: true,
    module: {
        rules: [
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader:"url-loader?prefix=font/&limit=50000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            { test: /\.(png|jpg)$/, exclude: /node_modules/, loader: "url-loader" },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
            { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jquery: "jquery",
            "window.jQuery": "jquery",
            jQuery:"jquery"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devServer: {
        stats: 'errors-only',
        contentBase: 'app',
        port: 9000,
        hot: true,
        watchContentBase: true,
        inline: true
    },
}

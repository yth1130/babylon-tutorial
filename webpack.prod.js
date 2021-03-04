const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                // exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist')
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     // template: 'template.html',
        //     // filename: 'index.html',
        //     // inject: 'body',
        //     minify: {
        //         collapseWhitespace: true,
        //         useShortDoctype: true,
        //     }
        // }),
        // new CompressionPlugin({
        //     // algorithm: "gzip",
        //     algorithm: "brotliCompress",
        // }),
    ],
    optimization: {
        minimize: true,
    },
    performance: {
        hints: false
    }
};
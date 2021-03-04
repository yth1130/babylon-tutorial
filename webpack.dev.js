const path = require('path');
// var compression = require('compression');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        hot: true,
        // before(app) {
        //     app.use(compression({}));
        //     app.use(devMiddleware);
        // },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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

    ],
    performance: {
        hints: false
    },
};
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/v1/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'sdk.js',
        library: {
            name: 'YaseerFormSDK',
            type: 'umd',
        },
        globalObject: 'this',
        clean: true
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    optimization: {
        minimize: false,
    },
};

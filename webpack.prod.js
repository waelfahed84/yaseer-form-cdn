const { merge } = require('webpack-merge');
const base = require('./webpack.config');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    output: {
        filename: 'sdk.min.js',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
});
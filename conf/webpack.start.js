const webpack = require('webpack');
const commonConfig = require('./webpack.js');
const webpackMerge = require('webpack-merge');
const path = require('path');

module.exports = webpackMerge(commonConfig, {
    cache: true,
    devtool: 'eval-source-map',
    target: 'web',
    entry: {
        'demo': [path.resolve('src/demo/index.tsx')],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'NODE_PATH': 'src/demo'
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        inline: true,
        port: 3333,
        disableHostCheck: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 300
        }
    },
});

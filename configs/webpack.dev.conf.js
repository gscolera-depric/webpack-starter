let merge = require('webpack-merge');
let webpack = require('webpack');
let baseWebpackConfig = require('./webpack.base.conf');

let devWebpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    { loader: 'style-loader'},
                    { loader: 'css-loader', options: { sourceMap: true }},
                    { loader: 'sass-loader', options: { sourceMap: true }}
                ]
            }
        ]
    },  
    devServer: {
        contentBase: baseWebpackConfig.externals.route.dst,
        overlay: true, open: true, hot: true
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ]
})

module.exports = new Promise((resolve, reject) => 
    resolve(devWebpackConfig))
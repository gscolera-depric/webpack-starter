let merge = require('webpack-merge');
let baseWebpackConfig = require('./webpack.base.conf');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let prodWebpackConfig = merge(baseWebpackConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader', options: {config: {path: './configs/postcss.config.js'}}},
                    { loader: 'sass-loader'}
                ]
            }
        ]
    },  
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css'
        })
    ]
})

module.exports = new Promise((resolve, reject) => 
    resolve(prodWebpackConfig))
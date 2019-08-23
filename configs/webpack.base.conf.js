let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require("copy-webpack-plugin");

let route = {
    dst: path.resolve(__dirname, '../public'),
    src: path.resolve(__dirname, '../src'),
}

let conf = {
    entry: {
		app: route.src
	},
    output: {
        filename: 'js/main.js',
        path: route.dst,
		publicPath: '/'
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]' }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: `${route.src}/index.html`,
            filename: './index.html',
			hash: false
        }),
        new CopyWebpackPlugin([
           { from: `${route.src}/assets`, to: `${route.dst}/assets` }
        ])
    ],
    externals: {
        route: route
    }
}

module.exports = conf;
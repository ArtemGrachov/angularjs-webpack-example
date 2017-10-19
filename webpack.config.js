const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: 'bundle.css'
})

const PATHS = {
    app: path.resolve(__dirname, 'app'),
    dist: path.resolve(__dirname, 'dist')
}

module.exports = {
    context: PATHS.app,
    entry: './app.module.js',
    output: {
        path: PATHS.dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                        plugins: [
                            // 'transform-runtime',
                            'angularjs-annotate'
                        ]
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(['css-loader'])
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: './assets/'
                    }
                }]
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract(['css-loader', {
                    loader: 'sass-loader',
                    options: {
                        data: '@import "./variables";',
                        includePaths: [
                            path.resolve(__dirname, './app/sass')
                        ]
                    }
                }])
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\/js$/,
                use: ['source-map-loader'],
                enforce: 'pre'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        extractCSS,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        // new ngAnnotatePlugin({
        //     add: true
        // })
    ]
}
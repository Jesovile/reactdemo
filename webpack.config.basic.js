const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    cache: true,
    entry: path.resolve(__dirname, './src/index.tsx'),
    target: 'web',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        modules: [path.join(__dirname, './src'), 'node_modules', path.join(__dirname, '.')],
        extensions: ['.ts', '.tsx', '.js'],
        mainFields: ['browser', 'module', 'main']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                test: /\.svg|eot|ttf|woff|woff2|ico|png|gif|jpg($|\?)/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images'
                },
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, './index.html')
            }
        ),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise-promise'
        }),
        new ExtractTextPlugin({filename: '[name].css'}),
    ]
};
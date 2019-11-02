const baseConfig = require('./webpack.config.basic.js');
const config = baseConfig;

config.devtool = 'source-map';
config.mode = 'development';
config.devServer = {
    historyApiFallback: true,
    port: 7000,
    publicPath: '/',
};

module.exports = config;
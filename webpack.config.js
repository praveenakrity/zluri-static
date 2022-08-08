const DotenvWebpackPlugin = require("dotenv-webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const webpack = require("webpack")


module.exports = {
    mode: 'development',
    entry: {
       main: path.resolve(__dirname,'src/tokenStore.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'./staticpage.html'),
            filename: 'static.html'
        }),
        new DotenvWebpackPlugin()
    ],
    
}

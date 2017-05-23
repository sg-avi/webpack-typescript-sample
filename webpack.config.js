var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/scripts/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: "ts-loader"
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            },
            {
                test: /\.less$/,
                loader: "css-loader!less-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'MyApp!',
            template: 'app/index.ejs',
            filename: 'index.html',
            favicon: 'favicon.ico'
        })
    ],
    resolve: {
        extensions: [ '*', '.ts', '.js', '.less', '.css', '.html']
    },
    devtool: 'inline-source-map',
};

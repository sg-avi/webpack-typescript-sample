var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/scripts/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
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
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
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
        extensions: ['*', '.ts', '.js', '.less', '.css', '.html']
    },
    devtool: 'source-map',
};

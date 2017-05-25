let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let isDevelopmentMode = !(require('yargs').argv.p || false);

console.log(`isDevelopmentMode = ${isDevelopmentMode}`)

module.exports = {
    entry: './app/scripts/main.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        pathinfo: isDevelopmentMode
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
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
        extensions: ['*', '.ts', '.js', '.less', '.css', '.html'],
        modules: [path.resolve(__dirname, "app/scripts"), "node_modules"],
        alias: {
            config: getConfigPath()
        }
    },
    devtool: 'source-map',
};

function getConfigPath() {
    let mode = "dev";

    if (!isDevelopmentMode) {
        mode = "prod";
    }

    return path.resolve(__dirname, 'app', 'config', `${mode}.json`);
}
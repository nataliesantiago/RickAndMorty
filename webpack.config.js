var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'app/js/main.js'),    
    devServer: {
        contentBase: 'app',
        open: true,
        watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin( {
            title: 'Prueba técnica Natalie Santiago',
            template: 'app/html/index.html',
            filename: 'index.html',
            inlineSource: '.(js|css)$'
        }),
        new MiniCSSExtractPlugin({
            filename: "styles.css"
        }), 
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};
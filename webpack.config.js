const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
const basePath = path.resolve(__dirname, "dist");
const ASSET_PATH = process.env.ASSET_PATH || 'assets';

let plugins = [
    new MiniCssExtractPlugin({
        filename: "[name].[hash].css"
    }),
    new HtmlWebpackPlugin({
        template: "./index.html"
    }),
    new webpack.DefinePlugin({
        'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
]

const devPlugins = [
    new webpack.HotModuleReplacementPlugin()
]

if (devMode) {
    plugins.concat(devPlugins);
}

const config = {
    entry: [
        "./src/index.ts",
        "./css/custom.css"
    ],
    resolve: {
        extensions: ['.ts', '.js', '']
    },
    output: {
        filename: "main.[hash].js",
        path: basePath,
    },
    devtool: devMode ? "eval-source-map" : "none",
    plugins,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: "css-loader",
                        options: { sourceMap: devMode }
                    },
                ]
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2|svg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "./fonts/",
                        name: "[name].[ext]"
                    }
                }]
            }
        ]
    },
    devServer: {
        port: 8080,
        hot: true
    }
}

module.exports = config;
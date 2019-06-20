// webpack.config.js

const path = require("path");
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env)

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge(
        {
            mode,
            entry: "./src/index.js",
            devServer: {
                hot: true,
                open: true
            },
            output: {
                publicPath: "/",
                path: path.resolve(__dirname, "build"),
                filename: "bundled.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(png|jpg|jpeg|svg|gif|ico)$/,
                        use: [
                          'file-loader'
                        ]
                      },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    },
                    {
                        test: /\.css$/,
                        use: [
                          'style-loader',
                          'css-loader'
                        ]
                      },
                      {
                        test: /\.(woff|woff2|eot|ttf|otf)$/,
                        use: [
                          'file-loader'
                        ]
                      },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: "./public/index.html"
                }),
                new webpack.HotModuleReplacementPlugin()
            ]
        },
        modeConfiguration(mode)
    )
}

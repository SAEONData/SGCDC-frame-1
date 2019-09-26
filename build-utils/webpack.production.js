// build_utils/webpack.production.js

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

module.exports = () => ({
	devtool: "nosource-source-map",
	output: {
		filename: "production.js"
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
        chunkFilter: (chunk) => {
          if (chunk.name === 'config') {
            return false;
          }
    
          return true;
        },
		}),

		new OptimizeCSSAssetsPlugin({})
		],
	},
	module: {
		rules: [
			{
				test:/\.sa?css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	},
	plugins: [new MiniCssExtractPlugin()]
})

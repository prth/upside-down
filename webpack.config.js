let webpack = require('webpack')
let path = require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')

let SOURCE_DIR = path.resolve(__dirname, 'src')
let BUILD_DIR = path.resolve(__dirname, 'build')

module.exports = {
	entry: {
		app: [SOURCE_DIR + '/js/app.js', SOURCE_DIR + '/sass/app.scss'],
	},

	devtool: 'eval',

	output: {
		path: BUILD_DIR,
		filename: '[name].js',
		publicPath: '/build/'
	},

	devServer: {
		contentBase: path.join(__dirname, "/"),
		port: 9000,
		publicPath: "/build/",
		host: "0.0.0.0",
	},

	module: {
		rules: [
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('app.css')
	]
}

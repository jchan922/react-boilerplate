const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	// entry point of app
	entry: {
		main: path.resolve(__dirname, '../src/index.js'),
	},
	output: {
		// put output of bundling process here
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',		// use babel-loader to transpile them
					'eslint-loader'		// use eslint to lint files
				],
			},
			{
				test: /\.(scss|css)$/,
				use: [
					'style-loader',		// inject styles into DOM
					'css-loader',			// turn css into js
					'sass-loader'			// turn sass into css
				],
			},
			// Images
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			// Fonts and SVGs
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Webpack Boilerplate',
			template: path.resolve(__dirname, '../src/index.html'),
		}),
		new MiniCssExtractPlugin(),
	]
};

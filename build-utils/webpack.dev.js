const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: path.resolve(__dirname, '../dist'),
		open: true,
		compress: true,
		hot: true,
		port: 8080,
	},
};

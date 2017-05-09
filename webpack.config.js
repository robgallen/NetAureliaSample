var path = require('path');
var webpack = require('webpack');
const { AureliaPlugin } = require("aurelia-webpack-plugin");
const bundleOutputDir = './wwwroot/dist';

module.exports = (env) => {
	const isDevBuild = !(env && env.prod);

	return [{
		stats: { modules: false },
		entry: { 'app': 'aurelia-bootstrapper' },
		resolve: {
			extensions: ['.js', '.ts'],
			modules: ['src', 'node_modules']
		},
		output: {
			path: path.resolve(bundleOutputDir),
			publicPath: '/dist/',
			filename: '[name].js'
		},
		module: {
			loaders: [
				{ test: /\.ts$/i, include: /src/, use: 'ts-loader?silent=true' },
				{ test: /\.html$/i, use: 'html-loader' },
				{ test: /\.css$/i, use: isDevBuild ? 'css-loader' : 'css-loader?minimize' },
				{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, use: 'url-loader?limit=100000' },
				{ test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, use: 'expose-loader?Promise' }
			]
		},
		plugins: [
			new webpack.DefinePlugin({ IS_DEV_BUILD: JSON.stringify(isDevBuild) }),
			new webpack.DllReferencePlugin({
				context: __dirname,
				manifest: require('./wwwroot/dist/vendor-manifest.json')
			}),
			new webpack.ProvidePlugin({
				'Promise': 'bluebird'
			}),
			new AureliaPlugin({ aureliaApp: 'boot' })
		].concat(isDevBuild ? [
			new webpack.SourceMapDevToolPlugin({
				filename: '[file].map', // Remove this line if you prefer inline source maps
				moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
			})
		] : [
			new webpack.optimize.UglifyJsPlugin()
		])
	}]
};

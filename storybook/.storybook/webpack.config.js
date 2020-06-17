const path = require('path');

function resolve (dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		}
	}
};

module.exports = async ({ config }) => {
	config.module.rules.push({
		test: /\.scss$/,
		use: ['style-loader', 'css-loader', 'sass-loader']
	})

	return config
}
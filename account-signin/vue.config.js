module.exports = {
	publicPath: process.env.NODE_ENV === 'development' ? '' : '/wp-content/plugins/wdg-vue-components/account-signin/dist/',
	pluginOptions: {
		i18n: {
			locale: 'fr',
			fallbackLocale: 'en',
			localeDir: 'locales',
			enableInSFC: true
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'vue$': 'vue/dist/vue.esm.js'
			}
		}
	}
}

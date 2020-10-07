module.exports = {
	// publicPath: '/wp-content/plugins/wdg-vue-components/prospect-setup/dist/',
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

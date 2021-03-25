<template>
  <div
    id="app"
	class="account-signin"
	:data-ajaxurl="sharedProps.ajaxurl"
	:data-locale="sharedProps.locale"
  	>
		<WDGHeader
			v-bind:hasTitle=false
			v-bind:langSelector=true
			v-bind:closeButton=true
			/>
		<TheScreenSignin v-if="sharedState.step === 'signin'" />
		<TheScreenConfirmation v-if="sharedState.step === 'confirmation'" />
		<WDGFooter BGColor="grey" TextColor="black" FooterStyle="account"/>
  </div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import TheScreenSignin from './components/TheScreenSignin.vue'
import TheScreenConfirmation from './components/TheScreenConfirmation.vue'
import WDGFooter from '@/../../common/src/components/WDGFooter'
const initElements = document.querySelector('#app')

export default {
  name: 'App',
  components: {
	WDGHeader,
	WDGFooter,
    TheScreenSignin,
	TheScreenConfirmation
  },
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props
		}
	},
  	created () {
		this.sharedProps.ajaxurl = initElements.dataset.ajaxurl
		this.sharedProps.locale = initElements.dataset.locale
		// Pas génial mais nécessaire pour le menu qui est chargé avant dans le store
		let tempLocale = 'fr'
		if (initElements.dataset.locale !== undefined && initElements.dataset.locale !== '') {
			if (initElements.dataset.locale.indexOf('_') > -1) {
				let splitLocale = initElements.dataset.locale.split('_')
				tempLocale = splitLocale[0]
			} else {
				tempLocale = initElements.dataset.locale
			}
		}
		i18n.locale = tempLocale
		if (i18n.locale !== 'fr') {
			// store.tabItems[0].Label = i18n.t('project-setup.tabs.MY_PROJECT')
			// store.tabItems[1].Label = i18n.t('project-setup.tabs.MY_FUNDING')
			// store.tabItems[2].Label = i18n.t('project-setup.tabs.MY_INVESTORS')
			// store.tabItems[3].Label = i18n.t('project-setup.tabs.MY_RESULT')
		}
  	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,500&display=swap');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css');
body, input, select, button {
	font-family: Poppins,Trebuchet MS,sans-serif;
	color: #333;
}
div.account-signin {
	max-width: 1024px;
	margin: 0px auto;
}
</style>

<template>
  <div
    id="app"
	class="account-signin"
	:data-ajaxurl="sharedProps.ajaxurl"
	:data-locale="sharedProps.locale"
  	>
    <link rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
		<WDGHeader
		  v-bind:hasTitle=false
		  v-bind:langSelector=true
		  v-bind:closeButton=true
		  v-bind:backButtonVisible="sharedState.step === 'confirmation' || sharedState.step === 'forgotten-pass'"
		  :onBack="onBackEvent"
		  />
		<TheScreenSignin v-if="sharedState.step === 'signin'" />
		<TheScreenConfirmation v-if="sharedState.step === 'confirmation'" />
		<TheScreenForgottenPassword v-if="sharedState.step === 'forgotten-pass'" :context="sharedState.context" />
		<WDGFooter BGColor="grey" TextColor="black" FooterStyle="account"/>
  </div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import TheScreenSignin from './components/screen-signin/TheScreenSignin.vue'
import TheScreenConfirmation from './components/TheScreenConfirmation.vue'
import TheScreenForgottenPassword from './components/screen-lost-password/TheScreenForgottenPassword.vue'
import WDGFooter from '@/../../common/src/components/WDGFooter'
const initElements = document.querySelector('#app')

export default {
	name: 'App',
	components: {
		WDGHeader,
		WDGFooter,
		TheScreenSignin,
		TheScreenConfirmation,
		TheScreenForgottenPassword
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props
		}
	},
  	created () {
		this.sharedState.sessionUID = Date.now() + Math.floor(Math.random() * 100000000)
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
		window.addEventListener('hashchange', () => this.onHashChangedEvent())
	},
	methods: {
		onHashChangedEvent () {
			let sNewLocation = location.hash
			if (sNewLocation === '') {
				sNewLocation = 'signin'
			} else {
				sNewLocation = sNewLocation.substring(1)
			}
			store.changeStepFromHash(sNewLocation)
		},
		onBackEvent () {
			store.changeStep('signin')
		}
	}
}
</script>

<style>
body, input, select, button {
	font-family: Arial, Helvetica, sans-serif;
	color: #333;
}
div.account-signin {
	max-width: 1024px;
	margin: 0px auto;
}
body {
	font-size: 16px;
}
</style>

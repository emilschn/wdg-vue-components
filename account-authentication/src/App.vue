<template>
	<div
	  id="app"
	  class="account-authentication"
	  :data-ajaxurl="sharedProps.ajaxurl"
	  :data-locale="sharedProps.locale"
	  >
		<WDGHeader
		  v-bind:hasTitle=false
		  v-bind:langSelector=true
		  v-bind:closeButton=true
		  />

		<TheScreenInvestorType v-if="sharedState.step === 'usertype'" :onConfirmUserType="onConfirmUserTypeEvent" />
		<TheScreenInvestorUserInfo v-if="sharedState.step === 'userinfo'" :onConfirmUserInfo="onConfirmUserInfoEvent" />
		<TheScreenInvestorOrganizationInfo v-if="sharedState.step === 'orgainfo'" />

		<WDGFooter BGColor="grey" TextColor="black" FooterStyle="account"/>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGFooter from '@/../../common/src/components/WDGFooter'
import TheScreenInvestorType from './components/screen-investor-type/TheScreenInvestorType.vue'
import TheScreenInvestorUserInfo from './components/screen-user-info/TheScreenInvestorUserInfo.vue'
import TheScreenInvestorOrganizationInfo from './components/screen-organization-info/TheScreenInvestorOrganizationInfo.vue'
const initElements = document.querySelector('#app')

export default {
	name: 'App',
	components: {
		WDGHeader,
		WDGFooter,
		TheScreenInvestorType,
		TheScreenInvestorUserInfo,
		TheScreenInvestorOrganizationInfo
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
		window.addEventListener('hashchange', () => this.onHashChangedEvent())
	},
	methods: {
		onHashChangedEvent () {
			let sNewLocation = location.hash
			if (sNewLocation === '') {
				sNewLocation = 'usertype'
			} else {
				sNewLocation = sNewLocation.substring(1)
			}
			store.changeStepFromHash(sNewLocation)
		},
		onConfirmUserTypeEvent (userNeedOrga) {
			this.sharedState.userNeedOrga = ( userNeedOrga == '1' )
			store.changeStep( 'userinfo' )
		},
		onConfirmUserInfoEvent () {
			if (this.sharedState.userNeedOrga) {
				store.changeStep( 'orgainfo' )
			}
		}
	}
}
</script>

<style>
body, input, select, button {
	font-family: Arial, Helvetica, sans-serif;
	color: #333;
}
div.account-authentication {
	max-width: 1024px;
	margin: 0px auto;
}
body {
	font-size: 16px;
}
</style>

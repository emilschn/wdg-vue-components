<template>
	<div
	  id="app"
	  class="account-authentication"
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
		  />

		<WDGTabs
		  v-if="canShowTabs"
		  :tabItems="currentTabItems"
		  :currentTab="currentStep"
		  :clickEvent="onChangeTabEvent"
		  />

		<TheScreenInvestorType v-if="sharedState.step === 'usertype'" :onConfirmUserType="onConfirmUserTypeEvent" />
		<TheScreenInvestorUserInfo v-if="sharedState.step === 'userinfo'" :onConfirmUserInfo="onConfirmUserInfoEvent" />
		<TheScreenInvestorUserInfoComplete v-if="sharedState.step === 'userinfocomplete'" :onContinue="onConfirmInfoCompleteEvent" />
		<TheScreenInvestorOrganizationInfo v-if="sharedState.step === 'orgainfo'" :onContinue="onConfirmOrgaInfoEvent" />
		<TheScreenInvestorOrganizationInfoComplete v-if="sharedState.step === 'orgainfocomplete'" :onContinue="onConfirmInfoCompleteEvent" />
		<TheScreenInvestorUserDocuments v-if="sharedState.step === 'userdocuments'" :onUploadDoc="onUploadDocEvent" />

		<WDGFooter BGColor="grey" TextColor="black" FooterStyle="account"/>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGTabs from '@/../../common/src/components/WDGTabs'
import WDGFooter from '@/../../common/src/components/WDGFooter'
import TheScreenInvestorType from './components/screen-investor-type/TheScreenInvestorType.vue'
import TheScreenInvestorUserInfo from './components/screen-user-info/TheScreenInvestorUserInfo.vue'
import TheScreenInvestorUserInfoComplete from './components/screen-user-info-complete/TheScreenInvestorUserInfoComplete.vue'
import TheScreenInvestorOrganizationInfo from './components/screen-organization-info/TheScreenInvestorOrganizationInfo.vue'
import TheScreenInvestorOrganizationInfoComplete from './components/screen-organization-info-complete/TheScreenInvestorOrganizationInfoComplete.vue'
import TheScreenInvestorUserDocuments from './components/screen-user-documents/TheScreenInvestorUserDocuments.vue'
const initElements = document.querySelector('#app')

export default {
	name: 'App',
	components: {
		WDGHeader,
		WDGTabs,
		WDGFooter,
		TheScreenInvestorType,
		TheScreenInvestorUserInfo,
		TheScreenInvestorUserInfoComplete,
		TheScreenInvestorOrganizationInfo,
		TheScreenInvestorOrganizationInfoComplete,
		TheScreenInvestorUserDocuments
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
			} else {
				store.changeStep( 'userinfocomplete' )
			}
		},
		onConfirmOrgaInfoEvent () {
			store.changeStep( 'orgainfocomplete' )
		},
		onConfirmInfoCompleteEvent () {
			store.changeStep( 'userdocuments' )
		},
		onChangeTabEvent (tabId) {
			store.changeStep(tabId)
		},
		onUploadDocEvent(docId) {
			console.log('onUploadDocEvent  ' + docId)
		}
	},
	computed: {
		canShowTabs () {
			return (this.sharedState.step !== 'usertype')
		},
		currentTabItems () {
			let tabItems = [
				{ Id: 'userinfo', Label: i18n.t('account-authentication.tabs.INFORMATION'), Index: '', Subtitle: this.sharedState.userNeedOrga ? i18n.t('account-authentication.tabs.INFORMATION_ORGANIZATION_DURATION') : i18n.t('account-authentication.tabs.INFORMATION_USER_DURATION'), Status: 'incomplete', LinkLabel: '' },
				{ Id: 'userdocuments', Label: i18n.t('account-authentication.tabs.DOCUMENTS'), Index: '', Subtitle: this.sharedState.userNeedOrga ? i18n.t('account-authentication.tabs.DOCUMENTS_ORGANIZATION_DURATION') : i18n.t('account-authentication.tabs.DOCUMENTS_USER_DURATION'), Status: 'incomplete', LinkLabel: '' },
				{ Id: 'userprofile', Label: i18n.t('account-authentication.tabs.PROFILE'), Index: '', Subtitle: this.sharedState.userNeedOrga ? i18n.t('account-authentication.tabs.PROFILE_ORGANIZATION_DURATION') : i18n.t('account-authentication.tabs.PROFILE_USER_DURATION'), Status: 'incomplete', LinkLabel: '' },
				{ Id: 'checking', Label: i18n.t('account-authentication.tabs.CHECKING'), Index: '', Subtitle: i18n.t('account-authentication.tabs.CHECKING_DURATION'), Status: 'incomplete', LinkLabel: '' }
			]
			return tabItems
		},
		currentStep () {
			let currentStep = this.sharedState.step
			switch (currentStep) {
				case 'userinfocomplete':
				case 'orgainfocomplete':
					currentStep = 'userdocuments'
					break
			}
			return currentStep
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
div.wdg-tabs span.full-size {
	text-transform: uppercase;
}
</style>

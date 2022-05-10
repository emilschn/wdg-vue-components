<template>
	<div
	  id="app"
	  class="user-investment-capacity"
	  >
		<WDGHeader
		  v-bind:langSelector=true
		  :onLangSelect="onLangSelectEvent"
		  >
			<slot slot="title">{{ $t('user-investment-capacity.TITLE') }}</slot>
		</WDGHeader>

		<TheScreenIntro v-if="sharedState.step === 'intro'" :onContinue="onScreenContinueEvent" />
		<TheScreenCapacity v-if="sharedState.step === 'capacity'" :onContinue="onScreenContinueEvent" />
		<TheScreenKnowledge v-if="sharedState.step === 'knowledge'" :onContinue="onScreenContinueEvent" />
		<TheScreenProfession v-if="sharedState.step === 'profession'" :onContinue="onScreenContinueEvent" />
		<TheScreenObjectives v-if="sharedState.step === 'objectives'" :onContinue="onScreenContinueEvent" />
		<TheScreenResult v-if="sharedState.step === 'result'" :onContinue="onScreenContinueEvent" />

		<WDGFooter :onLangSelect="onLangSelectEvent" BGColor="grey" FooterStyle="account" />
	</div>
</template>

<script>
import { store } from './store.js'
import { requests } from './requests.js'
import { routes } from '@/../../common/src/helpers/routes.js'
import i18n from '@/i18n'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGFooter from '@/../../common/src/components/WDGFooter'
import TheScreenIntro from './components/screen-intro/TheScreenIntro.vue'
import TheScreenCapacity from './components/screen-capacity/TheScreenCapacity.vue'
import TheScreenKnowledge from './components/screen-knowledge/TheScreenKnowledge.vue'
import TheScreenProfession from './components/screen-profession/TheScreenProfession.vue'
import TheScreenObjectives from './components/screen-objectives/TheScreenObjectives.vue'
import TheScreenResult from './components/screen-result/TheScreenResult.vue'
const initElements = document.querySelector('#app')

export default {
	name: 'App',
	components: {
		WDGHeader,
		WDGFooter,
		TheScreenIntro,
		TheScreenCapacity,
		TheScreenKnowledge,
		TheScreenProfession,
		TheScreenObjectives,
		TheScreenResult
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
		this.sharedProps.customajaxurl = initElements.dataset.customajaxurl
		this.sharedProps.redirecturlfr = initElements.dataset.redirecturlfr
		this.sharedProps.redirecturlen = initElements.dataset.redirecturlen

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
		this.sharedProps.locale = tempLocale
		i18n.locale = tempLocale

		routes.init('intro', store)

		requests.getUserInvestmentCapacity(this.onGetExistingDataEvent)
	},
	methods: {
		// Récupération des données existantes de l'utilisateur en cours
		onGetExistingDataEvent (responseData) {
			if (responseData.status === 'exists') {
				let data = responseData.data
				let financialDetails = JSON.parse(data.financial_details)
				this.sharedState.monthlyRevenue = financialDetails.monthlyRevenue
				this.sharedState.complementaryRevenue = financialDetails.complementaryRevenue
				this.sharedState.investmentsValue = financialDetails.investmentsValue
				this.sharedState.commitmentValue = financialDetails.commitmentValue
				this.sharedState.yearlyCapacityAmount = data.financial_result_in_cents

				let knowledgeDetails = JSON.parse(data.knowledge_details)
				for (let str in knowledgeDetails) {
					if (this.sharedState.knowledge[str] !== undefined) {
						this.sharedState.knowledge[str] = knowledgeDetails[str]
					}
				}
			}
		},
		// Ajustement de l'interface quand on change de langue
		onLangSelectEvent (sLanguage) {
			this.sharedState.language = sLanguage
			i18n.locale = sLanguage
			// this.reloadMenu()
		},
		// Clic sur Continuer dans chaque écran
		onScreenContinueEvent (sNewStep) {
			if (sNewStep === 'redirect') {
				routes.quitAndRedirect(i18n.locale)
			} else {
				routes.changeStep(sNewStep)
				if (sNewStep === 'result') {
					requests.saveUserInvestmentCapacity(this.onSavedEvent)
				}
			}
		},
		// Fin de la sauvegarde
		onSavedEvent () {
			console.log('ok')
		}
	}
}
</script>

<style>
body, input, select, button {
	font-family: 'Arial',sans-serif;
	color: #333;
}
body h1, h2, span.tab-label {
	font-family: 'Trebuchet MS', sans-serif;
	text-transform: uppercase;
}
div.user-investment-capacity {
	max-width: 1024px;
	margin: 0px auto;
}
div.loading-guid {
	margin: 80px 0px;
	text-align: center;
}
.wdg-select.natural-language select {
	background-color: #FFF;
}
</style>

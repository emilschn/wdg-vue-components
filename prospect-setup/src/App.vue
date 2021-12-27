<template>
	<div
	  id="app"
	  class="prospect-setup"
	  :data-guid="sharedState.guid"
	  :data-ajaxurl="sharedProps.ajaxurl"
	  :data-locale="sharedProps.locale"
	  >
		<WDGHeader
		  v-bind:langSelector=true
		  :onLangSelect="onLangSelectEvent"
		>
			<slot slot="title">{{ $t('project-setup.TITLE') }}</slot>
		</WDGHeader>

		<WDGTabs
		  v-if="canShowTabs"
		  :tabItems="currentTabItems"
		  :currentTab="currentStep"
		  :clickEvent="changeTab"
		  />

		<TheScreenIntro v-if="!loading && sharedState.step === 'intro'" />
		<TheScreenProjectInfos v-if="!loading && sharedState.step === 'project-infos'" />
		<TheScreenProjectFunding v-if="!loading && sharedState.step === 'project-funding'" />
		<TheScreenProjectInvestors v-if="!loading && sharedState.step === 'project-investors'" />
		<TheScreenProjectResult v-if="!loading && (sharedState.step === 'project-result' || sharedState.step === 'project-cart' || sharedState.step === 'project-payment' || sharedState.step === 'project-complete')" />

		<div class="loading-guid" v-if="loading">
			<WDGLoader v-if="loading">
			</WDGLoader>
		</div>

		<WDGFooter :onLangSelect="onLangSelectEvent" BGColor="grey" />
	</div>
</template>

<script>
import axios from 'axios'
import i18n from '@/i18n'
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGTabs from '@/../../common/src/components/WDGTabs'
import WDGLoader from '@/../../common/src/components/WDGLoader'
import TheScreenIntro from './components/screen-intro/TheScreenIntro.vue'
import TheScreenProjectInfos from './components/screen-infos/TheScreenProjectInfos.vue'
import TheScreenProjectFunding from './components/screen-funding/TheScreenProjectFunding.vue'
import TheScreenProjectInvestors from './components/screen-investors/TheScreenProjectInvestors.vue'
import TheScreenProjectResult from './components/screen-result/TheScreenProjectResult.vue'
import WDGFooter from '@/../../common/src/components/WDGFooter'
const initElements = document.querySelector('#app')

export default {
	name: 'App',
	components: {
		WDGTabs,
		WDGHeader,
		WDGFooter,
		WDGLoader,
		TheScreenIntro,
		TheScreenProjectInfos,
		TheScreenProjectFunding,
		TheScreenProjectInvestors,
		TheScreenProjectResult
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			sharedTabItems: store.tabItems,
			loading: false
		}
	},
	created () {
		this.sharedState.guid = initElements.dataset.guid
		this.sharedProps.ajaxurl = initElements.dataset.ajaxurl
		this.sharedProps.locale = initElements.dataset.locale

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
		// Ici, on garde en mémoire la langue de démarrage (initialisée par WordPress)
		this.sharedState.language = i18n.locale

		this.reloadMenu()

		if (this.sharedState.guid !== undefined) {
			this.loading = true
			let data = new FormData()
			data.append('action', 'prospect_setup_get_by_guid')
			data.append('guid', this.sharedState.guid)

			axios
				.post (this.sharedProps.ajaxurl, data)
				.then (response => {
					this.loading = false
					let responseData = response.data
					this.initWithGuid(responseData.data.metadata, responseData.data.file_list)
					store.changeStep(this.sharedState.step)
					this.loadCapacities()
				})
				.catch (error => {
					console.log(error)
				})
				.finally (() => {
					this.loading = false
				})
		} else {
			this.loadCapacities()
		}
	},
	computed: {
		canShowTabs () {
			return (!this.loading && this.sharedState.step !== 'intro')
		},
		currentTabItems () {
			return this.sharedTabItems
		},
		currentStep () {
			let result = this.sharedState.step
			if (result === 'project-cart' || result === 'project-payment' || result === 'project-complete') {
				result = 'project-result'
			}
			return result
		}
	},
	methods: {
		changeTab (tabId) {
			store.changeStep(tabId)
		},
		reloadMenu () {
			store.tabItems[0].Label = i18n.t('project-setup.tabs.MY_PROJECT')
			store.tabItems[1].Label = i18n.t('project-setup.tabs.MY_FUNDING')
			store.tabItems[2].Label = i18n.t('project-setup.tabs.MY_INVESTORS')
			store.tabItems[3].Label = i18n.t('project-setup.tabs.MY_RESULT')
			store.tabItems[3].Subtitle = i18n.t('project-setup.tabs.IN_PROGRESS')
		},
		initWithGuid (metadataStr, fileList) {
			let metadata = JSON.parse(metadataStr)

			this.sharedState.step = metadata.step
			this.sharedState.status = metadata.status
			this.sharedState.authorization = metadata.authorization
			this.sharedState.hasSaved = metadata.hasSaved
			this.sharedState.hasSentResult = metadata.hasSentResult

			this.sharedState.user.id = metadata.user.id
			this.sharedState.user.name = metadata.user.name
			this.sharedState.user.email = metadata.user.email
			this.sharedState.user.phone = metadata.user.phone

			this.sharedState.organization.type = metadata.organization.type
			this.sharedState.organization.name = metadata.organization.name
			this.sharedState.organization.description = metadata.organization.description
			this.sharedState.organization.location = metadata.organization.location
			this.sharedState.organization.amountNeeded = metadata.organization.amountNeeded
			this.sharedState.organization.sourceProspect = metadata.organization.sourceProspect
			this.sharedState.organization.sourceProspectDetails = metadata.organization.sourceProspectDetails

			this.sharedState.project.estimatedTurnover.year1 = metadata.project.estimatedTurnover.year1
			this.sharedState.project.estimatedTurnover.year2 = metadata.project.estimatedTurnover.year2
			this.sharedState.project.estimatedTurnover.year3 = metadata.project.estimatedTurnover.year3
			this.sharedState.project.estimatedTurnover.year4 = metadata.project.estimatedTurnover.year4
			this.sharedState.project.estimatedTurnover.year5 = metadata.project.estimatedTurnover.year5
			this.sharedState.project.commercialMargin = metadata.project.commercialMargin
			this.sharedState.project.amountNeeded = metadata.project.amountNeeded
			this.sharedState.project.royaltiesAmount = metadata.project.royaltiesAmount
			this.sharedState.project.isAutoFilledRoyalties = metadata.project.isAutoFilledRoyalties
			this.sharedState.project.royaltiesOK = metadata.project.royaltiesOK
			this.sharedState.project.readyToCommunicate = metadata.project.readyToCommunicate
			this.sharedState.project.circlesToCommunicate = metadata.project.circlesToCommunicate
			this.sharedState.project.chosenFormula = metadata.project.chosenFormula
			this.sharedState.project.alreadyDoneCrowdfunding = metadata.project.alreadyDoneCrowdfunding
			this.sharedState.project.needCommunicationAdvice = metadata.project.needCommunicationAdvice
			this.sharedState.project.fileComments = metadata.project.fileComments
			this.sharedState.project.acceptTerms = metadata.project.acceptTerms

			if (metadata.package !== undefined) {
				this.sharedState.package.paymentMethod = metadata.package.paymentMethod
				this.sharedState.package.paymentStatus = metadata.package.paymentStatus
				this.sharedState.package.paymentDate = metadata.package.paymentDate
				this.sharedState.package.paymentTransferedOnAccount = metadata.package.paymentTransferedOnAccount
				this.sharedState.package.bundle1.title = metadata.package.bundle1.title
				this.sharedState.package.bundle1.type = metadata.package.bundle1.type
				this.sharedState.package.bundle1.priceWithoutDiscount = metadata.package.bundle1.priceWithoutDiscount
				this.sharedState.package.bundle1.discount = metadata.package.bundle1.discount
				this.sharedState.package.bundle1.discountReason = metadata.package.bundle1.discountReason
				this.sharedState.package.bundle2.title = metadata.package.bundle2.title
				this.sharedState.package.bundle2.type = metadata.package.bundle2.type
				this.sharedState.package.bundle2.priceWithoutDiscount = metadata.package.bundle2.priceWithoutDiscount
				this.sharedState.package.bundle2.discount = metadata.package.bundle2.discount
				this.sharedState.package.bundle2.discountReason = metadata.package.bundle2.discountReason
			}

			this.sharedProps.initFileList = fileList

			// Ici on met à jour la langue en cours d'affichage suite au chargement, pour récupérer la langue précédemment utilisée
			this.sharedState.language = metadata.language
			i18n.locale = metadata.language
			this.reloadMenu()
		},
		loadCapacities () {
			if (this.sharedProps.ajaxurl === undefined || this.sharedProps.ajaxurl === '') {
				return
			}
			let data = new FormData()
			data.append('action', 'prospect_setup_load_capacities')

			axios
				.post (this.sharedProps.ajaxurl, data)
				.then (response => {
					this.loading = false
					this.sharedProps.capacities = response.data
				})
				.catch (error => {
					console.log(error)
				})
				.finally (() => {
					this.loading = false
					if (process.env.NODE_ENV === 'development') {
						this.sharedProps.capacities.edit_bundles = '1'
						this.sharedProps.capacities.enable_payment = '1'
						this.sharedProps.capacities.accept_wire_payment = '1'
					}
				})
		},
		onLangSelectEvent (sLanguage) {
			this.sharedState.language = sLanguage
			i18n.locale = sLanguage
			this.reloadMenu()
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
div.prospect-setup {
	max-width: 1024px;
	margin: 0px auto;
}
div.loading-guid {
	margin: 80px 0px;
	text-align: center;
}
</style>

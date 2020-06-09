<template>
	<div
	  id="app"
	  class="prospect-setup"
	  :data-guid="sharedState.guid"
	  :data-ajaxurl="sharedProps.ajaxurl"
	  >
		<WDGHeader>
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
		<TheScreenProjectResult v-if="!loading && sharedState.step === 'project-result'" />

		<div class="loading-guid" v-if="loading">
			<WDGLoader
			  v-if="loading"
			  type="ring"
			  color="grey"
			  >
			</WDGLoader>
		</div>

		<WDGFooter />
	</div>
</template>

<script>
import axios from 'axios'
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
				})
				.catch (error => {
					console.log(error)
				})
				.finally (() => {
					this.loading = false
				})
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
			return this.sharedState.step
		}
	},
	methods: {
		changeTab (tabId) {
			store.changeStep(tabId)
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
			this.sharedState.project.alreadyDoneCrowdfunding = metadata.project.alreadyDoneCrowdfunding
			this.sharedState.project.needCommunicationAdvice = metadata.project.needCommunicationAdvice
			this.sharedState.project.fileComments = metadata.project.fileComments

			this.sharedProps.initFileList = fileList
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,500&display=swap');
body, input, select, button {
	font-family: Poppins,Trebuchet MS,sans-serif;
	color: #333;
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

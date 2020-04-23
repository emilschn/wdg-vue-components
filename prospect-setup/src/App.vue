<template>
	<div
	  id="app"
	  class="prospect-setup"
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

		<TheScreenIntro v-if="sharedState.step === 'intro'" />
		<TheScreenProjectInfos v-if="sharedState.step === 'project-infos'" />
		<TheScreenProjectFunding v-if="sharedState.step === 'project-funding'" />
		<TheScreenProjectInvestors v-if="sharedState.step === 'project-investors'" />
		<TheScreenProjectResult v-if="sharedState.step === 'project-result'" />

		<WDGFooter />
	</div>
</template>

<script>
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGTabs from '@/../../common/src/components/WDGTabs'
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
			sharedTabItems: store.tabItems
		}
	},
	created () {
		this.sharedProps.ajaxurl = initElements.dataset.ajaxurl

		let hubspotScript = document.createElement('script')
		hubspotScript.setAttribute('src', '//js.hs-scripts.com/1860698.js')
		document.head.appendChild(hubspotScript)
	},
	computed: {
		canShowTabs () {
			return (this.sharedState.step !== 'intro')
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
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700&display=swap');
body {
	font-family: Poppins,Trebuchet MS,sans-serif;
	color: #333;
}
div.prospect-setup {
	max-width: 1024px;
	margin: 0px auto;
}
</style>

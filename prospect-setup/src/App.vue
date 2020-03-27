<template>
	<div id="app" class="prospect-setup">
		<WDGHeader>
			<slot slot="title">{{ $t('project-setup.TITLE') }}</slot>
		</WDGHeader>

		<WDGTabs :tabItems="currentTabItems" :currentTab="currentStep" v-if="canShowTabs" />

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
			sharedState: store.state
		}
	},
	computed: {
		canShowTabs () {
			return (this.sharedState.step !== 'intro')
		},
		currentTabItems () {
			return this.sharedState.tabItems
		},
		currentStep () {
			return this.sharedState.step
		}
	}
}
</script>

<style>
body {
	font-family: Trebuchet MS,sans-serif;
	color: #333;
}
div.prospect-setup {
	max-width: 1024px;
	margin: 0px auto;
}
</style>

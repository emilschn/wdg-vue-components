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

		<TheScreenIntro v-if="sharedState.step === 'intro'" />
		<TheScreenCapacity v-if="sharedState.step === 'capacity'" />
		<TheScreenKnowledge v-if="sharedState.step === 'knowledge'" />
		<TheScreenResult v-if="sharedState.step === 'result'" />

		<WDGFooter :onLangSelect="onLangSelectEvent" BGColor="grey" FooterStyle="account" />
	</div>
</template>

<script>
import { store } from './store.js'
import i18n from '@/i18n'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGFooter from '@/../../common/src/components/WDGFooter'
import TheScreenIntro from './components/screen-intro/TheScreenIntro.vue'
import TheScreenCapacity from './components/screen-capacity/TheScreenCapacity.vue'
import TheScreenKnowledge from './components/screen-knowledge/TheScreenKnowledge.vue'
import TheScreenResult from './components/screen-result/TheScreenResult.vue'

export default {
	name: 'App',
	components: {
		WDGHeader,
		WDGFooter,
		TheScreenIntro,
		TheScreenCapacity,
		TheScreenKnowledge,
		TheScreenResult
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
		onLangSelectEvent (sLanguage) {
			this.sharedState.language = sLanguage
			i18n.locale = sLanguage
			// this.reloadMenu()
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

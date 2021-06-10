<template>
	<div
	  id="app"
	  class="account-authentication"
	  >
		<WDGHeader
		  v-bind:hasTitle=false
		  v-bind:langSelector=true
		  v-bind:closeButton=true
		  />
		<TheScreenInvestorType />
		<WDGFooter BGColor="grey" TextColor="black" FooterStyle="account"/>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './store.js'
import WDGHeader from '@/../../common/src/components/WDGHeader'
import WDGFooter from '@/../../common/src/components/WDGFooter'
import TheScreenInvestorType from './components/TheScreenInvestorType.vue'
const initElements = document.querySelector('#app')

export default {
	name: 'App',
	components: {
		WDGHeader,
		WDGFooter,
		TheScreenInvestorType
	}
	/***
	 * 
	  :data-ajaxurl="sharedProps.ajaxurl"
	  :data-locale="sharedProps.locale"
	 */
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

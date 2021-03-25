<template>
  <div
    id="app"
	class="account-signin"
  	>
		<WDGHeader
			v-bind:hasTitle=false
			v-bind:langSelector=true
			v-bind:closeButton=true
			/>
		<TheScreenSignin  />
		<WDGFooter BGColor="grey" TextColor="black" FooterStyle="account"/>
  </div>
</template>

<script>
import WDGHeader from '@/../../common/src/components/WDGHeader'
import TheScreenSignin from './components/TheScreenSignin.vue'
import WDGFooter from '@/../../common/src/components/WDGFooter'

export default {
  name: 'App',
  components: {
	WDGHeader,
	WDGFooter,
    TheScreenSignin
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,500&display=swap');
@import url('https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css');
body, input, select, button {
	font-family: Poppins,Trebuchet MS,sans-serif;
	color: #333;
}
div.account-signin {
	max-width: 1024px;
	margin: 0px auto;
}
</style>

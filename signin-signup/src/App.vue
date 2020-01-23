<template>
  <div id="app">
    <Signin />
  </div>
</template>

<script>
import Signin from './components/Signin.vue'
const initElements = document.querySelector('#app')

export default {
  name: 'app',
	data () {
		return {
			ajaxurl: ''
		}
	},
	components: {
		Signin
	},
	mounted () {
		this.ajaxurl = initElements.dataset.ajaxurl
		console.log('test : ' + this.ajaxurl)
	}
}
</script>

<style>
#app {
  font-family: Trebuchet MS, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

h1 {
	text-align: center;
	margin: 0;
	font-family: Trebuchet MS,sans-serif;
	font-size: 28px;
	font-weight: 700;
	letter-spacing: .125em;
}
</style>

<template>
	<div
      id="app"
	  :data-ajaxurl="ajaxUrl"
	  >
		<transition name="fade">
			<Signin
			  v-if="(currentView === 'Signin')"
			  :ajaxUrl="ajaxUrl"
			  :switchView="switchView"
			  />
		</transition>

		<transition name="fade">
			<Signup
			  v-if="(currentView === 'Signup')"
			  :ajaxUrl="ajaxUrl"
			  :switchView="switchView"
			  />
		</transition>
	</div>
</template>

<script>
import i18n from '@/i18n'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

import { localize } from 'vee-validate'
localize({
	fr: {
		messages: {
			required: i18n.t('validations.required')
		}
	}
})

const initElements = document.querySelector('#app')

export default {
  name: 'app',
	data () {
		return {
			ajaxUrl: '',
			currentView: 'Signin'
		}
	},
	components: {
		Signin,
		Signup
	},
	created () {
		this.ajaxUrl = initElements.dataset.ajaxurl
		this.currentView = initElements.dataset.currentview
	},
	methods: {
		switchView () {
			this.currentView = (this.currentView === 'Signin') ? 'Signup' : 'Signin'
			window.scrollTo(0, 0)
		}
	}
}
</script>

<style>
body {
  font-family: Trebuchet MS, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  background: #f2f2f2;
}

h1 {
	text-align: center;
	margin: 16px 0px;
	font-family: Trebuchet MS,sans-serif;
	font-size: 28px;
	font-weight: 700;
	letter-spacing: .125em;
}

a {
	color: #ea4f51;
	text-decoration: none;
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity .5s;
}
</style>

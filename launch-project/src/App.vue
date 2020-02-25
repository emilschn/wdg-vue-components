<template>
  <div
  	id="app"
	:data-ajaxurl="ajaxUrl"
	>
    <!-- <router-view/> -->
    <LaunchProject
	  	:ajaxUrl="ajaxUrl"
		:firstname="firstname"
		:lastname="lastname"
		:email="email"
		:phonenumber="phonenumber"
		:organame="organame"
		:projectname="projectname"
		:projectdescription="projectdescription"
		:existingprojects="existingprojects"
		:existingorganisations="existingorganisations"
		:urlcgu="urlcgu"
	/>
  </div>
</template>

<script>
import i18n from '@/i18n'
import LaunchProject from './components/LaunchProject.vue'
import { localize } from 'vee-validate'
localize({
	fr: {
		messages: {
			required: i18n.t('validations.REQUIRED')
		}
	}
})

const initElements = document.querySelector('#app')

export default {
  name: 'app',
	data () {
		return {
			ajaxUrl: '',
			firstname: '',
			lastname: '',
			phonenumber: '',
			organame: '',
			email: '',
			projectname: '',
			projectdescription: '',
			existingorganisations: '',
			urlcgu: '',
			existingprojects: ''
		}
	},
	components: {
		LaunchProject
	},
	created () {
		this.ajaxUrl = initElements.dataset.ajaxurl
		this.firstname = initElements.dataset.firstname
		this.lastname = initElements.dataset.lastname
		this.phonenumber = initElements.dataset.phonenumber
		this.email = initElements.dataset.email
		this.organame = initElements.dataset.organame
		this.projectname = initElements.dataset.projectname
		this.projectdescription = initElements.dataset.projectdescription
		if (initElements.dataset.existingprojects) {
			this.existingprojects = JSON.parse(initElements.dataset.existingprojects)
		}
		if (initElements.dataset.existingorganisations) {
			this.existingorganisations = JSON.parse(initElements.dataset.existingorganisations)
		}
		console.log(initElements.dataset.existingorganisations)
		this.urlcgu = initElements.dataset.urlcgu
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

<template>
  <div id="app">
    <!-- <router-view/> -->
    <LaunchProject :firstname="firstname"  :lastname="lastname"  :email="email"  :phonenumber="phonenumber"  :organame="organame"  :projectname="projectname"  :projectdescription="projectdescription" :existingprojects="existingprojects" />
  </div>
</template>

<script>

import LaunchProject from './components/LaunchProject.vue'
const initElements = document.querySelector('#app')

export default {
  name: 'app',
	data () {
		return {
			firstname: '',
			lastname: '',
			phonenumber: '',
			organame: '',
			email: '',
			projectname: '',
			projectdescription: '',
			existingprojects: ''
		}
	},
	components: {
		LaunchProject
	},
	created () {
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

<template>
	<div class="signin">
		<h1>Connexion sur WE DO GOOD</h1>

		<WDGForm formName="form-signin" :onSubmitEvent="formSubmit" v-bind:hasFiles="false">
			<WDGInput labelInput="E-mail ou identifiant" idInput="coucou" nameInput="coucou" typeInput="text" v-bind:multiline="false" v-bind:optional="false" v-bind:valueReturn.sync="email"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="pouicpouic" nameInput="pouicpouic" typeInput="password" v-bind:multiline="false" v-bind:optional="false" v-bind:valueReturn.sync="password"></WDGInput>

			<WDGInput labelInput="E-mail ou identifiant" idInput="email" nameInput="email" typeInput="text" v-bind:multiline="false" v-bind:optional="true" v-bind:honeypot="true" v-bind:valueReturn.sync="honeypot1"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="password" nameInput="password" typeInput="password" v-bind:multiline="false" v-bind:optional="true" v-bind:honeypot="true" v-bind:valueReturn.sync="honeypot2"></WDGInput>

			<div>
				<a href="/mot-de-passe-oublie/">(Mot de passe oublié)</a>
			</div>

			<!-- Créer un composant WDGCheckbox -->
			<WDGCheckbox labelCheckbox="Se souvenir de moi" idCheckbox="rememberme" nameCheckbox="rememberme" :valueCheckbox="rememberme" v-bind:optional="true"></WDGCheckbox>

			<div>
				* Champs obligatoires
			</div>

			<!-- Créer un composant bouton -->
			<WDGButton labelButton="Connexion" colorButton="red" v-bind:disabled=loading></WDGButton>
		</WDGForm>

		<WDGSeparator labelSeparator="ou"></WDGSeparator>

		<WDGButton labelButton="Se connecter avec Facebook" colorButton="blue"></WDGButton>

		<WDGSeparator labelSeparator="ou"></WDGSeparator>

		<WDGButton labelButton="Créer mon compte" colorButton="transparent"></WDGButton>
	</div>
</template>

<script>
import axios from 'axios'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGSeparator from '@/../../common/src/components/WDGSeparator'

export default {
  name: 'Signin',
  components: {
    WDGForm,
    WDGInput,
    WDGCheckbox,
    WDGButton,
    WDGSeparator
  },
  props: {
	ajaxUrl: { type: String, default: '' }
  },
  data () {
	  return {
		email: '',
		password: '',
		honeypot1: '',
		honeypot2: '',
		rememberme: false,
		loading: false
	  }
  },
  methods: {
	formSubmit () {
		let data = new FormData()
		data.append('action', 'try_user_login')
		data.append('email', this.email)
		data.append('password', this.password)
		data.append('honeypot1', this.honeypot1)
		data.append('honeypot2', this.honeypot2)
		data.append('rememberme', this.rememberme)
		this.loading = true

		axios
			.post (this.ajaxUrl, data)
			.then (response => {
				console.log(response)
				let responseData = response.data
				if (responseData.has_error === '1') {
					console.log('error : ' + responseData.error_str)
				} else {
					console.log('user : ' + responseData.user_display_name)
				}
			})
			.catch (error => {
				console.log(error)
			})
			.finally (() => {
				this.loading = false
			})
	}
  },
  mounted () {
  }
}
</script>

<style>
.signin {
	width: 480px;
	margin: auto;
}
@media screen and (max-width:767px) {
	.signin {
		width: calc( 100% - 4px );
		margin: 0px 2px;
	}
}
</style>

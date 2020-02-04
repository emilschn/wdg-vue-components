<template>
	<div class="signup">
		<h1>Inscription sur WE DO GOOD</h1>

		<WDGForm formName="form-signup" :formAction=ajaxUrl :onSubmitEvent=formSubmit v-bind:hasFiles="false" :errorFeedback=errorFeedback :successFeedback=successFeedback>
			<WDGInput labelInput="Adresse e-mail" idInput="coucou" nameInput="coucou" typeInput="text" validationRule="required|email" v-bind:valueReturn.sync="email"></WDGInput>

			<WDGInput labelInput="Prénom" idInput="firstname" nameInput="firstname" typeInput="text" validationRule="required" v-bind:valueReturn.sync="firstname"></WDGInput>

			<WDGInput labelInput="Nom de famille" idInput="lastname" nameInput="lastname" typeInput="text" validationRule="required" v-bind:valueReturn.sync="lastname"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="pouicpouic" nameInput="pouicpouic" typeInput="password" validationRule="required" v-bind:valueReturn.sync="password"></WDGInput>

			<WDGInput labelInput="Confirmation du mot de passe" idInput="glouglou" nameInput="glouglou" typeInput="password" validationRule="required" v-bind:valueReturn.sync="password2"></WDGInput>

			<WDGInput labelInput="E-mail" idInput="email" nameInput="email" typeInput="text" validationRule="length:0" v-bind:honeypot="true" v-bind:valueReturn.sync="honeypot1"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="password" nameInput="password" typeInput="password" validationRule="length:0" v-bind:honeypot="true" v-bind:valueReturn.sync="honeypot2"></WDGInput>

			<WDGCheckbox labelCheckbox="J'accepte les" linkCheckbox="/cgu/" linkCheckboxLabel="conditions générales d'utilisation" idCheckbox="acceptterms" nameCheckbox="acceptterms" validationRule="required" v-bind:valueReturn.sync="acceptterms"></WDGCheckbox>

			<div class="required-fields">
				* Champs obligatoires
			</div>

			<WDGButton labelButton="Créer mon compte" colorButton="red" v-bind:disabled=loading></WDGButton>
		</WDGForm>

		<WDGSeparator labelSeparator="ou"></WDGSeparator>

		<WDGButton labelButton="Se connecter avec Facebook" colorButton="blue" typeButton="button"></WDGButton>

		<WDGSeparator labelSeparator="ou"></WDGSeparator>

		<WDGButton labelButton="J'ai déjà un compte" colorButton="transparent" typeButton="button" :clickEvent="switchView"></WDGButton>
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
  name: 'Signup',
  components: {
    WDGForm,
    WDGInput,
    WDGCheckbox,
    WDGButton,
    WDGSeparator
  },
  props: {
	ajaxUrl: { type: String, default: '' },
	switchView: { type: Function }
  },
  data () {
	  return {
		email: '',
		firstname: '',
		lastname: '',
		password: '',
		password2: '',
		honeypot1: '',
		honeypot2: '',
		acceptterms: false,
		loading: false,
		errorFeedback: '',
		successFeedback: ''
	  }
  },
  methods: {
	formSubmit () {
		this.loading = true

		let data = new FormData()
		data.append('action', 'try_user_login')
		data.append('email', this.email)
		data.append('firstname', this.firstname)
		data.append('lastname', this.lastname)
		data.append('password', this.password)
		data.append('password2', this.password2)
		data.append('honeypot1', this.honeypot1)
		data.append('honeypot2', this.honeypot2)
		data.append('acceptterms', this.acceptterms)

		axios
			.post (this.ajaxUrl, data)
			.then (response => {
				let responseData = response.data
				if (responseData.has_error === '1') {
					this.errorFeedback = responseData.error_str
					this.successFeedback = ''
				} else {
					this.errorFeedback = ''
					this.successFeedback = 'Connexion ok pour ' + responseData.user_display_name
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
.signup {
	width: 480px;
	margin: auto;
}
</style>

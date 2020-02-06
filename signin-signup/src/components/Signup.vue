<template>
	<div class="signup">
		<h1>Inscription sur WE DO GOOD</h1>

		<WDGForm
		  name="form-signup"
		  :action="ajaxUrl"
		  :onSubmitEvent="formSubmit"
		  v-bind:hasFiles="false"
		  :errorFeedback="errorFeedback"
		  :successFeedback="successFeedback"
		  >
			<WDGInput
			  placeholder="exemple@monprojet.com"
			  id="coucou"
			  name="coucou"
			  type="text"
			  validationRule="required|email"
			  v-bind:valueReturn.sync="email"
			  >
			  <WDGInputSlot slot="label">Adresse e-mail</WDGInputSlot>
			</WDGInput>

			<WDGInput
			  placeholder="Mon prénom"
			  id="firstname"
			  name="firstname"
			  type="text"
			  validationRule="required"
			  v-bind:valueReturn.sync="firstname"
			  >
			  <WDGInputSlot slot="label">Prénom</WDGInputSlot>
			</WDGInput>

			<WDGInput
			  placeholder="Mon nom"
			  id="lastname"
			  name="lastname"
			  type="text"
			  validationRule="required"
			  v-bind:valueReturn.sync="lastname"
			  >
			  <WDGInputSlot slot="label">Nom de famille</WDGInputSlot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="pouicpouic"
			  name="pouicpouic"
			  type="password"
			  validationRule="required"
			  v-bind:valueReturn.sync="password"
			  >
			  <WDGInputSlot slot="label">Mot de passe</WDGInputSlot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="glouglou"
			  name="glouglou"
			  type="password"
			  validationRule="required"
			  v-bind:valueReturn.sync="password2"
			  >
			  <WDGInputSlot slot="label">Confirmation du mot de passe</WDGInputSlot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="email"
			  name="email"
			  type="text"
			  validationRule="length:0"
			  v-bind:honeypot="true"
			  v-bind:valueReturn.sync="honeypot1"
			  >
			  <WDGInputSlot slot="label">Adresse e-mail</WDGInputSlot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="password"
			  name="password"
			  type="password"
			  validationRule="length:0"
			  v-bind:honeypot="true"
			  v-bind:valueReturn.sync="honeypot2"
			  >
			  <WDGInputSlot slot="label">Mot de passe</WDGInputSlot>
			</WDGInput>

			<WDGCheckbox
			  id="acceptterms"
			  name="acceptterms"
			  validationRule="required"
			  v-bind:valueReturn.sync="acceptterms"
			  >
			  <WDGCheckboxSlot slot="label">J'accepte les <a href="/cgu/" target="_blank">conditions générales d'utilisation</a></WDGCheckboxSlot>
			</WDGCheckbox>

			<div class="required-fields">
				* Champs obligatoires
			</div>

			<WDGButton
			  color="red"
			  v-bind:disabled="loading"
			  >
				<WDGButtonSlot slot="label">Créer mon compte</WDGButtonSlot>
			</WDGButton>
		</WDGForm>

		<WDGSeparator label="ou" />

		<WDGButton
		  color="blue"
		  type="button"
		  >
			<WDGButtonSlot slot="label">Se connecter avec Facebook</WDGButtonSlot>
		</WDGButton>

		<WDGSeparator label="ou" />

		<WDGButton
		  color="transparent"
		  type="button"
		  :clickEvent="switchView"
		  >
			<WDGButtonSlot slot="label">J'ai déjà un compte</WDGButtonSlot>
		</WDGButton>
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
		data.append('action', 'try_user_register')
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
.required-fields {
	font-size: 16px;
	margin-bottom: 8px;
}
</style>

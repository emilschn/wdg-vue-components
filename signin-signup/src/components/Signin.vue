<template>
	<div class="signin">
		<h1>Connexion sur WE DO GOOD</h1>

		<WDGForm
		  name="form-signin"
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

			<div class="forgotten-password">
				<a href="/mot-de-passe-oublie/">(Mot de passe oublié)</a>
			</div>

			<WDGCheckbox
			  id="rememberme"
			  name="rememberme"
			  v-bind:valueReturn.sync="rememberme"
			  >
			  <WDGCheckboxSlot slot="label">Se souvenir de moi</WDGCheckboxSlot>
			</WDGCheckbox>

			<div class="required-fields">
				* Champs obligatoires
			</div>

			<WDGButton
			  color="red"
			  v-bind:disabled="loading"
			  >
			  <WDGButtonSlot slot="label">Connexion</WDGButtonSlot>
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
			<WDGButtonSlot slot="label">Créer mon compte</WDGButtonSlot>
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
  name: 'Signin',
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
		password: '',
		honeypot1: '',
		honeypot2: '',
		rememberme: false,
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
		data.append('password', this.password)
		data.append('honeypot1', this.honeypot1)
		data.append('honeypot2', this.honeypot2)
		data.append('rememberme', this.rememberme)

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
.signin {
	width: 480px;
	margin: auto;
}
.forgotten-password {
	text-align: center;
	margin-bottom: 8px;
}
.forgotten-password a {
	font-size: 11px;
	font-style: italic;
	text-decoration: none;
	color:#EA4F51;
}
.required-fields {
	font-size: 16px;
	margin-bottom: 8px;
}
@media screen and (max-width:767px) {
	.signin {
		width: calc( 100% - 4px );
		margin: 0px 2px;
	}
}
</style>

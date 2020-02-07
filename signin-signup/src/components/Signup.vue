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
			  :placeholder="$t('common.EMAIL_ADDRESS_PLACEHOLDER')"
			  id="coucou"
			  name="coucou"
			  type="text"
			  validationRule="required"
			  v-bind:valueReturn.sync="email"
			  >
			  <slot slot="label">{{ $t('common.EMAIL_ADDRESS') }}</slot>
			</WDGInput>

			<WDGInput
			  :placeholder="$t('common.FIRSTNAME_PLACEHOLDER')"
			  id="firstname"
			  name="firstname"
			  type="text"
			  validationRule="required"
			  v-bind:valueReturn.sync="firstname"
			  >
			  <slot slot="label">{{ $t('common.FIRSTNAME') }}</slot>
			</WDGInput>

			<WDGInput
			  :placeholder="$t('common.LASTNAME_PLACEHOLDER')"
			  id="lastname"
			  name="lastname"
			  type="text"
			  validationRule="required"
			  v-bind:valueReturn.sync="lastname"
			  >
			  <slot slot="label">{{ $t('common.LASTNAME') }}</slot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="pouicpouic"
			  name="pouicpouic"
			  type="password"
			  validationRule="required"
			  v-bind:valueReturn.sync="password"
			  >
			  <slot slot="label">{{ $t('common.PASSWORD') }}</slot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="glouglou"
			  name="glouglou"
			  type="password"
			  validationRule="required"
			  v-bind:valueReturn.sync="password2"
			  >
			  <slot slot="label">{{ $t('signin-signup.PASSWORD_CONFIRMATION') }}</slot>
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
			  <slot slot="label">{{ $t('common.EMAIL_ADDRESS') }}</slot>
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
			  <slot slot="label">{{ $t('common.PASSWORD') }}</slot>
			</WDGInput>

			<WDGCheckbox
			  id="acceptterms"
			  name="acceptterms"
			  validationRule="required"
			  v-bind:valueReturn.sync="acceptterms"
			  >
			  <slot slot="label">{{ $t('signin-signup.I_ACCEPT_THE') }} <a href="/cgu/" target="_blank">{{ $t('signin-signup.GENERAL_USE_TERMS') }}</a></slot>
			</WDGCheckbox>

			<div class="required-fields">
				* {{ $t('common.REQUIRED_FIELDS') }}
			</div>

			<WDGButton
			  color="red"
			  v-bind:disabled="loading"
			  >
				<slot slot="label">{{ $t('signin-signup.CREATE_MY_ACCOUNT') }}</slot>
			</WDGButton>
		</WDGForm>

		<WDGSeparator label="ou" />

		<ButtonFacebook
		  :ajaxUrl="ajaxUrl"
		  />

		<WDGSeparator label="ou" />

		<WDGButton
		  color="transparent"
		  type="button"
		  :clickEvent="switchView"
		  >
			<slot slot="label">{{ $t('signin-signup.I_ALREADY_HAVE_AN_ACCOUNT') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import axios from 'axios'
import i18n from '@/i18n'
import ButtonFacebook from '@/components/ButtonFacebook'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGSeparator from '@/../../common/src/components/WDGSeparator'

export default {
  name: 'Signup',
  components: {
    ButtonFacebook,
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
					this.errorFeedback = i18n.t(getErrorMessage(responseData.error_str))
					this.successFeedback = ''
					window.scrollTo(0, 0)
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
  }
}

function getErrorMessage (errorCode) {
	switch (errorCode) {
		case 'user_email':
			return 'signin-signup.__SIGNUP_ERROR_EMAIL_EMPTY'
		case 'user_name':
			return 'signin-signup.__SIGNUP_ERROR_EMAIL_FOUND'
		case 'user_email_incorrect':
			return 'signin-signup.__SIGNUP_ERROR_EMAIL_INCORRECT'
		case 'user_firstname':
			return 'signin-signup.__SIGNUP_ERROR_FIRSTNAME_EMPTY'
		case 'user_lastname':
			return 'signin-signup.__SIGNUP_ERROR_LASTNAME_EMPTY'
		case 'user_password':
			return 'signin-signup.__SIGNUP_ERROR_PASSWORD_EMPTY'
		case 'user_password_match':
			return 'signin-signup.__SIGNUP_ERROR_PASSWORD_NOT_MATCHING'
		case 'validate_terms_check':
			return 'signin-signup.__SIGNUP_ERROR_TERMS'
		case 'user_insert':
			return 'signin-signup.__SIGNUP_ERROR_UNDEFINED'
		case 'user_robot':
			return 'signin-signup.__SIGNUP_ERROR_ROBOT'
		default:
			return ''
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

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
			  :placeholder="$t('common.__EMAIL_ADDRESS_PLACEHOLDER')"
			  id="coucou"
			  name="coucou"
			  type="text"
			  validationRule="required"
			  v-bind:valueReturn.sync="email"
			  >
			  <slot slot="label">{{ $t('common.__EMAIL_ADDRESS') }}</slot>
			</WDGInput>

			<WDGInput
			  placeholder=""
			  id="pouicpouic"
			  name="pouicpouic"
			  type="password"
			  validationRule="required"
			  v-bind:valueReturn.sync="password"
			  >
			  <slot slot="label">{{ $t('common.__PASSWORD') }}</slot>
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
			  <slot slot="label">{{ $t('common.__EMAIL_ADDRESS') }}</slot>
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
			  <slot slot="label">{{ $t('common.__PASSWORD') }}</slot>
			</WDGInput>

			<div class="forgotten-password">
				<a href="/mot-de-passe-oublie/">({{ $t('signin-signup.__FORGOTTEN_PASSWORD') }})</a>
			</div>

			<WDGCheckbox
			  id="rememberme"
			  name="rememberme"
			  v-bind:valueReturn.sync="rememberme"
			  >
			  <slot slot="label">{{ $t('signin-signup.__REMEMBER_ME') }}</slot>
			</WDGCheckbox>

			<div class="required-fields">
				* {{ $t('common.__REQUIRED_FIELDS') }}
			</div>

			<WDGButton
			  color="red"
			  v-bind:disabled="loading"
			  >
			  <slot slot="label">{{ $t('signin-signup.__CONNECTION') }}</slot>
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
			<slot slot="label">{{ $t('signin-signup.__CREATE_MY_ACCOUNT') }}</slot>
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
  name: 'Signin',
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
					this.errorFeedback = i18n.t(getErrorMessage(responseData.error_str))
					this.successFeedback = ''
					window.scrollTo(0, 0)
					this.loading = false
				} else {
					this.errorFeedback = ''
					window.location.reload(true)
				}
			})
			.catch (error => {
				console.log(error)
				this.loading = false
			})
			.finally (() => {
			})
	}
  }
}

function getErrorMessage (errorCode) {
	switch (errorCode) {
		case 'empty_authentication':
		case 'empty_username':
		case 'empty_password':
			return 'signin-signup.__SIGNIN_ERROR_EMPTY'
		case 'invalid_username':
			return 'signin-signup.__SIGNIN_ERROR_NOT_FOUND'
		case 'incorrect_password':
			return 'signin-signup.__SIGNIN_ERROR_INCORRECT_PASSWORD'
		default:
			return ''
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

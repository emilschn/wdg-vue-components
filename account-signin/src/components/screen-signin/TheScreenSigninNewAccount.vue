<template>
	<div class="the-screen-signin-new-account">
		<WDGMessage
		  id="message"
		  iconSVG="info.svg"
		  >
			<slot slot="label">{{ $t('account-signin.SIGNIN_ERROR_NOT_FOUND') }}</slot>
		</WDGMessage>
		<br>
		<div>
			{{ $t('account-signin.LABEL_CREATE_PASSWORD') }}<br>
			<WDGInputPassword
			  type="password"
			  :value="sharedState.user.password"
			  v-bind:valueReturn.sync="sharedState.user.password"
			  customStyle="natural-language"
			  :onChange="onChangePasswordEvent"
			  :onValidatePassword="onValidatePasswordEvent"
			  />
			<div class="info">{{ $t('account-signin.NOTICE_PASSWORD') }}</div><br>
		</div>

		<div v-if="sharedState.user.password !== '' && passwordIsValid === true">
			{{ $t('account-signin.LABEL_NAME') }}<br>
			<div class="name">
				<WDGInput
				  id="userFirstName"
				  name="userFirstName"
				  :placeholder="$t('common.FIRSTNAME')"
				  :value="sharedState.user.firstname"
				  v-bind:valueReturn.sync="sharedState.user.firstname"
				  customStyle="natural-language"
				  />

				<WDGInput
				  id="userLastName"
				  name="userLastName"
				  :placeholder="$t('common.LASTNAME')"
				  :value="sharedState.user.lastname"
				  v-bind:valueReturn.sync="sharedState.user.lastname"
				  customStyle="natural-language"
				  />
			</div>
		</div>

		<div class="cgu" v-if="sharedState.user.password !== '' && passwordIsValid === true && sharedState.user.firstname !== '' && sharedState.user.lastname !== ''">
			<vue-recaptcha
			  ref="recaptcha"
			  @verify="onCaptchaVerified"
			  @expired="onCaptchaExpired"
			  :sitekey="sitekey"
			  :loadRecaptchaScript="true"
			  >
			</vue-recaptcha>
			<br>
			<WDGCheckbox
			  id="acceptterms"
			  name="acceptterms"
			  validationRule="required"
			  v-bind:valueReturn.sync="acceptterms"
			  >
				<slot slot="label">{{ $t('account-signin.I_ACCEPT_THE') }} <a :href="termsLink" target="_blank">{{ $t('account-signin.GENERAL_USE_TERMS') }}</a></slot>
			</WDGCheckbox>
		</div>

		<WDGMessage
		  v-if="isErrorVisible"
		  iconSVG="warning.svg"
		  >
			<slot slot="label">{{ $t('account-signin.ERROR_CREATE_ACCOUNT') }}</slot>
		</WDGMessage>
		<WDGButton
		  v-if="canShowCreateAccount"
		  color="red"
		  type="button"
		  :disabled="loading"
		  :clickEvent="onButtonCreateAccountEvent"
		  >
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>

		<WDGLoader
		  v-if="loading"
		  color="grey"
		  />
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGLoader from '@/../../common/src/components/WDGLoader'
import WDGInputPassword from '@/../../common/src/components/WDGInputPassword'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import VueRecaptcha from 'vue-recaptcha'
export default {
	name: 'TheScreenSigninNewAccount',
	components: {
		WDGInput,
		WDGInputPassword,
		WDGMessage,
		WDGCheckbox,
		WDGButton,
		WDGLoader,
		VueRecaptcha
	},
	props: {
	},
	data () {
		return {
			sharedState: store.state,
			passwordIsValid: false,
			acceptterms: false,
			acceptcaptcha: false,
			loading: false,
			isErrorVisible: false,
			sitekey: '6LcoHRIUAAAAALw2iKHxMCvfyZ_6eKai92vF4bog'
		}
	},
	methods: {
		onChangePasswordEvent (value) {
			this.passwordIsValid = false
		},
		onValidatePasswordEvent (value) {
			this.passwordIsValid = true
		},
		onCaptchaVerified: function (recaptchaToken) {
			console.log('onCaptchaVerified: ' + recaptchaToken)
		//   const self = this;
		//   self.status = "submitting";
		//   self.$refs.recaptcha.reset();
		//   axios.post("https://vue-recaptcha-demo.herokuapp.com/signup", {
		//     email: self.email,
		//     password: self.password,
		//     recaptchaToken: recaptchaToken
		//   }).then((response) => {
		//     self.sucessfulServerResponse = response.data.message;
		//   }).catch((err) => {
		//     self.serverError = getErrorMessage(err);
		//     //helper to get a displayable message to the user
		//     function getErrorMessage(err) {
		//       let responseBody;
		//       responseBody = err.response;
		//       if (!responseBody) {
		//         responseBody = err;
		//       }
		//       else {
		//         responseBody = err.response.data || responseBody;
		//       }
		//       return responseBody.message || JSON.stringify(responseBody);
		//     }

		//   }).then(() => {
		//     self.status = "";
		//   });
		},
		onCaptchaExpired: function () {
			console.log('onCaptchaExpired: ')
			this.$refs.recaptcha.reset()
		},
		onButtonCreateAccountEvent: function (event) {
			store.setCreationTag(true)
			this.loading = true
			this.hasPasswordError = false
			this.isErrorVisible = false
			// Demande de connexion en requête Ajax
			requests.getCreateAccount(this.sharedState.user.email, this.sharedState.user.password, this.sharedState.user.firstname, this.sharedState.user.lastname, this.onCreateAccountRequestResult)
		},
		onCreateAccountRequestResult: function (result) {
			this.loading = false
			if (result !== 'error') {
				store.changeStep('confirmation')
			} else {
				this.isErrorVisible = true
			}
		}
	},
	computed: {
		/**
		 * Détermine si le compte peut être créé
		 */
		canShowCreateAccount () {
			return (
				this.sharedState.user.email !== '' &&
				this.sharedState.user.password !== '' &&
				this.sharedState.user.firstname !== '' &&
				this.sharedState.user.lastname !== '' &&
				this.acceptterms !== false
			)
		},
		/**
		 * Retourne le lien vers les CGU (selon la langue)
		 */
		termsLink () {
			return i18n.t('account-signin.TERMS_LINK')
		}
	}
}
</script>

<style>
div.wdg-loader {
	max-width: 370px;
	text-align: center;
}
</style>

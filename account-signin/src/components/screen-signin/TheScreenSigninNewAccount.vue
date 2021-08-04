<template>
	<div class="the-screen-signin-new-account">
		<WDGMessage
		  id="message"
		  iconSVG="info.svg"
		  iconColor="paleblue"
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
			<WDGMessage
			v-if="isErrorPasswordFormatVisible"
			iconSVG="warning.svg"
			iconColor="pink"
			>
				<slot slot="label">{{ $t('account-signin.BAD_PASSWORD_FORMAT') }}</slot>
			</WDGMessage>
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

			<div class="bot">
				<WDGInput
				  id="botName"
				  name="botName"
				  :value="botvalue"
				  v-bind:valueReturn.sync="botvalue"
				  />
			</div>
		</div>

		<div class="cgu" v-if="sharedState.user.password !== '' && passwordIsValid === true && sharedState.user.firstname !== '' && sharedState.user.lastname !== ''">
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
		  iconColor="pink"
		  >
			<slot slot="label">{{ $t('account-signin.ERROR_CREATE_ACCOUNT') }}</slot>
		</WDGMessage>
		<WDGButton
		  v-if="canShowCreateAccount"
		  color="red"
		  type="button"
		  :loading="loading"
		  :clickEvent="onButtonCreateAccountEvent"
		  >
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			<slot slot="label-loading">{{ $t('account-signin.CONTINUE_LOADING') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGInputPassword from '@/../../common/src/components/WDGInputPassword'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenSigninNewAccount',
	components: {
		WDGInput,
		WDGInputPassword,
		WDGMessage,
		WDGCheckbox,
		WDGButton
	},
	props: {
	},
	data () {
		return {
			sharedState: store.state,
			passwordIsValid: false,
			acceptterms: false,
			loading: false,
			currentIntervalId: 0,
			isErrorVisible: false,
			botvalue: '',
			isErrorPasswordFormatVisible: false
		}
	},
	methods: {
		onChangePasswordEvent (value) {
			this.passwordIsValid = false
			// Timer de déclenchement pour ne pas afficher un message d'erreur immédiatement
			this.isErrorPasswordFormatVisible = false
			clearInterval(this.currentIntervalId)
			this.currentIntervalId = setInterval(this.onIntervalEvent, 2000)
		},
		onValidatePasswordEvent (value) {
			this.passwordIsValid = true
			this.isErrorPasswordFormatVisible = false
			clearInterval(this.currentIntervalId)
		},
		// Evènement après l'intervalle pour afficher un message d'erreur
		onIntervalEvent () {
			clearInterval(this.currentIntervalId)
			if (this.sharedState.user.password.length > 7) {
				this.isErrorPasswordFormatVisible = true
			}
		},
		onButtonCreateAccountEvent: function (event) {
			if (this.botvalue !== '' && this.botvalue !== null && this.botvalue !== undefined) {
				return ''
			}
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
				this.passwordIsValid &&
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
div.bot {
	visibility: hidden;
	width: 0px;
	height: 0px;
}
</style>

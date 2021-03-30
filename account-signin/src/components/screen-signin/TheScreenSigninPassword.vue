<template>
	<div class="the-screen-signin-password">
		{{ $t('account-signin.LABEL_WRITE_PASSWORD') }}<br>

		<WDGInputPassword
		  type="password"
		  :value="sharedState.user.password"
		  v-bind:valueReturn.sync="sharedState.user.password"
		  customStyle="natural-language"
		  />

		<WDGMessage
		  v-if="isErrorVisible"
		  iconSVG="warning.svg"
		  >
			<slot slot="label">{{ $t('account-signin.ERROR_PASSWORD') }}</slot>
		</WDGMessage>

		<div class="forgotten-password">
			<a @click="onForgottenPasswordEvent">{{ $t('account-signin.FORGOTTEN_PASSWORD') }}</a>
		</div>

		<WDGCheckbox
		  id="rememberme"
		  name="rememberme"
		  v-bind:valueReturn.sync="rememberme"
		  >
			<slot slot="label">{{ $t('account-signin.REMEMBER_ME') }}</slot>
		</WDGCheckbox>

		<WDGButton
		  v-if="isButtonVisible"
		  color="red"
		  type="button"
		  :disabled="loading"
		  :clickEvent="onButtonConnectionClickedEvent"
		  >
			<slot slot="label">{{ $t('account-signin.CONNECTION') }}</slot>
		</WDGButton>

		<WDGLoader
		  v-if="loading"
		  color="grey"
		  />
	</div>
</template>

<script>
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInputPassword from '@/../../common/src/components/WDGInputPassword'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGLoader from '@/../../common/src/components/WDGLoader'
export default {
	name: 'TheScreenSigninPassword',
	components: {
		WDGInputPassword,
		WDGMessage,
		WDGCheckbox,
		WDGButton,
		WDGLoader
	},
	props: {
		onLoginSuccess: Function
	},
	data () {
		return {
			sharedState: store.state,
			rememberme: false,
			loading: false,
			hasPasswordError: false
		}
	},
	methods: {
		/**
		 * Clic sur le lien "Mot de passe oublié"
		 */
		onForgottenPasswordEvent: function () {
			store.changeStep('forgotten-pass')
		},

		/**
		 * Clic sur le bouton de connexion
		 */
		onButtonConnectionClickedEvent: function () {
			store.setCreationTag(false)
			this.loading = true
			this.hasPasswordError = false
			// Demande de connexion en requête Ajax
			requests.getCheckPassword(this.sharedState.user.email, this.sharedState.user.password, this.rememberme, this.onPasswordRequestResult)
		},

		/**
		 * Retour de requête de login
		 */
		onPasswordRequestResult: function (requestResult) {
			this.loading = false
			if (requestResult.signin_status === 'error') {
				this.hasPasswordError = true
			} else {
				this.onLoginSuccess()
			}
		}
	},
	computed: {
		isButtonVisible () {
			return (
				this.sharedState.user.email !== '' &&
				this.sharedState.user.password !== ''
			)
		},
		isErrorVisible () {
			return (
				this.hasPasswordError
			)
		}
	}
}
</script>

<style>
div.the-screen-signin-password, div.forgotten-password, div.wdg-message, div.wdg-checkbox {
	margin-top: 16px;
}
div.wdg-loader {
	max-width: 370px;
	text-align: center;
}
</style>

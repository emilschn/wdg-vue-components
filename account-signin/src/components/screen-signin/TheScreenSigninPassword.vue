<template>
	<div class="the-screen-signin-password">
		{{ $t('account-signin.LABEL_WRITE_PASSWORD') }}<br>

		<WDGInputPassword
		  type="password"
		  :value="sharedState.user.password"
		  v-bind:valueReturn.sync="sharedState.user.password"
		  customStyle="natural-language"
		  :displayValidPassword="false"
		  :onEnter="onEnterPassword"
		  />

		<WDGMessage
		  v-if="isErrorVisible"
		  iconSVG="warning.svg"
		  iconColor="pink"
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
		  :loading="loading"
		  :clickEvent="onButtonConnectionClickedEvent"
		  >
			<slot slot="label">{{ $t('account-signin.CONNECTION') }}</slot>
			<slot slot="label-loading">{{ $t('account-signin.CONNECTION_LOADING') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInputPassword from '@/../../common/src/components/WDGInputPassword'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenSigninPassword',
	components: {
		WDGInputPassword,
		WDGMessage,
		WDGCheckbox,
		WDGButton
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
		 * Gestion de la touche entrée pour l'input de mot de passe
		 */
		onEnterPassword: function() {
			console.log('onEnterPassword')
			this.onButtonConnectionClickedEvent()
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
			if (requestResult === undefined || requestResult === 'error' || requestResult.signin_status === 'error') {
				this.hasPasswordError = true
			} else {
				// Si on a une URL de redirection, on va changer de page, donc autant laisser l'impression de chargement
				if (requestResult.url_redirect !== 'email-validation') {
					this.loading = true
				}
				this.onLoginSuccess(requestResult.url_redirect)
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
div.the-screen-signin-password, div.forgotten-password, div.wdg-checkbox {
	margin-top: 30px;
}
div.wdg-message {
	margin-top: 16px;
}

div.the-screen-signin-password div.wdg-message {
	border-color: #F8CACA;
}
</style>

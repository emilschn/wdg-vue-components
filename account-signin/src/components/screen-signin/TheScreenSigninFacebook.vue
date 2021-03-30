<template>
	<div class="the-screen-signin-facebook">
		<WDGButton
		  color="facebook"
		  type="button"
		  :disabled="loading"
		  :clickEvent="onButtonFacebookClickedEvent"
		  >
			<slot slot="label">{{ $t('account-signin.CONNECT_TO_FACEBOOK') }}</slot>
		</WDGButton>

		<WDGLoader
		  v-if="loading"
		  color="grey"
		  />

		<WDGMessage
		  v-if="isErrorVisible"
		  iconSVG="warning.svg"
		  >
			<slot slot="label">{{ $t('account-signin.ERROR_FACEBOOK') }}</slot>
		</WDGMessage>
	</div>
</template>

<script>
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGLoader from '@/../../common/src/components/WDGLoader'
export default {
	name: 'TheScreenSigninFacebook',
	components: {
		WDGButton,
		WDGMessage,
		WDGLoader
	},
	props: {
	},
	data () {
		return {
			loading: false,
			isErrorVisible: false
		}
	},
	methods: {
		/**
		 * Clic sur le bouton de Facebook
		 */
		onButtonFacebookClickedEvent: function () {
			store.setCreationTag(false)
			this.loading = true
			// Demande de connexion en requête Ajax
			requests.getFacebookRedirectUrl(this.onFacebookRequestResult)
		},

		/**
		 * Retour de requête de connexion à Facebook
		 */
		onFacebookRequestResult: function (requestResult) {
			this.loading = false
			if (requestResult !== '' && requestResult !== undefined) {
				window.location = requestResult
			} else {
				this.isErrorVisible = true
			}
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

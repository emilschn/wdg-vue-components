<template>
	<div class="the-screen-signin-email">
		{{ $t('account-signin.LABEL_MAIL') }}<br>
		<WDGInput
		  id="email"
		  name="email"
		  type="email"
		  :loading="loading"
		  icon="ok"
		  :iconVisibility=isEmailValid
		  :value="sharedState.user.email"
		  v-bind:valueReturn.sync="sharedState.user.email"
		  customStyle="natural-language"
		  :onChange="onChangeEmailEvent"
		  eventNameToListen="changeEmailAccount"
		  />
		<br>

		<WDGInput
		  placeholder=""
		  id="email1"
		  name="email1"
		  validationRule="length:0"
		  v-bind:honeypot="true"
		  v-bind:valueReturn.sync="honeypot1"
		  />
	</div>
</template>

<script>
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInput from '@/../../common/src/components/WDGInput'
export default {
	name: 'TheScreenSigninInput',
	components: {
		WDGInput
	},
	props: {
		onEmailChanged: Function
	},
	data () {
		return {
			loginEmailStep: { type: String, default: 'empty-email' },
			sharedState: store.state,
			userMail: '',
			currentIntervalId: 0,
			loading: false,
			honeypot1: ''
		}
	},
	methods: {
		// Evénement à la saisie dans le champ de mail
		onChangeEmailEvent () {
			// Réinitialise comme si le mail était vide
			this.onEmailChanged({ status: 'empty-email' })
			// Affichage du loader
			this.loading = true
			// Timer de déclenchement pour ne pas exécuter de requête en direct
			clearInterval(this.currentIntervalId)
			this.currentIntervalId = setInterval(this.onIntervalEvent, 500)
		},

		// Evènement après l'intervalle pour déclencher l'exécution du script
		onIntervalEvent () {
			clearInterval(this.currentIntervalId)

			if (this.sharedState.user.email === '') {
				this.loading = false
				this.onEmailChanged({ status: 'empty-email' })
			} else if (!store.isEmailValid(this.sharedState.user.email)) {
				this.loading = false
				this.onEmailChanged({ status: 'bad-email' })
			} else {
				// Récupération des informations de compte via requete Ajax
				requests.getEmailAddressInfo(this.sharedState.user.email, this.onEmailRequestResultEvent)
			}
		},

		// A la réception de la requête de recherche de mail
		onEmailRequestResultEvent (requestResult) {
			this.loading = false
			this.onEmailChanged(requestResult)
		}
	},
	computed: {
		isEmailValid() {
			return store.isEmailValid(this.sharedState.user.email)
		}
	}
}
</script>

<style>
</style>

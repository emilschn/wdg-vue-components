<template>
	<div class="the-screen-signin-email">
		{{ $t('account-signin.LABEL_MAIL') }}<br>
		<WDGInput
		  id="email"
		  name="email"
		  type="email"
		  icon="ok"
		  :iconVisibility=isEmailValid(sharedState.user.email)
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

		<WDGLoader
		  v-if="loading"
		  color="grey"
		  />
	</div>
</template>

<script>
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGLoader from '@/../../common/src/components/WDGLoader'
export default {
	name: 'TheScreenSigninInput',
	components: {
		WDGInput,
		WDGLoader
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
		// Vérification si l'adresse e-mail est valable
		isEmailValid (value) {
			var mailformat = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
			if (mailformat.test(value)) {
				return true
			} else {
				return false
			}
		},

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
				// this.onEmailChanged({ status: 'empty-email' })
			} else if (!this.isEmailValid(this.sharedState.user.email)) {
				this.loading = false
				this.onEmailChanged({ status: 'bad-email' })
			} else {
				// Récupération des informations de compte via requete Ajax
				requests.getEmailAddressInfo(this.sharedState.user.email, this.onEmailRequestResult)
			}
		},

		// A la réception de la requête de recherche de mail
		onEmailRequestResult (requestResult) {
			this.loading = false
			this.onEmailChanged(requestResult)
		}
	}
}
</script>

<style>
</style>

<template>
	<div class="the-screen-signin-email">
		{{ $t('account-signin.LABEL_MAIL') }}<br>
		<WDGInput
		  id="bzz"
		  name="bzz"
		  type="email"
		  :loading="loading"
		  icon="check"
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
		  id="email"
		  name="email"
		  validationRule="length:0"
		  v-bind:honeypot="true"
		  v-bind:valueReturn.sync="honeypot1"
		  />

		  <span class="not-registered">{{ $t('account-signin.NOT_REGISTERED') }}</span>
	</div>
</template>

<script>
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGInput from '@/../../common/src/components/WDGInput'
export default {
	name: 'TheScreenSigninEmail',
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
div.the-screen-signin-email span.not-registered {
	font-size: 14px;
	color: #C2C2C2;
	display: block;
	margin-top: 10px;
}
@media screen and (min-width: 768px) and (max-width: 959px) {
div.the-screen-signin-email span.not-registered {
	max-width: 50%;
}
}
</style>

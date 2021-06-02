<template>
	<div class="the-screen-forgotten-password">
		<div class="intro">
			<span v-if="context === 'wdg'">{{ $t( "account-signin.FORGOTTEN_PASS_TITLE" ) }}</span>
			<span v-else>{{ $t( "account-signin.UNLINK_FACEBOOK_TITLE" ) }}</span>
		</div>
		<div class="description">
			<span v-if="context === 'wdg'">
				{{ $t( "account-signin.FORGOTTEN_PASS_TEXT_1" ) }}
				<br><br>
				{{ $t( "account-signin.FORGOTTEN_PASS_TEXT_2" ) }}
			</span>
			<span v-else>{{ $t( "account-signin.UNLINK_FACEBOOK_TEXT" ) }}</span>
			<br><br>
		</div>
		<WDGForm>
			<WDGInput
			  id="email"
			  name="email"
			  type="email"
			  icon="ok"
			  :iconVisibility=isEmailValid
			  :value="sharedState.user.email"
			  v-bind:valueReturn.sync="sharedState.user.email"
			  customStyle="natural-language"
			  />

			<div
			  v-if="reinitPassSent"
			  class="message-confirmation"
			  >
				<WDGMessage
					iconFont="ok"
					iconColor="palegreen"
					>
					<slot slot="label">{{ $t('account-signin.FORGOTTEN_PASS_MAIL_SENT') }}</slot>
				</WDGMessage>
			</div>
			<div
			  v-if="isErrorVisible"
			  class="message-confirmation"
			  >
				<WDGMessage
					iconSVG="warning.svg"
					>
					<slot slot="label">{{ errorMessage }}</slot>
				</WDGMessage>
			</div>

			<div class="send-mail">
				<WDGButton
				  v-if="isEmailValid"
				  color="red"
				  type="button"
				  :clickEvent="onSendReinitPassEvent"
				  :loading="loading"
				  >
					<slot slot="label">{{ $t('account-signin.FORGOTTEN_PASS_BUTTON') }}</slot>
				</WDGButton>
			</div>
		</WDGForm>

	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import { requests } from '../../requests.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
export default {
	name: 'TheScreenConfirmation',
	components: {
        WDGButton,
        WDGMessage,
        WDGForm,
        WDGInput
	},
	props: {
		context: { type: String, default: 'wdg' }
	},
	data () {
		return {
			sharedState: store.state,
            reinitPassSent: false,
			loading: false,
			isErrorVisible: false,
			errorMessage: ''
		}
	},
	methods: {
		onSendReinitPassEvent () {
			store.setCreationTag(false)
			this.loading = true
			requests.sendReinitPass(this.sharedState.user.email, this.onSendReinitPassRequestResult)
		},
		/**
		 * Retour de requête d'envoi de mail de réinitialisation de password
		 */
		onSendReinitPassRequestResult: function (requestResult) {
			this.loading = false
			this.reinitPassSent = false
			if (requestResult === '' || requestResult === undefined || requestResult === 'error' || requestResult.status === 'email-not-sent') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.FORGOTTEN_PASS_MAIL_NOT_SENT')
			} else if (requestResult.status === 'facebook-account') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.FORGOTTEN_PASS_MAIL_FACEBOOK')
			} else if (requestResult.status === 'not-existing-account') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.FORGOTTEN_PASS_MAIL_NO_ACCOUNT')
			} else if (requestResult.status === 'empty') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.FORGOTTEN_PASS_MAIL_NOT_SENT')
			} else if (requestResult.status === 'email-sent') {
				this.reinitPassSent = true
			}
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
div.the-screen-forgotten-password {
	margin: 32px 0px;
	padding: 30px;
}
div.the-screen-forgotten-password .intro {
	margin-bottom: 26px;
	font-size: 30px;
	text-align: left;
	font-weight: 700;
	text-transform: uppercase;
	font-family: 'Trebuchet MS', sans-serif;
}
div.the-screen-forgotten-password .wdg-form .send-mail {
	display: flex;
	align-items: center;
	margin-top: 16px;
}
div.the-screen-forgotten-password .wdg-button {
	margin-top: 15px;
	max-width: 325px;
	width: 325px;
}
div.the-screen-forgotten-password .wdg-button:nth-child(1) {
	margin-right: 8px;
}
div.the-screen-forgotten-password .wdg-message {
	max-width: 325px;
	width: 325px;
	height: 48px;
}
</style>

<template>
	<div class="the-screen-confirmation">
		<div class="intro" v-if="sharedState.creation === true">
			{{ $t( "account-signin.CONFIRMATION_TITLE" ) }}
		</div>
		<div v-else>
			<WDGMessage
			  id="message"
			  iconSVG="info.svg"
			  >
				<slot slot="label">{{ $t('account-signin.CONFIRMATION_EXPLICATION') }}</slot>
			</WDGMessage>
		</div><br>
		<WDGMascot type="face-3">
			<slot slot="text">
				<span>
					<span class="title">{{ $t('account-signin.CONFIRMATION_TEXT_1') }}<b>{{ sharedState.user.email }}</b></span><br><br>
					<span class="title"><b>{{ $t('account-signin.CONFIRMATION_TEXT_2') }}</b></span><br><br>
					<span class="title">{{ $t('account-signin.CONFIRMATION_TEXT_3') }}</span><br><br>
					<div v-if="sharedState.creation !== true">
						<a
						  @click="onMailNotReceived"
						  class="mail_not_received"
						  >
							{{ $t('account-signin.CONFIRMATION_MAIL_NOT_RECEIVED_2') }}
						</a>
					</div>
				</span>
			</slot>
		</WDGMascot><br><br>
		<div class="form" v-if="sharedState.creation !== true">
			<WDGForm>
				<WDGCheckbox
				  id="changemail"
				  name="changemail"
				  v-bind:valueReturn.sync="changemail"
				  >
				<slot slot="label">{{ $t('account-signin.CONFIRMATION_CHANGE_MAIL') }}</slot>
				</WDGCheckbox>
				<div v-if="changemail === true">
					{{ $t('account-signin.CONFIRMATION_NEW_MAIL') }}
					<WDGInput
					  id="newMail"
					  name="newMail"
					  type="email"
					  icon="ok"
					  :iconVisibility=isNewEmailValid
					  :value="sharedState.user.newMail"
					  v-bind:valueReturn.sync="sharedState.user.newMail"
					  customStyle="natural-language"
					  />.
					<br><br>
					<div class="send-mail">
						<WDGButton
						  v-if="isNewEmailValid"
						  color="red"
						  type="button"
						  :clickEvent="onChangeEmailEvent"
						  >
							<slot slot="label">{{ $t('common.CONFIRM') }}</slot>
						</WDGButton>
						<WDGMessage
						  v-if="newMailSent === true"
						  id="message"
						  iconFont="ok"
						  iconColor="palegreen"
						  >
							<slot slot="label">{{ $t('account-signin.CHANGE_MAIL_SENT') }}</slot>
						</WDGMessage>
					</div>
				</div>
			</WDGForm>
		</div>
		<div class="link" v-else>
			<div>
				<a
				  @click="onMailNotReceived"
				  class="mail_not_received"
				  >
					{{ $t('account-signin.CONFIRMATION_MAIL_NOT_RECEIVED') }}
				</a>
			</div><br>
		</div>
		<WDGMessage
		  v-if="mailReSent === true"
		  id="message"
		  iconFont="ok"
		  iconColor="palegreen"
		  >
			<slot slot="label">{{ $t('account-signin.CONFIRMATION_MAIL_SENT') }}</slot>
		</WDGMessage>
	</div>
</template>
<script>
import i18n from '@/i18n'
import { store } from '../store.js'
import { requests } from '../requests.js'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGInput from '@/../../common/src/components/WDGInput'
export default {
	name: 'TheScreenConfirmation',
	components: {
		WDGMascot,
		WDGButton,
		WDGMessage,
		WDGForm,
		WDGCheckbox,
		WDGInput
	},
	data () {
		return {
			changemail: false,
			sharedState: store.state,
			validationEmailSent: false,
			newMailSent: false,
			mailReSent: false,
			loading: false,
			isErrorVisible: false,
			errorMessage: ''
		}
	},
	created () {
		console.log('created sendValidationEmail')
		requests.sendValidationEmail(this.sharedState.user.email, this.sharedState.creation, this.onSendValidationEmailRequestResult)
	},
	methods: {
		onMailNotReceived () {
			console.log('onMailNotReceived')
			requests.sendValidationEmail(this.sharedState.user.email, this.sharedState.creation, this.onResendValidationEmailRequestResult)
		},
		onChangeEmailEvent () {
			console.log('onChangeEmailEvent')
			requests.changeAccountEmail(this.sharedState.user.email, this.sharedState.user.newMail, this.onChangeAccountEmailRequestResult)
		},
		onSendValidationEmailRequestResult: function (requestResult) {
			console.log('onSendValidationEmailRequestResult')
			// this.loading = false
			this.validationEmailSent = false
			if (requestResult === '' || requestResult === undefined || requestResult === 'error' || requestResult.status === 'email-not-sent') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CONFIRMATION_MAIL_NOT_SENT')
			} else if (requestResult.status === 'not-existing-account') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CONFIRMATION_MAIL_NO_ACCOUNT')
			} else if (requestResult.status === 'empty') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CONFIRMATION_MAIL_NOT_SENT')
			} else if (requestResult.status === 'email-sent') {
				this.validationEmailSent = true
			}
		},
		onResendValidationEmailRequestResult: function (requestResult) {
			console.log('onResendValidationEmailRequestResult')
			this.mailReSent = false
			if (requestResult === '' || requestResult === undefined || requestResult === 'error' || requestResult.status === 'email-not-sent') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CONFIRMATION_MAIL_NOT_SENT')
			} else if (requestResult.status === 'not-existing-account') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CONFIRMATION_MAIL_NO_ACCOUNT')
			} else if (requestResult.status === 'empty') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CONFIRMATION_MAIL_NOT_SENT')
			} else if (requestResult.status === 'email-sent') {
				this.mailReSent = true
			}
		},
		onChangeAccountEmailRequestResult: function (requestResult) {
			console.log('onChangeAccountEmailRequestResult')
			this.newMailSent = false
			if (requestResult === '' || requestResult === undefined || requestResult === 'error' || requestResult.status === 'email-not-sent') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CHANGE_MAIL_NOT_SENT')
			} else if (requestResult.status === 'not-existing-account') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CHANGE_MAIL_NO_ACCOUNT')
			} else if (requestResult.status === 'empty') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CHANGE_MAIL_NOT_SENT')
			} else if (requestResult.status === 'email-adress-not-ok') {
				this.isErrorVisible = true
				this.errorMessage = i18n.t('account-signin.CHANGE_MAIL_NOT_OK')
			} else if (requestResult.status === 'email-changed') {
				this.newMailSent = true
			}
		}
	},
	computed: {
		isNewEmailValid() {
			return store.isEmailValid(this.sharedState.user.newMail)
		}
	}
}
</script>
<style>
div.the-screen-confirmation {
  margin: 32px 0px;
  padding: 30px;
}
div.the-screen-confirmation .intro {
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
}
div.the-screen-confirmation .wdg-message {
	max-width: 566px;
    margin: auto;
}
div.the-screen-confirmation .wdg-mascot {
    display: flex;
    flex-direction: row-reverse;
    max-width: 100%;
    margin-bottom: 16px;
    float:none;
}
div.the-screen-confirmation .wdg-mascot .image{
    width: 100%;
}
div.the-screen-confirmation .link {
    margin-bottom: 16px;
    text-align: center;
}
div.the-screen-confirmation a.mail_not_received {
    color: #EA4F51;
	text-decoration: underline;
	cursor: pointer;
}
div.the-screen-confirmation .link .wdg-button {
	max-width: 66px;
    margin: auto;
}
div.the-screen-confirmation .form {
    margin-bottom: 16px;
    margin-left: 360px;
}
div.the-screen-confirmation .form .send-mail {
    display:flex;
}
div.the-screen-confirmation .form .wdg-button {
	max-width: 177px;
    width: 177px;
}

</style>

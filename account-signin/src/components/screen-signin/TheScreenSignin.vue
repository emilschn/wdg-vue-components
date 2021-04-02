<template>
	<div class="the-screen-signin">
		<WDGMascot type="face-2" v-if="getMascotType == 'ask-email'">
			<slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WEDOGOOD') }}</slot>
		</WDGMascot>
		<WDGMascot type="face-1" v-if="getMascotType == 'connexion'">
			<slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WELCOME') }}{{ sharedState.user.name }} !</slot>
		</WDGMascot>
		<WDGMascot type="side-1" v-if="getMascotType == 'create-account'">
			<slot slot="text">
				<span>
					<span class="title">{{ $t('account-signin.MASCOT_TEXT_NOTICE_1') }}</span><br><br>
					<span class="title">{{ $t('account-signin.MASCOT_TEXT_NOTICE_2') }}</span>
					<span class="title"><b>{{ $t('account-signin.MASCOT_TEXT_NOTICE_2bis') }}</b></span><br><br>
					<span class="title"><i>{{ $t('account-signin.MASCOT_TEXT_NOTICE_3') }}</i></span>
				</span>
			</slot>
		</WDGMascot>

		<WDGMascot type="side-2" v-if="getMascotType == 'is-orga'">
			<slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WELCOME') }}{{ orgaName }} !</slot>
		</WDGMascot>

		<WDGForm>
			<TheScreenSigninEmail
			  :onEmailChanged="onEmailChangedEvent"
			  />

			<!-- le compte existe et c'est une organization -->
			<div v-if="loginEmailStep === 'orga-account'">
				<br>
				<WDGMessage
				  id="message"
				  iconSVG="info.svg"
				  >
					<slot slot="label">{{ $t('account-signin.SIGNIN_ERROR_ORGA') }}</slot>
				</WDGMessage><br>
				{{ $t('account-signin.LABEL_ORGA') }} {{orgaName}}
				<WDGButton
				  color="transparent"
				  type="button"
				  icon="user"
				  v-for="account in orgaAccounts"
				  :name="account.name"
				  :id="account.email"
				  v-bind:key="account.email"
				  :clickEvent="switchOrgaAccount"
				  >
					<slot slot="label">{{ account.name }}</slot>
				</WDGButton>
			</div>

			<!-- le compte existe et c'est une connexion via facebook -->
			<TheScreenSigninFacebook
			  v-else-if="loginEmailStep === 'facebook-account'"
			  />

			<!-- le compte n'existe pas, on doit le créer -->
			<TheScreenSigninNewAccount
			  v-else-if="loginEmailStep === 'not-existing-account'"
			  />

			<!-- le compte existe on se connecte avec mot de passe -->
			<TheScreenSigninPassword
			  v-else-if="loginEmailStep === 'existing-account'"
			  :onLoginSuccess="onLoginSuccessEvent"
			  />
		</WDGForm>
	</div>
</template>

<script>
// import i18n from '@/i18n'
import { store } from '../../store.js'
import TheScreenSigninEmail from '@/../../account-signin/src/components/screen-signin/TheScreenSigninEmail'
import TheScreenSigninPassword from '@/../../account-signin/src/components/screen-signin/TheScreenSigninPassword'
import TheScreenSigninFacebook from '@/../../account-signin/src/components/screen-signin/TheScreenSigninFacebook'
import TheScreenSigninNewAccount from '@/../../account-signin/src/components/screen-signin/TheScreenSigninNewAccount'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenSignin',
	components: {
		TheScreenSigninEmail,
		TheScreenSigninPassword,
		TheScreenSigninFacebook,
		TheScreenSigninNewAccount,
		WDGForm,
		WDGMascot,
		WDGMessage,
		WDGButton
	},
	data () {
		return {
			loginEmailStep: { type: String, default: 'empty-email' },
			sharedState: store.state,
			orgaAccounts: { type: Array },
			orgaName: ''
		}
	},
	methods: {
		/**
		 * Fin de l'analyse de la modification de l'e-mail saisi
		 */
		onEmailChangedEvent (result) {
			this.sharedState.context = 'wdg'
			if (result.status === 'facebook-account') {
				this.sharedState.context = 'facebook'
			}
			this.loginEmailStep = result.status
			if (result.organizationname !== undefined && result.organizationname !== '') {
				this.orgaName = result.organizationname
				this.orgaAccounts = []
				for (let i = 0; i < result.team_members.length; i++) {
					let userTeamMember = result.team_members[i]
					let userItem = {
						email: userTeamMember.email,
						name: userTeamMember.firstname + ' ' + userTeamMember.lastname,
						status: userTeamMember.status
					}
					this.orgaAccounts.push(userItem)
				}
			}
			if (result.firstname !== '') {
				this.sharedState.user.name = result.firstname + ' ' + result.lastname
			}
		},

		/**
		 * La requête d'identification a retourné succès
		 */
		onLoginSuccessEvent (urlToRedirect) {
			// Validation par mail
			if (urlToRedirect === 'email-validation') {
				store.changeStep('confirmation')

			// Redirection vers le site
			} else {
				window.location = urlToRedirect
			}
		},

		switchOrgaAccount: async function (...args) {
			this.sharedState.user.email = args[0].id
			this.sharedState.user.name = args[0].name
			this.$root.$emit('changeEmailAccount', this.sharedState.user.email)
			for (let i = 0; i < this.orgaAccounts.length; i++) {
				if (this.sharedState.user.email === this.orgaAccounts[i].email) {
					this.loginEmailStep = this.orgaAccounts[i].status
				}
			}
		}
	},
	computed: {
		getMascotType () {
			if (this.loginEmailStep === 'existing-account' || this.loginEmailStep === 'facebook-account') {
				return 'connexion'
			} else if (this.loginEmailStep === 'orga-account') {
				return 'is-orga'
			} else if (this.loginEmailStep === 'not-existing-account') {
				return 'create-account'
			} else {
				return 'ask-email'
			}
		}
	}
}
</script>

<style>
.the-screen-signin .wdg-form {
	margin: 40px;
	/* font-size: 20px; */
	/* line-height: 60px; */
	font-weight: 500;
}
.the-screen-signin input#email {
	width: 370px;
}
.the-screen-signin input#password {
	width: 370px;
}
.the-screen-signin div .info {
	width: 400px;
	font-size: 12px;
	font-weight: 400;
	color: #C2C2C2;
	margin-top: 10px;
}
.the-screen-signin .name {
	display: flex;
	justify-content: space-between;
}
.the-screen-signin .cgu {
	width: 400px;
	font-size: 12px;
	font-weight: 400;
	color: #C2C2C2;
	margin-top: 10px;
}
.wdg-message {
	width: 370px;
	left: 242.5498046875px;
	top: 344px;
	font-size: 12px;
	font-style: normal;
	font-weight: 400;
	line-height: 21px;
	letter-spacing: 0em;
	text-align: left;
}
.the-screen-signin button {
	margin-top: 10px;
	max-width: 370px;
}
div.the-screen-signin a {
	color: #EA4F51;
	text-decoration: underline;
	cursor: pointer;
}
.the-screen-signin .wdg-mascot{
	max-width: 300px;
}
@media only screen and (max-width: 767px) {
	.the-screen-signin .content {
		flex-direction: column;
	}
	.the-screen-signin .time {
		margin-bottom: 50px;
	}
	.wdg-mascot {
		display: none;
	}
	.the-screen-signin button {
		max-width: 200px;
	}
}
</style>

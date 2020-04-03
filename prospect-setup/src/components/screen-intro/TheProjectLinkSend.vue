<template>
	<div class="the-project-link-send">
		<div class="the-project-link-send-mail" v-if="canShowSendMail == true">
			<div class="text">{{ sendText }}</div>
			<WDGForm
			  name="form-signin"
			  :action="ajaxUrl"
			  :onSubmitEvent="formSubmit"
			  v-bind:hasFiles="false"
			  :errorFeedback="errorFeedback"
			  :successFeedback="successFeedback"
			  >
				<WDGInput
				  :value="sharedState.user.email"
				  v-bind:valueReturn.sync="sharedState.user.email"
				  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_USER_EMAIL')"
				  customStyle="natural-language"
				  validationRule="email"
				  />
				<WDGButton
				  color="blue"
				  type="submit"
				  v-bind:disabled="loading"
				  >
					<slot slot="label">{{ $t('common.SEND') }}</slot>
				</WDGButton>
			</WDGForm>
		</div>
		<div class="the-project-link-send-title" v-on:click="showMail" v-else>
			<u>{{ $t('project-setup.intro.the-project-link-send.TITLE') }}</u>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import i18n from '@/i18n'
import { store } from '../../store.js'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'TheProjectLinkSend',
	components: {
		WDGForm,
		WDGInput,
		WDGButton
	},
    props: {
        ajaxUrl: { type: String, default: '' }
    },
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			errorFeedback: '',
			successFeedback: '',
			canShowSendMail: false,
			loading: false,
			sendText: i18n.t('project-setup.intro.the-project-link-send.TEXT')
        }
    },
	methods: {
		showMail: function (event) {
			this.canShowSendMail = true
		},
		formSubmit () {
			this.errorFeedback = ''
			this.successFeedback = ''
			if (this.sharedState.user.email === '') {
				this.errorFeedback = i18n.t('project-setup.intro.the-project-link-send.ERROR_EMAIL_EMPTY')
			} else {
				this.loading = true
				let data = new FormData()
				data.append('action', 'prospect_setup_send_mail_user_project_drafts')
				data.append('email', this.sharedState.user.email)

				axios
					.post (this.sharedProps.ajaxurl, data)
					.then (response => {
						let responseData = response.data
						if (responseData.has_error === '1') {
							this.errorFeedback = i18n.t(getErrorMessage(responseData.error_str))
						} else {
							if (responseData.email_sent === '1') {
								this.successFeedback = i18n.t('project-setup.intro.the-project-link-send.EMAIL_SENT')
							} else {
								this.errorFeedback = i18n.t('project-setup.intro.the-project-link-send.EMAIL_SEND_ERROR')
							}
						}
					})
					.catch (error => {
						console.log(error)
					})
					.finally (() => {
						this.loading = false
					})
			}
		}
	}
}
function getErrorMessage (errorCode) {
	switch (errorCode) {
		case 'no_project':
			return 'project-setup.intro.the-project-link-send.ERROR_EMAIL_NO_PROJECT'
		case 'empty_email':
			return 'project-setup.intro.the-project-link-send.ERROR_EMAIL_EMPTY'
		case 'incorrect_email':
			return 'project-setup.intro.the-project-link-send.ERROR_EMAIL_INCORRECT'
		default:
			return ''
	}
}
</script>

<style>
.the-project-link-send-title {
	font-size: 12px;
	text-align: center;
	color: #B4B4B4;
	cursor: pointer;
}

.the-project-link-send-mail {
	background: #f6f6f6;
	width: 715px;
	margin: 0px auto;
	padding: 16px;
}
.the-project-link-send-mail .text {
	text-align: center;
}
.the-project-link-send-mail .wdg-form {
	margin: 16px 0px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	text-align: center;
}
.the-project-link-send-mail .wdg-form > span {
	flex: 0 0 100%;
}
.the-project-link-send-mail .wdg-input {
	width: 246px;
	margin-top: 0px;
	margin-bottom: 0px;
}
.the-project-link-send-mail .wdg-button {
	width: 140px;
	margin-top: 0px;
	margin-bottom: 0px;
}
</style>

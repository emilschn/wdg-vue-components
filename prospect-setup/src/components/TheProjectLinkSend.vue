<template>
	<div class="the-project-link-send">
		<div class="the-project-link-send-mail" v-if="canShowSendMail == true">
            <br>
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
		    email: '',
		    canShowSendMail: { type: Boolean, default: false },
            loading: false,
            sendText: { type: String, default: i18n.t('project-setup.intro.the-project-link-send.TEXT') }
        }
    },
    methods: {
        showMail: function (event) {
            this.canShowSendMail = true
        },
        formSubmit () {
            this.loading = true
            if (this.email === '') {
                this.sendText = i18n.t('project-setup.intro.the-project-link-send.ERROR_EMAIL_EMPTY')
            } else {
                let data = new FormData()
                data.append('action', 'send_user_draft_projects')
                data.append('email', this.email)

                axios
                    .post (this.ajaxUrl, data)
                    .then (response => {
                        let responseData = response.data
                        if (responseData.has_error === '1') {
                            this.sendText = i18n.t(getErrorMessage(responseData.error_str))
                            this.loading = false
                        } else {
                            this.sendText = i18n.t('project-setup.intro.the-project-link-send.EMAIL_SENT')
                        }
                    })
                    .catch (error => {
                        console.log(error)
                        this.loading = false
                    })
                    .finally (() => {
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
	text-align: center;
	color: #B4B4B4;
	font-size: 12px;
    cursor: pointer;
}
.the-project-link-send-mail {
	background: #f6f6f6;
    margin: 0px auto;
    width: 715px;
    height: 180px;
}
.the-project-link-send-mail .text {
	text-align: center;
}
.the-project-link-send-mail .wdg-form {
    margin-top: 20px;
	text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.the-project-link-send-mail .wdg-button {
    width: 140px;
    margin-top: 0px;
    margin-bottom: 0px;
}
.the-project-link-send-mail .wdg-input {
    width: 246px;
    margin-top: 0px;
    margin-bottom: 0px;
}

</style>

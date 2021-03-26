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
                        :iconVisibility=validateEmail(sharedState.user.newMail)
                        :value="sharedState.user.newMail"
                        v-bind:valueReturn.sync="sharedState.user.newMail"
                        customStyle="natural-language"
                        />.<br><br>
                        <div class="send-mail">
                            <WDGButton
                                v-if="validateEmail(this.sharedState.user.newMail)"
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
                                <slot slot="label">{{ $t('account-signin.CONFIRMATION_MAIL_SENT') }}</slot>
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
            <div>
                <WDGButton
                    color="blue"
                    type="button"
                    :clickEvent="onGoNextClick"
                    icon="arrow-right"
                    >
                    <slot slot="label"></slot>
                </WDGButton>
            </div>
        </div>
    </div>
</template>
<script>
import { store } from '../store.js'
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
            newMailSent: false
		}
	},
	methods: {
        validateEmail (value) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true
            } else {
                return false
            }
        },
		onMailNotReceived () {
			console.log('onMailNotReceived')
		},
        onGoNextClick () {
			console.log('onGoNextClick')
        },
        onChangeEmailEvent () {
			console.log('onChangeEmailEvent')
            this.newMailSent = true
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

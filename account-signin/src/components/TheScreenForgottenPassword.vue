<template>
    <div class="the-screen-forgotten-password">
		<div class="intro">
			{{ $t( "account-signin.FORGOTTEN_PASS_TITLE" ) }}
		</div>
        <br>
        {{ $t( "account-signin.FORGOTTEN_PASS_TEXT_1" ) }}
        <br><br>
        {{ $t( "account-signin.FORGOTTEN_PASS_TEXT_2" ) }}<br><br>
        <WDGForm>
            <WDGInput
                id="email"
                name="email"
                type="email"
                icon="ok"
                :iconVisibility=validateEmail(sharedState.user.email)
                :value="sharedState.user.email"
                v-bind:valueReturn.sync="sharedState.user.email"
                customStyle="natural-language"
                /><br><br>
            <div class="send-mail">
                <WDGButton
                    v-if="validateEmail(this.sharedState.user.email)"
                    color="red"
                    type="button"
                    :clickEvent="onSendReinitPass"
                    >
                        <slot slot="label">{{ $t('account-signin.FORGOTTEN_PASS_BUTTON') }}</slot>
                </WDGButton>
                <WDGMessage
                    v-if="reinitPassSent === true"
                    id="message"
                    iconFont="ok"
                    iconColor="palegreen"
                    >
                    <slot slot="label">{{ $t('account-signin.CONFIRMATION_MAIL_SENT') }}</slot>
                </WDGMessage>
            </div>
        </WDGForm>

    </div>
</template>

<script>
import { store } from '../store.js'
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
	data () {
		return {
			sharedState: store.state,
            reinitPassSent: false
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
        onSendReinitPass () {
			console.log('onSendReinitPass')
            this.reinitPassSent = true
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
  margin-bottom: 16px;
  font-size: 24px;
  text-align: left;
  font-weight: 700;
  text-transform: uppercase;
}
div.the-screen-forgotten-password .wdg-form .send-mail {
    display:flex;
    align-items: center;
}
div.the-screen-forgotten-password .wdg-button {
	max-width: 325px;
    width: 325px;
}
div.the-screen-forgotten-password .wdg-message {
	max-width: 325px;
    width: 325px;
    margin-left: 16px;
	height: 48px;
}
</style>

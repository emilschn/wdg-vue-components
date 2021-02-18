<template>
	<div class="the-screen-signin">
        <WDGMascot type="face-1">
            <slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WEDOGOOD') }}</slot>
        </WDGMascot>

		<WDGMascot type="face-2" v-if="getMascotType == '1'">
			<slot slot="text">{{ $t('account-signin.MASCOT_TEXT_NOTICE') }}</slot>
		</WDGMascot>
        <WDGForm>
			<div>
				{{ $t('account-signin.LABEL_MAIL') }}<br>

				<WDGInput
				  id="email"
				  name="email"
				  type="email"
				  customStyle="natural-language"
			  	  /><br>
		        <WDGMessage
				  id="message"
                  icon="info.svg"
                  >
					<slot slot="label">{{ $t('account-signin.SIGNIN_ERROR_NOT_FOUND') }}</slot>
                </WDGMessage>
            </div>
        </WDGForm>
	</div>
</template>

<script>
// import i18n from '@/i18n'
// import { store } from '../../store.js'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGMessage from '@/../../common/src/components/WDGMessage'
export default {
	name: 'TheScreenSignin',
	components: {
		WDGForm,
		WDGInput,
		WDGMascot,
        WDGMessage
	},
	props: {
	},
	data () {
		return {
		}
	},
    methods: {
    },
	computed: {
		isExistingAccount () {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return false
		},
		getMascotType () {
			/* if (this.sharedState.organization.sourceProspect !== '') {
				return '2'
			} else {
				if (this.sharedState.organization.type === 'not-created') {
					return 'not-created'
				} else if (this.sharedState.organization.type === 'microbusiness') {
					return 'microbusiness'
				} else if (this.sharedState.organization.location === 'out-euro') {
					return 'out-euro'
				} else if (this.currentTypedOrganizationAmountNeeded > 0 && this.currentTypedOrganizationAmountNeeded < 10000) {
					return 'less-10k'
				} */

				return '2'
			// }
		}
	}
}
</script>

<style>
    .the-screen-signin .wdg-form {
		margin: 40px;
		font-size: 20px;
		line-height: 60px;
		font-weight: 500;
	}
	.the-screen-signin input#email {
		width: 370px;
	}
	.wdg-message {
        width: 364.75px;
        left: 242.5498046875px;
        top: 344px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
	}
    .wdg-mascot{
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

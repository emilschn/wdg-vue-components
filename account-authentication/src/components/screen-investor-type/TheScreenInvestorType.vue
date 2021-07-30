<template>
	<div class="the-screen-investor-type">
		<WDGMascot type="face-1" alignMascot="left" :displayText="false" />
		<div class="question">
			<div class="question-bg">
				{{ $t('account-authentication.INVEST_FOR_ORGANIZATION') }}
			</div>
			<WDGRadioButton
			  name="need-orga"
			  value="1"
			  :groupValue="userNeedOrga"
			  :onChange="onNeedOrgaChangeLocalEvent"
			  >
				<slot slot="label-after">{{ $t('common.YES') }}</slot>
			</WDGRadioButton>
			<WDGRadioButton
			  name="need-orga"
			  value="0"
			  :groupValue="userNeedOrga"
			  :onChange="onNeedOrgaChangeLocalEvent"
			  >
				<slot slot="label-after">{{ $t('common.NO') }}</slot>
			</WDGRadioButton>

			<WDGMessage
			  v-if="userNeedOrga === '1'"
			  iconSVG="warning.svg"
			  iconColor="pink"
			  >
				<slot slot="label">{{ $t('account-authentication.YOU_MUST_REPRESENT_ORGANIZATION') }}</slot>
			</WDGMessage>

			<WDGButton
			  v-if="userNeedOrga !== ''"
			  color="red"
			  type="button"
			  :clickEvent="onButtonConfirmInvestorTypeEvent"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>
	</div>
</template>

<script>
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGRadioButton from '@/../../common/src/components/WDGRadioButton'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorType',
	components: {
		WDGMascot,
		WDGRadioButton,
		WDGMessage,
		WDGButton
	},
	props: {
		onConfirmUserType: Function
	},
	data () {
		return {
			userNeedOrga: ""
		}
	},
	methods: {
		onNeedOrgaChangeLocalEvent (newValue) {
			this.userNeedOrga = newValue
		},
		onButtonConfirmInvestorTypeEvent () {
			this.onConfirmUserType(this.userNeedOrga)
		}
	}
}
</script>

<style>
	div.the-screen-investor-type {
		margin: 90px;
	}
	div.the-screen-investor-type div.question {
		float: left;
		width: 500px;
		margin-left: 20px;
	}
	div.the-screen-investor-type div.question-bg {
		padding: 36px;
		background: #ebebeb;
		margin-bottom: 30px;
	}
</style>

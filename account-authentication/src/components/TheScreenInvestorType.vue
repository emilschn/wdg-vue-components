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
		</div>
	</div>
</template>

<script>
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGRadioButton from '@/../../common/src/components/WDGRadioButton'
export default {
	name: 'TheScreenInvestorType',
	components: {
		WDGMascot,
		WDGRadioButton
	},
	data () {
		return {
			userNeedOrga: "0"
		}
	},
	methods: {
		onNeedOrgaChangeLocalEvent (newValue) {
			this.userNeedOrga = newValue
			// console.log(this.userNeedOrga)
		}
	}
}
</script>

<style>
	div.the-screen-investor-type {
		margin: 50px 0px;
	}
	div.the-screen-investor-type div.question {
		float: left;
		width: 500px;
	}
	div.the-screen-investor-type div.question-bg {
		padding: 50px;
		background: #ebebeb;
	}
</style>

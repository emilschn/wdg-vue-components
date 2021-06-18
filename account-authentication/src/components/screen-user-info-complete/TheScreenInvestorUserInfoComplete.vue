<template>
	<div class="the-screen-investor-user-info-complete">
		<WDGMascot type="face-4" alignMascot="left" :displayText="false" />
		<div class="description">
			<p v-html="$t('account-authentication.user-infos.INFO_COMPLETE_1')"></p>
			<p v-html="$t('account-authentication.user-infos.INFO_COMPLETE_2')"></p>

			<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="onContinue"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>
	</div>
</template>

<script>
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorUserInfoComplete',
	components: {
		WDGMascot,
		WDGButton
	},
	props: {
		onContinue: Function
	}
}
</script>

<style>
	div.the-screen-investor-user-info-complete {
		margin: 50px 0px;
	}
	div.the-screen-investor-user-info-complete div.description {
		float: left;
		width: 500px;
		padding: 50px;
		background: #ebebeb;
	}
</style>

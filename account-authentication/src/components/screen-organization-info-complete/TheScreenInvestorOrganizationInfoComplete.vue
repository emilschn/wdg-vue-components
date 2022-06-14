<template>
	<div class="the-screen-investor-organization-info-complete">
		<WDGMascot type="face-4" alignMascot="left" :displayText="false" />
		<div class="description">
			<p v-html="$t('account-authentication.organization-infos.INFO_COMPLETE_1')"></p>
			<p v-html="$t('account-authentication.user-infos.INFO_COMPLETE_2')"></p>
			<p v-html="$t('account-authentication.organization-infos.INFO_COMPLETE_3')"></p>

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
	name: 'TheScreenInvestorOrganizationInfoComplete',
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
	div.the-screen-investor-organization-info-complete {
		margin: 50px 0px;
	}
	div.the-screen-investor-organization-info-complete div.description {
		float: left;
		width: 500px;
		padding: 50px;
		background: #ebebeb;
	}
	@media screen and (min-width: 768px) and (max-width: 959px) {
		div.the-screen-investor-organization-info-complete div.description {
			width: 45%;
			margin-bottom: 50px;
		}
	}
</style>

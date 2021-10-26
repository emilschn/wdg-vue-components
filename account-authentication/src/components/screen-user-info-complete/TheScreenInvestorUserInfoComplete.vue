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
		display: flex;
		align-items: center;
	}
	div.the-screen-investor-user-info-complete div.description {
		float: left;
		width: 500px;
		padding: 50px;
		background: #ebebeb;
		margin-bottom: 50px;
	}
	div.the-screen-investor-user-info-complete .wdg-button button {
		margin-bottom: 0;
	}
	@media screen and (max-width: 767px) {
		div.the-screen-investor-user-info-complete {
			flex-direction: column;
		}
		div.the-screen-investor-user-info-complete div.description {
			width: auto;
			margin: 0 24px 50px 24px
		}
	}
	@media screen and (min-width: 768px) and (max-width: 959px) {
		div.the-screen-investor-user-info-complete {
			margin-right: 20px;
		}
		}
</style>

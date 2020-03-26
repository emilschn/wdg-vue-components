<template>
	<div class="the-result-campaign-advice">
		<div class="intro">
			{{ $t('project-setup.project-result.YOU_CAN_RAISE') }}<br>
			<span class="intro-amount">{{ amountRaised }} €</span><br>
			<span v-if="true">{{ $t('project-setup.project-result.TARGET_LOVEMONEY') }}<br></span>
			<span v-if="false">{{ $t('project-setup.project-result.TARGET_PRIVATE') }}<br></span>
			<span v-if="false">{{ $t('project-setup.project-result.TARGET_PUBLIC') }}<br></span>
			{{ $t('project-setup.project-result.YOU_WILL_PAY') }}
			{{ percentRoyalties }} %
			{{ $t('project-setup.project-result.OF_YOUR_TURNOVER') }}<br>
		</div>

		<WDGSeeMore amount="500" :uncheckedItems="uncheckedItemsCrowdfunding"  :checkedItems="checkedItemsCrowdfunding">
			<slot slot="title">{{ $t('project-setup.project-result.formulas.crowdfunding.TITLE') }}</slot>
			<slot slot="text">{{ $t('project-setup.project-result.formulas.crowdfunding.TEXT') }}</slot>
		</WDGSeeMore>

		<WDGSeeMore amount="1700">
			<slot slot="title">{{ $t('project-setup.project-result.options.complete.TITLE') }}</slot>
			<slot slot="text">{{ $t('project-setup.project-result.options.complete.TEXT') }}</slot>
		</WDGSeeMore>
	</div>
</template>

<script>
import i18n from '@/i18n'
import WDGSeeMore from '@/../../common/src/components/WDGSeeMore'

export default {
	name: 'TheResultCampaignAdvice',
	components: {
		WDGSeeMore
	},
	props: {
		amountRaised: { type: Number, default: 10000 },
		percentRoyalties: { type: Number, default: 5 }
	},
	data () {
		return {
			uncheckedItemsCrowdfunding: [
				i18n.t('project-setup.project-result.formulas.crowdfunding.AMOUNT_1'),
				i18n.t('project-setup.project-result.formulas.crowdfunding.AMOUNT_2')
			],
			checkedItemsCrowdfunding: [
				i18n.t('project-setup.project-result.formulas.options.PAGE_VISIBLE_ON_WDG'),
				i18n.t('project-setup.project-result.formulas.options.COMMUNICATION_ON_NETWORKS'),
				i18n.t('project-setup.project-result.formulas.options.REFERENCED_TO_PARTNERS'),
				i18n.t('project-setup.project-result.formulas.options.MANAGED_THROUGH_PLATFORM'),
				i18n.t('project-setup.project-result.formulas.options.SUPPORT'),
				i18n.t('project-setup.project-result.formulas.options.PAYMENTS'),
				i18n.t('project-setup.project-result.formulas.options.EVALUATION'),
				i18n.t('project-setup.project-result.formulas.options.GREEN_LABEL')
			]
		}
	},
    methods: {
    }
}
</script>

<style>
div.the-result-campaign-advice {
	padding: 32px;
	background: #f4f2f2;
}
div.the-result-campaign-advice div.intro {
	margin-bottom: 32px;
	font-size: 20px;
}
div.the-result-campaign-advice div.intro span.intro-amount {
	font-size: 30px;
	font-weight: bold;
}
</style>

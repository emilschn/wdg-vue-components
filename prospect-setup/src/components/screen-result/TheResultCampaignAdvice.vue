<template>
	<div class="the-result-campaign-advice">
		<div class="intro">
			{{ $t('project-setup.project-result.YOU_CAN_RAISE') }}<br>
			<span class="intro-amount">{{ amountRaised }} €</span><br>
			<span v-if="sharedState.project.circlesToCommunicate === 'lovemoney'">{{ $t('project-setup.project-result.TARGET_LOVEMONEY') }}<br></span>
			<span v-if="sharedState.project.circlesToCommunicate === 'private'">{{ $t('project-setup.project-result.TARGET_PRIVATE') }}<br></span>
			<span v-if="sharedState.project.circlesToCommunicate === 'public'">{{ $t('project-setup.project-result.TARGET_PUBLIC') }}<br></span>
			{{ $t('project-setup.project-result.YOU_WILL_PAY') }}
			{{ percentRoyalties }} %
			{{ $t('project-setup.project-result.OF_YOUR_TURNOVER') }}<br>
		</div>

		<WDGSeeMore
		  amount="500"
		  :uncheckedItems="uncheckedItems"
		  :checkedItems="checkedItems"
		  >
			<slot slot="title" v-if="sharedState.project.circlesToCommunicate === 'lovemoney'">{{ $t('project-setup.project-result.formulas.lovemoney.TITLE') }}</slot>
			<slot slot="text" v-if="sharedState.project.circlesToCommunicate === 'lovemoney'">{{ $t('project-setup.project-result.formulas.lovemoney.TEXT') }}</slot>
			<slot slot="title" v-if="sharedState.project.circlesToCommunicate === 'private'">{{ $t('project-setup.project-result.formulas.private.TITLE') }}</slot>
			<slot slot="text" v-if="sharedState.project.circlesToCommunicate === 'private'">{{ $t('project-setup.project-result.formulas.private.TEXT') }}</slot>
			<slot slot="title" v-if="sharedState.project.circlesToCommunicate === 'public'">{{ $t('project-setup.project-result.formulas.crowdfunding.TITLE') }}</slot>
			<slot slot="text" v-if="sharedState.project.circlesToCommunicate === 'public'">{{ $t('project-setup.project-result.formulas.crowdfunding.TEXT') }}</slot>
		</WDGSeeMore>

		<WDGSeeMore
		  amount="0"
		  :checkedItems="checkedItemsOptionBasic"
		  v-if="!sharedState.project.needcommunicationadvice && (sharedState.project.circlesToCommunicate === 'lovemoney' || sharedState.project.alreadydonecrowdfunding)"
		  >
			<slot slot="title">{{ $t('project-setup.project-result.options.basic.TITLE') }}</slot>
			<slot slot="text">{{ $t('project-setup.project-result.options.basic.TEXT') }}</slot>
		</WDGSeeMore>

		<WDGSeeMore
		  amount="500"
		  :checkedItems="checkedItemsOptionStandard"
		  v-if="!sharedState.project.alreadydonecrowdfunding && !sharedState.project.needcommunicationadvice"
		  >
			<slot slot="title">{{ $t('project-setup.project-result.options.standard.TITLE') }}</slot>
			<slot slot="text">{{ $t('project-setup.project-result.options.standard.TEXT') }}</slot>
		</WDGSeeMore>

		<WDGSeeMore
		  amount="1700"
		  :checkedItems="checkedItemsOptionComplete"
		  v-if="sharedState.project.needcommunicationadvice"
		  >
			<slot slot="title">{{ $t('project-setup.project-result.options.complete.TITLE') }}</slot>
			<slot slot="text">{{ $t('project-setup.project-result.options.complete.TEXT') }}</slot>
		</WDGSeeMore>
	</div>
</template>

<script>
import { store } from '../../store.js'
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
		let checkedOptionsComplete = [
			i18n.t('project-setup.project-result.options.list.READ_PITCH_AND_COM'),
			i18n.t('project-setup.project-result.options.list.SUPPORT_TO_INVESTORS'),
			i18n.t('project-setup.project-result.options.list.WORKSHOP'),
			i18n.t('project-setup.project-result.options.list.CUSTOM_MONITORING'),
			i18n.t('project-setup.project-result.options.list.INVESTORS_MONITORING'),
			i18n.t('project-setup.project-result.options.list.SUPPORT_CENTER')
		]
		if (store.state.project.circlesToCommunicate === 'public') {
			checkedOptionsComplete.unshift(i18n.t('project-setup.project-result.options.list.COMMISSION_REDUCTION'))
		}

		return {
			sharedState: store.state,
			uncheckedItemsLoveMoney: [
				i18n.t('project-setup.project-result.formulas.lovemoney.AMOUNT_1'),
				i18n.t('project-setup.project-result.formulas.lovemoney.AMOUNT_2')
			],
			checkedItemsLoveMoney: [
				i18n.t('project-setup.project-result.formulas.options.MANAGED_THROUGH_PLATFORM'),
				i18n.t('project-setup.project-result.formulas.options.SUPPORT'),
				i18n.t('project-setup.project-result.formulas.options.UP_TO_5_INVESTORS'),
				i18n.t('project-setup.project-result.formulas.options.PAYMENTS')
			],
			uncheckedItemsPrivate: [
				i18n.t('project-setup.project-result.formulas.private.AMOUNT_1'),
				i18n.t('project-setup.project-result.formulas.private.AMOUNT_2')
			],
			checkedItemsPrivate: [
				i18n.t('project-setup.project-result.formulas.options.MANAGED_THROUGH_PLATFORM'),
				i18n.t('project-setup.project-result.formulas.options.SUPPORT'),
				i18n.t('project-setup.project-result.formulas.options.LIMITED_INVESTORS'),
				i18n.t('project-setup.project-result.formulas.options.PAYMENTS')
			],
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
			],
			checkedItemsOptionBasic: [
				i18n.t('project-setup.project-result.options.list.READ_PITCH'),
				i18n.t('project-setup.project-result.options.list.SUPPORT_TO_INVESTORS'),
				i18n.t('project-setup.project-result.options.list.SUPPORT_CENTER')
			],
			checkedItemsOptionStandard: [
				i18n.t('project-setup.project-result.options.list.READ_PITCH'),
				i18n.t('project-setup.project-result.options.list.SUPPORT_TO_INVESTORS'),
				i18n.t('project-setup.project-result.options.list.WORKSHOP'),
				i18n.t('project-setup.project-result.options.list.SUPPORT_CENTER')
			],
			checkedItemsOptionComplete: checkedOptionsComplete
		}
	},
    computed: {
		uncheckedItems () {
			if (this.sharedState.project.circlesToCommunicate === 'lovemoney') {
				return this.uncheckedItemsLoveMoney
			} else if (this.sharedState.project.circlesToCommunicate === 'private') {
				return this.uncheckedItemsPrivate
			}
			return this.uncheckedItemsCrowdfunding
		},
		checkedItems () {
			if (this.sharedState.project.circlesToCommunicate === 'lovemoney') {
				return this.checkedItemsLoveMoney
			} else if (this.sharedState.project.circlesToCommunicate === 'private') {
				return this.checkedItemsPrivate
			}
			return this.checkedItemsCrowdfunding
		}
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

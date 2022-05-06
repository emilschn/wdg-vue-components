<template>
	<div class="the-screen-result">
		<WDGMascot
		  type="face-2"
		  alignMascot="left"
		  :displayText=false
		  />

		<div class="description-container">
			<div class="description">
				<span v-html="$t('user-investment-capacity.result.CONSIDERED', { investorCategory: investorCategoryStr })"></span>
				<br>
				<a href="https://support.wedogood.co/fr/quest-ce-quun-investisseur-averti" target="_blank">{{ $t('common.KNOW_MORE') }}</a>
				<br><br>
				{{ $t('user-investment-capacity.result.CAN_INVEST') }}
				<span v-html="$t('user-investment-capacity.result.CAPACITY_AMOUNT', { capacityAmount: capacityAmountStr })"></span>
				{{ $t('user-investment-capacity.result.ADVICE_NOT_MORE') }}
				<br><br>
				{{ $t('user-investment-capacity.result.CAN_EDIT') }}
				{{ $t('user-investment-capacity.result.NEXT_YEAR') }}
			</div>

			<span>
				{{ $t('user-investment-capacity.result.LAWS') }}
			</span>
		</div>

		<div class="clear"></div>

		<WDGButton :clickEvent="onContinueClickEvent">
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { number } from '@/../../common/src/helpers/number.js'
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMascot from '@/../../common/src/components/WDGMascot'

export default {
	name: 'TheScreenResult',
	components: {
		WDGButton,
		WDGMascot
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
		onContinueClickEvent: function (event) {
			this.onContinue('redirect')
		},
		isSophisticated: function () {
			let totalYearlyRevenues = Number(this.sharedState.monthlyRevenue) * 12 + Number(this.sharedState.complementaryRevenue) + Number(this.sharedState.investmentsValue)
			return (this.sharedState.profession.hasFinanceJob || this.sharedState.knowledge.transactions || totalYearlyRevenues > 60000)
		}
	},
	computed: {
		investorCategoryStr () {
			if (this.isSophisticated()) {
				return i18n.t('user-investment-capacity.result.SOPHISTICATED')
			} else {
				return i18n.t('user-investment-capacity.result.UNSOPHISTICATED')
			}
		},
		capacityAmountStr () {
			return number.formatStr(this.sharedState.yearlyCapacityAmount, 'money')
		}
	}
}
</script>

<style>
	div.clear {
		clear: both;
	}

	div.the-screen-result {
		margin: 80px;
	}

	div.the-screen-result div.description-container {
		float: left;
		max-width: 500px;
	}

	div.the-screen-result div.description-container div.description {
		margin-bottom: 20px;
		padding: 40px;
		background: #ebebeb;
	}

	div.the-screen-result div.description-container > span {
		font-size: 13px;
		color: #a8a8a8;
	}

	div.the-screen-result .wdg-button {
		max-width: 300px;
		margin: auto;
	}
</style>

<template>
	<div class="the-screen-result">
		<WDGMascot
		  type="face-2"
		  alignMascot="left"
		  :displayText=false
		  />

		<div class="description-container">
			<div class="description">
				{{ $t('user-investment-capacity.result.CONSIDERED', { investorCategory: investorCategoryStr }) }}
				<br><br>
				{{ knowledgeStr }}
				<br>
				{{ $t('user-investment-capacity.result.CAPACITY_AMOUNT', { capacityAmount: capacityAmountStr }) }}
				<br>
				{{ $t('user-investment-capacity.result.CAN_INVEST') }}
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
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
		onContinueClickEvent: function (event) {
			console.log('')
		},
		hasOneOfTheKnowledge: function () {
			return (this.sharedState.knowledge.know1 || this.sharedState.knowledge.know2 || this.sharedState.knowledge.know3)
		}
	},
	computed: {
		investorCategoryStr () {
			if (this.hasOneOfTheKnowledge()) {
				return i18n.t('user-investment-capacity.result.SOPHISTICATED')
			} else {
				return i18n.t('user-investment-capacity.result.UNSOPHISTICATED')
			}
		},
		knowledgeStr () {
			return 'TODO'
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

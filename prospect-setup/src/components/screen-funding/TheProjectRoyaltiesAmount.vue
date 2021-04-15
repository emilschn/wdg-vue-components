<template>
	<div class="the-project-royalties-amount project-funding-subpart">
		<h3>
			{{ $t('project-setup.project-funding.royalties-amount.TITLE') }}
		</h3>

		<WDGInput
		  id="royalties-amount"
		  name="royalties-amount"
		  :value="valueReturn"
		  v-bind:valueReturn.sync="valueReturn"
		  v-bind:multiline="false"
		  v-bind:optional="false"
		  suffix="%"
		  autoFormat="wdg-percent"
		  eventNameToListen="updateRoyaltiesPercent"
		  :onChange="onChangeEvent"
		  />

		<div class="royalties-for-5-years">
			{{ $t('project-setup.project-funding.royalties-amount.OF_MY_QUARTERLY_TURNOVER') }}
		</div>

		<div class="yield-for-investors" v-if="royaltiesPercentType == 'default' || royaltiesPercentType == 'custom'">
			{{ $t('project-setup.project-funding.royalties-amount.YIELD_FOR_INVESTORS_1') }}
			<span>{{ yieldValueFormatted }}</span>
			{{ $t('project-setup.project-funding.royalties-amount.YIELD_FOR_INVESTORS_2') }}
		</div>

		<div class="advice default" v-if="royaltiesPercentType == 'default'">
			<svg width="11" height="30">
				<image xlink:href="@/../../common/src/assets/icons/info-blue.svg" src="@/../../common/src/assets/icons/info-blue.png" width="11" height="30"></image>
			</svg>
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_DEFAULT', { adviceMinPercent: minPercentFormatted, adviceMaxPercent: maxPercentFormatted }) }}
		</div>
		<div class="advice warning-over" v-if="royaltiesPercentType == 'warning-over'">
			<svg width="11" height="30">
				<image xlink:href="@/../../common/src/assets/icons/exclamation.svg" src="@/../../common/src/assets/icons/exclamation.png" width="11" height="30"></image>
			</svg>
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_WARNING_OVER', { adviceMinPercent: minPercentFormatted, adviceMaxPercent: maxPercentFormatted }) }}
			<a @click="onViewAdvice">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>
		<div class="advice warning-under" v-if="royaltiesPercentType == 'warning-under'">
			<svg width="11" height="30">
				<image xlink:href="@/../../common/src/assets/icons/exclamation.svg" src="@/../../common/src/assets/icons/exclamation.png" width="11" height="30"></image>
			</svg>
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_WARNING_UNDER', { adviceMinPercent: minPercentFormatted, adviceMaxPercent: maxPercentFormatted }) }}
			<a @click="onViewAdvice">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>
		<div class="advice not-ok" v-if="royaltiesPercentType == 'not-ok'">
			<svg width="11" height="30">
				<image xlink:href="@/../../common/src/assets/icons/info-blue.svg" src="@/../../common/src/assets/icons/info-blue.png" width="11" height="30"></image>
			</svg>
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_NOT_OK', { adviceMinPercent: minPercentFormatted, adviceMaxPercent: maxPercentFormatted }) }}
			<a @click="onViewAdvice">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>
		<div class="advice custom" v-if="royaltiesPercentType == 'custom'">
			<svg width="30" height="30">
				<image xlink:href="@/../../common/src/assets/icons/check-green.svg" src="@/../../common/src/assets/icons/check-green.png" width="30" height="30"></image>
			</svg>
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_CUSTOM', { adviceMinPercent: minPercentFormatted, adviceMaxPercent: maxPercentFormatted }) }}
			<a @click="onViewAdvice">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>

		<WDGButton :clickEvent="onViewDetails">
			<slot slot="label">{{ $t('project-setup.project-funding.royalties-amount.VIEW_DETAILS') }}</slot>
		</WDGButton>

		<svg width="20" height="20" v-if="royaltiesPercentType != 'default'">
			<image xlink:href="@/../../common/src/assets/icons/refresh.svg" src="@/../../common/src/assets/icons/refresh.png" width="20" height="20" />
		</svg>
		<a
		  @click="onReinitParameters"
		  class="reinit"
		  v-if="royaltiesPercentType != 'default'"
		  >
			{{ $t('project-setup.project-funding.royalties-amount.REINIT_PARAMETERS') }}
		</a>
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'TheProjectRoyaltiesAmount',
	components: {
		WDGInput,
		WDGButton
	},
	props: {
		onChange: { type: Function },
		onViewDetails: { type: Function },
		onViewAdvice: { type: Function },
		onReinitParameters: { type: Function },
		advicePercent: { type: Number, default: 3 },
		minPercent: { type: Number, default: 3 },
		maxPercent: { type: Number, default: 4 },
		totalTurnover: { type: Number, default: 0 }
	},
	data () {
		return {
			sharedState: store.state,
			valueReturn: store.state.project.royaltiesAmount.toString().split('.').join(','),
			yield: 0
		}
	},
	methods: {
		setRoyaltiesOK (isOK) {
			this.sharedState.project.royaltiesOK = isOK
		},
		setYield () {
			let royaltiesTotal = this.sharedState.project.royaltiesAmount * this.totalTurnover / 100
			let realAmountNeeded = this.sharedState.project.amountNeeded * 1000
			this.yield = Math.round(royaltiesTotal / realAmountNeeded * 100) / 100
			this.yield = Math.min(3, this.yield)
		},
		onChangeEvent () {
			let tempRoyaltiesAmountStr = this.valueReturn
			tempRoyaltiesAmountStr = tempRoyaltiesAmountStr.split(',').join('.').split(' ').join('')
			let tempRoyaltiesAmountNum = Number(tempRoyaltiesAmountStr)
			tempRoyaltiesAmountNum = Math.min(100, Math.max(0, tempRoyaltiesAmountNum))
			this.sharedState.project.royaltiesAmount = tempRoyaltiesAmountNum
			this.onChange()
		}
	},
	computed: {
		royaltiesPercentType () {
			this.setRoyaltiesOK(false)
			if (this.sharedState.project.commercialMargin === 0 && this.sharedState.project.royaltiesAmount !== '0' && this.sharedState.project.royaltiesAmount !== 0) {
				return 'warning-over'
			} else if (isNaN(this.minPercent) || this.minPercent === 0 || isNaN(this.maxPercent) || this.maxPercent === 0) {
				return ''
			} else if (this.maxPercent < this.minPercent) {
				return 'not-ok'
			} else if (this.sharedState.project.royaltiesAmount > this.maxPercent) {
				return 'warning-over'
			} else if (this.sharedState.project.royaltiesAmount < this.minPercent) {
				return 'warning-under'
			} else if (this.sharedState.project.royaltiesAmount === '0' || this.sharedState.project.royaltiesAmount === 0 || this.sharedState.project.isAutoFilledRoyalties) {
				if (this.sharedState.project.isAutoFilledRoyalties && this.sharedState.project.royaltiesAmount !== 0) {
					this.setRoyaltiesOK(true)
				}
				return 'default'
			}
			this.setRoyaltiesOK(true)
			return 'custom'
		},
		yieldValueFormatted () {
			this.setYield()
			return 'x' + this.yield.toString().split('.').join(',')
		},
		minPercentFormatted () {
			return this.minPercent.toString().split('.').join(',')
		},
		maxPercentFormatted () {
			return this.maxPercent.toString().split('.').join(',')
		}
	}
}
</script>

<style>
div.the-project-royalties-amount {
	text-align: center;
}
div.the-project-royalties-amount .wdg-input {
	margin-top: 16px;
}
div.the-project-royalties-amount .wdg-input input {
	width: 160px;
	font-size: 32px;
	text-align: center;
	padding-right: 32px;
	border-bottom: 2px solid #00879B;
	color: #00879B;
}
div.the-project-royalties-amount .wdg-input input:focus { /* focus plus propre pour l'accessibilité */
	outline: dotted 1px #c2c2c2;
}
div.the-project-royalties-amount .wdg-input span.input-suffix {
	left: -40px;
	top: 8px;
	font-size: 32px;
	color: #00879B;
}
div.the-project-royalties-amount .royalties-for-5-years {
	margin-bottom: 16px;
	font-size: 14px;
	color: #555;
}
div.the-project-royalties-amount .yield-for-investors {
	margin-bottom: 16px;
	font-size: 13px;
	color: #555;
}
div.the-project-royalties-amount .yield-for-investors span {
	font-weight: bold;
}
div.the-project-royalties-amount .advice {
	margin: 16px 0px;
	font-size: 13px;
}
div.the-project-royalties-amount .warning-over, div.the-project-royalties-amount .warning-under, div.the-project-royalties-amount .default, div.the-project-royalties-amount .custom, div.the-project-royalties-amount .not-ok {
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
div.the-project-royalties-amount .warning-over, div.the-project-royalties-amount .warning-under {
	border: 1px solid #F8CACA;
}
div.the-project-royalties-amount .advice svg {
	margin-bottom: 10px;
}
div.the-project-royalties-amount .custom {
	border: 1px solid #CEE9C0;
}
div.the-project-royalties-amount .default, div.the-project-royalties-amount .not-ok {
	border: 1px solid #B3DAE1;
}
div.the-project-royalties-amount .advice.warning-over, div.the-project-royalties-amount .advice.warning-under, div.the-project-royalties-amount .advice.not-ok, div.the-project-royalties-amount .advice.warning-over a, div.the-project-royalties-amount .advice.warning-under a, div.the-project-royalties-amount .advice.not-ok a {
	color: #333;
}
div.the-project-royalties-amount .advice a {
	text-decoration: underline;
	cursor: pointer;
}
div.the-project-royalties-amount a.reinit {
	font-size: 14px;
	text-decoration: underline;
	color: #B4B4B4;
	cursor: pointer;
	vertical-align: top;
}
@media only screen and (max-width: 767px) {
	div.the-project-royalties-amount .warning-over, div.the-project-royalties-amount .warning-under, div.the-project-royalties-amount .default, div.the-project-royalties-amount .custom, div.the-project-royalties-amount .not-ok {
		margin: 10px;
	}
}
</style>

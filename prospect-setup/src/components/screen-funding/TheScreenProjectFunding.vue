<template>
	<div class="the-screen-project-funding">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="3"
		  >
			<slot slot="title">{{ $t('project-setup.project-funding.TITLE') }}</slot>
		</TheTabTitle>

		<div class="total-funding-container">
			<TheProjectRoyaltiesAmount
			  ref="royaltiesAmount"
			  :onChange="onChangeRoyaltiesAmountEvent"
			  :onViewAdvice="onViewAdviceEvent"
			  :onViewDetails="onViewDetailsEvent"
			  :onReinitParameters="onReinitParametersEvent"
			  :minPercent="minPercentAdvice"
			  :maxPercent="maxPercentAdvice"
			  :advicePercent="advicePercent"
			  />

			<div class="estimation-margin-goal-container">
				<TheProjectEstimatedTurnoverByYear :onChange="onChangeAutoAdviceEvent" />

				<div class="margin-amount-container">
					<TheProjectCommercialMargin :onChange="onChangeAutoAdviceEvent" />

					<TheProjectGoalAmount :onChange="onChangeAutoAdviceEvent" />
				</div>
			</div>
		</div>

		<TheProjectRoyaltiesWarning :minPercent="minPercentAdvice" />

		<TheProjectRoyaltiesChart ref="royaltiesChart" />

		<TheProjectAdvice
		  ref="royaltiesAdvice"
		  :onReinitParameters="onReinitParametersEvent"
		  :adviceAmount="advicePercentFormatted"
		  v-if="canDisplayAdvice"
		  />

		<WDGToggle
		  colorChecked="#8BC79C"
		  colorUnchecked="#333"
		  :changeEvent="onChangeHasReadRoyaltiesEvent"
		  >
			<slot slot="label-before">{{ $t('project-setup.project-funding.TOGGLE_LABEL') }}</slot>
		</WDGToggle>

		<div
		  class="project-funding-navigation"
		  v-if="hasReadEstimatedRoyalties"
		  >
			<a @click="changeStepBackward">
			{{ $t('project-setup.PREVIOUS_STEP') }}
			</a>

			<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="changeStepForward"
			  >
				<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
			</WDGButton>
		</div>

		<TheProjectSave />
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGToggle from '@/../../common/src/components/WDGToggle'
import WDGButton from '@/../../common/src/components/WDGButton'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheProjectSave from '@/components/common/TheProjectSave'
import TheProjectEstimatedTurnoverByYear from '@/components/screen-funding/TheProjectEstimatedTurnoverByYear'
import TheProjectCommercialMargin from '@/components/screen-funding/TheProjectCommercialMargin'
import TheProjectGoalAmount from '@/components/screen-funding/TheProjectGoalAmount'
import TheProjectRoyaltiesAmount from '@/components/screen-funding/TheProjectRoyaltiesAmount'
import TheProjectRoyaltiesWarning from '@/components/screen-funding/TheProjectRoyaltiesWarning'
import TheProjectRoyaltiesChart from '@/components/screen-funding/TheProjectRoyaltiesChart'
import TheProjectAdvice from '@/components/screen-funding/TheProjectAdvice'

export default {
	name: 'TheScreenProjectFunding',
	components: {
		WDGToggle,
		WDGButton,
		TheTabTitle,
		TheProjectEstimatedTurnoverByYear,
		TheProjectCommercialMargin,
		TheProjectGoalAmount,
		TheProjectRoyaltiesAmount,
		TheProjectRoyaltiesWarning,
		TheProjectRoyaltiesChart,
		TheProjectAdvice,
		TheProjectSave
	},
	data () {
		return {
			sharedState: store.state,
			hasReadEstimatedRoyalties: false
		}
	},
	methods: {
		changeStepBackward: function (event) {
			store.changeStep('project-infos')
		},
		changeStepForward: function (event) {
			store.changeStep('project-investors')
		},
		refreshChart: function () {
			this.$refs.royaltiesChart.refreshChart()
		},
		setRoyaltiesAmountAsAdvice: function () {
			this.sharedState.project.royaltiesAmount = this.advicePercent
			this.$root.$emit('updateRoyaltiesPercent', this.sharedState.project.royaltiesAmount.toString().split('.').join(','))
		},
		onChangeRoyaltiesAmountEvent: function () {
			this.sharedState.project.isAutoFilledRoyalties = false
			this.refreshChart()
		},
		onChangeAutoAdviceEvent: function () {
			if (this.sharedState.project.isAutoFilledRoyalties) {
				this.setRoyaltiesAmountAsAdvice()
			}
			this.refreshChart()
		},
		onChangeHasReadRoyaltiesEvent: function (newValue) {
			this.hasReadEstimatedRoyalties = newValue
		},
		onViewAdviceEvent: function () {
			this.$refs.royaltiesAdvice.$el.scrollIntoView(true)
		},
		onViewDetailsEvent: function () {
			this.$refs.royaltiesChart.$el.scrollIntoView(true)
		},
		onReinitParametersEvent: function () {
			this.sharedState.project.isAutoFilledRoyalties = true
			this.setRoyaltiesAmountAsAdvice()
			this.$refs.royaltiesAmount.$el.scrollIntoView(true)
			this.refreshChart()
		}
	},
	computed: {
		totalTurnover () {
			return Number(this.sharedState.project.estimatedTurnover.year1) + Number(this.sharedState.project.estimatedTurnover.year2) + Number(this.sharedState.project.estimatedTurnover.year3) + Number(this.sharedState.project.estimatedTurnover.year4) + Number(this.sharedState.project.estimatedTurnover.year5)
		},
		minPercentAdvice () {
			if (this.totalTurnover > 0) {
				// ratio de 1 % pour 100 000 €
				let percentForRatio1per100k = this.sharedState.project.amountNeeded * 1000 / 100000
				// pourcent permettant le remboursement
				let percentForReimbursement = this.sharedState.project.amountNeeded * 1000 / this.totalTurnover * 100
				// le plus grand entre les deux
				return Math.ceil(Math.max(percentForRatio1per100k, percentForReimbursement) * 100) / 100
			}
			return 0
		},
		maxPercentAdvice () {
			// 10 % de la marge commercial
			return Math.ceil(this.sharedState.project.commercialMargin / 10 * 100) / 100
		},
		advicePercent () {
			if (this.totalTurnover > 0) {
				let idealPercent = Math.ceil(this.sharedState.project.amountNeeded * 2 / this.totalTurnover * 10000000) / 100
				return Math.min(100, Math.max(Math.min(idealPercent, this.maxPercentAdvice), this.minPercentAdvice))
			}
			return 0
		},
		advicePercentFormatted () {
			let advicePercentNum = this.advicePercent
			return advicePercentNum.toString().split('.').join(',')
		},
		canDisplayAdvice () {
			return this.sharedState.project.royaltiesAmount < this.minPercentAdvice || this.sharedState.project.royaltiesAmount > this.maxPercentAdvice
		}
	}
}
</script>

<style>
div.the-screen-project-funding {
	width: 96%;
	margin: auto;
}
div.the-screen-project-funding div.project-funding-subpart {
	padding: 24px;
	background: #f4f2f2;
}
div.the-screen-project-funding div.project-funding-subpart h3 {
	margin: 0px;
}
div.the-screen-project-funding div.the-project-royalties-amount {
	order: 2;
	margin-left: 16px;
	width: 29%;
}
div.the-screen-project-funding div.the-project-estimated-turnover-by-year {
	margin-bottom: 16px;
}
div.the-screen-project-funding div.margin-amount-container {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
div.the-screen-project-funding div.the-project-commercial-margin {
	margin-right: 16px;
	width: 39%;
}
div.the-screen-project-funding div.the-project-goal-amount {
	width: 59%;
}
div.the-screen-project-funding div.the-project-royalties-warning {
	clear: both;
}

div.project-funding-navigation {
	margin-top: 24px;
	text-align: center;
}
div.project-funding-navigation a {
	font-size: 13px;
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
	color: #B4B4B4;
}
div.project-funding-navigation a:before {
	display: inline-block;
	content: "\2190";
}
div.project-funding-navigation div.wdg-button {
	display: inline-block;
	width: 176px;
	margin-left: 16px;
}
div.estimation-margin-goal-container {
	display: flex;
	flex-flow: row wrap;
	width: 69%;
}
div.total-funding-container {
	display: flex;
	margin-top: 20px;
}
</style>

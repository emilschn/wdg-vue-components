<template>
	<div class="the-screen-project-funding">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="3"
		  >
			<slot slot="title">{{ $t('project-setup.project-funding.TITLE') }}</slot>
		</TheTabTitle>

		<TheProjectRoyaltiesAmount :onChange="refreshChart" :minPercent="minPercentAdvice" :maxPercent="maxPercentAdvice" />

		<TheProjectEstimatedTurnoverByYear :onChange="refreshChart" />

		<div class="margin-amount-container">
			<TheProjectCommercialMargin :onChange="refreshChart" />

			<TheProjectGoalAmount :onChange="refreshChart" />
		</div>

		<TheProjectRoyaltiesWarning :minPercent="minPercentAdvice" />

		<TheProjectRoyaltiesChart ref="royaltiesChart" />

		<WDGToggle
		  colorChecked="#8BC79C"
		  colorUnchecked="#333"
		  :changeEvent="onChangeHasReadRoyalties"
		  >
			<slot slot="label-before">{{ $t('project-setup.project-funding.TOGGLE_LABEL') }}</slot>
		</WDGToggle>

		<TheProjectAdvice
		  :adviceAmount="advicePercent"
		  v-if="canDisplayAdvice"
		  />

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
		onChangeHasReadRoyalties: function (newValue) {
			this.hasReadEstimatedRoyalties = newValue
		}
	},
	computed: {
		totalTurnover () {
			return Number(this.sharedState.project.estimatedTurnover.year1) + Number(this.sharedState.project.estimatedTurnover.year2) + Number(this.sharedState.project.estimatedTurnover.year3) + Number(this.sharedState.project.estimatedTurnover.year4) + Number(this.sharedState.project.estimatedTurnover.year5)
		},
		minPercentAdvice () {
			return Math.ceil(Math.max(0.01 * this.sharedState.project.amountNeeded / 10000, this.sharedState.project.amountNeeded / this.totalTurnover * 100) * 100000) / 100
		},
		maxPercentAdvice () {
			return Math.ceil(this.sharedState.project.amountNeeded * 2 / this.totalTurnover * 10000000) / 100
		},
		advicePercent () {
			return Math.ceil(this.sharedState.project.amountNeeded * 2 / this.totalTurnover * 10000000) / 100
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
	float: right;
	width: 280px;
	height: 350px;
}
div.the-screen-project-funding div.the-project-estimated-turnover-by-year {
	float: left;
	width: calc(100% - 392px); /* 100% - ( padding 4 * 24px - marge 16px - royalties amount 280px ) */
	margin-bottom: 16px;
}
div.the-screen-project-funding div.margin-amount-container {
	float: left;
	width: calc(100% - 344px); /* 100% - ( padding 2 * 24px - marge 16px - royalties amount 280px ) */
	margin-bottom: 16px;
}
div.the-screen-project-funding div.the-project-commercial-margin {
	float: left;
	width: 200px;
	margin-right: 16px;
}
div.the-screen-project-funding div.the-project-goal-amount {
	float: left;
	width: calc(100% - 312px); /* 100% - ( padding 2 * 24px - marge * 16px - commercial margin 200px ) */
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
</style>

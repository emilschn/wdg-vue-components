<template>
	<div class="the-screen-project-funding">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="3"
		  >
			<slot slot="title">{{ $t('project-setup.project-funding.TITLE') }}</slot>
		</TheTabTitle>

		<TheProjectRoyaltiesAmount />

		<TheProjectEstimatedTurnoverByYear />

		<div class="margin-amount-container">
			<TheProjectCommercialMargin />

			<TheProjectGoalAmount />
		</div>

		<TheProjectRoyaltiesWarning />

		<TheProjectRoyaltiesChart />

		<WDGToggle
		  colorChecked="#8BC79C"
		  colorUnchecked="#333"
		  >
			<slot slot="label-before">{{ $t('project-setup.project-funding.TOGGLE_LABEL') }}</slot>
		</WDGToggle>

		<TheProjectAdvice
		  adviceAmount="3,4"
		  />

		<div class="project-funding-navigation">
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
import { store } from '../store.js'
import WDGToggle from '@/../../common/src/components/WDGToggle'
import WDGButton from '@/../../common/src/components/WDGButton'
import TheTabTitle from '@/components/TheTabTitle'
import TheProjectEstimatedTurnoverByYear from '@/components/TheProjectEstimatedTurnoverByYear'
import TheProjectCommercialMargin from '@/components/TheProjectCommercialMargin'
import TheProjectGoalAmount from '@/components/TheProjectGoalAmount'
import TheProjectRoyaltiesAmount from '@/components/TheProjectRoyaltiesAmount'
import TheProjectRoyaltiesWarning from '@/components/TheProjectRoyaltiesWarning'
import TheProjectRoyaltiesChart from '@/components/TheProjectRoyaltiesChart'
import TheProjectSave from '@/components/TheProjectSave'
import TheProjectAdvice from '@/components/TheProjectAdvice'

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
	props: {
	},
	data () {
		return {
		}
	},
    methods: {
        changeStepBackward: function (event) {
            store.changeStep('project-infos')
        },
        changeStepForward: function (event) {
            store.changeStep('project-investors')
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

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

		<TheProjectSave />
	</div>
</template>

<script>
import TheTabTitle from '@/components/TheTabTitle'
import TheProjectEstimatedTurnoverByYear from '@/components/TheProjectEstimatedTurnoverByYear'
import TheProjectCommercialMargin from '@/components/TheProjectCommercialMargin'
import TheProjectGoalAmount from '@/components/TheProjectGoalAmount'
import TheProjectRoyaltiesAmount from '@/components/TheProjectRoyaltiesAmount'
import TheProjectRoyaltiesWarning from '@/components/TheProjectRoyaltiesWarning'
import TheProjectSave from '@/components/TheProjectSave'

export default {
	name: 'TheScreenProjectFunding',
	components: {
		TheTabTitle,
		TheProjectEstimatedTurnoverByYear,
		TheProjectCommercialMargin,
		TheProjectGoalAmount,
		TheProjectRoyaltiesWarning,
		TheProjectRoyaltiesAmount,
		TheProjectSave
	},
	props: {
	},
	data () {
		return {
		}
	},
	computed: {
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
</style>

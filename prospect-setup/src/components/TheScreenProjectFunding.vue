<template>
	<div class="the-screen-project-funding">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="3"
		  >
			<slot slot="title">{{ $t('project-setup.project-funding.TITLE') }}</slot>
		</TheTabTitle>

		<TheProjectEstimatedTurnoverByYear />

		<TheProjectCommercialMargin />

		<TheProjectGoalAmount />

		<TheProjectSave />
	</div>
</template>

<script>
import TheTabTitle from '@/components/TheTabTitle'
import TheProjectEstimatedTurnoverByYear from '@/components/TheProjectEstimatedTurnoverByYear'
import TheProjectCommercialMargin from '@/components/TheProjectCommercialMargin'
import TheProjectSave from '@/components/TheProjectSave'
import TheProjectGoalAmount from '@/components/TheProjectGoalAmount'

export default {
	name: 'TheScreenProjectFunding',
	components: {
		TheTabTitle,
		TheProjectSave,
		TheProjectGoalAmount,
		TheProjectEstimatedTurnoverByYear,
		TheProjectCommercialMargin
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

div.the-project-estimated-turnover-by-year {
	margin-bottom: 32px;
}
</style>

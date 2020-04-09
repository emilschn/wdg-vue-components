<template>
	<div class="the-project-estimated-turnover-by-year project-funding-subpart">
		<h3>{{ $t('project-setup.project-funding.estimated-turnover-by-year.TITLE') }}</h3>

		<TheProjectEstimatedTurnoverByYearItem
		  yearNb="1"
		  :value="sharedState.project.estimatedTurnover.year1"
		  v-bind:valueReturn.sync="sharedState.project.estimatedTurnover.year1"
		  :onChange="onChange"
		  />

		<TheProjectEstimatedTurnoverByYearItem
		  yearNb="2"
		  :value="sharedState.project.estimatedTurnover.year2"
		  v-bind:valueReturn.sync="sharedState.project.estimatedTurnover.year2"
		  :onChange="onChange"
		  />

		<TheProjectEstimatedTurnoverByYearItem
		  yearNb="3"
		  :value="sharedState.project.estimatedTurnover.year3"
		  v-bind:valueReturn.sync="sharedState.project.estimatedTurnover.year3"
		  :onChange="onChange"
		  />

		<TheProjectEstimatedTurnoverByYearItem
		  yearNb="4"
		  :value="sharedState.project.estimatedTurnover.year4"
		  v-bind:valueReturn.sync="sharedState.project.estimatedTurnover.year4"
		  :onChange="onChange"
		  />

		<TheProjectEstimatedTurnoverByYearItem
		  yearNb="5"
		  :value="sharedState.project.estimatedTurnover.year5"
		  v-bind:valueReturn.sync="sharedState.project.estimatedTurnover.year5"
		  :onChange="onChange"
		  />
	</div>
</template>

<script>
import { store } from '../../store.js'
import TheProjectEstimatedTurnoverByYearItem from '@/components/screen-funding/TheProjectEstimatedTurnoverByYearItem'

export default {
	name: 'TheProjectEstimatedTurnoverByYear',
	components: {
		TheProjectEstimatedTurnoverByYearItem
	},
	props: {
		onChange: { type: Function }
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
	}
}
</script>

<style>
</style>

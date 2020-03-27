<template>
	<div class="the-project-estimated-turnover-by-year project-funding-subpart">
		<h3>{{ $t('project-setup.project-funding.estimated-turnover-by-year.TITLE') }}</h3>

		<TheProjectEstimatedTurnoverByYearItem v-for="item in yearItems" :key="item.Id" :yearNb="item.Id" :value="item.Value" />
	</div>
</template>

<script>
import TheProjectEstimatedTurnoverByYearItem from '@/components/screen-funding/TheProjectEstimatedTurnoverByYearItem'

export default {
	name: 'TheProjectEstimatedTurnoverByYear',
	components: {
		TheProjectEstimatedTurnoverByYearItem
	},
	data () {
		return {
			yearItems: [
				{ Id: '1', Value: '' },
				{ Id: '2', Value: '' },
				{ Id: '3', Value: '' },
				{ Id: '4', Value: '' },
				{ Id: '5', Value: '' }
			]
		}
	},
	methods: {
	}
}
</script>

<style>
</style>

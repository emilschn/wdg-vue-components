<template>
	<div class="the-project-royalties-chart">
		<h3>
			{{ $t('project-setup.project-funding.royalties-chart.TITLE') }}
		</h3>

		<div class="chart-container">
			<WDGChart
			  :chartData="chartDatasets"
			  :options="chartOptions"
			  :height="300"
			  />
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import patterns from 'patternomaly'
import WDGChart from '@/../../common/src/components/WDGChart'

export default {
	name: 'TheProjectRoyaltiesChart',
	components: {
		WDGChart
	},
	props: {
	},
	data () {
		let tempLabels = []
		for (let i = 1; i <= 5; i++) {
			tempLabels.push(i18n.t('project-setup.project-funding.estimated-turnover-by-year.INPUT_LABEL') + ' ' + i)
		}

		let tempValues = []
		for (let i = 1; i <= 5; i++) {
			tempValues.push(i)
		}
		let tempValues2 = []
		for (let i = 1; i <= 5; i++) {
			tempValues2.push(i * 1.2)
		}

		let tempDatasets = [
			{
			'label': i18n.t('project-setup.project-funding.royalties-chart.LABEL_TURNOVER'),
			'backgroundColor': '#333',
			'data': tempValues
			},
			{
			'label': i18n.t('project-setup.project-funding.royalties-chart.LABEL_ROYALTIES'),
			'backgroundColor': patterns.draw('diagonal-right-left', '#8BC79C', '#333'),
			'data': tempValues2
			}
		]

		return {
			chartDatasets: {
				labels: tempLabels,
				datasets: tempDatasets
			},
			chartOptions: {
				responsive: false,
				maintainAspectRatio: false,
				scales: {
					xAxes: [{
						stacked: true
					}],
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				},
				legend: {
					labels: {
						usePointStyle: true
					}
				}
			}
		}
	}
}
</script>

<style>
div.the-project-royalties-chart {
	text-align: center;
	margin: 16px 0px;
}
div.chart-container canvas {
	display: block;
	margin: auto;
}
</style>

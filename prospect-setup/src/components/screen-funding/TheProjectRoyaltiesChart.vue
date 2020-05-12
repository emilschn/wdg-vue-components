<template>
	<div class="the-project-royalties-chart">
		<h3>
			{{ $t('project-setup.project-funding.royalties-chart.TITLE') }}
		</h3>

		{{ $t('project-setup.project-funding.royalties-chart.IF_MY_ACTIVITY') }}

		<WDGSelect
		  id="turnoverScenario"
		  name="turnoverScenario"
		  value="as_planned"
		  :optionItems="turnoverScenarioList"
		  :onSelect="onTurnoverScenarioSelect"
		  customStyle="natural-language"
		  />

		<div class="scenario-description">
			<span v-if="this.selectedScenario == 'as_planned'">{{ $t('project-setup.project-funding.royalties-chart.scenario-description.AS_PLANNED') }}</span>
			<span v-if="this.selectedScenario == 'less_than_planned'">{{ $t('project-setup.project-funding.royalties-chart.scenario-description.LESS_THAN_PLANNED') }}</span>
			<span v-if="this.selectedScenario == 'more_than_planned'">{{ $t('project-setup.project-funding.royalties-chart.scenario-description.MORE_THAN_PLANNED') }}</span>
			<span v-if="this.selectedScenario == 'stop_the_royalties'">{{ $t('project-setup.project-funding.royalties-chart.scenario-description.STOP_THE_ROYALTIES') }}</span>
			<span v-if="this.selectedScenario == 'activity_stop'">{{ $t('project-setup.project-funding.royalties-chart.scenario-description.ACTIVITY_STOP') }}</span>
		</div>

		<div class="chart-container">
			<WDGChart
			  ref="chartRoyalties"
			  :chartData="chartDatasets"
			  :options="chartOptions"
			  :height="300"
			  />
		</div>
	</div>
</template>

<script>
import { store } from '../../store.js'
import i18n from '@/i18n'
import patterns from 'patternomaly'
import WDGChart from '@/../../common/src/components/WDGChart'
import WDGSelect from '@/../../common/src/components/WDGSelect'

export default {
	name: 'TheProjectRoyaltiesChart',
	components: {
		WDGChart,
		WDGSelect
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
			sharedState: store.state,
			selectedScenario: 'as_planned',
			turnoverScenarioList: [
				{ 'Id': 'as_planned', 'Text': i18n.t('project-setup.project-funding.royalties-chart.turnover-scenario.AS_PLANNED') },
				{ 'Id': 'less_than_planned', 'Text': i18n.t('project-setup.project-funding.royalties-chart.turnover-scenario.LESS_THAN_PLANNED') },
				{ 'Id': 'more_than_planned', 'Text': i18n.t('project-setup.project-funding.royalties-chart.turnover-scenario.MORE_THAN_PLANNED') },
				{ 'Id': 'stop_the_royalties', 'Text': i18n.t('project-setup.project-funding.royalties-chart.turnover-scenario.STOP_THE_ROYALTIES') },
				{ 'Id': 'activity_stop', 'Text': i18n.t('project-setup.project-funding.royalties-chart.turnover-scenario.ACTIVITY_STOP') }
			],
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
	},
	methods: {
		onTurnoverScenarioSelect (sSelectedScenario) {
			this.selectedScenario = sSelectedScenario
			this.refreshChart()
		},

		refreshChart () {
			this.chartDatasets.datasets[0].data = []
			this.chartDatasets.datasets[0].data.push(Number(this.sharedState.project.estimatedTurnover.year1))
			this.chartDatasets.datasets[0].data.push(Number(this.sharedState.project.estimatedTurnover.year2))
			this.chartDatasets.datasets[0].data.push(Number(this.sharedState.project.estimatedTurnover.year3))
			this.chartDatasets.datasets[0].data.push(Number(this.sharedState.project.estimatedTurnover.year4))
			this.chartDatasets.datasets[0].data.push(Number(this.sharedState.project.estimatedTurnover.year5))

			let nbYears = 5
			switch (this.selectedScenario) {
				case 'less_than_planned':
					for (let i = 0; i < nbYears; i++) {
						this.chartDatasets.datasets[0].data[i] = this.chartDatasets.datasets[0].data[i] / 2
					}
					break

				case 'more_than_planned':
					for (let i = 0; i < nbYears; i++) {
						this.chartDatasets.datasets[0].data[i] = this.chartDatasets.datasets[0].data[i] * 2
					}
					break

				case 'stop_the_royalties':
					this.chartDatasets.datasets[0].data[2] = Number(this.sharedState.project.amountNeeded * 1000)
					this.chartDatasets.datasets[0].data[3] = 0
					this.chartDatasets.datasets[0].data[4] = 0
					break

				case 'activity_stop':
					this.chartDatasets.datasets[0].data[3] = 0
					this.chartDatasets.datasets[0].data[4] = 0
					break
			}

			this.chartDatasets.datasets[1].data = []
			let royaltiesYear1 = this.chartDatasets.datasets[0].data[0] + Math.round(this.chartDatasets.datasets[0].data[0] * this.sharedState.project.royaltiesAmount / 100)
			this.chartDatasets.datasets[1].data.push(royaltiesYear1)
			let royaltiesYear2 = this.chartDatasets.datasets[0].data[1] + Math.round(this.chartDatasets.datasets[0].data[1] * this.sharedState.project.royaltiesAmount / 100)
			this.chartDatasets.datasets[1].data.push(royaltiesYear2)
			let royaltiesYear3 = this.chartDatasets.datasets[0].data[2] + Math.round(this.chartDatasets.datasets[0].data[2] * this.sharedState.project.royaltiesAmount / 100)
			this.chartDatasets.datasets[1].data.push(royaltiesYear3)
			let royaltiesYear4 = this.chartDatasets.datasets[0].data[3] + Math.round(this.chartDatasets.datasets[0].data[3] * this.sharedState.project.royaltiesAmount / 100)
			this.chartDatasets.datasets[1].data.push(royaltiesYear4)
			let royaltiesYear5 = this.chartDatasets.datasets[0].data[4] + Math.round(this.chartDatasets.datasets[0].data[4] * this.sharedState.project.royaltiesAmount / 100)
			this.chartDatasets.datasets[1].data.push(royaltiesYear5)

			this.$refs.chartRoyalties.renderWDGChart()
		}
	},
	mounted () {
		this.refreshChart()
	}
}
</script>

<style>
div.the-project-royalties-chart {
	text-align: center;
	margin: 16px 0px;
}
div.the-project-royalties-chart h3 {
	font-size: 22px;
}
div.the-project-royalties-chart div.chart-container {
	margin-top: 32px;
}
div.chart-container canvas {
	display: block;
	margin: auto;
}
</style>

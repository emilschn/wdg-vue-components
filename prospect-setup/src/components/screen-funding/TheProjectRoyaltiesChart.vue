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
				},
				// Personnalisation des légendes du tooltip pour avoir les valeurs réelles
				tooltips: {
					callbacks: {
						label: function (tooltipItem, data) {
							let label = data.datasets[tooltipItem.datasetIndex].label
							if (label) {
								label += ' : '
							}

							// Si c'est le CA prévisionnel, il faut mettre la valeur totale du CA
							let value = 0
							if (tooltipItem.datasetIndex === 0) {
								value = data.datasets[1].data[tooltipItem.index]
							}
							// Si c'est les royalties
							if (tooltipItem.datasetIndex === 1) {
								value = Math.round(data.datasets[1].data[tooltipItem.index] - data.datasets[0].data[tooltipItem.index])
							}

							let valueFormatted = value.toString()
							valueFormatted = valueFormatted.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
							label += valueFormatted + ' €'
							return label
						}
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
			let year1 = Number(this.sharedState.project.estimatedTurnover.year1)
			let year2 = Number(this.sharedState.project.estimatedTurnover.year2)
			let year3 = Number(this.sharedState.project.estimatedTurnover.year3)
			let year4 = Number(this.sharedState.project.estimatedTurnover.year4)
			let year5 = Number(this.sharedState.project.estimatedTurnover.year5)

			switch (this.selectedScenario) {
				case 'less_than_planned':
					year1 = year1 / 2
					year2 = year2 / 2
					year3 = year3 / 2
					year4 = year4 / 2
					year5 = year5 / 2
					break

				case 'more_than_planned':
					year1 = year1 * 2
					year2 = year2 * 2
					year3 = year3 * 2
					year4 = year4 * 2
					year5 = year5 * 2
					break

				case 'activity_stop':
					year4 = 0
					year5 = 0
					break
			}

			// Calculs des royalties à reverser
			let royaltiesTotal = 0
			let royaltiesCap = this.sharedState.project.amountNeeded * 1000 * 3
			this.chartDatasets.datasets[0].data = []

			var year1Royalties = year1 * this.sharedState.project.royaltiesAmount / 100
			year1Royalties = Math.min(year1Royalties, royaltiesCap)
			royaltiesTotal += year1Royalties

			var year2Royalties = year2 * this.sharedState.project.royaltiesAmount / 100
			year2Royalties = Math.min(year2Royalties, royaltiesCap - royaltiesTotal)
			royaltiesTotal += year2Royalties

			var year3Royalties = year3 * this.sharedState.project.royaltiesAmount / 100
			year3Royalties = Math.min(year3Royalties, royaltiesCap - royaltiesTotal)
			royaltiesTotal += year3Royalties

			var year4Royalties = year4 * this.sharedState.project.royaltiesAmount / 100
			year4Royalties = Math.min(year4Royalties, royaltiesCap - royaltiesTotal)
			royaltiesTotal += year4Royalties

			var year5Royalties = year5 * this.sharedState.project.royaltiesAmount / 100
			year5Royalties = Math.min(year5Royalties, royaltiesCap - royaltiesTotal)
			royaltiesTotal += year5Royalties

			// Test de l'arret des royalties
			if (this.selectedScenario === 'stop_the_royalties') {
				year4Royalties = 0
				year5Royalties = 0
				// Si il y a des royalties en année 3, on arrête là
				if (year3Royalties > 0) {
					year3Royalties += Number(this.sharedState.project.amountNeeded * 1000)
				// Sinon on arrête en année 2
				} else {
					year2Royalties += Number(this.sharedState.project.amountNeeded * 1000)
				}
			}
			this.chartDatasets.datasets[0].data.push(year1 - year1Royalties)
			this.chartDatasets.datasets[0].data.push(year2 - year2Royalties)
			this.chartDatasets.datasets[0].data.push(year3 - year3Royalties)
			this.chartDatasets.datasets[0].data.push(year4 - year4Royalties)
			this.chartDatasets.datasets[0].data.push(year5 - year5Royalties)

			// Affichage du CA
			this.chartDatasets.datasets[1].data = []
			this.chartDatasets.datasets[1].data.push(year1)
			this.chartDatasets.datasets[1].data.push(year2)
			if (this.selectedScenario === 'stop_the_royalties' && year3Royalties > 0) {
				year3 += Number(this.sharedState.project.amountNeeded * 1000)
			}
			this.chartDatasets.datasets[1].data.push(year3)
			this.chartDatasets.datasets[1].data.push(year4)
			this.chartDatasets.datasets[1].data.push(year5)

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
div.the-project-royalties-chart div.scenario-description {
	max-width: 500px;
	margin: 8px auto;
	font-size: 14px;
}
div.the-project-royalties-chart div.chart-container {
	margin-top: 32px;
}
div.chart-container canvas {
	display: block;
	margin: auto;
}
</style>

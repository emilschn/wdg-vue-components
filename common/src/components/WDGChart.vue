<script>
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
	extends: Bar,
	mixins: [reactiveProp],
	props: ['data', 'options'],
	mounted () {
		this.renderWDGChart()
	},
	methods: {
		renderWDGChart: function () {
			this.renderChart(this.chartData, this.options)
		}
	}
}
</script>

<style>
</style>

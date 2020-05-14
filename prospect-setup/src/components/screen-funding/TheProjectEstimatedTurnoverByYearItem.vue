<template>
	<div class="the-project-estimated-turnover-by-year-item">

		<WDGInput
		  :id="'year-' + yearNb"
		  :name="'year-' + yearNb"
		  :value="valueReturn"
		  v-bind:valueReturn.sync="valueReturn"
		  v-bind:multiline="false"
		  v-bind:optional="false"
		  validationRule=""
		  suffix="€"
		  autoFormat="wdg-number"
		  :onChange="onLocalChange"
		>
			<slot slot="label">{{ $t('project-setup.project-funding.estimated-turnover-by-year.INPUT_LABEL') }} {{ yearNb }}</slot>
		</WDGInput>

	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGInput from '@/../../common/src/components/WDGInput'

export default {
	name: 'TheProjectEstimatedTurnoverByYearItem',
	components: {
		WDGInput
	},
	props: {
		onChange: { type: Function },
		yearNb: { type: String, default: '' },
		value: { type: Number, default: 0 }
	},
	data () {
		return {
			sharedState: store.state,
			valueReturn: this.value
		}
	},
	methods: {
		onLocalChange () {
			let tempYearItemStr = this.valueReturn
			tempYearItemStr = tempYearItemStr.split(',').join('.').split(' ').join('')

			let tempYearItemNum = Number(tempYearItemStr)
			switch (this.yearNb) {
				case '1':
					this.sharedState.project.estimatedTurnover.year1 = tempYearItemNum
					break
				case '2':
					this.sharedState.project.estimatedTurnover.year2 = tempYearItemNum
					break
				case '3':
					this.sharedState.project.estimatedTurnover.year3 = tempYearItemNum
					break
				case '4':
					this.sharedState.project.estimatedTurnover.year4 = tempYearItemNum
					break
				case '5':
					this.sharedState.project.estimatedTurnover.year5 = tempYearItemNum
					break
			}

			this.$emit('update:valueReturn', this.valueReturn)
			this.onChange(this.valueReturn)
		}
	}
}
</script>

<style>
div.the-project-estimated-turnover-by-year-item {
	display: inline-block;
	width: 19%;
	margin-top: 16px;
	margin-right: 1%;
}
div.the-project-estimated-turnover-by-year-item .wdg-input input {
	height: 32px;
	margin-top: 8px;
	border: 1.5px solid #EBEBEB;
}
</style>

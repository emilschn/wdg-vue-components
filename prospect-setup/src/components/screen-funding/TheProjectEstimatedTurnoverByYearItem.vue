<template>
	<div class="the-project-estimated-turnover-by-year-item">

		<WDGInput
		  :id="'year-' + yearNb"
		  :name="'year-' + yearNb"
		  v-bind:multiline="false"
		  v-bind:optional="false"
		  validationRule=""
		  :value="valueReturn"
		  v-bind:valueReturn.sync="valueReturn"
		  :onChange="onLocalChange"
		>
			<slot slot="label">{{ $t('project-setup.project-funding.estimated-turnover-by-year.INPUT_LABEL') }} {{ yearNb }}</slot>
		</WDGInput>

	</div>
</template>

<script>
import WDGInput from '@/../../common/src/components/WDGInput'

export default {
	name: 'TheProjectEstimatedTurnoverByYearItem',
	components: {
		WDGInput
	},
	props: {
		onChange: { type: Function },
		yearNb: { type: String, default: '' },
		value: { type: String, default: '0' }
	},
	data () {
		return {
			valueReturn: this.value
		}
	},
	methods: {
		onLocalChange () {
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

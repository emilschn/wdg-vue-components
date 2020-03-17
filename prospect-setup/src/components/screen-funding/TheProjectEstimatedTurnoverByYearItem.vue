<template>
	<div class="the-project-estimated-turnover-by-year-item">

		<WDGInput
			placeholder="50 000 €"
			:id="'year-' + yearNb"
			:name="'year-' + yearNb"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule=""
			:value="value"
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
		yearNb: { type: String, default: '' },
		value: { type: String, default: '0' }
	},
	data () {
		return {
		}
	},
	methods: {
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
}
</style>

<template>
	<div class="wdg-toggle">
		<span class="wdg-toggle-label before">
			<slot name="label-before"></slot>
		</span>

		<ToggleButton
		  :value="false"
		  :color="{ checked: colorChecked, unchecked: colorUnchecked }"
		  @change="onChangeLocalEvent"
		  />

		<span class="wdg-toggle-label after">
			<slot name="label-after"></slot>
		</span>
	</div>
</template>

<script>
import {ToggleButton} from 'vue-js-toggle-button'
export default {
	name: 'WDGToggle',
	components: {
		ToggleButton
	},
	props: {
		colorChecked: { type: String, default: 'red' },
		colorUnchecked: { type: String, default: 'red' },
        changeEvent: Function
    },
	methods: {
		onChangeLocalEvent () {
			if (this.changeEvent !== undefined) {
				this.changeEvent()
			}
		}
	}
}
</script>

<style>
div.wdg-toggle {
	text-align: center;
}

div.wdg-toggle span.wdg-toggle-label {
	display: inline-block;
}
div.wdg-toggle span.wdg-toggle-label.after {
	margin-left: 8px;
}
div.wdg-toggle span.wdg-toggle-label.before {
	margin-right: 8px;
}
</style>

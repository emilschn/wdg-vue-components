<template>
	<div class="wdg-toggle" :class="theme">
		<span class="wdg-toggle-label before">
			<slot name="label-before"></slot>
		</span>

		<ToggleButton
		  :value="initValue"
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
		theme: { type: String, default: '' },
		colorChecked: { type: String, default: 'red' },
		colorUnchecked: { type: String, default: 'red' },
		initValue: { type: Boolean, default: false },
		changeEvent: Function
    },
	methods: {
		onChangeLocalEvent (newValue) {
			if (this.changeEvent !== undefined) {
				this.changeEvent(newValue.value)
			}
		}
	}
}
</script>

<style>
div.wdg-toggle {
	text-align: center;
}
div.wdg-toggle.admin {
	color: #F1A074;
}

div.wdg-toggle .vue-js-switch div.v-switch-core {
	display: inline-block;
}
div.wdg-toggle .vue-js-switch div.v-switch-core div.v-switch-button {
	display: inline-block;
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

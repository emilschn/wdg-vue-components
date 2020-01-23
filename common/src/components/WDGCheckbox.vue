<template>
    <div class="wdg-checkbox">
        <input
        type="checkbox"
        :id="idCheckbox"
        v-model="valueCheckbox"
        v-bind="$attrs"
        :placeholder="labelValue"
        :disabled="disabled"
        :required="!optional"
        >
	    <label>{{ labelValue }}</label>
    </div>
</template>

<script>
export default {
	name: 'WDGCheckbox',
	props: {
		labelCheckbox: { type: String, default: 'Enter text' },
		idCheckbox: { type: String, default: null },
        nameCheckbox: { type: String, default: null },
        valueCheckbox: { type: [Boolean], default: false },
        optional: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
        validation: Function
    },
    computed: {
      labelValue () {
        let { labelCheckbox } = this
		if (!this.optional && labelCheckbox) {
			labelCheckbox += ' *'
		}
		return labelCheckbox
      }
    }
}
</script>

<style>
</style>

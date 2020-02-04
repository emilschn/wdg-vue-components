<template>
    <div class="wdg-checkbox">
		<label>
	    	{{ labelValue }} <a v-if="linkCheckbox" :href="linkCheckbox" target="_blank">{{ linkCheckboxLabel }}</a><span v-if="isRequired"> *</span>
			<input
			type="checkbox"
			:id="idCheckbox"
			v-model="valueReturn"
			v-bind="$attrs"
			:placeholder="labelValue"
			:disabled="disabled"
			:required="!optional"
			@change="onChangeLocalEvent"
			>
			<span class="checkmark"></span>
		</label>
    </div>
</template>

<script>
export default {
	name: 'WDGCheckbox',
	props: {
		labelCheckbox: { type: String, default: 'Enter text' },
		linkCheckbox: { type: String, default: '' },
		linkCheckboxLabel: { type: String, default: '' },
		idCheckbox: { type: String, default: null },
        nameCheckbox: { type: String, default: null },
        valueCheckbox: { type: [Boolean], default: false },
        optional: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
    	validationRule: { type: String, default: null },
        validation: Function
    },
	data () {
		return {
			valueReturn: this.valueCheckbox,
		  isRequired: (this.validationRule.indexOf('required') > -1)
		}
	},
    computed: {
      labelValue () {
        let { labelCheckbox } = this
		if (!this.optional && labelCheckbox) {
			labelCheckbox += ' *'
		}
		return labelCheckbox
      }
	},
	methods: {
		onChangeLocalEvent () {
			this.$emit('update:valueReturn', this.valueReturn)
		}
	}
}
</script>

<style>
</style>

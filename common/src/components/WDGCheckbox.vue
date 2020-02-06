<template>
    <div class="wdg-checkbox">
		<label>
			<slot name="label"></slot>
	    	<span v-if="isRequired"> *</span>
			<input
			  type="checkbox"
			  :id="id"
			  v-model="valueReturn"
			  :placeholder="labelValue"
			  :disabled="disabled"
			  :required="!optional"
			  @change="onChangeLocalEvent"
			  />
			<span class="checkmark"></span>
		</label>
    </div>
</template>

<script>
export default {
	name: 'WDGCheckbox',
	props: {
		id: { type: String, default: null },
        name: { type: String, default: null },
        value: { type: [Boolean], default: false },
        optional: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
    	validationRule: { type: String, default: null },
        validation: Function
    },
	data () {
		return {
		  valueReturn: this.value,
		  isRequired: (this.validationRule.indexOf('required') > -1)
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

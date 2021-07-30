<template>
    <div class="wdg-radiobutton">
		<label>
			<slot name="label"></slot>
	    	<span v-if="isRequired"> *</span>
			<input
			  type="radio"
			  :id="id"
			  :name="name"
			  :value="value"
			  :disabled="disabled"
			  :required="isRequired"
			  v-model="valueReturn"
			  @change="onChangeLocalEvent"
			  />
			<span class="checkmark"></span>
			<slot name="label-after"></slot>
			<span class="description"><slot name="description"></slot></span>
		</label>
    </div>
</template>

<script>
export default {
	name: 'WDGRadioButton',
	props: {
		id: { type: String, default: null },
		name: { type: String, default: null },
		value: { type: String, default: '' },
		groupValue: { type: String, default: '' },
		disabled: { type: Boolean, default: false },
		validationRule: { type: String, default: '' },
		onChange: { type: Function }
    },
	data () {
		return {
			valueReturn: this.groupValue,
			isRequired: (this.validationRule.indexOf('required') > -1)
		}
	},
	methods: {
		onChangeLocalEvent () {
			// Idéalement, ça fonctionnerait avec ça, et pas besoin de gérer le onChange...
			// this.$emit('update:valueReturn', this.valueReturn)
			this.onChange(this.value)
		}
	}
}
</script>

<style>
	.wdg-form .wdg-radiobutton {
		margin-bottom: 16px;
	}
	.wdg-form .wdg-radiobutton label {
		position: relative;
		padding-left: 32px;
		line-height: 25px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
	}
</style>

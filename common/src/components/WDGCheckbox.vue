<template>
    <div class="wdg-checkbox">
		<label>
			<slot name="label"></slot>
	    	<span v-if="isRequired"> *</span>
			<input
			  type="checkbox"
			  :id="id"
			  v-model="valueReturn"
			  :disabled="disabled"
			  :required="!optional"
			  @change="onChangeLocalEvent"
			  />
			<span class="checkmark"></span>
			<slot name="label-after"></slot>
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
    	validationRule: { type: String, default: '' },
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
	.wdg-form .wdg-checkbox {
		margin-bottom: 16px;
	}
	.wdg-form .wdg-checkbox label {
		position: relative;
		padding-left: 32px;
		line-height: 20px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
	}
	.wdg-form .wdg-checkbox label input {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}
	.wdg-form .wdg-checkbox label .checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 20px;
		width: 20px;
		background-color: #ffffff;
		border: 1px solid #333;
	}
	.wdg-form .wdg-checkbox label input:checked ~ .checkmark {
		background-color: #333;
	}
	.wdg-form .wdg-checkbox label.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}
	.wdg-form .wdg-checkbox label input:checked ~ .checkmark:after {
		display: block;
	}
</style>

<template>
  	<div
      v-show="!honeypot"
	  class="wdg-input"
	  >
		<label :for="id">
			<slot name="label"></slot>
			<span v-if="isRequired"> *</span>
		</label>
		<slot name="comment"></slot>

    	<ValidationProvider
		  :rules="validationRule"
		  v-slot="v"
		  >
      		<span v-if="(validationRule && v.errors[0])" class="wdg-message error">{{ v.errors[0] }}</span>
			<input
			  v-if="!multiline"
			  :id="id"
			  v-model="valueReturn"
			  :placeholder="placeholder"
			  :disabled="disabled"
			  :required="isRequired"
			  :type="type"
			  @input="onInputLocalEvent"
			  />

			<textarea
			  v-else
			  :id="id"
			  v-model="valueReturn"
			  :disabled="disabled"
			  :required="isRequired"
			  @input="onInputLocalEvent"
			  />
		</ValidationProvider>
  	</div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  name: 'WDGInput',
  components: {
    ValidationProvider
  },
  props: {
    id: { type: String, default: null },
    name: { type: String, default: null },
    value: { type: [String, Number], default: null },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: 'Default placeholder' },
    multiline: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    honeypot: { type: Boolean, default: false },
    validationRule: { type: String, default: null },
    inputEvent: Function
  },
  data () {
	  return {
		  valueReturn: this.value,
		  isRequired: (this.validationRule.indexOf('required') > -1)
	  }
  },
  methods: {
    onInputLocalEvent () {
		this.$emit('update:valueReturn', this.valueReturn)
    }
  }
}
</script>

<style>
</style>

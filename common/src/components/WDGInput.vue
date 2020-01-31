<template>
  <div
    v-show="!honeypot"
	class="wdg-input">
    <label :for="idInput">{{ labelValue }}</label><br>
    <span v-if="comment">{{comment}}</span><br v-if="comment">
    <ValidationProvider :rules="validationRule" v-slot="v">
      <span v-if="validationRule">{{ v.errors[0] }}</span>
      <input
      v-if="!multiline"
      :id="idInput"
      v-model="valueReturn"
      v-bind="$attrs"
      :placeholder="labelValue"
      :disabled="disabled"
      :required="!optional"
      :type="typeInput"
      @input="onInputLocalEvent"
      >
      <textarea
      v-else
      :id="idInput"
      v-model="valueReturn"
      v-bind="$attrs"
      :placeholder="labelValue"
      :disabled="disabled"
      :required="!optional"
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
    labelInput: { type: String, default: 'Enter text' },
    idInput: { type: String, default: null },
    nameInput: { type: String, default: null },
    valueInput: { type: [String, Number], default: null },
    typeInput: { type: String, default: 'text' },
    comment: { type: String, default: null },
    multiline: { type: Boolean, default: false },
    optional: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false },
    honeypot: { type: Boolean, default: false },
    validationRule: { type: String, default: null },
    inputEvent: Function
  },
  data () {
	  return {
		  valueReturn: this.valueInput
	  }
  },
  computed: {
    labelValue () {
      let { labelInput } = this
      if (!this.optional && labelInput) {
    	labelInput += ' *'
      }
      return labelInput
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

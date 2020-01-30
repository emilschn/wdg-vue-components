<template>
  <div
    v-show="!honeypot"
	class="wdg-input">
    <label>{{ labelValue }}</label><br>
    <span v-if="comment">{{comment}}</span><br v-if="comment">
    <input
    v-if="!multiline"
    :id="idInput"
    v-model="valueInput"
    v-bind="$attrs"
    :placeholder="labelValue"
    :disabled="disabled"
    :required="!optional"
    :type="typeInput"
    v-on:click="validation"
    >
    <textarea
    v-else
    :id="idInput"
    v-model="valueInput"
    v-bind="$attrs"
    :placeholder="labelValue"
    :disabled="disabled"
    :required="!optional"
    v-on:click="validation"
    />
  </div>
</template>

<script>
export default {
  name: 'WDGInput',
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
    validation: Function
  },
  computed: {
    labelValue () {
      let { labelInput } = this
      if (!this.optional && labelInput) {
    	labelInput += ' *'
      }
      return labelInput
    }
  }
}
</script>

<style>
</style>

<template>
    <div class="wdg-input">
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
        >
        <textarea
        v-else
        :id="idInput"
        v-model="valueInput"
        v-bind="$attrs"
        :placeholder="labelValue"
        :disabled="disabled"
        :required="!optional"
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
		comment: { type: String, default: null },
		multiline: { type: Boolean, default: false },
        optional: { type: Boolean, default: true },
        disabled: { type: Boolean, default: false },
        validation: Function
    },
    computed: {        
      labelValue () {
        let { labelInput } = this
        return !this.optional && labelInput ? labelInput += ` *` : labelInput
      },
    }
}
</script>

<style>
</style>
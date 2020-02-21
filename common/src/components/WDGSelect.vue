<template>
  <div
    class="my-select"
	v-bind:class="{inline: isInline}"
	>
	  <label :for="id" v-if="label != ''">{{ label }}</label>
	  <select v-model="valueReturn" :id="id" :name="name" @change="onSelectedEvent">
		  <option v-for="item in optionItems" :value="item.Id" :key="item.Id">{{ item.Text }}</option>
	  </select>
  </div>
</template>

<script>
export default {
	name: 'WDGSelect',
	props: {
		id: String,
		label: String,
		name: String,
		value: String,
		isInline: { type: Boolean, default: false },
		hasFilter: { type: Boolean, default: false },
		optionItems: Array
	},

	data () {
		return {
			valueReturn: this.value
		}
	},
	methods: {
		onSelectedEvent () {
			this.$emit('update:valueReturn', this.valueReturn)
		}
	}
}
</script>

<style>
	div.inline {
		display: inline-block;
	}
</style>

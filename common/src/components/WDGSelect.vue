<template>
  <div class="my-select">
	  <label :for="idSelect">{{ labelSelect }}</label>
	  <select v-model="currentOption" :id="idSelect" :name="nameSelect" @change="onSelectedEvent(currentOption)">
		  <option v-for="item in optionItems" :value="item.Id" :key="item.Id">{{ item.Text }}</option>
	  </select>
  </div>
</template>

<script>
export default {
	name: 'WDGSelect',
	props: {
		idSelect: String,
		labelSelect: String,
		nameSelect: String,
		optionItems: Array,
		onSelectedEvent: Function
	},

	data () {
		return {
			currentOption: ''
		}
	},

	watch: {
		value: function (newValue) {
			this.currentOption = newValue
		}
	}
}
</script>

<style>
</style>

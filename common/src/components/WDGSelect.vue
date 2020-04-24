<template>
	<div
	  class="wdg-select"
	  :class="customStyle"
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
		id: { type: String, default: '' },
		label: { type: String, default: '' },
		name: { type: String, default: '' },
		value: { type: String, default: '' },
		customStyle: { type: String, default: '' },
		isInline: { type: Boolean, default: false },
		hasFilter: { type: Boolean, default: false },
		onSelect: { type: Function },
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
			if (this.onSelect !== undefined) {
				this.onSelect(this.valueReturn)
			}
		}
	}
}
</script>

<style>
.wdg-select.natural-language {
	display: inline;
}

.wdg-select.natural-language label {
	display: none;
}

.wdg-select.natural-language select {
	display: inline-block;
	width: 250px;
	padding: 5px 30px 5px 0px;
	padding-left: 10px;
	font-weight: 500;
	font-size: 16px;
	-webkit-appearance: none;
	-moz-appearance: none;
	background-image:
		linear-gradient(45deg, transparent 50%, #00879B 50%),
		linear-gradient(135deg, #00879B 50%, transparent 50%);
	background-position:
		calc(100% - 20px) calc(1em + 2px),
		calc(100% - 15px) calc(1em + 2px),
		calc(100% - 2.5em) 0.5em;
	background-size:
		5px 5px,
		5px 5px,
		1px 1.5em;
	background-repeat: no-repeat;
	color: #00879B;
	border: 0px;
	border-bottom: 2px solid #00879B;
	cursor: pointer;
}
</style>

<template>
    <div class="wdg-button">
        <button
        :type="typeButton"
        :id="idButton"
        v-bind="$attrs"
        :disabled="disabled"
		:class="colorButton"
		@click="onClickLocalEvent"
        >
		{{ labelButton }}
        </button>
    </div>
</template>

<script>
export default {
	name: 'WDGButton',
	props: {
		labelButton: { type: String, default: 'Enter text' },
		idButton: { type: String, default: null },
		typeButton: { type: String, default: 'submit' },
		colorButton: { type: String, default: 'red' },
        nameButton: { type: String, default: null },
        disabled: { type: Boolean, default: false },
        clickEvent: Function
    },
    computed: {
	},
	methods: {
		onClickLocalEvent () {
			if (this.clickEvent !== undefined) {
				this.clickEvent()
			}
		}
	}
}
</script>

<style>
button {
	width: 100%;
	height: 48px;
	margin-bottom: 16px;
	text-transform: uppercase;
	cursor: pointer;
}
button.red {
	border: 0 solid #ea4f51;
	background: #ea4f51;
	color: #FFF
}
button.blue {
	border: 0 solid #00879B;
	background: #00879B;
	color: #FFF
}
button.transparent {
	border: 2px solid #333;
	background: #FFF;
	color: #333
}
</style>

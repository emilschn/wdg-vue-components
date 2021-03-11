<template>
    <div class="wdg-button">
        <button
          :type="type"
          :id="id"
          :disabled="disabled"
		  :class="color"
		  @click="onClickLocalEvent"
          >
        	<span v-show="icon" :class="[ 'glyphicon', `glyphicon-${this.icon}`, `glyphicon-${this.icon}-${this.shape}` ]"></span>
			<slot name="label"></slot>
        </button>
    </div>
</template>

<script>
export default {
	name: 'WDGButton',
	props: {
		id: { type: String, default: null },
		type: { type: String, default: 'submit' },
		color: { type: String, default: 'red' },
		name: { type: String, default: null },
		link: { type: String, default: '' },
		disabled: { type: Boolean, default: false },
        icon: { type: String, default: '' },
        shape: { type: String, default: '' },
		clickEvent: Function
    },
    computed: {
	},
	methods: {
		onClickLocalEvent () {
			if (this.link !== '' && this.link !== undefined) {
				this.disabled = true
				window.location = this.link
			}
			if (this.clickEvent !== undefined) {
				this.clickEvent(this._props)
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
	padding: 0px;
	text-transform: uppercase;
	cursor: pointer;
}
button:disabled {
	opacity: 0.7;
}
button.red {
	border: 0 solid #ea4f51;
	background: #ea4f51;
	color: #FFF;
}
button.blue {
	border: 0 solid #00879B;
	background: #00879B;
	color: #FFF
}
button.grey {
	border: 0 solid #333;
	background: #333;
	color: #FFF
}
button.facebook {
	border: 0 solid #3b5998;
	background: #3b5998;
	color: #FFF
}
button.admin {
	border: 0 solid #F1A074;
	background: #F1A074;
	color: #FFF;
}
button.transparent {
	border: 2px solid #333;
	background: #FFF;
	color: #333
}
button.transparent-no-border {
	border: 0px solid #FFF;
	background: #FFF;
	color: #333
}
@media only screen and (max-width: 767px) {
	button.red {
		font-size: 16px;
	}
}
</style>

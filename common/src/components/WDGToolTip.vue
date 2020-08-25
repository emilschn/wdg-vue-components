<template>
	<div class="wdg-tooltip" >
		<button
		  type="button"
		  :class="color"
		  @focus="onClickLocalEvent"
		  @focusout="onClickOutLocalEvent"
		  tabindex="0"
		  >
			i
		</button>
		<transition name="fade">
			<div class="tooltip-text" v-if="isTextVisible" :class="['text-'+TextColor, 'bg-'+TextBGColor]">
				<slot name="text"></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'WDGToolTip',
	props: {
		color: { type: String, default: 'grey' },
		TextBGColor: { type: String, default: 'black' },
		TextColor: { type: String, default: 'white' }
	},
	data () {
		return {
			isTextVisible: false
		}
	},
	methods: {
		onClickLocalEvent () {
			this.isTextVisible = true
		},
		onClickOutLocalEvent () {
			this.isTextVisible = false
		}
	}
}
</script>

<style>
div.wdg-tooltip {
	position: relative;
	display: inline-block;
}
div.wdg-tooltip button {
	width: 24px;
	height: 24px;
	padding: 4px;
	border-radius: 12px;
	text-transform: lowercase;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
}
div.wdg-tooltip button.grey {
	border: 0 solid #B4B4B4;
	background: #B4B4B4;
	color: #FFF;
	margin-left: 10px;
}
div.wdg-tooltip div.tooltip-text {
	position: absolute;
	z-index: 1;
	width: 180px;
	bottom: calc(100% + 16px);
	left: -16px;
	padding: 10px;
	border-radius: 8px;
	font-size: 16px;
	font-weight: normal;
	background: #333;
	color: #FFF;
	text-align: left;
}
div.wdg-tooltip div.tooltip-text.text-grey {
	color: grey;
}

div.wdg-tooltip div.tooltip-text.bg-grey {
	background-color: grey;
}

div.wdg-tooltip div.tooltip-text:after {
	content: "";
	position: absolute;
	top: 100%;
	left: 27px;
	margin-left: -8px;
	border-width: 8px;
	border-style: solid;
	border-color: #333 transparent transparent transparent;
}
div.wdg-tooltip div.tooltip-text.bg-grey:after {
	border-color: grey transparent transparent transparent;
}
div.wdg-tooltip div.tooltip-text a{
	color: #fff;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .2s;
}
</style>

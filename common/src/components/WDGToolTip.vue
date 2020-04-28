<template>
	<div class="wdg-tooltip">
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
			<div class="tooltip-text" v-if="isTextVisible">
				<slot name="text"></slot>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'WDGToolTip',
	props: {
		color: { type: String, default: 'grey' }
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
}
div.wdg-tooltip div.tooltip-text {
	position: absolute;
	z-index: 1;
	width: 200px;
	bottom: calc(100% + 16px);
	left: -16px;
	padding: 8px;
	border-radius: 8px;
	font-size: 16px;
	font-weight: normal;
	text-align: justify;
	background: #333;
	color: #FFF;
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
.fade-enter, .fade-leave-to {
	opacity: 0;
}
.fade-enter-active, .fade-leave-active {
	transition: opacity .2s;
}
</style>

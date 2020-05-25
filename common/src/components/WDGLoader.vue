<template>
	<div class="wdg-loader">
		<div :class="classType"><div></div><div></div><div></div><div></div></div>
	</div>
</template>

<script>
export default {
	name: 'WDGLoader',
	props: {
		type: { type: String, default: 'ring' },
		color: { type: String, default: 'white' }
	},
	computed: {
		classType () {
			return 'wdg-loader-' + this.type + ' color-' + this.color
		}
	}
}
</script>

<style>
.wdg-loader-ring {
	display: inline-block;
	position: relative;
	width: 80px;
	height: 80px;
}
.wdg-loader-ring div {
	box-sizing: border-box;
	display: block;
	position: absolute;
	width: 64px;
	height: 64px;
	margin: 8px;
	border: 8px solid #fff;
	border-radius: 50%;
	animation: wdg-loader-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
	border-color: #fff transparent transparent transparent;
}
.wdg-loader-ring div:nth-child(1) {
	animation-delay: -0.45s;
}
.wdg-loader-ring div:nth-child(2) {
	animation-delay: -0.3s;
}
.wdg-loader-ring div:nth-child(3) {
	animation-delay: -0.15s;
}
@keyframes wdg-loader-ring {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.wdg-loader-ring.color-grey div {
	border: 8px solid #333;
	border-color: #333 transparent transparent transparent;
}
</style>

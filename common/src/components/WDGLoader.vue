<template>
	<div class="wdg-loader">
		<image xlink:href="@/../../common/src/assets/icons/loading.gif" src="@/../../common/src/assets/icons/loading.gif" width="70" height="70" />
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
.wdg-loader{
	margin: auto;
}
</style>

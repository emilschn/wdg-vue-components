<template>
	<div class="wdg-loader">
		<img v-if="color == 'white'" src="@/../../common/src/assets/icons/loading.gif" :width=size :height=size />
	</div>
</template>

<script>
export default {
	name: 'WDGLoader',
	props: {
		color: { type: String, default: 'white' },
		size: { type: Number, default: 70 }
	}
}
</script>

<style>
.wdg-loader{
	margin: auto;
}
</style>

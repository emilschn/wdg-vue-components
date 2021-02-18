<template>
    <div class="wdg-message">
		<span v-if="icon !== null" class="icon">
			<svg width="40" height="40">
				<image
				:href="getIcon"
				:src="getIcon"
				width="40"
				height="40"
				/>
			</svg>
		</span>
		<span class="text">
			<slot name="label"></slot>
		</span>
    </div>
</template>

<script>
export default {
	name: 'WDGMessage',
	props: {
		id: { type: String, default: null },
		icon: { type: String, default: null }
    },
    computed: {
		getIcon: function () {
			return require('@/../../common/src/assets/icons/' + this.icon)
		}
    }
}
</script>

<style>
.wdg-message {
	text-align: left;
	height: 100%;
	width: 100%;
	padding: 8px;
	margin: 0px;
	border: 1px solid #B3DAE1;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.wdg-message .text {
	left: 20px;
}
</style>

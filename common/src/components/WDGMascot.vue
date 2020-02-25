<template>
	<div class="wdg-mascot" :class="type">
		<div>
			<slot name="text"></slot>
		</div>
		<img src="@/../../common/src/assets/mascotte-1.png" v-if="type == 'face-1'" />
		<img src="@/../../common/src/assets/mascotte-2.png" v-if="type == 'face-2'" />
	</div>
</template>

<script>
export default {
	name: 'WDGMascot',
	props: {
		type: { type: String, default: null }
	}
}
</script>

<style>
.wdg-mascot {
	float: right;
	max-width: 280px;
}
.wdg-mascot div {
	padding: 24px;
	max-width: 100%;
	border-radius: 32px;
	font-size: 15px;
	font-weight: bold;
	font-style: italic;
	text-align: justify;
	color: #555555;
	background: #f4f2f2;
}
/* .wdg-mascot.face-1 div {
}
.wdg-mascot.face-2 div {
} */
.wdg-mascot img {
	margin-top: -16px;
	max-width: 100%;
}
</style>

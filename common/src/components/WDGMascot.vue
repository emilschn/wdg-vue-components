<template>
	<div class="wdg-mascot" :class="divClass">
		<div>
			<slot name="text"></slot>
		</div>
		<svg width="281" height="256" v-if="type == 'face-1'">
			<image xlink:href="@/../../common/src/assets/mascot/front/1.svg" src="@/../../common/src/assets/mascot/front/1.png" width="281" height="256" />
		</svg>
		<svg width="281" height="256" v-if="type == 'face-2'">
			<image xlink:href="@/../../common/src/assets/mascot/front/2.svg" src="@/../../common/src/assets/mascot/front/2.png" width="281" height="256" />
		</svg>
		<svg width="281" height="256" v-if="type == 'face-3'">
			<image xlink:href="@/../../common/src/assets/mascot/front/3.svg" src="@/../../common/src/assets/mascot/front/3.png" width="281" height="256" />
		</svg>
		<svg width="281" height="256" v-if="type == 'side-1'">
			<image xlink:href="@/../../common/src/assets/mascot/side/1.svg" src="@/../../common/src/assets/mascot/side/1.png" width="281" height="256" />
		</svg>
		<svg width="281" height="256" v-if="type == 'side-2'">
			<image xlink:href="@/../../common/src/assets/mascot/side/2.svg" src="@/../../common/src/assets/mascot/side/2.png" width="281" height="256" />
		</svg>
	</div>
</template>

<script>
export default {
	name: 'WDGMascot',
	props: {
		type: { type: String, default: null },
		additionnalClass: { type: String, default: '' }
	},
	computed: {
		divClass () {
			return this.type + ' ' + this.additionnalClass
		}
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
	font-weight: 500;
	font-style: italic;
	color: #555555;
	background: #f4f2f2;
}
.the-screen-project-investors .already-done-bottom {
	order: 2;
}
.the-screen-project-investors .already-done-bottom .wdg-mascot.face-2 {
	width: 100%;
	margin-top: 320px;
}
.the-screen-project-investors .wdg-mascot.side-1, .wdg-mascot.face-1, .wdg-mascot.face-3 {
	margin-top: 100px;
}
/* .wdg-mascot.face-1 div {
}
.wdg-mascot.face-2 div {
} */
.wdg-mascot svg {
	margin-top: -16px;
	max-width: 100%;
}
</style>

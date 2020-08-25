<template>
	<div class="wdg-mascot" :class="[type, additionnalClass, 'text-'+TextColor, 'bg-'+BGColor, alignMascot]">
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
		additionnalClass: { type: String, default: '' },
		TextColor: { type: String, default: 'black' },
		BGColor: { type: String, default: 'white' },
		alignMascot: { type: String, default: 'right' }
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
	background: #f4f2f2;
}
/* .wdg-mascot.face-1 div {
}
.wdg-mascot.face-2 div {
} */
.wdg-mascot svg {
	margin-top: -16px;
	max-width: 100%;
}
.wdg-mascot.text-grey {
	color: #e1e2e3;
}
.wdg-mascot.text-red {
	color: #EA4F51;
}
.wdg-mascot.text-blue {
	color: #00879B;
}
.wdg-mascot.text-green {
	color: #5EB82C;
}
.wdg-mascot.text-yellow {
	color: #EBCE67;
}
.wdg-mascot.text-pink {
	color: #F9CBCB;
}
.wdg-mascot.bg-grey {
	background-color: #e1e2e3;
}
.wdg-mascot.bg-red {
	background-color: #EA4F51;
}
.wdg-mascot.bg-blue {
	background-color: #00879B;
}
.wdg-mascot.bg-green {
	background-color: #5EB82C;
}
.wdg-mascot.bg-yellow {
	background-color: #EBCE67;
}
.wdg-mascot.bg-pink {
	background-color: #F9CBCB;
}
.wdg-mascot.bg-black {
	background-color: #333;
}
.wdg-mascot.left {
	float: left;
}
</style>

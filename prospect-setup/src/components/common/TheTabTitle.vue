<template>
	<div class="the-tab-title">
		<div class="the-tab-title-picto" v-if="hasPictoBalloon">
			<svg width="60" height="60">
				<image xlink:href="@/../../common/src/assets/icons/balloon.svg" src="@/../../common/src/assets/icons/balloon.png" width="60" height="60" />
			</svg>
		</div>

		<h2>
			<slot name="title"></slot>
		</h2>

		<div class="the-tab-title-timer" v-if="nMinutes > 0">
			<svg width="20" height="20">
				<image xlink:href="@/../../common/src/assets/icons/timer.svg" src="@/../../common/src/assets/icons/timer.png" width="20" height="20" />
			</svg>
			{{ nMinutes }} {{ $tc('project-setup.MINUTE', nMinutes ) }}
		</div>

		<div class="the-tab-title-subtitle">
			<slot name="subtitle"></slot>
		</div>
	</div>
</template>

<script>

export default {
	name: 'TheTabTitle',
	props: {
		hasPictoBalloon: Boolean,
		nMinutes: Number
	}
}
</script>

<style>
.the-tab-title {
	text-align: center;
}

.the-tab-title h2 {
	margin: 16px 15px;
	font-size: 30px;
	font-weight: bold;
}

.the-tab-title .the-tab-title-picto {
	margin-top: 32px;
}

.the-tab-title .the-tab-title-timer {
	margin: 8px auto;
	font-size: 16px;
	font-style: italic;
	color: #00879B;
	display: flex;
	justify-content: space-around;
	width: 110px;
}

.the-tab-title .the-tab-title-subtitle {
	margin: 8px auto;
	font-size: 16px;
	font-weight: 500;
	color: #B4B4B4;
}
.the-tab-title-timer svg, .the-tab-title-timer image {
	margin-right: 3px;
}
@media only screen and (max-width: 767px) {
.the-tab-title h2 {
	font-size: 24px;
	text-align: center;
	margin: 30px 0px 10px 0px;
}
}
</style>

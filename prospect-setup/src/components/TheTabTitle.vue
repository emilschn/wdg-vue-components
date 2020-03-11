<template>
	<div class="the-tab-title">
		<div class="the-tab-title-picto" v-if="hasPictoBalloon">
			<svg width="96" height="96">
				<image xlink:href="@/../../common/src/assets/icons/balloon.svg" src="@/../../common/src/assets/icons/balloon.png" width="96" height="96" />
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
	margin: 16px auto;
	font-size: 35px;
	font-weight: bold;
}

.the-tab-title .the-tab-title-timer {
	margin: 8px auto;
	font-size: 16px;
	font-style: italic;
	color: #00879B;
}

.the-tab-title .the-tab-title-subtitle {
	margin: 8px auto;
	font-size: 16px;
	font-weight: bold;
	color: #B4B4B4;
}
</style>

<template>
	<div class="wdg-badge">
		<div class="image">
			<!-- TODO : remplacer par le picto nécessaire (à placer dans assets/badge) Ex de nom : gardener-learner -->
			<svg width="30" height="30" v-if="type == 'check-green'">
				<image xlink:href="@/../../common/src/assets/icons/check-green.svg" src="@/../../common/src/assets/icons/check-green.png" width="30" height="30" />
			</svg>
		</div>
		<div class="text">
			<span class="title"><slot name="title"></slot></span>
			<br>
			<span class="text"><slot name="text"></slot></span>
			<br>
			<div class="exclamation">
				<a href="#">
				<svg width="11" height="30">
					<!-- TODO : remplacer par un point d'interrogation -->
					<image xlink:href="@/../../common/src/assets/icons/exclamation.svg" src="@/../../common/src/assets/icons/exclamation.png" width="11" height="30" />
				</svg>
				</a>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
export default {
	name: 'WDGBadge',
	props: {
		type: { type: String, default: null }
	}
}
</script>

<style>
.wdg-badge div.image {
	float: left;
}
.wdg-badge div.text {
	float: left;
}
.wdg-badge div.clear {
	clear: both;
}
.wdg-badge div.text span.title {
	font-weight: bold;
}
.wdg-badge div.text span.text {
	font-style: italic;
}
</style>

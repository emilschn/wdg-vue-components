<template>
	<div class="the-project-royalties-warning">
		* {{ $t('project-setup.project-funding.royalties-warning.WARNING_1') }}<br>
		{{ $t('project-setup.project-funding.royalties-warning.WARNING_2', { warningMinPercent: minPercent }) }}
	</div>
</template>

<script>

export default {
	name: 'TheProjectRoyaltiesWarning',
	components: {
	},
	props: {
		minPercent: { type: Number, default: 1 }
	},
	data () {
		return {
		}
	}
}
</script>

<style>
div.the-project-royalties-warning {
	margin: 16px 0px;
	font-size: 15px;
	line-height: 24px;
	text-align: center;
}
</style>

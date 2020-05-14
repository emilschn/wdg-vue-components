<template>
	<div class="the-result-not-eligible">
		<div class="intro">
			{{ $t('project-setup.project-result.not-eligible.PROJECT_DOESNT_SEEM_ELIGIBLE') }}
		</div>
		{{ $t('project-setup.project-result.not-eligible.POSSIBLE_REASONS') }}<br>
		- {{ $t('project-setup.project-result.not-eligible.MICROBUSINESS') }}<br>
		- {{ $t('project-setup.project-result.not-eligible.OUT_EURO') }}<br>
		- {{ $t('project-setup.project-result.not-eligible.NOT_ADAPTED') }}<br>
		- {{ $t('project-setup.project-result.not-eligible.NEED_LOVEMONEY') }}<br>
		<br>
		{{ $t('project-setup.project-result.not-eligible.SPECIFIC_PROJECT') }}<br>
		{{ $t('project-setup.project-result.not-eligible.SEND_EMAIL') }}<br>
	</div>
</template>

<script>
export default {
	name: 'TheResultNotEligible',
	components: {
	},
	props: {
	}
}
</script>

<style>
div.the-result-not-eligible {
	margin: 32px 0px;
	background-color: #F6F6F6;
	padding: 30px;
}
div.the-result-not-eligible .intro {
	margin-bottom: 16px;
	font-size: 24px;
	text-align: center;
	font-weight: 700;
}
</style>

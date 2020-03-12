<template>
	<div class="the-project-goal-amount">
        {{ $t('project-setup.project-funding.the-project-goal-amount.TITLE') }}
		<WDGSlider />
        {{ $t('project-setup.project-funding.the-project-goal-amount.MIN') }}
        {{ $t('project-setup.project-funding.the-project-goal-amount.MAX') }}
	</div>
</template>

<script>
import WDGSlider from '@/../../common/src/components/WDGSlider'

export default {
	name: 'TheProjectGoalAmount',
	components: {
		WDGSlider
	},
	props: {
	}
}
</script>

<style>
	.the-project-goal-amount {
		background-color: blueviolet;
	}
</style>

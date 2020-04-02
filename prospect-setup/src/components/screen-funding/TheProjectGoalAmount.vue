<template>
	<div class="the-project-goal-amount project-funding-subpart">
        <h3>
			{{ $t('project-setup.project-funding.the-project-goal-amount.TITLE') }}
			<WDGToolTip>
				<slot slot="text">{{ $t('project-setup.project-funding.the-project-goal-amount.TOOLTIP') }}</slot>
			</WDGToolTip>
		</h3>
		<WDGSlider
		  :defaultValue="150"
		  :min="10"
		  :max="500"
		  />
		<div class="legend">
			<span class="min">{{ $t('project-setup.project-funding.the-project-goal-amount.MIN') }}</span>
			<span class="max">{{ $t('project-setup.project-funding.the-project-goal-amount.MAX') }}</span>
		</div>
	</div>
</template>

<script>
import WDGSlider from '@/../../common/src/components/WDGSlider'
import WDGToolTip from '@/../../common/src/components/WDGToolTip'

export default {
	name: 'TheProjectGoalAmount',
	components: {
        WDGSlider,
        WDGToolTip
	},
	props: {
	}
}
</script>

<style>
    .legend{
        display: flex;
        justify-content: space-between;
    }
</style>

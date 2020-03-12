<template>
	<div class="the-project-goal-amount project-funding-subpart">
        <h3>
			{{ $t('project-setup.project-funding.the-project-goal-amount.TITLE') }}
			<WDGToolTip>
				<slot slot="text">{{ $t('project-setup.project-funding.the-project-goal-amount.TOOLTIP') }}</slot>
			</WDGToolTip>
		</h3>
		<WDGSlider />
        {{ $t('project-setup.project-funding.the-project-goal-amount.MIN') }}
        {{ $t('project-setup.project-funding.the-project-goal-amount.MAX') }}
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

</style>

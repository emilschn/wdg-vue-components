<template>
	<div class="the-project-goal-amount project-funding-subpart">
        <h3>
			{{ $t('project-setup.project-funding.the-project-goal-amount.TITLE') }}
			<WDGToolTip>
				<slot slot="text">{{ $t('project-setup.project-funding.the-project-goal-amount.TOOLTIP') }}</slot>
			</WDGToolTip>
		</h3>
		<WDGSlider
            defaultValue="250"
            :min="10"
            :max="500"
        />
        <span class="min">{{ $t('project-setup.project-funding.the-project-goal-amount.MIN') }}</span>
        <span class="max">{{ $t('project-setup.project-funding.the-project-goal-amount.MAX') }}</span>
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
    .min{
        text-align: left;
    }
    .max{
        text-align: right;
    }
</style>

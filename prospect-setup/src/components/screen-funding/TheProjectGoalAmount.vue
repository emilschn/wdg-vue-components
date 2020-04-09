<template>
	<div class="the-project-goal-amount project-funding-subpart">
        <h3>
			{{ $t('project-setup.project-funding.the-project-goal-amount.TITLE') }}
			<WDGToolTip>
				<slot slot="text">{{ $t('project-setup.project-funding.the-project-goal-amount.TOOLTIP') }}</slot>
			</WDGToolTip>
		</h3>
		<WDGSlider
		  :defaultValue="sharedState.project.amountNeeded"
		  v-bind:valueReturn.sync="sharedState.project.amountNeeded"
		  :onChange="onChange"
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
import { store } from '../../store.js'
import WDGSlider from '@/../../common/src/components/WDGSlider'
import WDGToolTip from '@/../../common/src/components/WDGToolTip'

export default {
	name: 'TheProjectGoalAmount',
	components: {
        WDGSlider,
        WDGToolTip
	},
	props: {
		onChange: { type: Function }
	},
	data () {
		return {
			sharedState: store.state
		}
	}
}
</script>

<style>
    .legend{
        display: flex;
        justify-content: space-between;
    }
</style>

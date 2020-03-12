<template>
	<div class="the-screen-project-funding">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="3"
		  >
			<slot slot="title">{{ $t('project-setup.project-funding.TITLE') }}</slot>
		</TheTabTitle>

		<TheProjectGoalAmount />
		<TheProjectSave />
	</div>
</template>

<script>
import TheTabTitle from '@/components/TheTabTitle'
import TheProjectSave from '@/components/TheProjectSave'
import TheProjectGoalAmount from '@/components/TheProjectGoalAmount'

export default {
	name: 'TheScreenProjectFunding',
	components: {
		TheTabTitle,
		TheProjectSave,
		TheProjectGoalAmount
	},
	props: {
	},
	data () {
		return {
		}
	},
	computed: {
	}
}
</script>

<style>
</style>

<template>
	<div class="the-screen-project-investors">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="1"
		  >
			<slot slot="title">{{ $t('project-setup.project-investors.TITLE') }}</slot>
		</TheTabTitle>

		<WDGToggle
			colorChecked="#8BC79C"
			colorUnchecked="#333"
			>
			<slot slot="label-before">{{ $t('project-setup.project-investors.READY_TO_COMMUNICATE') }}</slot>
		</WDGToggle>

		<WDGMascot type="side-2">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_1A') }} {{ $t('project-setup.project-investors.MASCOT_TEXT_1B') }}</slot>
		</WDGMascot>

		<div class="form-content">
			<h3>{{ $t('project-setup.project-investors.WHICH_CIRCLES_TO_COMMUNICATE') }}</h3>

			<TheProjectInvestorsCircles />
		</div>
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGToggle from '@/../../common/src/components/WDGToggle'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheProjectInvestorsCircles from '@/components/screen-investors/TheProjectInvestorsCircles'

export default {
	name: 'TheScreenProjectInvestors',
	components: {
		WDGToggle,
		WDGMascot,
		TheTabTitle,
		TheProjectInvestorsCircles
	},
    methods: {
        changeStep: function (event) {
            store.changeStep('project-infos')
        }
    }
}
</script>

<style>
.the-screen-project-investors {
	width: 780px;
	margin: auto;
}
.the-screen-project-investors .wdg-toggle {
	text-align: left;
}
.the-screen-project-investors h3 {
	font-size: 22px;
}
.the-screen-project-investors .form-content {
	width: calc(100% - 280px); /* taille de la mascotte */
}
</style>

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

		<div class="form-content">
			<h3>{{ $t('project-setup.project-investors.WHICH_CIRCLES_TO_COMMUNICATE') }}</h3>

			<TheProjectInvestorsCircles />

			<div class="clear"></div>

			<div class="wdg-form checkboxes-container">
				<WDGCheckbox
				id="alreadydonecrowdfunding"
				name="alreadydonecrowdfunding"
				v-bind:valueReturn.sync="alreadydonecrowdfunding"
				>
					<slot slot="label-after">{{ $t('project-setup.project-investors.ALREADY_DONE_CROWDFUNDING') }}</slot>
				</WDGCheckbox>

				<WDGCheckbox
				id="needcommunicationadvice"
				name="needcommunicationadvice"
				v-bind:valueReturn.sync="needcommunicationadvice"
				>
					<slot slot="label-after">{{ $t('project-setup.project-investors.NEED_COMMUNICATION_ADVICE') }}</slot>
				</WDGCheckbox>
			</div>
		</div>

		<WDGMascot type="side-2">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_1A') }} {{ $t('project-setup.project-investors.MASCOT_TEXT_1B') }}</slot>
		</WDGMascot>

		<div class="project-investors-navigation clear">
			<a @click="changeStepBackward">
			{{ $t('project-setup.PREVIOUS_STEP') }}
			</a>

			<WDGButton
				color="red"
				type="button"
				:clickEvent="changeStepForward"
				>
				<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
			</WDGButton>
		</div>

		<TheProjectSave />
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGToggle from '@/../../common/src/components/WDGToggle'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheProjectSave from '@/components/common/TheProjectSave'
import TheProjectInvestorsCircles from '@/components/screen-investors/TheProjectInvestorsCircles'

export default {
	name: 'TheScreenProjectInvestors',
	components: {
		WDGToggle,
		WDGMascot,
		WDGCheckbox,
		WDGButton,
		TheTabTitle,
		TheProjectSave,
		TheProjectInvestorsCircles
	},
	data () {
		return {
			alreadydonecrowdfunding: false,
			needcommunicationadvice: false
		}
	},
    methods: {
        changeStepBackward: function (event) {
            store.changeStep('project-funding')
        },
        changeStepForward: function (event) {
            store.changeStep('project-result')
        }
    }
}
</script>

<style>
div.clear {
	clear: both;
}
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
	float: left;
}
.the-screen-project-investors .checkboxes-container {
	margin-top: 32px;
}
.the-screen-project-investors .checkboxes-container .wdg-checkbox {
	margin: 32px 0px;
}

div.project-investors-navigation {
	margin-top: 24px;
	text-align: center;
}
div.project-investors-navigation a {
	font-size: 13px;
	font-weight: bold;
	text-decoration: underline;
	cursor: pointer;
	color: #B4B4B4;
}
div.project-investors-navigation a:before {
	display: inline-block;
	content: "\2190";
}
div.project-investors-navigation div.wdg-button {
	display: inline-block;
	width: 176px;
	margin-left: 16px;
}
</style>

<template>
	<div class="the-screen-project-investors">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="1"
		  >
			<slot slot="title">{{ $t('project-setup.project-investors.TITLE') }}</slot>
		</TheTabTitle>

		<WDGMascot type="side-2" v-if="getMascotType == '1'">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_1A') }} {{ $t('project-setup.project-investors.MASCOT_TEXT_1B') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-2" v-if="getMascotType == 'not-ready-communicate'">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_2') }}</slot>
		</WDGMascot>

		<div class="ready-to-communicate">
			<div class="ready-to-communicate-question">
				{{ $t('project-setup.project-investors.READY_TO_COMMUNICATE') }}
			</div>

			<WDGButton
			  :color="readyToCommunicateYesButtonColor"
			  type="button"
			  :clickEvent="setReadyToCommunicate"
			  >
				<slot slot="label">{{ $t('common.YES') }}</slot>
			</WDGButton>

			<WDGButton
			  :color="readyToCommunicateNoButtonColor"
			  type="button"
			  :clickEvent="setNotReadyToCommunicate"
			  >
				<slot slot="label">{{ $t('common.NO') }}</slot>
			</WDGButton>
		</div>

		<div class="form-content" v-if="sharedState.project.readyToCommunicate === true">
			<h3>{{ $t('project-setup.project-investors.WHICH_CIRCLES_TO_COMMUNICATE') }}</h3>

			<TheProjectInvestorsCircles />

			<div class="clear"></div>

			<div class="wdg-form checkboxes-container">
				<WDGCheckbox
				  id="alreadydonecrowdfunding"
				  name="alreadydonecrowdfunding"
				  v-bind:valueReturn.sync="sharedState.project.alreadydonecrowdfunding"
				  v-if="sharedState.project.circlesToCommunicate === 'public'"
				  >
					<slot slot="label-after">{{ $t('project-setup.project-investors.ALREADY_DONE_CROWDFUNDING') }}</slot>
				</WDGCheckbox>

				<WDGCheckbox
				  id="needcommunicationadvice"
				  name="needcommunicationadvice"
				  v-bind:valueReturn.sync="sharedState.project.needcommunicationadvice"
				  v-if="sharedState.project.circlesToCommunicate === 'public' || sharedState.project.circlesToCommunicate === 'private'"
				  >
					<slot slot="label-after">{{ $t('project-setup.project-investors.NEED_COMMUNICATION_ADVICE') }}</slot>
				</WDGCheckbox>
			</div>
		</div>

		<div class="project-investors-navigation clear" v-if="sharedState.project.circlesToCommunicate !== '' || sharedState.project.readyToCommunicate === false">
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

		<TheProjectSave v-if="sharedState.project.readyToCommunicate !== ''" />
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheProjectSave from '@/components/common/TheProjectSave'
import TheProjectInvestorsCircles from '@/components/screen-investors/TheProjectInvestorsCircles'

export default {
	name: 'TheScreenProjectInvestors',
	components: {
		WDGMascot,
		WDGCheckbox,
		WDGButton,
		TheTabTitle,
		TheProjectSave,
		TheProjectInvestorsCircles
	},
	data () {
		return {
			sharedState: store.state,
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
		},
		setReadyToCommunicate: function (event) {
			this.sharedState.project.readyToCommunicate = true
		},
		setNotReadyToCommunicate: function (event) {
			this.sharedState.project.readyToCommunicate = false
		}
	},
	computed: {
		readyToCommunicateYesButtonColor () {
			return (this.sharedState.project.readyToCommunicate === true) ? 'red' : 'transparent'
		},
		readyToCommunicateNoButtonColor () {
			return (this.sharedState.project.readyToCommunicate === false) ? 'red' : 'transparent'
		},
		getMascotType () {
			if (this.sharedState.project.readyToCommunicate === false) {
				return 'not-ready-communicate'
			}
			return '1'
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
.the-screen-project-investors .ready-to-communicate {
	float: left;
	width: calc(100% - 280px);
	text-align: center;
}
.the-screen-project-investors .ready-to-communicate .ready-to-communicate-question {
	text-align: left;
	margin-bottom: 16px;
}
.the-screen-project-investors .ready-to-communicate .wdg-button {
	display: inline-block;
	width: 40%;
	margin-right: 16px;
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
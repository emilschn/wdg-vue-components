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

		<WDGMascot type="side-1" v-if="getMascotType == 'lovemoney'">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_LOVEMONEY') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-1" v-if="getMascotType == 'private'">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_PRIVATE') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-3" v-if="getMascotType == 'public'">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_PUBLIC') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-2" v-if="getMascotType == 'already-done'" additionnalClass="mascot-align-bottom">
			<slot slot="text">{{ $t('project-setup.project-investors.MASCOT_TEXT_ALREADY_DONE') }}</slot>
		</WDGMascot>
		</div>

		<div class="communicate-form-container">
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
				  :value="sharedState.project.alreadyDoneCrowdfunding"
				  v-bind:valueReturn.sync="sharedState.project.alreadyDoneCrowdfunding"
				  v-if="sharedState.project.circlesToCommunicate === 'public'"
				  >
					<slot slot="label-after">{{ $t('project-setup.project-investors.ALREADY_DONE_CROWDFUNDING') }}</slot>
				</WDGCheckbox>

				<WDGCheckbox
				  id="needcommunicationadvice"
				  name="needcommunicationadvice"
				  :value="sharedState.project.needCommunicationAdvice"
				  v-bind:valueReturn.sync="sharedState.project.needCommunicationAdvice"
				  v-if="sharedState.project.circlesToCommunicate === 'public' || sharedState.project.circlesToCommunicate === 'private'"
				  >
					<slot slot="label-after">{{ $t('project-setup.project-investors.NEED_COMMUNICATION_ADVICE') }}</slot>
				</WDGCheckbox>
			</div>
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
			sharedState: store.state
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
			if (this.sharedState.project.alreadyDoneCrowdfunding) {
				return 'already-done'
			}
			if (this.sharedState.project.circlesToCommunicate === 'public') {
				return 'public'
			}
			if (this.sharedState.project.circlesToCommunicate === 'private') {
				return 'private'
			}
			if (this.sharedState.project.circlesToCommunicate === 'lovemoney') {
				return 'lovemoney'
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
	width: 96%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.the-screen-project-investors .the-tab-title {
	width: 100%;
	margin-bottom: 20px;
}
.the-screen-project-investors .wdg-mascot {
	order: 2;
	width: 49%;
}
.the-screen-project-investors .communicate-form-container {
	display: flex;
	flex-direction: column;
	width: 49%;
}
.the-screen-project-investors .ready-to-communicate {
	text-align: center;
	margin: 20px 0px;
}
.the-screen-project-investors .ready-to-communicate .ready-to-communicate-question {
	text-align: center;
	margin-bottom: 16px;
}
.the-screen-project-investors .ready-to-communicate .wdg-button {
	display: inline-block;
	width: 176px;
	margin-right: 16px;
}
.the-screen-project-investors .form-content {
	display: flex;
	flex-wrap: wrap;
}
.the-screen-project-investors h3 {
	font-size: 22px;
	width: 100%;
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
.the-screen-project-investors div.project-investors-navigation {
	width: 100%;
	order: 3;
}
.the-screen-project-investors .the-project-save {
	width: 100%;
	order: 4;
}
</style>

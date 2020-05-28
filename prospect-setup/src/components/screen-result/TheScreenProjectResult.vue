<template>
	<div class="the-screen-project-result">
		<div class="project-eligible" v-if="isProjectEligible">
			<TheTabTitle
			v-bind:hasPictoBalloon="true"
			:nMinutes="0"
			>
				<slot slot="title">{{ $t('project-setup.project-result.TITLE') }}</slot>
			</TheTabTitle>

			<div class="result-container">
				<TheResultCampaignAdvice
				:amountRaised="sharedState.project.amountNeeded * 1000"
				:percentRoyalties="getPercentRoyaltiesNumber"
				/>
				<TheResultProspectMeetup />
			</div>
			<div class="clear"></div>
		</div>

		<TheResultNotEligible v-if="!isProjectEligible" />
	</div>
</template>

<script>
import { store } from '../../store.js'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheResultCampaignAdvice from '@/components/screen-result/TheResultCampaignAdvice'
import TheResultProspectMeetup from '@/components/screen-result/TheResultProspectMeetup'
import TheResultNotEligible from '@/components/screen-result/TheResultNotEligible'

export default {
	name: 'TheScreenProjectResult',
	components: {
		TheTabTitle,
		TheResultCampaignAdvice,
		TheResultProspectMeetup,
		TheResultNotEligible
	},
	data () {
		return {
			sharedState: store.state
		}
	},
    computed: {
		getPercentRoyaltiesNumber () {
			return Number(this.sharedState.project.royaltiesAmount)
		},
		isProjectEligible () {
			return (
				this.sharedState.organization.type !== 'microbusiness' && this.sharedState.organization.location !== 'out-euro' && this.sharedState.project.readyToCommunicate && this.sharedState.project.royaltiesOK
			)
		}
    }
}
</script>

<style>
.the-screen-project-result {
	width: 780px;
	margin: auto;
}
.the-screen-project-result div.result-container {
	margin-top: 32px;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.the-screen-project-result div.clear {
	margin-bottom: 32px;
}
.the-screen-project-result div.result-container div.the-result-campaign-advice, .the-screen-project-result div.result-container div.the-result-prospect-meetup {
	width: 40%;
}
@media only screen and (max-width: 767px) {
.the-screen-project-result {
	width: auto;
}
.the-screen-project-result div.result-container {
	flex-direction: column;
	align-items: center;
}
.the-screen-project-result div.result-container div.the-result-campaign-advice, .the-screen-project-result div.result-container div.the-result-prospect-meetup {
	width: 80%;
}
.the-screen-project-result div.result-container div.the-result-prospect-meetup {
	margin-top: 16px;
}
div.the-result-prospect-meetup .wdg-button button {
	text-align: center;
}
}
</style>

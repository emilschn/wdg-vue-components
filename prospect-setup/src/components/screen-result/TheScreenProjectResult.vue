<template>
	<div class="the-screen-project-result">
		<TheTabTitle
		  v-bind:hasPictoBalloon="true"
		  :nMinutes="0"
		  >
			<slot slot="title">{{ $t('project-setup.project-result.TITLE') }}</slot>
		</TheTabTitle>

		<div class="result-container">
			<TheResultCampaignAdvice />
			<TheResultProspectMeetup />
		</div>
		<div class="clear"></div>
	</div>
</template>

<script>
import TheTabTitle from '@/components/common/TheTabTitle'
import TheResultCampaignAdvice from '@/components/screen-result/TheResultCampaignAdvice'
import TheResultProspectMeetup from '@/components/screen-result/TheResultProspectMeetup'

export default {
	name: 'TheScreenProjectResult',
	components: {
		TheTabTitle,
		TheResultCampaignAdvice,
		TheResultProspectMeetup
	},
	data () {
		return {
		}
	},
    methods: {
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
}
.the-screen-project-result div.clear {
	margin-bottom: 32px;
}
.the-screen-project-result div.result-container div.the-result-campaign-advice {
	float: left;
	width: calc(48% - 64px); /* taille moins padding */
}
.the-screen-project-result div.result-container div.the-result-prospect-meetup {
	float: right;
	width: calc(48% - 64px); /* taille moins padding */
}
</style>

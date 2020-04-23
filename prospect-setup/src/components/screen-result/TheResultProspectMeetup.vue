<template>
	<div class="the-result-prospect-meetup">
		<h3>{{ $t('project-setup.project-result.prospect-meetup.PLAN_RENDEZVOUS') }}</h3>

		<WDGForm v-if="!hasSentFiles">
			<WDGFileList
			  id="business"
			  name="business"
			  >
				<slot slot="label">{{ $t('project-setup.project-result.prospect-meetup.ADD_FILES_TEXT') }}</slot>
			</WDGFileList>

			<WDGInput
			  id="comments"
			  :multiline="true"
			  >
				<slot slot="label">{{ $t('project-setup.project-result.prospect-meetup.SEND_FILES_INPUT_LABEL') }}</slot>
			</WDGInput>

			<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="sendFiles"
			  >
				<slot slot="label">{{ $t('common.SEND') }}</slot>
			</WDGButton>
		</WDGForm>

		<div v-if="hasSentFiles" class="title-text">
			{{ $t('project-setup.project-result.prospect-meetup.PLAN_RENDEZVOUS_TEXT') }}
		</div>

		<div v-if="hasSentFiles" class="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/emilien11?embed=true"></div>
	</div>
</template>

<script>
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGFileList from '@/../../common/src/components/WDGFileList'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheResultProspectMeetup',
	components: {
		WDGForm,
		WDGFileList,
		WDGInput,
		WDGButton
	},
	data () {
		return {
			hasSentFiles: false
		}
	},
	methods: {
		sendFiles: function () {
			this.hasSentFiles = true
			let hubspotMeetingScript = document.createElement('script')
			hubspotMeetingScript.setAttribute('src', 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js')
			document.head.appendChild(hubspotMeetingScript)
		}
	}
}
</script>

<style>
div.the-result-prospect-meetup {
	padding: 32px;
	background: #00879b;
	color: #ffffff;
}
div.the-result-prospect-meetup h3 {
	margin: 0px 0px 16px 0px;
	font-size: 26px;
}
div.the-result-prospect-meetup div.title-text {
	margin: 0px 0px 16px 0px;
	font-size: 14px;
}
div.the-result-prospect-meetup .wdg-form div.wdg-file-list label {
	margin-bottom: 8px;
	font-size: 16px;
	font-weight: bold;
	text-align: justify;
}
div.the-result-prospect-meetup .wdg-form .wdg-input label {
	text-align: justify;
}
div.the-result-prospect-meetup .wdg-form textarea {
	height: 100px;
}
div.the-result-prospect-meetup .wdg-form, div.the-result-prospect-meetup .wdg-button button {
	margin-bottom: 0px;
}
</style>

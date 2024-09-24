<template>
	<div class="the-result-prospect-meetup">
		<h3>{{ $t('project-setup.project-result.prospect-meetup.PLAN_RENDEZVOUS') }}</h3>

		<WDGForm v-if="!hasSentFiles">
			<WDGFileList
			  id="business"
			  name="business"
			  :initFileList="sharedProps.initFileList"
			  :onFileListChange="onFileListChangeEvent"
			  >
					<slot slot="label">
						{{ $t('project-setup.project-result.prospect-meetup.ADD_FILES_TEXT') }}
						<p>{{ $t('project-setup.project-result.prospect-meetup.FILE_BUSINESS_PLAN') }}</p>
						<p>{{ $t('project-setup.project-result.prospect-meetup.FILE_PREVISIONNEL') }}</p>
					</slot>
			</WDGFileList>

			<WDGInput
				:placeholder="$t('project-setup.project-result.prospect-meetup.PLACEHOLDER_PROJECT_INFO_QUESTIONS')"
			  id="comments"
			  :multiline="true"
			  :value="sharedState.project.fileComments"
			  v-bind:valueReturn.sync="sharedState.project.fileComments"

			  >
				<slot slot="label">{{ $t('project-setup.project-result.prospect-meetup.SEND_FILES_INPUT_LABEL') }}</slot>
			</WDGInput>

			<WDGButton
			  color="red"
			  type="button"
			  v-bind:disabled="loading"
			  :clickEvent="sendFiles"
			  >
				<slot slot="label">{{ $t('common.SEND') }}</slot>
			</WDGButton>

			<WDGLoader
			  v-if="loading"
			  >
			</WDGLoader>
		</WDGForm>

		<div v-if="hasSentFiles" class="title-text">
			{{ $t('project-setup.project-result.prospect-meetup.PLAN_RENDEZVOUS_TEXT') }}
		</div>

		<div v-if="hasSentFiles" class="meetings-iframe-container" :data-src="meetingURL"></div>
	</div>
</template>

<script>
import axios from 'axios'
import { store } from '../../store.js'
import i18n from '@/i18n'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGFileList from '@/../../common/src/components/WDGFileList'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGLoader from '@/../../common/src/components/WDGLoader'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheResultProspectMeetup',
	components: {
		WDGForm,
		WDGFileList,
		WDGInput,
		WDGLoader,
		WDGButton
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			hasSentFiles: false,
			loading: false,
			fileList: [],
			fileComments: ''
		}
	},
	methods: {
		onFileListChangeEvent: function (filelistData) {
			this.fileList = filelistData
		},
		sendFiles: function () {
			this.loading = true
			let data = new FormData()
			data.append('action', 'prospect_setup_save_files')
			data.append('guid', this.sharedState.guid)
			this.fileList.forEach((fileElement, index) => {
				data.append('file' + index, fileElement)
			})

			axios
				.post (
					this.sharedProps.ajaxurl,
					data,
					{
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					}
				)
				.then (response => {
					let responseData = response.data
					console.log('then')
					console.log(responseData)

					if (responseData.has_error !== '1') {
						this.hasSentFiles = true
						let hubspotMeetingScript = document.createElement('script')
						hubspotMeetingScript.setAttribute('src', 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js')
						document.head.appendChild(hubspotMeetingScript)

						store.saveProject()
					}
				})
				.catch (error => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log('error.response')
						console.log(error.response.data)
						console.log(error.response.status)
						console.log(error.response.headers)
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						console.log('error.request')
						console.log(error.request)
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log('error.message')
						console.log('Error', error.message)
					}
					console.log('error.toJSON')
					console.log(error.toJSON())
					console.log(error.config)
				})
				.finally (() => {
					this.loading = true
				})
		}
	},
	computed: {
		meetingURL () {
			let sParams = ''
			if (this.sharedState.user.email !== '') {
				let sParamEmail = escape(this.sharedState.user.email.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
				sParams += '&email=' + sParamEmail
			}
			if (this.sharedState.user.phone !== '') {
				let sParamPhone = escape(this.sharedState.user.phone.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
				sParams += '&phone=' + sParamPhone
			}
			if (this.sharedState.user.name !== '') {
				let aNameSplit = this.sharedState.user.name.split(' ')
				if (aNameSplit.length > 1) {
					let sFirstName = escape(aNameSplit[0].normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
					let sLastName = escape(aNameSplit[1].normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
					sParams += '&firstname=' + sFirstName
					sParams += '&lastname=' + sLastName
				} else {
					let sFullName = escape(this.sharedState.user.name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
					sParams += '&lastname=' + sFullName
				}
			}
			let sHSURL = 'https://meetings-eu1.hubspot.com/paul-boutelier/rendez-vous-financement-avec-we-do-good?embed=true'
			if (i18n.locale === 'fr') {
				sHSURL = 'https://meetings-eu1.hubspot.com/paul-boutelier/rendez-vous-financement-avec-we-do-good?embed=true'
			}
			return sHSURL + sParams
		}
	}
}
</script>

<style>
div.the-result-prospect-meetup {
	padding: 32px;
	color: #333;
}
div.the-result-prospect-meetup h3 {
	margin: 0px 0px 16px 0px;
	font-size: 26px;
	color: #00879B;
}
div.the-result-prospect-meetup div.title-text {
	margin: 0px 0px 16px 0px;
	font-size: 14px;
}
div.the-result-prospect-meetup .wdg-form div.wdg-file-list label {
	margin-bottom: 8px;
	font-size: 16px;
	font-weight: 500;
}
div.the-result-prospect-meetup .wdg-form div.wdg-file-list label p {
	display: block;
	margin-top: 10px;
}
div.the-result-prospect-meetup .wdg-form textarea {
	height: 80px;
	border-bottom: 2px solid #00879B;
	font-family: 'Arial', sans-serif;
	color: #00879B;
}
div.the-result-prospect-meetup .wdg-form textarea::placeholder {
	color: #00879B;
}
div.the-result-prospect-meetup .wdg-form textarea:focus {
	outline: dotted 1px #c2c2c2;
}
div.the-result-prospect-meetup .wdg-form, div.the-result-prospect-meetup .wdg-button button {
	margin-bottom: 0px;
}
div.the-result-prospect-meetup .wdg-loader {
	text-align: center;
}
</style>

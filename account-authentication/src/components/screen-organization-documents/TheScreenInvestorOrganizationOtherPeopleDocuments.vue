<template>
	<div class="the-screen-investor-organization-other-people-documents">
		<div class="another-people">
			<div class="first-document">
				<div class="people-document-text-container">
					<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_2') }}</span><br>
					<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_TYPE_DESCRIPTION') }}</span><br>
				</div>

				<WDGUploadDocument
				  id="organization-user2-document-1"
				  :onFileChange="onUploadDocumentFileChangeEvent"
				  :onAllFilesSelected="onAllFilesSelectedEvent"
				  />
			</div>

			<div class="second-document">
				<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_SECOND_DOCUMENT') }}</span><br>

				<WDGUploadDocument
				  id="organization-user2-document-2"
				  :onFileChange="onUploadDocumentFileChangeEvent"
				  :onAllFilesSelected="onAllFilesSelectedEvent"
				  />
			</div>

			<WDGButton
			  v-if="nbPeople === 1"
			  color="transparent"
			  :clickEvent="onAddAnotherPeopleClickEvent"
			  >
				<slot slot="label">{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_ADD_ANOTHER') }}</slot>
			</WDGButton>
		</div>

		<div
		  v-if="nbPeople > 1"
		  class="another-people"
		  >
			<div class="first-document">
				<div class="people-document-text-container">
					<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_3') }}</span><br>
					<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_TYPE_DESCRIPTION') }}</span><br>
				</div>

				<WDGUploadDocument
				  id="organization-user3-document-1"
				  :onFileChange="onUploadDocumentFileChangeEvent"
				  :onAllFilesSelected="onAllFilesSelectedEvent"
				  />
			</div>

			<div class="second-document">
				<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_SECOND_DOCUMENT') }}</span><br>
				
				<WDGUploadDocument
				  id="organization-user3-document-2"
				  :onFileChange="onUploadDocumentFileChangeEvent"
				  :onAllFilesSelected="onAllFilesSelectedEvent"
				  />
			</div>

			<WDGButton
			  v-if="nbPeople === 2"
			  color="transparent"
			  :clickEvent="onAddAnotherPeopleClickEvent"
			  >
				<slot slot="label">{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_ADD_ANOTHER') }}</slot>
			</WDGButton>
		</div>

		<div
		  v-if="nbPeople > 2"
		  class="another-people"
		  >
			<div class="first-document">
				<div class="people-document-text-container">
					<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_4') }}</span><br>
					<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_TYPE_DESCRIPTION') }}</span><br>
				</div>

				<WDGUploadDocument
				  id="organization-user4-document-1"
				  :onFileChange="onUploadDocumentFileChangeEvent"
				  :onAllFilesSelected="onAllFilesSelectedEvent"
				  />
			</div>

			<div class="second-document">
				<span>{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE_SECOND_DOCUMENT') }}</span><br>
				
				<WDGUploadDocument
				  id="organization-user4-document-2"
				  :onFileChange="onUploadDocumentFileChangeEvent"
				  :onAllFilesSelected="onAllFilesSelectedEvent"
				  />
			</div>
		</div>

		<WDGButton
		  v-if="isAllDisplayedDocumentsComplete"
		  :clickEvent="onContinueEvent"
		  >
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import { requests } from './../../requests.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGUploadDocument from '@/../../common/src/components/WDGUploadDocument'
export default {
	name: 'TheScreenInvestorOrganizationOtherPeopleDocuments',
	components: {
		WDGButton,
		WDGUploadDocument
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state,
			nbPeople: 1,
			people2Files: [],
			people2Doc1Complete: false,
			people2Doc2Complete: false,
			people3Files: [],
			people3Doc1Complete: false,
			people3Doc2Complete: false,
			people4Files: [],
			people4Doc1Complete: false,
			people4Doc2Complete: false
		}
	},
	methods: {
		onUploadDocumentFileChangeEvent (id, index, idUploadDocument, files) {
			if (id.indexOf('user2') > -1) {
				this.people2Files.splice(index, 1, files)
			}
			if (id.indexOf('user3') > -1) {
				this.people3Files.splice(index, 1, files)
			}
			if (id.indexOf('user4') > -1) {
				this.people4Files.splice(index, 1, files)
			}
			requests.uploadFile(idUploadDocument, files[0], 'organization', sharedState.organization.apiId, this.onDocumentUploadProgressEvent, this.onDocumentUploadCompleteEvent)
		},
		onAllFilesSelectedEvent (id) {
			console.log('onAllFilesSelectedEvent')
			if (id.indexOf('user2') > -1) {
				if (id.indexOf('document-1') > -1) {
					this.people2Doc1Complete = true
				} else {
					this.people2Doc2Complete = true
				}
			}
			if (id.indexOf('user3') > -1) {
				if (id.indexOf('document-1') > -1) {
					this.people3Doc1Complete = true
				} else {
					this.people3Doc2Complete = true
				}
			}
			if (id.indexOf('user4') > -1) {
				if (id.indexOf('document-1') > -1) {
					this.people4Doc1Complete = true
				} else {
					this.people4Doc2Complete = true
				}
			}
		},
		onDocumentUploadProgressEvent (inputRef, uploadPercentage) {
			console.log('onDocumentUploadProgressEvent > ' + inputRef + ' ; ' + uploadPercentage)
			this.$root.$emit('updateFileUploadPercentage', inputRef, uploadPercentage)
		},
		onDocumentUploadCompleteEvent () {
			console.log('onUploadDocumentUploadCompleteEvent')
		},
		onAddAnotherPeopleClickEvent () {
			if ( this.nbPeople < 3 ) {
				this.nbPeople++
			}
		},
		onContinueEvent () {
			this.onContinue()
		}
	},
	computed: {
		isAllDisplayedDocumentsComplete () {
			switch (this.nbPeople) {
				case 1:
					return this.people2Doc1Complete && this.people2Doc2Complete
				case 2:
					return this.people3Doc1Complete && this.people3Doc2Complete
				case 3:
					return this.people4Doc1Complete && this.people4Doc2Complete
			}
			return false
		}
	}
}
</script>

<style>
	div.the-screen-investor-organization-other-people-documents {
		margin: 30px 0px;
	}

	div.the-screen-investor-organization-other-people-documents .another-people {
		margin-bottom: 30px;
	}
	div.the-screen-investor-organization-other-people-documents div.another-people .people-document-text-container span:last-of-type {
		color: #c2c2c2;
		display: inline-block;
		margin: 10px 0 30px 0;
	}
	div.the-screen-investor-organization-other-people-documents div.another-people div.first-document {
		margin-bottom: 60px;
	}
	div.the-screen-investor-organization-other-people-documents div.another-people .second-document span {
		display: inline-block;
		margin-bottom: 20px;
	}
	div.the-screen-investor-organization-other-people-documents div.wdg-upload .document-upload-container {
		width: auto;
	}
	div.the-screen-investor-organization-other-people-documents div.multiple .document-upload-container {
		margin: 10px 0;
	}
	div.the-screen-investor-organization-other-people-documents div.wdg-upload > span {
		width: auto;
	}
</style>

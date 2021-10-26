<template>
	<div class="the-screen-investor-user-documents">

		<div
		  v-if="isFileTypeDisplayed"
		  class="button-container"
		  >
			<div class="title-container">
				<span v-if="step === 'choose-first-file-type' ">{{ $t('account-authentication.user-documents.CHOOSE_A_DOCUMENT_TO_SEND') }}</span>
				<span v-else>{{ $t('account-authentication.user-documents.CHOOSE_A_LAST_DOCUMENT_TO_SEND') }}</span>
			</div>

			<WDGButton
			  v-if="step === 'choose-first-file-type' || firstDocumentType !== 'id'"
			  color="document-upload"
			  icon="address-card"
			  iconStyle="r"
			  :clickEvent="onChooseTypeEvent"
			  id="id"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_ID') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.DESCRIPTOR_ID') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-first-file-type' || firstDocumentType !== 'passport'"
			  color="document-upload"
			  icon="passport"
			  :clickEvent="onChooseTypeEvent"
			  id="passport"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_PASSPORT') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.DESCRIPTOR_PASSPORT') }}</slot>
			</WDGButton>
			

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="file-invoice"
			  :clickEvent="onChooseTypeEvent"
			  id="file-invoice"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_TAX') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.DESCRIPTOR_TAX') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="id-card"
			  :clickEvent="onChooseTypeEvent"
			  id="id-card"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_WELFARE') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="address-book"
			  :clickEvent="onChooseTypeEvent"
			  id="address-book"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_FAMILY') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="file"
			  iconStyle="r"
			  :clickEvent="onChooseTypeEvent"
			  id="file"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_BIRTH') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="id-card"
			  iconStyle="r"
			  :clickEvent="onChooseTypeEvent"
			  id="id-card"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_DRIVING') }}</slot>
			</WDGButton>
		</div>

		<div
		  v-else
		  class="upload-container"
		  >
			<div class="title-container">
				{{ $t('account-authentication.user-documents.SEND_YOUR') }}
				<span v-if="lastDocumentTypeSelected === 'id'">{{ $t('account-authentication.user-documents.SEND_YOUR_ID') }}</span>
				<span v-if="lastDocumentTypeSelected === 'passport'">{{ $t('account-authentication.user-documents.SEND_YOUR_PASSPORT') }}</span>
				<span v-if="lastDocumentTypeSelected === 'tax'">{{ $t('account-authentication.user-documents.SEND_YOUR_TAX') }}</span>
				<span v-if="lastDocumentTypeSelected === 'welfare'">{{ $t('account-authentication.user-documents.SEND_YOUR_WELFARE') }}</span>
				<span v-if="lastDocumentTypeSelected === 'family'">{{ $t('account-authentication.user-documents.SEND_YOUR_FAMILY') }}</span>
				<span v-if="lastDocumentTypeSelected === 'birth'">{{ $t('account-authentication.user-documents.SEND_YOUR_BIRTH') }}</span>
				<span v-if="lastDocumentTypeSelected === 'driving'">{{ $t('account-authentication.user-documents.SEND_YOUR_DRIVING') }}</span>
				<a class="another-doc-link" href="#userdocuments" @click="onChangeDocumentEvent">{{ $t('account-authentication.user-documents.SEND_ANOTHER') }}</a>
				<span class="title-subtitle">{{ $t('account-authentication.user-documents.CHOOSE_DOCUMENT_TYPE') }}</span>
			</div>

			<WDGUploadDocument
			  id="user-document"
			  :onFileChange="onUploadDocumentFileChangeEvent"
			  :onAllFilesSelected="onAllFilesSelectedEvent"
			  />

			
			<WDGButton
			  v-if="isContinueButtonDisplayed"
			  :clickEvent="onContinueButtonClickEvent"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>

		<WDGMascot type="side-1">
			<slot slot="text">
				{{ $t('account-authentication.user-documents.YOUR_DOCUMENT_SHOULD_BE') }}
				<br>
				<ul>
					<li>{{ $t('account-authentication.user-documents.DOCUMENT_READABLE') }}</li>
					<li>{{ $t('account-authentication.user-documents.DOCUMENT_TYPE') }}</li>
					<li>{{ $t('account-authentication.user-documents.DOCUMENT_SIZE') }}</li>
				</ul>
				<br>
				<span v-html="$t('account-authentication.user-documents.USE_WECOMPRESS')"></span>
			</slot>
		</WDGMascot>
	</div>
</template>

<script>
import { requests } from './../../requests.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGUploadDocument from '@/../../common/src/components/WDGUploadDocument'
export default {
	name: 'TheScreenInvestorUserDocuments',
	components: {
		WDGButton,
		WDGMascot,
		WDGUploadDocument
	},
	props: {
		onUploadDoc: Function,
		onContinue: Function
	},
	data () {
		return {
			step: 'choose-first-file-type',
			firstDocumentType: '',
			firstDocumentComplete: false,
			firstDocumentList: [],
			secondDocumentType: '',
			secondDocumentComplete: false,
			secondDocumentList: []
		}
	},
	methods: {
		onChooseTypeEvent: async function (...args) {
			if ( this.step === 'choose-first-file-type' ) {
				this.firstDocumentType = args[0].id
				this.step = 'choose-first-file-upload'
			} else if ( this.step === 'choose-second-file-type' ) {
				this.secondDocumentType = args[0].id
				this.step = 'choose-second-file-upload'
			}
		},
		onChangeDocumentEvent () {
			this.$root.$emit('resetUploadFile', '')
			if ( this.step === 'choose-first-file-upload' ) {
				this.firstDocumentType = ''
				this.firstDocumentList = []
				this.firstDocumentComplete = false
				this.step = 'choose-first-file-type'
			} else if ( this.step === 'choose-second-file-upload' ) {
				this.secondDocumentType = ''
				this.secondDocumentList = []
				this.secondDocumentComplete = false
				this.step = 'choose-second-file-type'
			}
		},
		onUploadDocumentFileChangeEvent (id, index, idUploadDocument, files) {
			if ( this.step === 'choose-first-file-upload' ) {
				this.firstDocumentList.splice(index, 1, files)
			} else {
				this.secondDocumentList.splice(index, 1, files)
			}
			requests.uploadFile(idUploadDocument, files[0], 'user', '', this.firstDocumentType, index + 1, this.onDocumentUploadProgressEvent, this.onDocumentUploadCompleteEvent)
		},
		onAllFilesSelectedEvent () {
			console.log('onAllFilesSelectedEvent')
			if ( this.step === 'choose-first-file-upload' ) {
				this.firstDocumentComplete = true
			} else {
				this.secondDocumentComplete = true
			}
		},
		onDocumentUploadProgressEvent (inputRef, uploadPercentage) {
			console.log('onDocumentUploadProgressEvent > ' + inputRef + ' ; ' + uploadPercentage)
			this.$root.$emit('updateFileUploadPercentage', inputRef, uploadPercentage)
		},
		onDocumentUploadCompleteEvent () {
			console.log('onUploadDocumentUploadCompleteEvent')
		},
		onContinueButtonClickEvent () {
			if ( this.step === 'choose-first-file-upload' ) {
				this.$root.$emit('resetUploadFile', '')
				this.step = 'choose-second-file-type'
			} else if ( this.step === 'choose-second-file-upload' ) {
				this.onContinue()
			}
		}
	},
	computed: {
		isFileTypeDisplayed () {
			return (this.step === 'choose-first-file-type' || this.step === 'choose-second-file-type' )
		},
		isContinueButtonDisplayed () {
			if ( this.step === 'choose-first-file-upload' ) {
				return this.firstDocumentComplete
			}
			if ( this.step === 'choose-second-file-upload' ) {
				return this.secondDocumentComplete
			}
			return false;
		},
		// retourne le type du document 1 ou 2 selon selui en cours de sélection
		lastDocumentTypeSelected () {
			if ( this.secondDocumentType !== '' ) {
				return this.secondDocumentType
			} else {
				return this.firstDocumentType
			}
		}
	}
}
</script>

<style>
	div.the-screen-investor-user-documents {
		margin: 50px 0px;
	}
	div.the-screen-investor-user-documents div.title-container {
		margin-bottom: 20px;
		font-size: 20px;
		width: 100%;
	}
	div.the-screen-investor-user-documents div.title-container .title-subtitle {
		font-size: 16px;
		display: block;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	div.the-screen-investor-user-documents div.button-container {
		float: left;
		width: 600px;
		display: flex;
		flex-flow: row wrap;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button {
		margin-right: 30px;
		width: 45%;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button {
		height: 200px;
		font-size: 20px;
		font-weight: bold;
		text-transform: unset !important;
		width: 270px;
	}
	div.wdg-upload-document div.wdg-radiobutton label {
		height: auto;
		margin-bottom: 30px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button .far, .fas{
		padding: 5px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button span.description {
		display: block;
		font-size: 15px;
		font-weight: normal;
		color: #c2c2c2;
		margin-top: 10px;
	}
	div.the-screen-investor-user-documents div.upload-container {
		float: left;
		width: 600px;
	}
	div.the-screen-investor-user-documents .wdg-upload label {
		border: 1px solid #c2c2c2;
		text-transform: none !important;
		padding: 15px;
		width: auto;
	}
	div.the-screen-investor-user-documents .wdg-upload label span:before {
		content: url("../../../../common/src/assets/icons/upload.png");
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	div.the-screen-investor-user-documents .wdg-upload>span {
		color: #c2c2c2;
	}
	div.the-screen-investor-user-documents .another-doc-link {
		font-size: 14px;
		color: #EA4F51;
		text-decoration: underline;
		display: block;
		margin-top: 15px;
		margin-bottom: 50px;
	}
	.button-container {
		margin-bottom: 50px;
	}
	@media screen and (max-width: 767px) {
		div.the-screen-investor-user-documents div.button-container {
			flex-direction: column;
			width: auto;
			align-items: center;
			float: none;
		}
		div.the-screen-investor-user-documents div.title-container {
			width: auto;
			text-align: center;
		}
		div.the-screen-investor-user-documents div.button-container div.wdg-button {
			width: auto;
			margin-right: 0;
		}
		div.the-screen-investor-user-documents .wdg-mascot {
			margin: 50px auto; 
			float: none;
		}
		div.the-screen-investor-user-documents div.upload-container {
			float: none;
			width: auto;
			margin: 0 24px;
		}
		div.wdg-upload-document div.wdg-upload {
			width: auto;
		}
		div.wdg-upload-document div.multiple {
			margin-bottom: 20px;
		}
		div.upload-multiple-container {
			margin-right: 0;
		}
		div.the-screen-investor-user-documents .multiple .document-upload-container {
			width: 100%;
		}
	}
</style>

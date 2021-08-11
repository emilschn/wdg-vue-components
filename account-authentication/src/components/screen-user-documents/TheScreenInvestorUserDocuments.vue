<template>
	<div class="the-screen-investor-user-documents">

		<div
		  v-if="isFileTypeDisplayed"
		  class="button-container"
		  >
			<div class="title-container">
				{{ $t('account-authentication.user-documents.CHOOSE_A_DOCUMENT_TO_SEND') }}
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
			  icon="tax"
			  :clickEvent="onChooseTypeEvent"
			  id="tax"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_TAX') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.DESCRIPTOR_TAX') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="welfare"
			  :clickEvent="onChooseTypeEvent"
			  id="welfare"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_WELFARE') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="family"
			  :clickEvent="onChooseTypeEvent"
			  id="family"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_FAMILY') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="birth"
			  :clickEvent="onChooseTypeEvent"
			  id="birth"
			  >
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_BIRTH') }}</slot>
			</WDGButton>

			<WDGButton
			  v-if="step === 'choose-second-file-type'"
			  color="document-upload"
			  icon="driving"
			  :clickEvent="onChooseTypeEvent"
			  id="driving"
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
				(<a href="#userdocuments" @click="onChangeDocumentEvent">{{ $t('account-authentication.user-documents.SEND_ANOTHER') }}</a>)
				<br>
				{{ $t('account-authentication.user-documents.CHOOSE_DOCUMENT_TYPE') }}
			</div>

			<WDGUploadDocument
			  id="user-document"
			  :onFileChange="onUploadDocumentFileChangeEvent"
			  :onUploadComplete="onUploadDocumentUploadCompleteEvent"
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
		onUploadDocumentFileChangeEvent (id, index, files) {
			console.log('onUploadDocumentFileChangeEvent > ' + id)
			if ( this.step === 'choose-first-file-upload' ) {
				this.firstDocumentList.splice(index, 1, files)
			} else {
				this.secondDocumentList.splice(index, 1, files)
			}
		},
		onUploadDocumentUploadCompleteEvent (id) {
			console.log('onUploadDocumentUploadCompleteEvent > ' + id)
			if ( this.step === 'choose-first-file-upload' ) {
				this.firstDocumentComplete = true
			} else {
				this.secondDocumentComplete = true
			}
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
	}
	div.the-screen-investor-user-documents div.button-container {
		float: left;
		width: 600px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button {
		float: left;
		width: 270px;
		margin-right: 20px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button {
		height: 200px;
		font-size: 20px;
		font-weight: bold;
		text-transform: unset !important;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button .far, .fas{
		padding: 5px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button span.description {
		display: block;
		font-size: 15px;
		font-weight: normal;
		color: #EBEBEB;
	}
	div.the-screen-investor-user-documents div.upload-container {
		float: left;
		width: 600px;
	}
</style>

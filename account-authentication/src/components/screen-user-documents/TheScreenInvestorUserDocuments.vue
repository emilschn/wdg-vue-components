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
			<WDGRadioButton
			  name="nb-file"
			  value="1"
			  :onChange="onChooseNbFileEvent"
			  >
				<slot slot="label-after">{{ $t('account-authentication.user-documents.ONE_FILE') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.ONE_FILE_DESCRIPTOR') }}</slot>
			</WDGRadioButton>
			<WDGRadioButton
			  name="nb-file"
			  value="2"
			  :onChange="onChooseNbFileEvent"
			  >
				<slot slot="label-after">{{ $t('account-authentication.user-documents.TWO_FILES') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.TWO_FILES_DESCRIPTOR') }}</slot>
			</WDGRadioButton>
			<div style="clear: both;"></div>

			<WDGUpload
		 	  v-if="nbFileToDisplay >= 1"
			  id="file1"
			  :onFileChange="onFileUploadChangeEvent"
			  :label="firstFileLabel"
			  :class="nbFileToDisplay > 1 ? 'multiple' : ''"
			  >
			</WDGUpload>
			<WDGUpload
		 	  v-if="nbFileToDisplay > 1"
			  id="file2"
			  :onFileChange="onFileUploadChangeEvent"
			  :label="$t('account-authentication.user-documents.FILE_TWO_LABEL')"
			  :class="nbFileToDisplay > 1 ? 'multiple' : ''"
			  >
			</WDGUpload>

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
import i18n from '@/i18n'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGRadioButton from '@/../../common/src/components/WDGRadioButton'
import WDGUpload from '@/../../common/src/components/WDGUpload'
export default {
	name: 'TheScreenInvestorUserDocuments',
	components: {
		WDGButton,
		WDGMascot,
		WDGRadioButton,
		WDGUpload
	},
	props: {
		onUploadDoc: Function,
		onContinue: Function
	},
	data () {
		return {
			step: 'choose-first-file-type',
			nbFileToDisplay: 0,
			firstDocumentType: '',
			firstDocumentNbFiles: 0,
			firstDocumentList: [],
			secondDocumentType: '',
			secondDocumentNbFiles: 0,
			secondDocumentList: []
		}
	},
	methods: {
		onChooseTypeEvent: async function (...args) {
			if ( this.step === 'choose-first-file-type' ) {
				this.firstDocumentType = args[0].id
				this.step = 'choose-first-file-count'
			} else if ( this.step === 'choose-second-file-type' ) {
				this.secondDocumentType = args[0].id
				this.step = 'choose-second-file-count'
			}
		},
		onChangeDocumentEvent () {
			if ( this.step === 'choose-first-file-count' || this.step === 'choose-first-file-upload' ) {
				this.firstDocumentType = ''
				this.step = 'choose-first-file-type'
			} else if ( this.step === 'choose-second-file-count' || this.step === 'choose-second-file-upload' ) {
				this.secondDocumentType = ''
				this.step = 'choose-second-file-type'
			}
		},
		onChooseNbFileEvent (newValue) {
			if ( this.step === 'choose-first-file-count' ) {
				this.firstDocumentNbFiles = newValue
				this.step = 'choose-first-file-upload'
			} else if ( this.step === 'choose-second-file-count' ) {
				this.secondDocumentNbFiles = newValue
				this.step = 'choose-second-file-upload'
			}
			this.nbFileToDisplay = newValue
		},
		onFileUploadChangeEvent (idUploadDocument, files) {
			let index = (idUploadDocument == 'file1') ? 0 : 1
			if ( this.step === 'choose-first-file-upload' ) {
				this.firstDocumentList.splice(index, 1, files)
			} else if ( this.step === 'choose-second-file-upload' ) {
				this.secondDocumentList.splice(index, 1, files)
			}
		},
		onContinueButtonClickEvent () {
			if ( this.step === 'choose-first-file-upload' ) {
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
		isFileCountDisplayed () {
			return (this.step === 'choose-first-file-count' || this.step === 'choose-second-file-count' )
		},
		isFileUploadDisplayed () {
			return (this.step === 'choose-first-file-upload' || this.step === 'choose-second-file-upload' )
		},
		isContinueButtonDisplayed () {
			if ( this.step === 'choose-first-file-upload' ) {
				for ( let i = 0; i < this.firstDocumentNbFiles; i++ ) {
					if (this.firstDocumentList[ i ] === undefined) {
						return false
					}
				}
				return true
			}
			if ( this.step === 'choose-second-file-upload' ) {
				for ( let i = 0; i < this.secondDocumentNbFiles; i++ ) {
					if (this.secondDocumentList[ i ] === undefined) {
						return false
					}
				}
				return true
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
		},
		firstFileLabel () {
			if ( this.nbFileToDisplay > 1 ) {
				return i18n.t('account-authentication.user-documents.FILE_ONE_LABEL')
			} else {
				return i18n.t('common.SEND_FILE')
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
	div.the-screen-investor-user-documents div.upload-container div.wdg-radiobutton {
		float: left;
		width: 270px;
		margin-right: 20px;
	}
	div.the-screen-investor-user-documents div.upload-container div.wdg-radiobutton label {
		height: 200px;
	}
	div.the-screen-investor-user-documents div.upload-container div.wdg-radiobutton label span.description {
		display: block;
		font-size: 15px;
		font-weight: normal;
		color: #EBEBEB;
		margin-left: 20px;
	}
	div.the-screen-investor-user-documents div.upload-container .wdg-upload {
		float: left;
		width: 50.1%;
	}
	div.the-screen-investor-user-documents div.upload-container .wdg-upload.multiple {
		float: right;
	}
</style>

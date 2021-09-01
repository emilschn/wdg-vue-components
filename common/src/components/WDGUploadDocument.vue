<template>
	<div class="wdg-upload-document">
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

		<div :class="nbFileToDisplay > 1 ? 'upload-multiple-container' : ''">
		<WDGUpload
		  v-if="nbFileToDisplay >= 1"
		  id="file1"
		  ref="file1"
		  :onFileChange="onFileUploadChangeEvent"
		  :label="firstFileLabel"
		  :class="nbFileToDisplay > 1 ? 'multiple' : ''"
		  :uploadPercentage="file1UploadPercentage"
		  :displayPreview=true
		  >
		</WDGUpload>
		<WDGUpload
		  v-if="nbFileToDisplay > 1"
		  id="file2"
		  ref="file2"
		  :onFileChange="onFileUploadChangeEvent"
		  :label="$t('account-authentication.user-documents.FILE_TWO_LABEL')"
		  :class="nbFileToDisplay > 1 ? 'multiple' : ''"
		  :uploadPercentage="file2UploadPercentage"
		  :displayPreview=true
		  >
		</WDGUpload>
		<div style="clear: both;"></div>
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import WDGRadioButton from '@/../../common/src/components/WDGRadioButton'
import WDGUpload from '@/../../common/src/components/WDGUpload'
export default {
	name: 'WDGUploadDocument',
	components: {
		WDGRadioButton,
		WDGUpload
	},
	props: {
		id: { type: String, default: null },
		onFileChange: Function,
		onAllFilesSelected: Function
	},
	data () {
		return {
			nbFileToDisplay: 0,
			files: [],
			file1UploadPercentage: 0,
			file2UploadPercentage: 0
		}
	},
	mounted () {
		this.$root.$on('resetUploadFile', this.onResetEvent)
		this.$root.$on('updateFileUploadPercentage', this.onUpdateFileUploadPercentageEvent)
	},
	computed: {
		firstFileLabel () {
			if (this.nbFileToDisplay > 1) {
				return i18n.t('account-authentication.user-documents.FILE_ONE_LABEL')
			} else {
				return i18n.t('common.SEND_FILE')
			}
		}
	},
	methods: {
		onChooseNbFileEvent (newValue) {
			this.nbFileToDisplay = newValue
		},
		onFileUploadChangeEvent (idUploadDocument, filesUpload) {
			let index = (idUploadDocument === 'file1') ? 0 : 1
			this.files.splice(index, 1, filesUpload)
			this.onFileChange(this.id, index, idUploadDocument, filesUpload)

			let sendUploadComplete = true
			for (let i = 0; i < this.nbFileToDisplay; i++) {
				if (this.files[i] === undefined) {
					sendUploadComplete = false
				}
			}
			if (sendUploadComplete) {
				this.onAllFilesSelected(this.id)
			}
		},
		onUpdateFileUploadPercentageEvent (ref, uploadPercentage) {
			if (ref === 'file1') {
				this.file1UploadPercentage = uploadPercentage
			}
			if (ref === 'file2') {
				this.file2UploadPercentage = uploadPercentage
			}
		},
		onResetEvent () {
			this.files = []
		}
	}
}
</script>

<style>
div.wdg-upload-document {
	margin-top: 10px;
	display: flex;
	flex-flow: row wrap;
}
div.wdg-upload-document div.wdg-radiobutton {
	width: 40%;
}
div.wdg-upload-document div.wdg-radiobutton:first-of-type {
	margin-right: 55px;
}
div.wdg-upload-document div.wdg-radiobutton label {
	height: 200px;
}
div.wdg-upload-document div.wdg-radiobutton label span.description {
	display: block;
	font-size: 15px;
	font-weight: normal;
	color: #c2c2c2;
	margin-top: 10px;
}
div.wdg-upload-document div.wdg-upload {
	width: 40%;
}
div.wdg-upload-document div.multiple {
	margin-bottom: 20px;
}
div.wdg-upload-document div.upload-multiple-container{
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-right: 50px;
}
</style>

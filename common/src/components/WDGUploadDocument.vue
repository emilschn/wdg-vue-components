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
		onUploadComplete: Function
	},
	data () {
		return {
			nbFileToDisplay: { type: Number, default: 0 },
			files: []
		}
	},
	mounted () {
		this.$root.$on('resetUploadFile', this.onResetEvent)
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
			this.onFileChange(this.id, index, filesUpload)

			let sendUploadComplete = true
			for (let i = 0; i < this.nbFileToDisplay; i++) {
				if (this.files[i] === undefined) {
					sendUploadComplete = false
				}
			}
			if (sendUploadComplete) {
				this.onUploadComplete(this.id)
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
}
div.wdg-upload-document div.wdg-radiobutton {
	float: left;
	width: 270px;
	margin-right: 20px;
}
div.wdg-upload-document div.wdg-radiobutton label {
	height: 200px;
}
div.wdg-upload-document div.wdg-radiobutton label span.description {
	display: block;
	font-size: 15px;
	font-weight: normal;
	color: #EBEBEB;
	margin-left: 20px;
}
div.wdg-upload-document div.wdg-upload {
	float: left;
	width: 50.1%;
}
div.wdg-upload-document div.wdg-upload.multiple {
	float: right;
}
</style>

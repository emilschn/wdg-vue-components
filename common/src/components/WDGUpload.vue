<template>
	<div class="wdg-upload">
		<label class="document-upload-container">
			<div
		  		v-if="canDisplayPreview"
		  		class="preview"
			>
			<img :src="filePreviewURL">
			</div>
			<div class="upload-container-text">
				<input
				  id="upload"
				  name="attachment"
				  type="file"
				  @change="onFileChangeEvent"
				 >
					<span v-if="fileName !== ''" class="file-name">{{ fileName }}</span>
					<span v-else-if="label !== null && label !== ''">{{ label }}</span>
					<span v-else>{{ $t('common.SEND_FILE') }}</span>
				<div
		  			v-if="fileName"
		  			class="remove-file"
		  		>
				<a @click="onResetEvent">{{ $t('common.REMOVE') }}</a>
				</div>
			</div>
			<progress max="100" :value.prop="uploadPercentage"></progress>
		</label>
		<span>{{ $t('common.SEND_FILE_DESCRIPTOR') }}</span>
		<div
		  v-if="feedbackError !== ''"
		  class="feedback-error"
		  >
			{{ feedbackError }}
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
export default {
	name: 'WDGUpload',
	components: {
	},
	props: {
		id: { type: String, default: null },
		color: { type: String, default: 'red' },
		label: { type: String, default: null },
		displayPreview: { type: Boolean, default: false },
		uploadPercentage: { type: Number, default: 0 },
		onFileChange: Function
	},
	data () {
		return {
			files: [],
			filePreviewURL: '',
			feedbackError: ''
		}
	},
	mounted () {
		this.$root.$on('resetUploadFile', this.onResetEvent)
	},
	computed: {
		fileName () {
			if ((this.files.length > 0) && 'name' in this.files[0]) {
				return this.files[0].name
			}
			return ''
		},
		canDisplayPreview () {
			return this.displayPreview && this.files.length > 0 && this.filePreviewURL !== ''
		}
	},
	methods: {
		onFileChangeEvent (e) {
			this.onResetEvent()
			let tempFiles = Array.from(e.target.files)

			// Vérification du poids du fichier
			let nSizeFile = tempFiles[0].size
			if (nSizeFile < 8 * 1024 * 1024) {
				// Si c'est un type de fichier accepté, on l'uploade directement
				if (this.isFileTypeAccepted(tempFiles[0])) {
					this.files = tempFiles
					this.onFileChange(this.id, this.files)

					// Si c'est une image, on charge l'url du fichier pour faire un aperçu
					if (this.isFilePicture(this.files[0])) {
						let reader = new FileReader()
						reader.addEventListener(
							'load',
							function () {
								this.filePreviewURL = reader.result
							}.bind(this),
							false
						)
						reader.readAsDataURL(this.files[0])
					}
				// Le type de fichier n'est pas accepté
				} else {
					this.feedbackError = i18n.t('common.FILE_TYPE_NOT_ACCEPTED')
				}
			// Le fichier est trop lourd
			} else {
				this.feedbackError = i18n.t('common.FILE_TOO_BIG')
			}
		},
		onResetEvent () {
			this.files = []
			this.filePreviewURL = ''
			this.feedbackError = ''
			this.$root.$emit('updateFileUploadPercentage', this.id, 0)
		},
		isFilePicture (file) {
			return /\.(jpe?g|png|gif)$/i.test(file.name)
		},
		isFilePDF (file) {
			return /\.(pdf)$/i.test(file.name)
		},
		isFileTypeAccepted (file) {
			return this.isFilePicture(file) || this.isFilePDF(file)
		}
	}
}
</script>

<style>
.wdg-upload {
	margin-top: 10px;
}
.wdg-upload label {
	display: block;
	width: 100%;
	/* height: 48px; */
	margin-bottom: 16px;
	padding: 0px;
	text-align: center;
	line-height: 48px;
	text-transform: uppercase !important; /* ajout de important sinon c'est écrasé par normalize.less */
	border: 1px dotted black;
	cursor: pointer;
}
.wdg-upload .document-upload-container {
	display: flex;
	flex-flow: row wrap;
}
.wdg-upload .document-upload-container .preview {
	width: 25%;
	max-height: 10%;
}
.wdg-upload .upload-container-text {
	width: 62%;
	line-height: normal;
	margin-left: 10px;
}
.wdg-upload label input[type=file] {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.wdg-upload .file-name {
	font-size: 14px;
	display: inherit;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	border-bottom: 1px solid #c2c2c2;
	margin-bottom: 5px;
}
.wdg-upload .file-name:before { /* change l'icône à côté du fichier uploadé */
	content: url("../assets/icons/check-green.png") !important;
	transform: scale(0.6);
	margin-right: 0 !important;
}
.wdg-upload .file-name-container {
	padding-bottom: 5px;
}
.wdg-upload label progress {
	display: block;
	margin: auto;
}
.wdg-upload div.preview img {
	max-width: 100%;
	max-height: 150px;
}
.wdg-upload div.remove-file {
	text-align: left;
	margin-top: 10px;
}
.wdg-upload .remove-file:before {
	content: url("../assets/icons/bin.png");
	margin-right: 10px;
	vertical-align: middle;
}
.wdg-upload div.remove-file a {
	color: #EA4F51;
	text-decoration: underline;
	cursor: pointer;
}
.wdg-upload div.feedback-error {
	border: 1px solid #F8CACA;
	padding: 15px;
	margin-top: 10px;
	display: flex;
	align-items: center;
}
.wdg-upload div.feedback-error:before {
	content: url("../assets/icons/exclamation.png");
	margin-right: 15px;

}
</style>

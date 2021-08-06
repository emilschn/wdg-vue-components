<template>
	<div class="wdg-upload">
		<label>
			<input
			  id="upload"
			  name="attachment"
			  type="file"
			  @change="onFileChangeEvent"
			  >
			<span v-if="fileName !== ''">{{ fileName }}</span>
			<span v-else-if="label !== null && label !== ''">{{ label }}</span>
			<span v-else>{{ $t('common.SEND_FILE') }}</span>
		</label>
		{{ $t('common.SEND_FILE_DESCRIPTOR') }}
	</div>
</template>

<script>
export default {
	name: 'WDGUpload',
	components: {
	},
	props: {
		id: { type: String, default: null },
		color: { type: String, default: 'red' },
		label: { type: String, default: null },
		onFileChange: Function
	},
	data () {
		return {
			files: []
		}
	},
	computed: {
		fileName () {
			if ((this.files.length > 0) && 'name' in this.files[0]) {
				return this.files[0].name
			}
			return ''
		}
	},
	methods: {
		onFileChangeEvent (e) {
			this.files = Array.from(e.target.files)
			this.onFileChange(this.id, this.files)
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
	height: 48px;
	margin-bottom: 16px;
	padding: 0px;
	text-align: center;
	line-height: 48px;
	text-transform: uppercase !important; /* ajout de important sinon c'est écrasé par normalize.less */
	border: 1px dotted black;
	cursor: pointer;
}
.wdg-upload label input[type=file] {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
</style>

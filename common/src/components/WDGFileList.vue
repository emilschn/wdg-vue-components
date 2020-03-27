<template>
  	<div class="wdg-file-list">
		<label :for="id">
			<slot name="label"></slot>
		</label>

		<input
			v-for="i in getNbFiles"
			:key="i"
			:id="id + '-' + i"
			:name="id + '-' + i"
			:disabled="disabled"
			type="file"
			/>

		<div class="link-container">
			<a @click="addFile">
				{{ $t('common.ADD_DOCUMENT') }}
			</a>
		</div>
  	</div>
</template>

<script>
export default {
	name: 'WDGFileList',
	components: {
	},
	props: {
		id: { type: String, default: null },
		name: { type: String, default: null },
		disabled: { type: Boolean, default: false },
		initNbFiles: { type: Number, default: 1 }
	},
	data () {
		return {
			nbFiles: 0
		}
	},
	computed: {
		getNbFiles () {
			if (this.nbFiles !== undefined) {
				return this.nbFiles
			} else {
				return this.initNbFiles
			}
		}
	},
	mounted () {
		this.nbFiles = this.initNbFiles
	},
	methods: {
		addFile () {
			this.nbFiles++
		}
	}
}
</script>

<style>
.wdg-file-list {
	margin-bottom: 16px;
}
.wdg-file-list input {
	margin-bottom: 16px;
}
.wdg-file-list .link-container {
	text-align: center;
}
.wdg-file-list .link-container a {
	color: #ffffff;
	text-decoration: underline;
	cursor: pointer;
}
.wdg-file-list .link-container a::before {
	display: inline-block;
	content: "+"
}
</style>

<template>
  	<div
	  :class="textColor"
	  class="wdg-file-list"
	  >
		<label :for="id">
			<slot name="label"></slot>
		</label>

		<div class="init-file-list" v-if="initFileList.length > 0">
			{{ $t('common.PREVIOUSLY_SENT_FILES') }} :<br>
			<ul>
				<li
				  v-for="(item, index) in initFileList"
				  :item="item"
				  :index="index"
				  :key="item.id"
				  >
					<a :href="item.url" target="_blank">{{ $t('common.FILE') }} {{index+1}}</a>
				</li>
			</ul>
		</div>

		<input
		  v-for="i in getNbFiles"
		  :key="i"
		  :id="id + '-' + i"
		  :name="id + '-' + i"
		  :ref="id+i"
		  :disabled="disabled"
		  type="file"
		  @change="setFile"
		  />

		<button class="link-container transparent" type="button" @click="addFile">+ {{ $t('common.ADD_DOCUMENT') }}</button>
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
		textColor: { type: String, default: 'white' },
		disabled: { type: Boolean, default: false },
		initFileList: { type: Array, default: () => [] },
		initNbFiles: { type: Number, default: 1 },
		onFileListChange: Function
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
		},
		setFile () {
			let filelist = []
			for (let i = 1; i <= this.nbFiles; i++) {
				filelist.push(this.$refs[this.id + i][0].files[0])
			}
			this.onFileListChange(filelist)
		}
	}
}
</script>

<style>
.wdg-file-list {
	margin-bottom: 16px;
}
.wdg-file-list .init-file-list {
	margin: 24px 0px;
}
.wdg-file-list.grey .init-file-list, .wdg-file-list.grey .init-file-list a {
	color: #333;
}
.wdg-file-list input {
	max-width: 95%;
	font-size: 16px;
	margin: 10px 0px;
	padding: 10px;
	background-color: #fff;
	border: 1px solid #c2c2c2;
}
.wdg-file-list .link-container {
	text-align: center;
	margin-bottom: 25px;
	cursor: pointer;
}
.wdg-file-list.grey .link-container a {
	color: #333;
}
.wdg-file-list .link-container a::before {
	display: inline-block;
	content: "+"
}
.wdg-file-list ul li {
	list-style-position: inside;
}
</style>

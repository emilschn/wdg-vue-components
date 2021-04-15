<template>
	<div class="the-project-save">
		<svg width="20" height="20" v-if="status == 'init'">
			<image xlink:href="@/../../common/src/assets/icons/save.svg" src="@/../../common/src/assets/icons/save.png" width="20" height="20" />
		</svg>

		<svg width="20" height="20" v-if="status == 'waiting'">
			<image xlink:href="@/../../common/src/assets/icons/timer.svg" src="@/../../common/src/assets/icons/timer.png" width="20" height="20" />
		</svg>

		<svg width="20" height="20" v-if="status == 'saved'">
			<image xlink:href="@/../../common/src/assets/icons/check.svg" src="@/../../common/src/assets/icons/check.png" width="20" height="20" />
		</svg>

		<a @click="saveProjectEvent" v-if="status == 'init' || status == 'saved' || status == 'error'">
			{{ $t('project-setup.SAVE_PROJECT') }}
		</a>

		<span v-if="status == 'waiting'">
			{{ $t('project-setup.SAVING_PROJECT') }}
		</span>

		<div class="saved" v-if="status == 'saved'">
			<span>
				<svg width="30" height="30">
					<image xlink:href="@/../../common/src/assets/icons/check-green.svg" src="@/../../common/src/assets/icons/check-green.png" width="20" height="20" />
				</svg>
			{{ $t('project-setup.SAVED_PROJECT') }}</span>
		</div>

		<div class="error" v-if="status == 'error'">
			<span>
				<svg width="11" height="30">
					<image xlink:href="@/../../common/src/assets/icons/exclamation.svg" src="@/../../common/src/assets/icons/exclamation.png" width="11" height="30" />
				</svg>
				{{ $t('project-setup.SAVED_PROJECT_ERROR') }}</span>
		</div>
	</div>
</template>

<script>
import { bus, store } from '../../store.js'

export default {
	name: 'TheProjectSave',
	data () {
		return {
			status: 'init'
		}
	},
	mounted () {
		bus.$root.$on('updateSaveStatus', this.updateStatusEvent)
	},
	methods: {
		saveProjectEvent () {
			this.status = 'waiting'
			store.saveProject()
		},
		updateStatusEvent (sNewStatus) {
			this.status = sNewStatus
		}
	}
}
</script>

<style>
.the-project-save {
	margin: 25px 0px;
	text-align: center;
}
.the-project-save a, .the-project-save span {
	position: relative;
	top: -5px;
	display: inline-block;
	font-size: 13px;
	color: #B4B4B4;
}
.the-project-save div.saved span, .the-project-save div.error span {
	display: inline-block;
	margin-top: 8px;
	padding: 8px;
	font-size: 13px;
}
.the-project-save div.saved span {
	border: 1px solid #CEE9C0;
	color: #FFF;
	display: flex;
	align-items: center;
	width: 30%;
	justify-content: center;
	margin: 10px auto;
}
.the-project-save div.error span {
	border: 1px solid #F8CACA;
	padding: 10px;
	color: #333;
	display: flex;
	align-items: center;
	width: 30%;
	justify-content: center;
	margin: 10px auto;
}
.the-project-save div.saved span svg, .the-project-save div.error span svg {
	margin-right: 10px;
}
.the-project-save a {
	text-decoration: underline;
	cursor: pointer;
	margin-left: 10px;
}
</style>

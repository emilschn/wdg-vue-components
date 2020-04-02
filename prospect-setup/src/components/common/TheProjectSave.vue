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
			<span>{{ $t('project-setup.SAVED_PROJECT') }}</span>
		</div>

		<div class="error" v-if="status == 'error'">
			<span>{{ $t('project-setup.SAVED_PROJECT_ERROR') }}</span>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import { store } from '../../store.js'

export default {
	name: 'TheProjectSave',
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			status: 'init'
		}
	},
	methods: {
		saveProjectEvent () {
			this.status = 'waiting'

			let data = new FormData()
			data.append('action', 'prospect_setup_save')
			data.append('guid', this.sharedState.guid)
			data.append('id_user', this.sharedState.user.id)
			data.append('email', this.sharedState.user.email)
			data.append('status', this.sharedState.status)
			data.append('step', this.sharedState.step)
			data.append('authorization', this.sharedState.authorization)
			data.append('metadata', JSON.stringify(this.sharedState))

			axios
				.post (this.sharedProps.ajaxurl, data)
				.then (response => {
					let responseData = response.data
					console.log('then')
					console.log(responseData)
					if (responseData.save_status === 'saved') {
						this.status = 'saved'
						this.sharedState.guid = responseData.guid
						this.sharedState.user.id = responseData.id_user
					} else {
						this.status = 'error'
					}
				})
				.catch (error => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log('error.response')
						console.log(error.response.data)
						console.log(error.response.status)
						console.log(error.response.headers)
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						console.log('error.request')
						console.log(error.request)
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log('error.message')
						console.log('Error', error.message)
					}
					console.log('error.toJSON')
					console.log(error.toJSON())
					console.log(error.config)
					this.status = 'error'
				})
		}
	}
}
</script>

<style>
.the-project-save {
	margin: 16px 0px;
	text-align: center;
}
.the-project-save a, .the-project-save span {
	position: relative;
	top: -5px;
	display: inline-block;
	margin-left: 16px;
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
	background: #8BC79C;
	color: #FFF;
}
.the-project-save div.error span {
	background: #EACDCB;
	color: #333;
}
.the-project-save a {
	text-decoration: underline;
	cursor: pointer;
}
</style>

<template>
	<div class="button-facebook">
		<WDGButton
		  color="facebook"
		  type="button"
		  v-bind:disabled="loading"
		  :clickEvent="getFacebookURL"
		  >
			<slot slot="label">{{ $t('signin-signup.CONNECT_TO_FACEBOOK') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import axios from 'axios'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'ButtonFacebook',
	components: {
		WDGButton
	},
	props: {
		ajaxUrl: { type: String, default: '' }
	},
	data () {
		return {
			loading: false
		}
	},
	methods: {
		getFacebookURL () {
			this.loading = true
			let data = new FormData()
			data.append('action', 'get_connect_to_facebook_url')

			axios
				.post (this.ajaxUrl, data)
				.then (response => {
					let responseData = response.data
					window.location.href = responseData
				})
				.catch (error => {
					console.log(error)
					this.loading = false
				})
				.finally (() => {
				})
		}
	}
}
</script>

<style>
</style>

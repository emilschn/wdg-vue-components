import Vue from 'vue'
import axios from 'axios'
import { store } from './store.js'

export const bus = new Vue()

export const requests = {
	/**
	 * Fonction de log des erreurs de requetes
	 */
	logRequestError(message) {
		let data = new FormData()
		data.append('action', 'vuejs_error_catcher')
		data.append('app', 'account-signin')
		data.append('message', message)
		axios
			.post(store.props.ajaxurl, data)
	},

	/**
	 * Fonction de recherche d'infos par adresse e-mail
	 */
	getEmailAddressInfo(emailAddress, functionReturn) {
		console.log('getEmailAddressInfo >> ' + emailAddress)
		let data = new FormData()
		data.append('action', 'account_signin_get_email_info')
		data.append('email-address', emailAddress)
		axios
			.post(store.props.ajaxurl, data, { timeout: 10000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				bus.$root.$emit('updateSaveStatus', 'error')
				functionReturn(responseData)
			})
			.catch(error => {
				console.log('error.toJSON')
				console.log(error.toJSON())
				console.log(error.config)
				this.logRequestError('getEmailAddressInfo >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				bus.$root.$emit('updateSaveStatus', 'error')
				functionReturn('error')
			})
	}
}

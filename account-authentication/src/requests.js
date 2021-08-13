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
		data.append('app', 'account-authentication')
		data.append('message', message)
		axios
			.post(store.props.ajaxurl, data)
	},

	/**
	 * Fonction de recherche d'infos de l'utilisateur connecté
	 */
	getCurrentUserInfo(functionReturn) {
		let data = new FormData()
		data.append('action', 'account_authentication_get_current_user_info')
		data.append('sessionUID', store.state.sessionUID)
		axios
			.post(store.props.customajaxurl, data, { timeout: 10000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionReturn(responseData)
			})
			.catch(error => {
				console.log('error.toJSON')
				console.log(error.toJSON())
				console.log(error.config)
				this.logRequestError('getCurrentUserInfo >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	},

	searchAddressTyped(addressTyped) {
		console.log('searchAddressTyped >> addressTyped >> ' + addressTyped)
		let data = new FormData()
		data.append('action', 'account_authentication_search_address')
		data.append('address', addressTyped)
		axios
			.post(store.props.ajaxurl, data, { timeout: 10000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				// functionReturn(responseData)
			})
			.catch(error => {
				// console.log('error.toJSON')
				console.log(error)
				console.log(error.config)
				this.logRequestError('searchAddressTyped >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				// functionReturn('error')
			})

	}
}

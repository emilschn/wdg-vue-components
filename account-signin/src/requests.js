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
				functionReturn(responseData)
			})
			.catch(error => {
				console.log('error.toJSON')
				console.log(error.toJSON())
				console.log(error.config)
				this.logRequestError('getEmailAddressInfo >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	},

	/**
	 * Fonction de vérification de correspondance email/mot de passe
	 */
	getCheckPassword(emailAddress, password, rememberme, functionReturn) {
		console.log('getCheckPassword >> ' + emailAddress)
		let data = new FormData()
		data.append('action', 'account_signin_check_password')
		data.append('email-address', emailAddress)
		data.append('password', password)
		data.append('rememberme', rememberme)
		axios
			.post(store.props.ajaxurl, data, { timeout: 10000 })
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
				this.logRequestError('getCheckPassword >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	},

	/**
	 * Fonction de récupération de l'URL de redirection de Facebook
	 */
	getFacebookRedirectUrl(functionReturn) {
		console.log('getFacebookRedirectUrl')
		let data = new FormData()
		data.append('action', 'get_connect_to_facebook_url')
		axios
			.post(store.props.ajaxurl, data, { timeout: 10000 })
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
				this.logRequestError('getFacebookRedirectUrl >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	},

	/**
	 * Envoi d'un mail de réinitialisation de mot de passe
	 */
	sendReinitPass(emailAddress, functionReturn) {
		console.log('sendReinitPass ' + emailAddress)
		let data = new FormData()
		data.append('action', 'send_reinit_pass')
		data.append('email-address', emailAddress)

		axios
			.post(store.props.ajaxurl, data, { timeout: 20000 })
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
				this.logRequestError('sendReinitPass >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	},

	/**
	 * Fonction de création de compte via mot de passe
	 */
	getCreateAccount(emailAddress, password, firstname, lastname, functionReturn) {
		console.log('getCreateAccount')
		let data = new FormData()
		data.append('action', 'account_signin_create_account')
		data.append('email-address', emailAddress)
		data.append('password', password)
		data.append('first-name', firstname)
		data.append('last-name', lastname)
		axios
			.post(store.props.ajaxurl, data, { timeout: 15000 })
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
				this.logRequestError('getCreateAccount >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	}
}

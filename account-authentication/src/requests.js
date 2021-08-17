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
	 * Récupère les infos déjà enregistrées pour l'utilisateur connecté
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

	/**
	 * Recherche l'adresse saisie dans la base de donnée d'une API
	 */
	searchAddressTyped(addressTyped, functionReturn) {
		console.log('searchAddressTyped >> addressTyped >> ' + addressTyped)
		let data = new FormData()
		data.append('action', 'account_authentication_search_address')
		data.append('address', addressTyped)
		axios
			.post(store.props.customajaxurl, data, { timeout: 10000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionReturn(responseData)
			})
			.catch(error => {
				// console.log('error.toJSON')
				console.log(error)
				console.log(error.config)
				this.logRequestError('searchAddressTyped >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})

	},

	saveUserInfo(currentState, functionReturn) {
		console.log('saveUserInfo')
		let data = new FormData()
		data.append('action', 'account_authentication_save_current_user_info')
		data.append('tax_country', currentState.user.taxCountry)
		data.append('gender', currentState.user.gender)
		data.append('birthday_day', currentState.user.birthday.day)
		data.append('birthday_month', currentState.user.birthday.month)
		data.append('birthday_year', currentState.user.birthday.year)
		data.append('birthday_city', currentState.user.birthday.city)
		data.append('birthday_district', currentState.user.birthday.district)
		data.append('birthday_department', currentState.user.birthday.department)
		data.append('birthday_country', currentState.user.birthday.country)
		data.append('nationality', currentState.user.birthday.nationality)
		data.append('address_number', currentState.user.address.number)
		data.append('address_number_comp', currentState.user.address.numberComp)
		data.append('address_street', currentState.user.address.street)
		data.append('address_postalcode', currentState.user.address.postalCode)
		data.append('address_city', currentState.user.address.city)
		data.append('address_country', currentState.user.address.country)
		axios
			.post(store.props.customajaxurl, data, { timeout: 10000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionReturn(responseData)
			})
			.catch(error => {
				// console.log('error.toJSON')
				console.log(error)
				console.log(error.config)
				this.logRequestError('saveUserInfo >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})

	}
}

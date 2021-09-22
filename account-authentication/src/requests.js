import axios from 'axios'
import { store } from './store.js'

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
		data.append('sessionUID', store.state.sessionUID)
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
		data.append('sessionUID', store.state.sessionUID)
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
			.post(store.props.customajaxurl, data, { timeout: 20000 })
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

	},

	saveUserPhone(currentState, functionReturn) {
		let data = new FormData()
		data.append('action', 'account_authentication_save_current_user_phone')
		data.append('sessionUID', store.state.sessionUID)
		data.append('phone_number', currentState.user.phone.number)
		data.append('send_sms', currentState.user.notification)
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
				this.logRequestError('saveUserPhone >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})
	},

	saveOrganizationInfo(currentState, functionReturn) {
		console.log('saveOrganizationInfo')
		let data = new FormData()
		data.append('action', 'account_authentication_save_organization_info')
		data.append('sessionUID', store.state.sessionUID)
		data.append('id_api', currentState.organization.apiId)
		data.append('name', currentState.organization.name)
		data.append('activity', currentState.organization.activity)
		data.append('idnumber', currentState.organization.idnumber)
		data.append('email', currentState.organization.email)
		data.append('website', currentState.organization.website)
		data.append('legalform', currentState.organization.legalform)
		data.append('apecode', currentState.organization.apecode)
		data.append('capital', currentState.organization.capital)
		data.append('legaltown', currentState.organization.legaltown)
		data.append('representativefunction', currentState.organization.representativefunction)
		data.append('address_number', currentState.organization.address.number)
		data.append('address_number_comp', currentState.organization.address.numberComp)
		data.append('address_street', currentState.organization.address.street)
		data.append('address_postal_code', currentState.organization.address.postalCode)
		data.append('address_city', currentState.organization.address.city)
		data.append('address_country', currentState.organization.address.country)

		axios
			.post(store.props.customajaxurl, data, { timeout: 10000 })
			.then(response => {
				// Récupérer un ID d'organisation pour mise à jour éventuelle
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionReturn(responseData)
			})
			.catch(error => {
				// console.log('error.toJSON')
				console.log(error)
				console.log(error.config)
				this.logRequestError('saveOrganizationInfo >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionReturn('error')
			})

	},

	uploadFile(inputRef, file, userType, idOrganizationAPI, docType, docIndex, functionProgress, functionEnd) {
		console.log('uploadFile')
		let data = new FormData()
		data.append('action', 'account_authentication_upload_file')
		data.append('sessionUID', store.state.sessionUID)
		data.append('document', file)
		data.append('user_type', userType)
		data.append('id_api_organization', idOrganizationAPI)
		data.append('doc_type', docType)
		data.append('doc_index', docIndex)

		axios
			.post(
				store.props.customajaxurl,
				data,
				{
					timeout: 120000,
					headers: {
						'Content-Type': 'multipart/form-data'
					},
					onUploadProgress: function (progressEvent) {
						let uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100))
						functionProgress(inputRef, uploadPercentage)
					}
				}
			)
			.then(response => {
				// 
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionEnd(responseData)
			})
			.catch(error => {
				// console.log('error.toJSON')
				console.log(error)
				console.log(error.config)
				this.logRequestError('uploadFile >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				functionEnd('error')
			})
	}
}

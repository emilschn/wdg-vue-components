import Vue from 'vue'
import axios from 'axios'
import { store } from './store.js'
// import i18n from '@/i18n'

export const bus = new Vue()

export const requests = {
	/**
	 * Fonction de log des erreurs de requetes
	 */
	logRequestError(message) {
		let data = new FormData()
		data.append('action', 'vuejs_error_catcher')
		data.append('app', 'user-investment-capacity')
		data.append('sessionUID', store.state.sessionUID)
		data.append('message', message)
		axios
			.post(store.props.ajaxurl, data)
	},

	/**
	 * Get user data
	 */
	getUserInvestmentCapacity(functionReturn) {
		console.log('getUserInvestmentCapacity')
		let data = new FormData()
		data.append('action', 'user_investment_capacity_get')
		data.append('metadata', JSON.stringify(store.state))
		axios
			.post(store.props.customajaxurl, data, { timeout: 30000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionReturn(responseData)
			})
			.catch(error => {
				console.log('error.toJSON')
				// console.log(error.toJSON())
				console.log(error.config)
				this.logRequestError('getUserInvestmentCapacity >>>> ' + JSON.stringify(error))
				functionReturn(error)
			})
	},

	/**
	 * Save user data
	 */
	saveUserInvestmentCapacity(functionReturn) {
		console.log('saveUserInvestmentCapacity')
		let data = new FormData()
		data.append('action', 'user_investment_capacity_save')
		data.append('sessionUID', store.state.sessionUID)
		data.append('metadata', JSON.stringify(store.state))
		axios
			.post(store.props.ajaxurl, data, { timeout: 30000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				functionReturn(responseData)
			})
			.catch(error => {
				console.log('error.toJSON')
				// console.log(error.toJSON())
				console.log(error.config)
				this.logRequestError('saveUserInvestmentCapacity >>>> ' + JSON.stringify(error))
				functionReturn(error)
			})
	}
}

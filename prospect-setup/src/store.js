import Vue from 'vue'
import i18n from '@/i18n'
import axios from 'axios'

export const bus = new Vue()

export const store = {
	state: {
		guid: '',
		step: 'intro',
		status: '',
		language: '',
		authorization: '',
		hasAuthorizedWire: '0',
		hasSaved: '0',
		hasSentResult: '0',
		user: {
			id: '',
			name: '',
			email: '',
			phone: ''
		},
		organization: {
			type: '',
			name: '',
			description: '',
			location: '',
			amountNeeded: '',
			sourceProspect: '',
			sourceProspectDetails: '',
			taxNumber: '',
			addressNumber: '',
			addressNumberComplement: '',
			addressStreet: '',
			addressPostalCode: '',
			addressCity: '',
			addressCountry: '',
			email: ''
		},
		project: {
			estimatedTurnover: {
				year1: 0,
				year2: 0,
				year3: 0,
				year4: 0,
				year5: 0
			},
			commercialMargin: 0,
			amountNeeded: 50,
			royaltiesAmount: 0,
			isAutoFilledRoyalties: true,
			royaltiesOK: false,
			readyToCommunicate: '',
			circlesToCommunicate: '',
			chosenFormula: '',
			alreadyDoneCrowdfunding: false,
			needCommunicationAdvice: false,
			fileComments: '',
			acceptTerms: false
		},
		package: {
			paymentMethod: '',
			paymentStatus: '',
			paymentDate: '',
			paymentTransferedOnAccount: '',
			bundle1: {
				title: '',
				type: '',
				priceWithoutDiscount: 0,
				discount: '0',
				discountReason: ''
			},
			bundle2: {
				title: '',
				type: '',
				priceWithoutDiscount: 0,
				discount: '0',
				discountReason: ''
			}
		}
	},
	props: {
		ajaxURL: '',
		initFileList: [],
		capacities: []
	},
	runtime: {
		isLoadingPayment: false,
		saveProjectTimeoutId: 0
	},
	tabItems: [
		{ Id: 'project-infos', Label: i18n.t('project-setup.tabs.MY_PROJECT'), Index: '1', Subtitle: '', Status: 'incomplete', LinkLabel: '' },
		{ Id: 'project-funding', Label: i18n.t('project-setup.tabs.MY_FUNDING'), Index: '2', Subtitle: '', Status: 'incomplete', LinkLabel: '' },
		{ Id: 'project-investors', Label: i18n.t('project-setup.tabs.MY_INVESTORS'), Index: '3', Subtitle: '', Status: 'incomplete', LinkLabel: '' },
		{ Id: 'project-result', Label: i18n.t('project-setup.tabs.MY_RESULT'), Subtitle: i18n.t('project-setup.tabs.IN_PROGRESS'), Status: '', LinkLabel: '' }
	],
	changeStep(newStep) {
		this.state.step = newStep

		let itemInfos = this.tabItems[0]
		let itemFunding = this.tabItems[1]
		let itemInvestors = this.tabItems[2]
		let itemResult = this.tabItems[3]

		// item de fin si déjà passé
		if (itemResult.Status === 'complete') {
			itemResult.LinkLabel = i18n.t('project-setup.tabs.SEE_RESULTS')
			Vue.set(this.tabItems, 3, itemResult)
		}

		switch (newStep) {
			case 'project-infos':
				break

			case 'project-funding':
				// Si on n'était pas encore passé sur cet onglet, on sauvegarde
				if (itemInfos.Status === 'incomplete') {
					this.saveProject()
				}

				// item passé
				itemInfos.Status = 'complete'
				itemInfos.LinkLabel = i18n.t('project-setup.tabs.MODIFY')
				Vue.set(this.tabItems, 0, itemInfos)
				break

			case 'project-investors':
				if (itemInfos.Status === 'incomplete') {
					itemInfos.Status = 'complete'
					itemInfos.LinkLabel = i18n.t('project-setup.tabs.MODIFY')
				}
				// Si on n'était pas encore passé sur cet onglet, on sauvegarde
				if (itemFunding.Status === 'incomplete') {
					this.saveProject()
				}

				// item passé
				itemFunding.Status = 'complete'
				itemFunding.LinkLabel = i18n.t('project-setup.tabs.MODIFY')
				Vue.set(this.tabItems, 1, itemFunding)
				break

			case 'project-result':
			case 'project-cart':
			case 'project-payment':
			case 'project-complete':
				if (itemInfos.Status === 'incomplete') {
					itemInfos.Status = 'complete'
					itemInfos.LinkLabel = i18n.t('project-setup.tabs.MODIFY')
				}
				if (itemFunding.Status === 'incomplete') {
					itemFunding.Status = 'complete'
					itemFunding.LinkLabel = i18n.t('project-setup.tabs.MODIFY')
				}
				// Si on n'était pas encore passé sur cet onglet, on sauvegarde
				if (itemInvestors.Status === 'incomplete') {
					this.saveProject()
				}

				// item passé
				itemInvestors.Status = 'complete'
				itemInvestors.LinkLabel = i18n.t('project-setup.tabs.MODIFY')
				Vue.set(this.tabItems, 2, itemInvestors)

				// item en cours
				itemResult.Subtitle = ''
				itemResult.Status = 'complete'
				itemResult.LinkLabel = ''
				Vue.set(this.tabItems, 3, itemResult)
				break
		}
		window.scrollTo(0, 0)
	},

	// Fonction de log des erreurs de requetes
	logRequestError(message) {
		let data = new FormData()
		data.append('action', 'vuejs_error_catcher')
		data.append('app', 'prospect_setup::' + this.state.guid)
		data.append('message', message)
		axios
			.post(this.props.ajaxurl, data)
	},

	saveProjectAfterTimeout() {
		console.log('saveProjectAfterTimeout')
		if (this.saveProjectTimeoutId > 0) {
			clearTimeout(this.saveProjectTimeoutId)
		}
		this.saveProjectTimeoutId = setTimeout(() => { this.saveProject() }, 5000)
	},

	saveProject() {
		console.log('saveProject')
		this.saveProjectTimeoutId = 0
		let shouldSendLink = false
		if (this.state.hasSaved !== '1') {
			shouldSendLink = true
			this.state.hasSaved = '1'
		}

		let shouldSendResult = false
		if (this.state.step === 'project-result' && this.state.hasSentResult !== '1') {
			if (this.state.organization.type !== 'microbusiness' && this.state.organization.location !== 'out-euro' && this.state.project.readyToCommunicate && this.state.project.royaltiesOK) {
				shouldSendResult = true
				this.state.hasSentResult = '1'
			}
		}

		let data = new FormData()
		data.append('action', 'prospect_setup_save')
		if (this.state.guid === undefined) {
			this.state.guid = ''
		}
		data.append('guid', this.state.guid)
		data.append('id_user', this.state.user.id)
		data.append('email', this.state.user.email)
		data.append('status', this.state.status)
		data.append('step', this.state.step)
		data.append('authorization', this.state.authorization)
		data.append('metadata', JSON.stringify(this.state))

		axios
			.post(this.props.ajaxurl, data, { timeout: 3000 })
			.then(response => {
				let responseData = response.data
				console.log('then')
				console.log(responseData)
				if (responseData.save_status === 'saved') {
					bus.$root.$emit('updateSaveStatus', 'saved')
					this.state.guid = responseData.guid
					this.state.user.id = responseData.id_user

					if (shouldSendLink) {
						this.sendDraftStarted()
					}

					if (shouldSendResult) {
						this.sendDraftFinished()
					}
				} else {
					bus.$root.$emit('updateSaveStatus', 'error')
					this.logRequestError('saveProject >> error de responseData.save_status >> ' + responseData.save_status)
				}
			})
			.catch(error => {
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
				this.logRequestError('saveProject >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
				bus.$root.$emit('updateSaveStatus', 'error')
			})
	},
	sendDraftStarted() {
		if (process.env.NODE_ENV === 'development') {
			return
		}
		let data = new FormData()
		data.append('action', 'prospect_setup_send_mail_user_draft_started')
		data.append('guid', this.state.guid)

		axios
			.post(this.props.ajaxurl, data, { timeout: 3000 })
			.catch(error => {
				this.logRequestError('sendDraftStarted >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
			})
	},
	sendDraftFinished() {
		if (process.env.NODE_ENV === 'development') {
			return
		}
		let data = new FormData()
		data.append('action', 'prospect_setup_send_mail_user_draft_finished')
		data.append('guid', this.state.guid)

		axios
			.post(this.props.ajaxurl, data, { timeout: 3000 })
			.catch(error => {
				this.logRequestError('sendDraftFinished >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
			})
	},
	askCardPayment(nAmountToPay) {
		if (process.env.NODE_ENV === 'development') {
			this.runtime.isLoadingPayment = true
			return
		}
		this.runtime.isLoadingPayment = true
		let data = new FormData()
		data.append('action', 'prospect_setup_ask_card_payment')
		data.append('guid', this.state.guid)
		data.append('amount', nAmountToPay)

		axios
			.post(this.props.ajaxurl, data, { timeout: 3000 })
			.then(response => {
				let responseData = response.data
				console.log(responseData)
				if (responseData.has_error === '1') {
					this.runtime.isLoadingPayment = false
					console.log(responseData.error_str)
					this.logRequestError('askCardPayment >> error de responseData.has_error >> ' + responseData.error_str)
				} else {
					if (responseData.url_redirect !== '') {
						window.location = responseData.url_redirect
					}
				}
			})
			.catch(error => {
				this.runtime.isLoadingPayment = false
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
				this.logRequestError('askCardPayment >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
			})
	},
	sendWireSelected(nAmountToPay) {
		if (process.env.NODE_ENV === 'development') {
			return
		}
		let data = new FormData()
		data.append('action', 'prospect_setup_send_mail_payment_method_select_wire')
		data.append('guid', this.state.guid)
		data.append('amount', nAmountToPay)

		axios
			.post(this.props.ajaxurl, data, { timeout: 3000 })
			.catch(error => {
				this.logRequestError('sendWireSelected >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
			})
	},
	sendWireReceived(nAmountToPay) {
		if (process.env.NODE_ENV === 'development') {
			return
		}
		let data = new FormData()
		data.append('action', 'prospect_setup_send_mail_payment_method_received_wire')
		data.append('guid', this.state.guid)
		data.append('amount', nAmountToPay)

		axios
			.post(this.props.ajaxurl, data, { timeout: 3000 })
			.catch(error => {
				this.logRequestError('sendWireReceived >> error >> ' + error.toString() + ' >>>> ' + JSON.stringify(error))
			})
	}
}

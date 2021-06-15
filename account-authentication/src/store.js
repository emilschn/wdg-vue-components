import Vue from 'vue'
// import i18n from '@/i18n'
// import axios from 'axios'

export const bus = new Vue()

export const store = {
	state: {
		sessionUID: '',
		step: 'usertype',
		userNeedOrga: false,
		user: {
			gender: '',
			address: '',
			taxCountry: '',
			birthday: {
				day: '',
				month: '',
				year: '',
				city: '',
				district: '',
				department: '',
				country: '',
				nationality: ''
			}
		}
	},
	props: {
		ajaxURL: '',
		initFileList: [],
		capacities: []
	},
	/**
	 * Il y a peut-être mieux, mais permet de gérer les boutons précédents / suivants du navigateur
	 * ---
	 * On fait une mise à jour du hash dans le navigateur
	 * Cela déclenche l'événement "hashchange" du navigateur
	 * Qui est défini dans App.vue et qui déclenche changeStepFromHash ci-dessous
	 * ---
	 * TODO : vérifier en conditions réelles
	 * @param {String} newStep
	 */
	changeStep(newStep) {
		window.location.hash = newStep
	},
	/**
	 * Modification réelle du "step" en cours
	 * @param {String} newStep
	 */
	changeStepFromHash(newStep) {
		this.state.step = newStep
		window.scrollTo(0, 0)
	}
}

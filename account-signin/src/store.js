import Vue from 'vue'
// import i18n from '@/i18n'
// import axios from 'axios'

export const bus = new Vue()

export const store = {
	state: {
		sessionUID: '',
		step: 'signin',
		user: {
			email: '',
			password: '',
			firstname: '',
			lastname: ''
		},
		creation: false,
		context: 'account'
	},
	props: {
		ajaxurl: '',
		customajaxurl: '',
		redirecturl: '',
		locale: '',
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
	},
	setCreationTag(value) {
		// Je n'ai pas réussi à changer directement cette prop depuis un composant, d'où cette fonction nullissime
		// faut que je revoie ça
		this.state.creation = value
	},
	// Vérification si l'adresse e-mail est valable
	isEmailValid(value) {
		var mailformat = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		return (mailformat.test(value))
	}
}

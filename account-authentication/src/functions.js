import i18n from '@/i18n'
import { store } from './store.js'

export const functions = {

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
		store.state.step = newStep
		window.scrollTo(0, 0)
	},
	/**
	 * Gère la redirection à la fin du parcours
	 */
	quitAndRedirect() {
		if ( store.props.redirectUrl !== '' && store.props.redirectUrl !== undefined ){
			window.location = store.props.redirectUrl
		} else {
			window.location = this.getAccountUrl()
		}
	},
	/**
	 * Retourne l'adresse de Mon Compte
	 */
	getAccountUrl() {
		// TODO : récupérer home_url ??
		if ( i18n.locale == 'fr' ){
			if (process.env.NODE_ENV === 'development') {
				return 'http://wedogood.local/mon-compte/'
			} else {
				return 'https://www.wedogood.co/mon-compte/'
			}
		} else {
			if (process.env.NODE_ENV === 'development') {
				return 'http://wedogood.local/my-account/'
			} else {
				return 'https://www.wedogood.co/my-account/'
			}
		}
	}

}
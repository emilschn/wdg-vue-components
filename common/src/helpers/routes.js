import i18n from '@/i18n'

export const routes = {
	defaultHash: '',
	store: {},

	/**
	 * Initialise un événement lié pour détecter les modifications de hash dans l'URL
	 */
	init(sDefaultHash, oStore) {
		this.defaultHash = sDefaultHash
		this.store = oStore
		window.addEventListener('hashchange', () => this.onHashChangedEvent())
	},

	/**
	 * Fonction branchée sur l'événement de modification de hash de l'URL
	 */
	onHashChangedEvent() {
		let sNewLocation = location.hash
		if (sNewLocation === '') {
			sNewLocation = this.defaultHash
		} else {
			sNewLocation = sNewLocation.substring(1)
		}
		this.changeStepFromHash(sNewLocation)
	},

	/**
	 * Il y a peut-être mieux, mais permet de gérer les boutons précédents / suivants du navigateur
	 * ---
	 * On fait une mise à jour du hash dans le navigateur
	 * Cela déclenche l'événement "hashchange" du navigateur
	 * Qui est défini dans App.vue et qui déclenche changeStepFromHash ci-dessous
	 * ---
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
		this.store.state.step = newStep
		window.scrollTo(0, 0)
	},

	/**
	 * Gère la redirection à la fin du parcours
	 */
	quitAndRedirect(locale) {
		if (locale !== undefined && locale === 'fr' && this.store.props.redirecturlfr !== '' && this.store.props.redirecturlfr !== undefined) {
			window.location = this.store.props.redirecturlfr
		} else if (locale !== undefined && locale === 'en' && this.store.props.redirecturlen !== '' && this.store.props.redirecturlen !== undefined) {
			window.location = this.store.props.redirecturlen
		} else if (this.store.props.redirectUrl !== '' && this.store.props.redirectUrl !== undefined) {
			window.location = this.store.props.redirectUrl
		} else {
			window.location = this.getAccountUrl()
		}
	},

	/**
	 * Retourne l'adresse de Mon Compte
	 */
	getAccountUrl() {
		// TODO : récupérer home_url ??
		if (i18n.locale === 'fr') {
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

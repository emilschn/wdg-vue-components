import Vue from 'vue'
// import i18n from '@/i18n'
// import axios from 'axios'

export const bus = new Vue()

export const store = {
    state: {
		step: 'signin',
		user: {
			email: '',
            password: '',
            firstname: '',
            lastname: ''
        },
		creation: false
    },
	props: {
		ajaxURL: '',
		initFileList: [],
		capacities: []
	},
	changeStep (newStep) {
		this.state.step = newStep
		window.scrollTo(0, 0)
	},
	setCreationTag (value) {
		// Je n'ai pas réussi à changer directement cette prop depuis un composant, d'où cette fonction nullissime
		// faut que je revoie ça
		this.state.creation = value
	}
}

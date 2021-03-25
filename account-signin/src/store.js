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
		this.state.creation = value
	}
}

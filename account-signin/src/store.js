import Vue from 'vue'
// import i18n from '@/i18n'
// import axios from 'axios'

export const bus = new Vue()

export const store = {
    state: {
		user: {
			email: '',
            password: '',
            firstname: '',
            lastname: ''
        }
    }
}

import Vue from 'vue'
// import i18n from '@/i18n'
// import axios from 'axios'

export const bus = new Vue()

export const store = {
	state: {
		sessionUID: '',
		step: 'intro',
		language: '',
		monthlyRevenue: '',
		complementaryRevenue: '',
		investmentsValue: '',
		commitmentValue: '',
		yearlyCapacityAmount: 0,
		knowledge: {
			know1: false,
			know2: false,
			know3: false
		}
	},
	props: {
		ajaxurl: '',
		customajaxurl: '',
		redirecturlfr: '',
		redirecturlen: '',
		locale: 'fr'
	}
}

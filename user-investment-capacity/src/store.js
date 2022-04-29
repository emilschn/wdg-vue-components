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
			risks: false,
			crowdfunding: false,
			transactions: false
		},
		profession: {
			type: '',
			levelEducation: '',
			hasFinanceJob: false,
			crowdfundingExperience: ''
		},
		objectives: {
			duration: {
				oneyear: false,
				threeyears: false,
				fiveyears: false,
				whatever: false
			},
			riskProfile: '',
			impactTypes: {
				economic: false,
				social: false,
				environmental: false,
				whatever: false
			},
			purposeTypes: {
				projectOwner: false,
				sectors: false,
				diversify: false,
				impacts: false,
				local: false,
				newsletter: false
			}
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

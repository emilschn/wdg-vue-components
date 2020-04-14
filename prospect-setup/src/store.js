import Vue from 'vue'
import i18n from '@/i18n'
export const store = {
    state: {
        guid: '',
        step: 'intro',
        status: '',
        authorization: '',
		user: {
			id: '',
			name: '',
			email: '',
			phone: ''
		},
		organization: {
			type: '',
			name: '',
			id: '',
			description: '',
			location: '',
			amountNeeded: '',
			sourceProspect: '',
			sourceProspectDetails: ''
		},
		project: {
			estimatedTurnover: {
				year1: '0',
				year2: '0',
				year3: '0',
				year4: '0',
				year5: '0'
			},
			commercialMargin: 0,
			amountNeeded: 50,
			royaltiesAmount: 0,
			readyToCommunicate: '',
			circlesToCommunicate: '',
			alreadydonecrowdfunding: false,
			needcommunicationadvice: false
		}
	},
	props: {
		ajaxURL: ''
	},
	tabItems: [
		{ Id: 'project-infos', Label: i18n.t('project-setup.tabs.MY_PROJECT'), Index: '1', Subtitle: '', Status: 'incomplete', LinkLabel: '' },
		{ Id: 'project-funding', Label: i18n.t('project-setup.tabs.MY_FUNDING'), Index: '2', Subtitle: '', Status: '', LinkLabel: '' },
		{ Id: 'project-investors', Label: i18n.t('project-setup.tabs.MY_INVESTORS'), Index: '3', Subtitle: '', Status: '', LinkLabel: '' },
		{ Id: 'project-result', Label: i18n.t('project-setup.tabs.MY_RESULT'), Subtitle: 'En cours...', Status: '', LinkLabel: '' }
	],
	changeStep (newStep) {
		this.state.step = newStep

		let itemInfos = this.tabItems[ 0 ]
		let itemFunding = this.tabItems[ 1 ]
		let itemInvestors = this.tabItems[ 2 ]
		let itemResult = this.tabItems[ 3 ]

		switch (newStep) {
			case 'project-infos':
				// item en cours
				itemInfos.LinkLabel = ''

				// item de fin si déjà passé
				if (itemResult.Status === 'complete') {
					itemResult.LinkLabel = 'Voir le résultat'
					Vue.set(this.tabItems, 3, itemResult)
				}
				break

			case 'project-funding':
				// item en cours
				itemFunding.LinkLabel = ''

				// item passé
				itemInfos.Status = 'complete'
				itemInfos.LinkLabel = 'Compléter'
				Vue.set(this.tabItems, 0, itemInfos)

				// item de fin si déjà passé
				if (itemResult.Status === 'complete') {
					itemResult.LinkLabel = 'Voir le résultat'
					Vue.set(this.tabItems, 3, itemResult)
				}
				break

			case 'project-investors':
				// item en cours
				itemInvestors.LinkLabel = ''

				// item passé
				itemFunding.Status = 'complete'
				itemFunding.LinkLabel = 'Compléter'
				Vue.set(this.tabItems, 1, itemFunding)

				// item de fin si déjà passé
				if (itemResult.Status === 'complete') {
					itemResult.LinkLabel = 'Voir le résultat'
					Vue.set(this.tabItems, 3, itemResult)
				}
				break

			case 'project-result':
				// item en cours
				itemResult.Subtitle = ''
				itemResult.Status = 'complete'
				itemResult.LinkLabel = ''
				Vue.set(this.tabItems, 3, itemResult)

				// item passé
				itemInvestors.Status = 'complete'
				itemInvestors.LinkLabel = 'Compléter'
				Vue.set(this.tabItems, 2, itemInvestors)
				break
		}
		window.scrollTo(0, 0)
	}
}

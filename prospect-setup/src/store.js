import Vue from 'vue'
import i18n from '@/i18n'
export const store = {
    state: {
        step: 'intro',
		tabItems: [
			{ Id: 'project-infos', Label: i18n.t('project-setup.tabs.MY_PROJECT'), Index: '1', Subtitle: 'Compléter', Status: 'incomplete' },
			{ Id: 'project-funding', Label: i18n.t('project-setup.tabs.MY_FUNDING'), Index: '2', Subtitle: 'Compléter' },
			{ Id: 'my-investors', Label: i18n.t('project-setup.tabs.MY_INVESTORS'), Index: '3', Subtitle: 'Compléter' },
			{ Id: 'my-result', Label: i18n.t('project-setup.tabs.MY_RESULT'), Subtitle: 'En cours...' }
		]
    },
    changeStep (newStep) {
		this.state.step = newStep
		if (newStep === 'project-funding') {
			let initItem = this.state.tabItems[ 0 ]
			initItem.Status = 'complete'
			Vue.set(this.state.tabItems, 0, initItem)
			window.scrollTo(0, 0)
		}
    }
}

<template>
	<div id="app" class="prospect-setup">
		<WDGHeader>
			<slot slot="title">{{ $t('project-setup.TITLE') }}</slot>
		</WDGHeader>

		<WDGTabs :tabItems="tabItems" :currentTab="currentRoute" v-if="canShowTabs" />

		<router-view></router-view>

		<WDGFooter />
	</div>
</template>

<script>
import i18n from '@/i18n'
import WDGTabs from '@/../../common/src/components/WDGTabs'
import WDGHeader from '@/../../common/src/components/WDGHeader'
// import TheScreenIntro from './components/TheScreenIntro.vue'
// import TheScreenProjectInfos from './components/TheScreenProjectInfos.vue'
import WDGFooter from '@/../../common/src/components/WDGFooter'

export default {
	name: 'App',
	components: {
		WDGTabs,
		WDGHeader,
		WDGFooter
	},
	data () {
		return {
			tabItems: [
				{ Id: 'project-infos', Label: i18n.t('project-setup.tabs.MY_PROJECT'), Index: '1', Subtitle: 'Compléter', Status: 'incomplete' },
				{ Id: 'my-funding', Label: i18n.t('project-setup.tabs.MY_FUNDING'), Index: '2', Subtitle: 'Compléter' },
				{ Id: 'my-investors', Label: i18n.t('project-setup.tabs.MY_INVESTORS'), Index: '3', Subtitle: 'Compléter' },
				{ Id: 'my-result', Label: i18n.t('project-setup.tabs.MY_RESULT'), Subtitle: 'En cours...' }
			]
		}
	},
	computed: {
		canShowTabs () {
			return (this.$route.name !== 'intro')
		},
		currentRoute () {
			return this.$route.name
		}
	}
}
</script>

<style>
body {
	font-family: Trebuchet MS,sans-serif;
	color: #333;
}
div.prospect-setup {
	max-width: 1024px;
	margin: 0px auto;
}
</style>

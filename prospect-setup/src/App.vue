<template>
	<div id="app" class="prospect-setup">
		<WDGHeader>
			<slot slot="title">{{ $t('project-setup.TITLE') }}</slot>
		</WDGHeader>
			<router-view></router-view>
		<WDGFooter />
	</div>
</template>

<script>
import WDGHeader from '@/../../common/src/components/WDGHeader'
// import TheScreenIntro from './components/TheScreenIntro.vue'
// import TheScreenProjectInfos from './components/TheScreenProjectInfos.vue'
import WDGFooter from '@/../../common/src/components/WDGFooter'

export default {
  name: 'App',
  components: {
	WDGHeader,
    // TheScreenIntro,
	// TheScreenProjectInfos,
	WDGFooter
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

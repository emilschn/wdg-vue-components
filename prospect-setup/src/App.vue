<template>
	<div class="prospect-setup">
		<TheScreenProjectInfos />
	</div>
</template>

<script>
import TheScreenProjectInfos from './components/TheScreenProjectInfos.vue'

export default {
  name: 'App',
  components: {
    TheScreenProjectInfos
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

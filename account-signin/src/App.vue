<template>
  <div
    id="app"
	  class="account-signin"
  >
		<WDGHeader>
			<!-- <slot slot="title">{{ $t('project-setup.TITLE') }}</slot> -->
		</WDGHeader>
		<TheScreenSignin  />
  </div>
</template>

<script>
import WDGHeader from '@/../../common/src/components/WDGHeader'
import TheScreenSignin from './components/TheScreenSignin.vue'

export default {
  name: 'App',
  components: {
		WDGHeader,
    TheScreenSignin
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,500&display=swap');
body, input, select, button {
	font-family: Poppins,Trebuchet MS,sans-serif;
	color: #333;
}
div.account-signin {
	max-width: 1024px;
	margin: 0px auto;
}
</style>

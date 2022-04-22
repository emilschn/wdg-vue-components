<template>
	<div class="the-screen-intro">
		<WDGMascot
		  type="face-1"
		  alignMascot="left"
		  :displayText=false
		  />

		<div class="description">
			{{ $t('user-investment-capacity.intro.MASCOT_TEXT_1') }}
			{{ $t('user-investment-capacity.intro.MASCOT_TEXT_2') }}
			<br>
			{{ $t('user-investment-capacity.intro.MASCOT_TEXT_3') }}
		</div>

		<div class="clear"></div>

		<WDGButton :clickEvent="onContinueClickEvent">
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMascot from '@/../../common/src/components/WDGMascot'

export default {
	name: 'TheScreenIntro',
	components: {
		WDGButton,
		WDGMascot
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
		onContinueClickEvent: function (event) {
			this.onContinue('capacity')
		}
	}
}
</script>

<style>
	div.clear {
		clear: both;
	}

	div.the-screen-intro {
		margin: 80px;
	}

	div.the-screen-intro div.description {
		float: left;
		max-width: 500px;
		padding: 40px;
		background: #ebebeb;
	}

	div.the-screen-intro .wdg-button {
		max-width: 300px;
		margin: auto;
	}
</style>

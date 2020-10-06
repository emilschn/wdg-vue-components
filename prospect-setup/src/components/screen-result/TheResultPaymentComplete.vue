<template>
	<div class="the-result-payment-complete">
		<div class="message-confirmation">
			{{ $t('project-setup.payment.complete.CONFIRMATION') }}
		</div>

		<div class="message-create">
			{{ $t('project-setup.payment.complete.THANK_YOU') }}
			<br>
			{{ $t('project-setup.payment.complete.CREATE') }}
		</div>
		<br><br>

		<WDGButton
		  color="red"
		  type="button"
		  :link="continueLink"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheResultPaymentComplete',
	components: {
		WDGButton
	},
	props: {
		guid: { type: String, default: '' }
	},
	methods: {
	},
	computed: {
		continueLink () {
			return 'https://www.wedogood.co/lancement/?guid=' + this.guid
		}
	}
}
</script>

<style>
div.the-result-payment-complete {
	margin: 32px 0px;
	background-color: #F6F6F6;
	padding: 30px;
}
</style>

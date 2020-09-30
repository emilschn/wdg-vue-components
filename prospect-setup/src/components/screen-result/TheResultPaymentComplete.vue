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

		<WDGButton
		  color="red"
		  type="button"
		  :clickEvent="onContinueClickEvent"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
export default {
	name: 'TheResultPaymentComplete',
	components: {
	},
	props: {
		onContinue: { type: Function }
	},
	methods: {
		onContinueClickEvent () {
			if (this.onContinue !== undefined) {
				this.onContinue()
			}
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

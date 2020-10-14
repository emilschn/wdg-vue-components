<template>
	<div class="the-result-payment-complete">
		<div class="message-confirmation">
			<image xlink:href="/img/complete.cc68a174.svg" src="@../../../common/src/assets/icons/complete.png" width="48" height="48"></image>
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
	margin: auto;
	padding: 30px;
	text-align: center;
	width: 70%;
}
div.the-result-payment-complete .message-confirmation {
	background-color: #00879b;
	color: #fff;
	padding: 50px 0px 20px 0px;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 25px;
}
div.the-result-payment-complete .wdg-button button.red {
	width: 170px;
}
</style>

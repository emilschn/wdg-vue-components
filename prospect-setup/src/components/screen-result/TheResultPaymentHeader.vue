<template>
	<div class="the-result-payment-header">
		<span class="header-item" :class="selectionClass('summary')">{{ $t('project-setup.payment.header.SUMMARY') }}</span>
		<span class="arrow">-></span>
		<span class="header-item" :class="selectionClass('validation')">{{ $t('project-setup.payment.header.VALIDATION') }}</span>
		<span class="arrow">-></span>
		<span class="header-item" :class="selectionClass('payment')">{{ $t('project-setup.payment.header.PAYMENT') }}</span>
	</div>
</template>

<script>
export default {
	name: 'TheResultPaymentHeader',
	components: {
	},
	props: {
		currentTab: { type: String, default: 'summary' }
	},
	methods: {
		selectionClass (itemId) {
			return (itemId === this.currentTab) ? 'selected' : ''
		}
	}
}
</script>

<style>
div.the-result-payment-header {
	background: #f4f2f2;
	width: 500px;
	margin: auto;
	padding: 8px;
	text-align: center;
}
div.the-result-payment-header span.header-item {
	color: #B4B4B4;
	font-weight: bold;
}
div.the-result-payment-header span.header-item.selected {
	color: #00879b;
}
div.the-result-payment-header span.arrow {
	display: inline-block;
	padding: 0px 24px;
	color: #B4B4B4;
}
</style>

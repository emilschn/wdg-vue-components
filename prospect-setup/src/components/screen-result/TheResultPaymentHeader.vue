<template>
	<div class="the-result-payment-header">
		<a
		  class="header-item"
		  :class="selectionClass('project-result')"
		  @click="changeStep('project-result')"
		  >
			{{ $t('project-setup.payment.header.SUMMARY') }}
		</a>
		<span class="arrow">-></span>
		<a
		  class="header-item"
		  :class="selectionClass('project-cart')"
		  @click="changeStep('project-cart')"
		  >
			{{ $t('project-setup.payment.header.VALIDATION') }}
		</a>
		<span class="arrow">-></span>
		<a
		  class="header-item"
		  :class="selectionClass('project-payment')"
		  @click="changeStep('project-payment')"
		  >
			{{ $t('project-setup.payment.header.PAYMENT') }}
		</a>
	</div>
</template>

<script>
export default {
	name: 'TheResultPaymentHeader',
	components: {
	},
	props: {
		currentTab: { type: String, default: 'project-result' },
		onChangeStep: { type: Function }
	},
	methods: {
		selectionClass (itemId) {
			let buffer = (itemId === this.currentTab) ? 'selected' : ''
			if (this.currentTab === 'project-cart' && itemId === 'project-result') {
				buffer += ' clickable'
			}
			if (this.currentTab === 'project-payment' && itemId !== this.currentTab) {
				buffer += ' clickable'
			}
			return buffer
		},
		changeStep (itemId) {
			let canChangeStep = false
			if (this.currentTab === 'project-cart' && itemId === 'project-result') {
				canChangeStep = true
			}
			if (this.currentTab === 'project-payment' && itemId !== this.currentTab) {
				canChangeStep = true
			}
			if (canChangeStep) {
				if (this.onChangeStep !== undefined) {
					this.onChangeStep(itemId)
				}
			}
		}
	}
}
</script>

<style>
div.the-result-payment-header {
	width: 500px;
	margin: auto;
	padding: 16px;
	text-align: center;
	padding-bottom: 10px;
	border-bottom: 1px solid #c2c2c2;;
}
div.the-result-payment-header a.header-item {
	color: #c2c2c2;
	font-weight: 600;
	text-decoration: none;
}
div.the-result-payment-header a.header-item.selected {
	border-bottom: 3px solid #B3DAE1;
	padding-bottom: 8px;
	color: #333;
	text-decoration: none;
}
div.the-result-payment-header a.header-item.clickable {
	cursor: pointer;
}
div.the-result-payment-header span.arrow {
	display: inline-block;
	padding: 0px 24px;
	color: #B4B4B4;
}
@media only screen and (max-width: 767px) {
	div.the-result-payment-header span.arrow {
		transform: rotate(90deg)
	}
}
</style>

<template>
	<div class="the-result-payment-selector">
		[CADENAS] <strong>{{ $t('project-setup.payment.methods.SECURED_PAYMENT') }}</strong>
		<div class="payment-methods-pictos">
			<svg width="50" height="50">
				<image xlink:href="@/../../common/src/assets/logos/payment/CB.svg" src="@/../../common/src/assets/logos/payment/CB.png" width="50" height="50" />
			</svg>
			<svg width="50" height="50">
				<image xlink:href="@/../../common/src/assets/logos/payment/visa.svg" src="@/../../common/src/assets/logos/payment/visa.png" width="50" height="50" />
			</svg>
			<svg width="50" height="50">
				<image xlink:href="@/../../common/src/assets/logos/payment/mastercard.svg" src="@/../../common/src/assets/logos/payment/mastercard.png" width="50" height="50" />
			</svg>
		</div>
		<br><br>

		<strong>{{ $t('project-setup.payment.methods.METHOD_CHOICE') }}</strong><br>
		<div class="payment-methods-buttons">
			<WDGButton
			  id="btnSelectCard"
			  :color="buttonCardColor"
			  type="button"
			  :clickEvent="onCardClickEvent"
			  >
				<slot slot="label">{{ $t('project-setup.payment.methods.CARD') }}</slot>
			</WDGButton>
			<WDGButton
			  v-if="canUseWire"
			  id="btnSelectWire"
			  :color="buttonWireColor"
			  type="button"
			  :clickEvent="onWireClickEvent"
			  >
				<slot slot="label">{{ $t('project-setup.payment.methods.WIRE') }}</slot>
			</WDGButton>
		</div>
		<br><br>

		<WDGButton
		  v-if="currentMethod !== ''"
		  id="btnContinue"
		  :color="buttonContinueColor"
		  type="button"
		  :clickEvent="onContinueClickEvent"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheResultPaymentSelector',
	components: {
		WDGButton
	},
	props: {
		canUseWire: { type: Boolean, default: true },
		isLoading: { type: Boolean, default: false },
		onMethodValidate: { type: Function }
	},
	data () {
		return {
			currentMethod: ''
		}
	},
	methods: {
		onCardClickEvent () {
			// Sélection de carte
			this.currentMethod = 'card'
		},
		onWireClickEvent () {
			// Sélection de virement
			this.currentMethod = 'wire'
		},
		onContinueClickEvent () {
			if (this.onMethodValidate !== undefined && !this.isLoading) {
				this.onMethodValidate(this.currentMethod)
			}
		}
	},
	computed: {
		buttonCardColor () {
			return (this.currentMethod === 'card') ? 'grey' : 'transparent-no-border'
		},
		buttonWireColor () {
			return (this.currentMethod === 'wire') ? 'grey' : 'transparent-no-border'
		},
		buttonContinueColor () {
			return (this.isLoading) ? 'transparent-no-border' : 'red'
		}
	}
}
</script>

<style>
div.the-result-payment-selector {
	padding: 32px;
	background: #FFF;
}
div.the-result-payment-selector div.payment-methods-pictos svg {
	margin-right: 8px;
}
div.the-result-payment-selector div.payment-methods-buttons .wdg-button {
	display: inline-block;
	margin-right: 16px;
}
div.the-result-payment-selector div.payment-methods-buttons .wdg-button button {
	padding: 0px 16px;
}
div.the-result-payment-selector div.payment-methods-buttons .wdg-button button.grey {
	background: #333 url('../../../../common/src/assets/icons/check-white.png') no-repeat 8px center;
	padding: 0px 16px 0px 32px;
}
div.the-result-payment-selector #btnContinue.transparent-no-border {
	cursor: default;
}
</style>

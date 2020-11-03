<template>
	<div class="the-result-payment-selector">
		<svg width="20" height="20">
			<image xlink:href="@/../../common/src/assets/logos/payment/lock.svg" src="@/../../common/src/assets/logos/payment/lock.png" width="20" height="20" />
		</svg>
		<strong>{{ $t('project-setup.payment.methods.SECURED_PAYMENT') }}</strong>
		<svg width="20" height="20" style="margin-left: 5px; vertical-align: sub;">
			<image xlink:href="@/../../common/src/assets/logos/payment/lemonway.svg" src="@/../../common/src/assets/logos/payment/lemonway.png" width="20" height="20" />
		</svg>
		<div class="payment-methods-pictos">
			<svg width="55" height="38">
				<image xlink:href="@/../../common/src/assets/logos/payment/CB.svg" src="@/../../common/src/assets/logos/payment/CB.png" width="55" height="38" />
			</svg>
			<svg width="121" height="38">
				<image xlink:href="@/../../common/src/assets/logos/payment/visa.svg" src="@/../../common/src/assets/logos/payment/visa.png" width="121" height="38" />
			</svg>
			<svg width="66" height="38">
				<image xlink:href="@/../../common/src/assets/logos/payment/mastercard.svg" src="@/../../common/src/assets/logos/payment/mastercard.png" width="66" height="38" />
			</svg>
		</div>
		<br><br>

		<strong v-if="canUseWire">{{ $t('project-setup.payment.methods.METHOD_CHOICE') }}</strong>
		<br v-if="canUseWire">
		<div
		  v-if="canUseWire"
		  class="payment-methods-buttons"
		  >
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
			<br><br>
		</div>

		<WDGButton
		  v-if="!canUseWire && !isLoading"
		  id="btnContinue"
		  color="red"
		  type="button"
		  :clickEvent="onContinueClickEvent"
		  >
			<slot slot="label">{{ $t('project-setup.payment.methods.PAY_WITH_CARD') }}</slot>
		</WDGButton>

		<WDGButton
		  v-if="canUseWire && currentMethod !== '' && !isLoading"
		  id="btnContinue"
		  color="red"
		  type="button"
		  :clickEvent="onContinueClickEvent"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>

		<WDGLoader
		  v-if="isLoading"
		  type="ring"
		  color="grey"
		  >
		</WDGLoader>

	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGLoader from '@/../../common/src/components/WDGLoader'
export default {
	name: 'TheResultPaymentSelector',
	components: {
		WDGButton,
		WDGLoader
	},
	props: {
		canUseWire: { type: Boolean, default: true },
		isLoading: { type: Boolean, default: false },
		onMethodValidate: { type: Function }
	},
	data () {
		return {
			currentMethod: this.canUseWire ? '' : 'card'
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
		}
	}
}
</script>

<style>
div.the-result-payment-selector {
	padding: 32px;
	background: #FFF;
	width: 48%;
}
div.the-result-payment-selector div.payment-methods-pictos {
	margin-top: 8px;
}
div.the-result-payment-selector div.payment-methods-pictos svg, div.the-result-payment-selector svg {
	margin-right: 8px;
}
div.the-result-payment-selector div.payment-methods-buttons .wdg-button {
	display: inline-block;
	margin-right: 16px;
}
div.the-result-payment-selector div.payment-methods-buttons .wdg-button button {
	padding: 0px 16px;
	border: 1px solid #333;
	margin-top: 15px;
}
div.the-result-payment-selector div.payment-methods-buttons .wdg-button button.grey {
	background: #333 url('../../../../common/src/assets/icons/check-white.png') no-repeat 8px center;
	padding: 0px 16px 0px 32px;
}
div.the-result-payment-selector .wdg-button button.red {
	width: 170px;
}
div.the-result-payment-selector #btnContinue.transparent-no-border {
	cursor: default;
}
@media only screen and (max-width: 767px) {
	div.the-result-payment-selector {
		width: auto;
	}
}
</style>

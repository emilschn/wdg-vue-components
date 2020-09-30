<template>
	<div class="the-result-payment-wire">
		<strong>{{ $t('project-setup.payment.wire.TITLE') }}</strong>
		<br><br>

		{{ $t('project-setup.payment.wire.IBAN_LABEL') }}
		<br>
		FR76 XXXX XXXX XXXX XXXX XXXX XXXX
		<br><br>

		<WDGButton
		  v-if="canAcceptWire"
		  color="admin"
		  type="button"
		  :clickEvent="onContinueClickEvent"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheResultPaymentWire',
	components: {
		WDGButton
	},
	props: {
		canAcceptWire: { type: Boolean, default: false },
		onAdminContinue: { type: Function }
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props
		}
	},
	methods: {
		onContinueClickEvent () {
			if (this.onAdminContinue !== undefined) {
				this.onAdminContinue()
			}
		}
	},
	computed: {
	}
}
</script>

<style>
div.the-result-payment-wire {
	padding: 32px;
	background: #FFF;
}
</style>

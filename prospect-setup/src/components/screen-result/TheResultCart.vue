<template>
	<div class="the-result-cart">
		<strong>{{ bundle1Title }}</strong><br>
		{{ bundle1Description }}<br>
		{{ bundle1PriceWithoutDiscount }}&nbsp;&euro; {{ $t('common.WITHOUT_TAXES_LETTERS') }}<br>
		{{ bundle1Discount }}&nbsp;%<br>
		{{ bundle1DiscountReason }}<br>
		{{ bundle1DiscountAmount }}&nbsp;&euro; {{ $t('common.WITHOUT_TAXES_LETTERS') }}<br>
			<br>

		<strong>{{ bundle2Title }}</strong><br>
		{{ bundle2PriceWithoutDiscount }}&nbsp;&euro; {{ $t('common.WITHOUT_TAXES_LETTERS') }}<br>
		{{ bundle2Discount }}&nbsp;%<br>
		{{ bundle2DiscountReason }}<br>
		{{ bundle2DiscountAmount }}&nbsp;&euro; {{ $t('common.WITHOUT_TAXES_LETTERS') }}<br>
			<br>

		{{ $t('project-setup.payment.cart.TOTAL_WITHOUT_TAXES') }}
		{{ totalWithoutTaxes }}&nbsp;&euro;<br>
		<br>

		{{ $t('project-setup.payment.cart.TAXES') }}
		{{ totalTaxes }}&nbsp;&euro;<br>
		<br>

		{{ $t('project-setup.payment.cart.TOTAL_WITH_TAXES') }}
		{{ totalWithTaxes }}&nbsp;&euro;<br>
	</div>
</template>

<script>
import i18n from '@/i18n'

export default {
	name: 'TheResultCart',
	components: {
	},
	props: {
		bundle1Type: { type: String, default: '' },
		bundle1Title: { type: String, default: '' },
		bundle1PriceWithoutDiscount: { type: Number, default: 0 },
		bundle1Discount: { type: String, default: '' },
		bundle1DiscountReason: { type: String, default: '' },
		bundle2Type: { type: String, default: '' },
		bundle2Title: { type: String, default: '' },
		bundle2PriceWithoutDiscount: { type: Number, default: 0 },
		bundle2Discount: { type: String, default: '' },
		bundle2DiscountReason: { type: String, default: '' }
	},
	computed: {
		bundle1Description () {
			if (this.bundle1Type === 'lovemoney') {
				return i18n.t('project-setup.project-result.formulas.lovemoney.AMOUNT_1') + ', ' + i18n.t('project-setup.project-result.formulas.lovemoney.AMOUNT_2')
			}
			if (this.bundle1Type === 'private') {
				return i18n.t('project-setup.project-result.formulas.private.AMOUNT_1') + ', ' + i18n.t('project-setup.project-result.formulas.private.AMOUNT_2')
			}
			if (this.bundle1Type === 'crowdfunding') {
				return i18n.t('project-setup.project-result.formulas.crowdfunding.AMOUNT_1') + ', ' + i18n.t('project-setup.project-result.formulas.crowdfunding.AMOUNT_2')
			}
			return ''
		},
		bundle1DiscountAmount () {
			return this.bundle1PriceWithoutDiscount * this.bundle1Discount / 100
		},
		bundle2DiscountAmount () {
			return this.bundle2PriceWithoutDiscount * this.bundle2Discount / 100
		},
		totalWithoutTaxes () {
			return this.bundle1PriceWithoutDiscount - this.bundle1DiscountAmount + this.bundle2PriceWithoutDiscount - this.bundle2DiscountAmount
		},
		totalTaxes () {
			return this.totalWithoutTaxes * 20 / 100
		},
		totalWithTaxes () {
			return this.totalWithoutTaxes + this.totalTaxes
		}
	}
}
</script>

<style>
div.the-result-cart {
	padding: 32px;
	background: #f4f2f2;
}
</style>

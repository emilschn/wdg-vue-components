<template>
	<div class="the-result-cart">
		<div class="cart-bundle1">
			<strong>{{ bundle1Title }} - {{ bundle2Title }}</strong><br>
				<div class="bundle-description-prices">
					<div class="description-price">
						<span class="bundle-description">{{ bundle1Description }}</span>
						<span class="price-without-discount">{{ bundle1PriceWithoutDiscount }}&nbsp;&euro; {{ $t('common.WITHOUT_TAXES_LETTERS') }}</span>
					</div>
					<div class="price-discount" v-if="bundle1Discount> 0">
						<span class="discount-reason">{{ bundle1Discount }}&nbsp;%
						{{ bundle1DiscountReason }}</span>
						<span class="discount-amount">-{{ bundle1DiscountAmount }}&nbsp;&euro; {{ $t('common.WITHOUT_TAXES_LETTERS') }}</span>
					</div>
				</div>
		</div>
		<div class="cart-total-without-taxes">
			<span class="total-without-taxes">{{ $t('project-setup.payment.cart.TOTAL_WITHOUT_TAXES') }}</span>
			<span class="total-without-taxes-amount">{{ totalWithoutTaxes }}&nbsp;&euro;</span>
		</div>

		<div class="cart-total-taxes">
			<span class="total-taxes">{{ $t('project-setup.payment.cart.TAXES') }}</span>
			<span class="total-taxes-amount">{{ totalTaxes }}&nbsp;&euro;</span>
		</div>

		<div class="cart-total-with-taxes">
			<span class="total-with-taxes">{{ $t('project-setup.payment.cart.TOTAL_WITH_TAXES') }}</span>
			<span class="total-with-taxes-amount">{{ totalWithTaxes }}&nbsp;&euro;</span>
		</div>

		<WDGToggle
		  v-if="sharedProps.capacities.enable_payment === '1'"
		  :initValue="sharedState.hasAuthorizedWire === '1'"
		  :changeEvent="onEnableWireChangeEvent"
		  theme="admin"
		  colorChecked="#F1A074"
		  colorUnchecked="#333333"
		  >
			<slot slot="label-before">{{ $t('project-setup.project-result.admin.ENABLE_WIRE') }}</slot>
		</WDGToggle>
	</div>
</template>

<script>
import { store } from '../../store.js'
import i18n from '@/i18n'
import WDGToggle from '@/../../common/src/components/WDGToggle'

export default {
	name: 'TheResultCart',
	components: {
		WDGToggle
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
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props
		}
	},
	computed: {
		bundle1Description () {
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
			return this.bundle1PriceWithoutDiscount - this.bundle1DiscountAmount
		},
		totalTaxes () {
			return this.totalWithoutTaxes * 20 / 100
		},
		totalWithTaxes () {
			return this.totalWithoutTaxes + this.totalTaxes
		}
	},
	methods: {
		onEnableWireChangeEvent (newValue) {
			this.sharedState.hasAuthorizedWire = newValue ? '1' : '0'
			store.saveProject()
		}
	}
}
</script>

<style>
div.the-result-cart {
	padding: 32px;
	border: 1px solid #c2c2c2;
}

div.the-result-cart div.cart-bundle2 {
	margin-top: 20px;
	border-top: 1px solid #b4b4b4;
	padding-top: 20px;
	border-bottom: 1px solid #b4b4b4;
	padding-bottom: 20px;
}

div.the-result-cart div.cart-bundle1 strong, div.the-result-cart div.cart-bundle2 strong {
	font-size: 22px;
	padding-bottom: 15px;
}

div.the-result-cart div.cart-bundle1 div.bundle-description-prices {
	margin-top: 10px;
	display: flex;
	flex-flow: wrap;
}

div.the-result-cart div.bundle-description-prices div.description-price {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

div.the-result-cart div.cart-bundle2 div.bundle-description-prices {
	text-align: right;
	margin-top: 15px;
}

div.the-result-cart span.bundle-description {
	font-size: 12px;
	color: #b4b4b4;
	width: 60%;
}

div.the-result-cart div.cart-bundle2 div.bundle-description {
	text-align: right;
}

div.the-result-cart .price-without-discount {
	font-size: 18px;
	font-weight: 500;
}

div.the-result-cart div.price-discount {
	width: 100%;
	margin-top: 20px;
	display: flex;
	justify-content: space-between;
}

div.the-result-cart .discount-amount  {
	font-size: 16px;
	font-weight: 500;
}

div.the-result-cart .discount-reason {
	font-size: 14px;
	font-weight: 700;
}

div.the-result-cart div.cart-total-without-taxes, div.the-result-cart div.cart-total-taxes, div.the-result-cart div.cart-total-with-taxes {
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	padding-bottom: 15px;
}

div.the-result-cart div.cart-total-without-taxes, div.the-result-cart div.cart-total-taxes {
	border-bottom: 1px solid #b4b4b4;
}

div.the-result-cart span.total-without-taxes, div.the-result-cart span.total-taxes, div.the-result-cart span.total-with-taxes {
	text-transform: uppercase;
	font-weight: 700;
}

div.the-result-cart span.total-with-taxes {
	font-size: 22px;
}

div.the-result-cart span.total-with-taxes-amount {
	font-size: 22px;
	font-weight: 700;
}
</style>

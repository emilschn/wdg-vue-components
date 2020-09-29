<template>
	<div class="the-screen-project-result">
		<div class="project-eligible" v-if="isProjectEligible">
			<TheTabTitle
			  v-bind:hasPictoBalloon="true"
			  :nMinutes="0"
			  >
				<slot slot="title">{{ $t('project-setup.project-result.TITLE') }}</slot>
			</TheTabTitle>

			<TheResultPaymentHeader
			  v-if="sharedState.package.canPay"
			  :currentTab="sharedState.step"
			  :onChangeStep="onChangeStepEvent"
			  />

			<div
			  v-if="sharedState.step == 'project-result'"
			  class="result-container"
			  >
				<TheResultCampaignAdvice
				  :amountRaised="sharedState.project.amountNeeded * 1000"
				  :percentRoyalties="getPercentRoyaltiesNumber"
				  />
				<TheResultProspectMeetup />
			</div>

			<div
			  class="cart-container"
			  >
				<TheResultCart
				  v-if="sharedState.step == 'project-cart' || sharedState.step == 'project-payment'"
				  :bundle1Type="sharedState.package.bundle1.type"
				  :bundle1Title="sharedState.package.bundle1.title"
				  :bundle1PriceWithoutDiscount="sharedState.package.bundle1.priceWithoutDiscount"
				  :bundle1Discount="sharedState.package.bundle1.discount"
				  :bundle1DiscountReason="sharedState.package.bundle1.discountReason"
				  :bundle2Type="sharedState.package.bundle2.type"
				  :bundle2Title="sharedState.package.bundle2.title"
				  :bundle2PriceWithoutDiscount="sharedState.package.bundle2.priceWithoutDiscount"
				  :bundle2Discount="sharedState.package.bundle2.discount"
				  :bundle2DiscountReason="sharedState.package.bundle2.discountReason"
				  />

				<TheResultOrganizationInfo
				  v-if="sharedState.step == 'project-cart'"
				  />

				<TheResultPaymentSelector
				  v-if="sharedState.step == 'project-payment'"
				  :canUseWire="canUseWire"
				  />
			</div>

			<div class="clear"></div>
		</div>

		<TheResultNotEligible v-if="!isProjectEligible" />
	</div>
</template>

<script>
import { store } from '../../store.js'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheResultPaymentHeader from '@/components/screen-result/TheResultPaymentHeader'
import TheResultCampaignAdvice from '@/components/screen-result/TheResultCampaignAdvice'
import TheResultProspectMeetup from '@/components/screen-result/TheResultProspectMeetup'
import TheResultCart from '@/components/screen-result/TheResultCart'
import TheResultOrganizationInfo from '@/components/screen-result/TheResultOrganizationInfo'
import TheResultPaymentSelector from '@/components/screen-result/TheResultPaymentSelector'
import TheResultNotEligible from '@/components/screen-result/TheResultNotEligible'

export default {
	name: 'TheScreenProjectResult',
	components: {
		TheTabTitle,
		TheResultPaymentHeader,
		TheResultCampaignAdvice,
		TheResultProspectMeetup,
		TheResultCart,
		TheResultOrganizationInfo,
		TheResultPaymentSelector,
		TheResultNotEligible
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	computed: {
		getPercentRoyaltiesNumber () {
			return Number(this.sharedState.project.royaltiesAmount)
		},
		isProjectEligible () {
			return (
				this.sharedState.organization.type !== 'microbusiness' && this.sharedState.organization.location !== 'out-euro' && this.sharedState.project.readyToCommunicate && this.sharedState.project.royaltiesOK
			)
		},
		canUseWire () {
			let bundle1PriceWithoutDiscount = this.sharedState.package.bundle1.priceWithoutDiscount
			let bundle1DiscountAmount = bundle1PriceWithoutDiscount * this.sharedState.package.bundle1.discount / 100
			let bundle2PriceWithoutDiscount = this.sharedState.package.bundle2.priceWithoutDiscount
			let bundle2DiscountAmount = bundle2PriceWithoutDiscount * this.sharedState.package.bundle2.discount / 100
			let totalWithoutTaxes = bundle1PriceWithoutDiscount - bundle1DiscountAmount + bundle2PriceWithoutDiscount - bundle2DiscountAmount
			let totalTaxes = totalWithoutTaxes * 20 / 100
			let totalAmount = totalWithoutTaxes + totalTaxes
			return (totalAmount > 1000)
		}
	},
	methods: {
		onChangeStepEvent (sId) {
			store.changeStep(sId)
		}
	}
}
</script>

<style>
.the-screen-project-result {
	width: 780px;
	margin: auto;
}
.the-screen-project-result div.result-container, .the-screen-project-result div.cart-container {
	margin-top: 32px;
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.the-screen-project-result div.clear {
	margin-bottom: 32px;
}
.the-screen-project-result div.result-container div.the-result-campaign-advice, .the-screen-project-result div.result-container div.the-result-prospect-meetup {
	width: 40%;
}
.the-screen-project-result div.cart-container div.the-result-cart, .the-screen-project-result div.cart-container div.the-result-organization-info {
	width: 40%;
}
@media only screen and (max-width: 767px) {
	.the-screen-project-result {
		width: auto;
	}
	.the-screen-project-result div.result-container {
		flex-direction: column;
		align-items: center;
	}
	.the-screen-project-result div.result-container div.the-result-campaign-advice, .the-screen-project-result div.result-container div.the-result-prospect-meetup {
		width: 80%;
	}
	.the-screen-project-result div.result-container div.the-result-prospect-meetup {
		margin-top: 16px;
	}
	div.the-result-prospect-meetup .wdg-button button {
		text-align: center;
	}
}
</style>

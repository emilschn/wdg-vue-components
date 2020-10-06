<template>
	<div class="the-screen-project-result">
		<div class="project-eligible" v-if="isProjectEligible">
			<TheTabTitle
			  v-bind:hasPictoBalloon="true"
			  :nMinutes="0"
			  >
				<slot slot="title">{{ $t('project-setup.project-result.TITLE') }}</slot>
			</TheTabTitle>

			{{ $t('project-setup.project-result.SUBTITLES_SELECTION_STANDARDS') }}
			<a href="https://www.wedogood.co/investissement/criteres-selection/">{{ $t('project-setup.project-result.SUBTITLES_SELECTION_STANDARDS_LINK') }}</a>.

			<TheResultPaymentHeader
			  v-if="sharedState.authorization === 'can-pay' && sharedState.step !== 'project-complete'"
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
			  v-if="sharedState.step == 'project-cart' || sharedState.step == 'project-payment'"
			  class="cart-container"
			  >
				<TheResultCart
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
				  v-if="sharedState.step === 'project-payment' && sharedState.package.paymentMethod === ''"
				  :canUseWire="canUseWire"
				  :isLoading="sharedRuntime.isLoadingPayment"
				  :onMethodValidate="onMethodValidateEvent"
				  />

				<TheResultPaymentWire
				  v-if="sharedState.step === 'project-payment' && sharedState.package.paymentMethod === 'wire'"
				  :canAcceptWire="sharedProps.capacities.accept_wire_payment === '1'"
				  :onAdminContinue="onWireReceivedEvent"
				  :onClickBack="onClickBackEvent"
				  />
			</div>

			<TheResultPaymentComplete
			  v-if="sharedState.step === 'project-complete'"
			  />

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
import TheResultPaymentWire from '@/components/screen-result/TheResultPaymentWire'
import TheResultPaymentComplete from '@/components/screen-result/TheResultPaymentComplete'
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
		TheResultPaymentWire,
		TheResultPaymentComplete,
		TheResultNotEligible
	},
	data () {
		return {
			sharedRuntime: store.runtime,
			sharedState: store.state,
			sharedProps: store.props,
			isPaymentLoading: false
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
			return (this.getTotalAmount() > 1000)
		}
	},
	methods: {
		getTotalAmount () {
			let bundle1PriceWithoutDiscount = this.sharedState.package.bundle1.priceWithoutDiscount
			let bundle1DiscountAmount = bundle1PriceWithoutDiscount * this.sharedState.package.bundle1.discount / 100
			let bundle2PriceWithoutDiscount = this.sharedState.package.bundle2.priceWithoutDiscount
			let bundle2DiscountAmount = bundle2PriceWithoutDiscount * this.sharedState.package.bundle2.discount / 100
			let totalWithoutTaxes = bundle1PriceWithoutDiscount - bundle1DiscountAmount + bundle2PriceWithoutDiscount - bundle2DiscountAmount
			let totalTaxes = totalWithoutTaxes * 20 / 100
			let totalAmount = totalWithoutTaxes + totalTaxes
			return totalAmount
		},
		onChangeStepEvent (sId) {
			store.changeStep(sId)
		},
		onMethodValidateEvent (sMethod) {
			store.saveProject()
			switch (sMethod) {
				case 'card':
					// appel Ajax pour récupérer une URL de redirection vers LW
					store.askCardPayment(this.getTotalAmount())
					break
				case 'wire':
					// appel Ajax pour envoi de notification de choix au PP et à l'admin
					store.sendWireSelected()
					// affichage des infos de paiement
					this.sharedState.package.paymentMethod = 'wire'
					break
			}
		},
		onWireReceivedEvent () {
			// affichage validation
			store.changeStep('project-complete')
			// enregistrement de la date de réception de paiement
			let currentDate = new Date()
			this.sharedState.status = 'paid'
			this.sharedState.package.paymentDate = currentDate.toString()
			this.sharedState.package.paymentStatus = 'complete'
			store.saveProject()
			// appel Ajax pour notification au PP et à l'admin
			store.sendWireReceived()
		},
		onClickBackEvent () {
			this.sharedState.package.paymentMethod = ''
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

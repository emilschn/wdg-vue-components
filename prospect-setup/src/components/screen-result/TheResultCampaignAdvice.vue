<template>
	<div class="the-result-campaign-advice">
		<div class="intro">
			{{ $t('project-setup.project-result.YOU_CAN_RAISE') }}<br>
			<span class="intro-amount">{{ amountRaisedFormatted }} €</span><br>
			<span v-if="sharedState.project.circlesToCommunicate === 'lovemoney'">{{ $t('project-setup.project-result.TARGET_LOVEMONEY') }}<br></span>
			<span v-if="sharedState.project.circlesToCommunicate === 'private'">{{ $t('project-setup.project-result.TARGET_PRIVATE') }}<br></span>
			<span v-if="sharedState.project.circlesToCommunicate === 'public'">{{ $t('project-setup.project-result.TARGET_PUBLIC') }}<br></span>
			{{ $t('project-setup.project-result.YOU_WILL_PAY') }}
			{{ percentRoyaltiesFormatted }} %
			{{ $t('project-setup.project-result.OF_YOUR_TURNOVER') }}<br>
		</div>

		<div class="recommended-title">{{ $t('project-setup.project-result.formulas.RECOMMENDED') }}</div>

		<TheResultBundleEditor
		  v-if="sharedProps.capacities.edit_bundles === '1'"
		  bundleIndex="1"
		  :bundleType="sharedState.package.bundle1.type"
		  :priceWithoutDiscount="sharedState.package.bundle1.priceWithoutDiscount"
		  :discount="sharedState.package.bundle1.discount"
		  :discountReason="sharedState.package.bundle1.discountReason"
		  :onEdit="onEditBundle"
		  :onSave="onSaveEditBundle"
		  />

		<WDGSeeMore
		  v-if="!isEditingBundle1"
		  :amount="sharedState.package.bundle1.priceWithoutDiscount.toString()"
		  :amountReduction="bundle1DiscountReasonText"
		  :uncheckedItems="uncheckedItems"
		  :checkedItems="checkedItems"
		  >
			<slot slot="title">{{ sharedState.package.bundle1.title }}</slot>
			<slot slot="text">{{ bundle1Text }}</slot>
		</WDGSeeMore>

		<div class="recommended-title option-title">{{ $t('project-setup.project-result.options.RECOMMENDED') }}</div>

		<TheResultBundleEditor
		  v-if="sharedProps.capacities.edit_bundles === '1'"
		  bundleIndex="2"
		  :bundleType="sharedState.package.bundle2.type"
		  :priceWithoutDiscount="sharedState.package.bundle2.priceWithoutDiscount"
		  :discount="sharedState.package.bundle2.discount"
		  :discountReason="sharedState.package.bundle2.discountReason"
		  :onEdit="onEditBundle"
		  :onSave="onSaveEditBundle"
		  />

		<WDGSeeMore
		  v-if="!isEditingBundle2"
		  :amount="sharedState.package.bundle2.priceWithoutDiscount.toString()"
		  :amountReduction="bundle2DiscountReasonText"
		  :checkedItems="bundle2CheckedItems"
		  >
			<slot slot="title">{{ sharedState.package.bundle2.title }}</slot>
			<slot slot="text">{{ bundle2Text }}</slot>
		</WDGSeeMore>

		<WDGToggle
		  v-if="sharedProps.capacities.enable_payment === '1'"
		  :initValue="sharedState.authorization === 'can-pay'"
		  :changeEvent="onEnablePaymentChangeEvent"
		  theme="admin"
		  colorChecked="#F1A074"
		  colorUnchecked="#333333"
		  >
			<slot slot="label-before">{{ $t('project-setup.project-result.admin.ENABLE_PAYMENT') }}</slot>
		</WDGToggle>
		<br><br>

		<WDGButton
		  v-if="sharedState.authorization === 'can-pay'"
		  :clickEvent="onContinueClickEvent"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
/* eslint-disable */
import { store } from '../../store.js'
import i18n from '@/i18n'
import WDGSeeMore from '@/../../common/src/components/WDGSeeMore'
import WDGToggle from '@/../../common/src/components/WDGToggle'
import WDGButton from '@/../../common/src/components/WDGButton'
import TheResultBundleEditor from '@/components/screen-result/TheResultBundleEditor'

export default {
	name: 'TheResultCampaignAdvice',
	components: {
		WDGSeeMore,
		WDGToggle,
		WDGButton,
		TheResultBundleEditor
	},
	props: {
		amountRaised: { type: Number, default: 10000 },
		percentRoyalties: { type: Number, default: 5 },
		isEditingBundle1: { type: Boolean, default: false },
		isEditingBundle2: { type: Boolean, default: false }
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			uncheckedItemsPrivate: [
				i18n.t('project-setup.project-result.formulas.private.AMOUNT_1'),
				i18n.t('project-setup.project-result.formulas.private.AMOUNT_2')
			],
			checkedItemsPrivate: [
				i18n.t('project-setup.project-result.formulas.options.MANAGED_THROUGH_PLATFORM'),
				i18n.t('project-setup.project-result.formulas.options.SUPPORT'),
				i18n.t('project-setup.project-result.formulas.options.LIMITED_INVESTORS'),
				i18n.t('project-setup.project-result.formulas.options.PAYMENTS')
			],
			uncheckedItemsCrowdfunding: [
				i18n.t('project-setup.project-result.formulas.crowdfunding.AMOUNT_1'),
				i18n.t('project-setup.project-result.formulas.crowdfunding.AMOUNT_2')
			],
			checkedItemsCrowdfunding: [
				i18n.t('project-setup.project-result.formulas.options.PAGE_VISIBLE_ON_WDG'),
				i18n.t('project-setup.project-result.formulas.options.COMMUNICATION_ON_NETWORKS'),
				i18n.t('project-setup.project-result.formulas.options.REFERENCED_TO_PARTNERS'),
				i18n.t('project-setup.project-result.formulas.options.MANAGED_THROUGH_PLATFORM'),
				i18n.t('project-setup.project-result.formulas.options.SUPPORT'),
				i18n.t('project-setup.project-result.formulas.options.PAYMENTS'),
				i18n.t('project-setup.project-result.formulas.options.EVALUATION'),
				i18n.t('project-setup.project-result.formulas.options.GREEN_LABEL')
			],
			checkedItemsOptionBasic: [
				i18n.t('project-setup.project-result.options.list.READ_PITCH'),
				i18n.t('project-setup.project-result.options.list.SUPPORT_TO_INVESTORS'),
				i18n.t('project-setup.project-result.options.list.WORKSHOP')
			],
			checkedItemsOptionStandard: [
				i18n.t('project-setup.project-result.options.list.READ_PITCH_AND_COM'),
				i18n.t('project-setup.project-result.options.list.WORKSHOP'),
				i18n.t('project-setup.project-result.options.list.CUSTOM_MONITORING'),
				i18n.t('project-setup.project-result.options.list.INVESTORS_MONITORING')
			],
			checkedItemsOptionComplete: []
		}
	},
	computed: {
		percentRoyaltiesFormatted () {
			return this.percentRoyalties.toString().split('.').join(',')
		},
		amountRaisedFormatted () {
			return this.amountRaised.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
		},

		// Options d'affichage pour bundle 1
		bundle1Text () {
			if (this.sharedState.package.bundle1.type === 'lovemoney') {
				return i18n.t('project-setup.project-result.formulas.lovemoney.TEXT')
			} else if (this.sharedState.package.bundle1.type === 'private') {
				return i18n.t('project-setup.project-result.formulas.private.TEXT')
			}
			return i18n.t('project-setup.project-result.formulas.crowdfunding.TEXT')
		},
		uncheckedItems () {
			if (this.sharedState.package.bundle1.type === 'lovemoney') {
				return this.uncheckedItemsLoveMoney
			} else if (this.sharedState.package.bundle1.type === 'private') {
				return this.uncheckedItemsPrivate
			}
			return this.uncheckedItemsCrowdfunding
		},
		checkedItems () {
			if (this.sharedState.package.bundle1.type === 'lovemoney') {
				return this.checkedItemsLoveMoney
			} else if (this.sharedState.package.bundle1.type === 'private') {
				return this.checkedItemsPrivate
			}
			return this.checkedItemsCrowdfunding
		},
		bundle1DiscountReasonText () {
			if (this.sharedState.package.bundle1.discount > 0) {
				let buffer = '(-' + this.sharedState.package.bundle1.discount + ' %'
				if (this.sharedState.package.bundle1.discountReason !== '') {
					buffer += ' ' + this.sharedState.package.bundle1.discountReason
				}
				buffer += ')'
				return buffer
			}
			return ''
		},

		// Options d'affichage pour bundle 2
		bundle2Text () {
			switch (this.sharedState.package.bundle2.type) {
				case 'basic':
					return i18n.t('project-setup.project-result.options.basic.TEXT')
				case 'standard':
					return i18n.t('project-setup.project-result.options.standard.TEXT')
			}
			return i18n.t('project-setup.project-result.options.complete.TEXT')
		},
		bundle2DiscountReasonText () {
			if (this.sharedState.package.bundle2.discount > 0) {
				let buffer = '(-' + this.sharedState.package.bundle2.discount + ' %'
				if (this.sharedState.package.bundle2.discountReason !== '') {
					buffer += ' ' + this.sharedState.package.bundle2.discountReason
				}
				buffer += ')'
				return buffer
			}
			return ''
		},
		bundle2CheckedItems () {
			switch (this.sharedState.package.bundle2.type) {
				case 'basic':
					return this.checkedItemsOptionBasic
				case 'standard':
					return this.checkedItemsOptionStandard
			}
			return this.checkedItemsOptionComplete
		}
	},
	methods: {
		updateTexts (bundleIndex) {
			switch (bundleIndex) {
				case '1':
					let checkedOptionsComplete = [
						i18n.t('project-setup.project-result.options.list.READ_PITCH_AND_COM'),
						i18n.t('project-setup.project-result.options.list.SUPPORT_TO_INVESTORS'),
						i18n.t('project-setup.project-result.options.list.WORKSHOP'),
						i18n.t('project-setup.project-result.options.list.CUSTOM_MONITORING'),
						i18n.t('project-setup.project-result.options.list.INVESTORS_MONITORING'),
						i18n.t('project-setup.project-result.options.list.SUPPORT_CENTER'),
						i18n.t('project-setup.project-result.options.list.CONTENT_CREATION')
					]

					switch (this.sharedState.package.bundle1.type) {
						case 'lovemoney':
							this.sharedState.package.bundle1.title = i18n.t('project-setup.project-result.formulas.lovemoney.TITLE')
							break
						case 'private':
							this.sharedState.package.bundle1.title = i18n.t('project-setup.project-result.formulas.private.TITLE')
							break
						case 'crowdfunding':
							this.sharedState.package.bundle1.title = i18n.t('project-setup.project-result.formulas.crowdfunding.TITLE')
							checkedOptionsComplete.unshift(i18n.t('project-setup.project-result.options.list.COMMISSION_REDUCTION'))
							break
					}

					this.checkedItemsOptionComplete = checkedOptionsComplete
					this.sharedState.package.bundle1.discountReasonText = '(-' + this.sharedState.package.bundle1.discount + ' % ' + this.sharedState.package.bundle1.discountReason + ')'
					break

				case '2':
					switch (this.sharedState.package.bundle2.type) {
						case 'basic':
							this.sharedState.package.bundle2.title = i18n.t('project-setup.project-result.options.basic.TITLE')
							this.sharedState.package.bundle2.priceWithoutDiscount = 0
							this.sharedState.package.bundle2.discount = '0'
							this.sharedState.package.bundle2.discountReason = ''
							break
						case 'standard':
							this.sharedState.package.bundle2.title = i18n.t('project-setup.project-result.options.standard.TITLE')
							this.sharedState.package.bundle2.priceWithoutDiscount = 1500
							break
						case 'complete':
							this.sharedState.package.bundle2.title = i18n.t('project-setup.project-result.options.complete.TITLE')
							this.sharedState.package.bundle2.priceWithoutDiscount = 3600
							break
					}
					break
			}
		},
		onEnablePaymentChangeEvent (newValue) {
			this.sharedState.authorization = newValue ? 'can-pay' : ''
			store.saveProject()
		},
		onEditBundle (bundleIndex, isEditing) {
			if (bundleIndex === '1') {
				this.isEditingBundle1 = isEditing
			}
			if (bundleIndex === '2') {
				this.isEditingBundle2 = isEditing
			}
		},
		onSaveEditBundle (bundleIndex, bundleType, discount, discountReason) {
			let bundleToEdit = this.sharedState.package.bundle1
			if (bundleIndex === '2') {
				bundleToEdit = this.sharedState.package.bundle2
			}
			bundleToEdit.type = bundleType
			bundleToEdit.discount = discount
			bundleToEdit.discountReason = discountReason
			bundleToEdit.editedByAdmin = true
			this.updateTexts(bundleIndex)
			store.saveProject()
		},
		onContinueClickEvent () {
			store.changeStep('project-cart')
		}
	},
	mounted () {
		// A l'arrivée, on initialise les données en fonction des données cochées précédemment
		// Package de base
		if (this.sharedState.package.bundle1.type === '' || !this.sharedState.package.bundle1.editedByAdmin) {
			this.sharedState.package.bundle1.type = this.sharedState.project.chosenFormula
			if (this.sharedState.project.chosenFormula === 'public') {
				this.sharedState.package.bundle1.type = 'crowdfunding'
				this.sharedState.package.bundle1.priceWithoutDiscount = 1300
			} else {
				this.sharedState.package.bundle1.priceWithoutDiscount = 650
			}
			
			this.sharedState.package.bundle1.discount = '30'
			this.sharedState.package.bundle1.discountReason = i18n.t('project-setup.project-result.formulas.REDUCTION')
			this.updateTexts('1')
		}

		// Accompagnements
		if (this.sharedState.package.bundle2.type === '' || !this.sharedState.package.bundle2.editedByAdmin) {
			// Accompagnement basique
			if (!this.sharedState.project.needCommunicationAdvice && this.sharedState.project.alreadyDoneCrowdfunding) {
				this.sharedState.package.bundle2.type = 'basic'
			}
			// Accompagnement standard
			if (!this.sharedState.project.alreadyDoneCrowdfunding && !this.sharedState.project.needCommunicationAdvice) {
				this.sharedState.package.bundle2.type = 'standard'
				this.sharedState.package.bundle2.priceWithoutDiscount = 1500
				this.sharedState.package.bundle2.discount = '30'
				this.sharedState.package.bundle2.discountReason = i18n.t('project-setup.project-result.options.REDUCTION')
			}
			// Accompagnement complet
			if (this.sharedState.project.needCommunicationAdvice) {
				this.sharedState.package.bundle2.type = 'complete'
				this.sharedState.package.bundle2.priceWithoutDiscount = 3600
				this.sharedState.package.bundle2.discount = '30'
				this.sharedState.package.bundle2.discountReason = i18n.t('project-setup.project-result.options.REDUCTION')
			}

			this.updateTexts('2')
		}
	}
}
</script>

<style>
div.the-result-campaign-advice {
	padding: 32px;
	border: 1px solid #c2c2c2;
}
div.the-result-campaign-advice div.intro {
	margin-bottom: 32px;
	font-size: 20px;
}
div.the-result-campaign-advice div.intro span.intro-amount {
	font-size: 30px;
	font-weight: bold;
}
div.the-result-campaign-advice div.recommended-title {
	margin-bottom: 10px;
}
div.the-result-campaign-advice div.option-title:before { /* ajout d'un + pour montrer qu'on peut cumuler les offres */
	content: "+";
	font-size: 22px;
	font-weight: 600;
	margin-right: 5px;
	vertical-align: middle;
}
</style>

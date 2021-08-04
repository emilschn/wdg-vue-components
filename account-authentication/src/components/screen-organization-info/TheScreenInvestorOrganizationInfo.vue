<template>
	<div class="the-screen-investor-organization-info">
		{{ $t('account-authentication.organization-infos.MY_ORGANIZATION_NAME') }}
		<WDGInput
		  id="organizationName"
		  name="organizationName"
		  :value="sharedState.organization.name"
		  v-bind:valueReturn.sync="sharedState.organization.name"
		  customStyle="natural-language"
		  />,
		<br><br>

		{{ $t('account-authentication.organization-infos.ITS_COUNTRY') }}
		<WDGSelect
		  id="organizationCountry"
		  name="organizationCountry"
		  :optionItems="sharedStatic.countries"
		  :value="sharedState.organization.country"
		  v-bind:valueReturn.sync="sharedState.organization.country"
		  customStyle="natural-language"
		  />,
		<br><br>

		{{ $t('account-authentication.organization-infos.ITS_ACTIVITY_CONSISTS') }}
		<WDGInput
		  id="organizationActivity"
		  name="organizationActivity"
		  :value="sharedState.organization.activity"
		  v-bind:valueReturn.sync="sharedState.organization.activity"
		  customStyle="natural-language"
		  />.
		<br><br>

		<div v-if="canDisplayIDNumber">
			<span v-if="sharedState.organization.country === 'FR'">
				{{ $t('account-authentication.organization-infos.ITS_IDENTIFICATION_NUMBER_FR') }}
			</span>
			<span v-else>
				{{ $t('account-authentication.organization-infos.ITS_IDENTIFICATION_NUMBER') }}
			</span>
			<WDGInput
			  id="organizationIDNumber"
			  name="organizationIDNumber"
			  :value="sharedState.organization.idnumber"
			  v-bind:valueReturn.sync="sharedState.organization.idnumber"
			  customStyle="natural-language"
			  />,
			<br><br>

			{{ $t('account-authentication.organization-infos.ITS_EMAIL_ADDRESS') }}
			<WDGInput
			  id="organizationEmail"
			  name="organizationEmail"
			  :value="sharedState.organization.email"
			  v-bind:valueReturn.sync="sharedState.organization.email"
			  :descriptionBelow="getFieldDescriptor('email')"
			  customStyle="natural-language"
			  />,
			<br><br>

			{{ $t('account-authentication.organization-infos.ITS_WEBSITE') }}
			<WDGInput
			  id="organizationWebsite"
			  name="organizationWebsite"
			  :value="sharedState.organization.website"
			  v-bind:valueReturn.sync="sharedState.organization.website"
			  :descriptionBelow="getFieldDescriptor('website')"
			  customStyle="natural-language"
			  />.
			<br><br>
		</div>

		<div v-if="canDisplayLegal">
			{{ $t('account-authentication.organization-infos.ITS_LEGAL_FORM') }}
			<WDGInput
			  id="organizationLegalForm"
			  name="organizationLegalForm"
			  :value="sharedState.organization.legalform"
			  v-bind:valueReturn.sync="sharedState.organization.legalform"
			  customStyle="natural-language"
			  />,
			<br><br>

			{{ $t('account-authentication.organization-infos.ITS_APE') }}
			<WDGInput
			  id="organizationApe"
			  name="organizationApe"
			  :value="sharedState.organization.apecode"
			  v-bind:valueReturn.sync="sharedState.organization.apecode"
			  customStyle="natural-language"
			  />,
			<br><br>

			<span v-if="sharedState.organization.country === 'FR'">
				{{ $t('account-authentication.organization-infos.ITS_LEGAL_TOWN_FR') }}
			</span>
			<span v-else>
				{{ $t('account-authentication.organization-infos.ITS_LEGAL_TOWN') }}
			</span>
			<WDGInput
			  id="organizationLegalTown"
			  name="organizationLegalTown"
			  :value="sharedState.organization.legaltown"
			  v-bind:valueReturn.sync="sharedState.organization.legaltown"
			  customStyle="natural-language"
			  />.
			<br><br>
		</div>

		<div v-if="canDisplayAddress">
			{{ $t('account-authentication.organization-infos.ITS_ADDRESS') }}
			<WDGInput
			  id="organizationAddress"
			  name="organizationAddress"
			  :value="sharedState.organization.address"
			  v-bind:valueReturn.sync="sharedState.organization.address"
			  customStyle="natural-language"
			  />,
			<br><br>

			{{ $t('account-authentication.organization-infos.ITS_CAPITAL') }}
			<WDGInput
			  id="organizationCapital"
			  name="organizationCapital"
			  :value="sharedState.organization.capital"
			  v-bind:valueReturn.sync="sharedState.organization.capital"
			  customStyle="natural-language"
			  suffix="€"
			  />,
			<br><br>

			{{ $t('account-authentication.organization-infos.MY_FUNCTION') }}
			<WDGInput
			  id="organizationRepresentativeFunction"
			  name="organizationRepresentativeFunction"
			  :value="sharedState.organization.representativefunction"
			  v-bind:valueReturn.sync="sharedState.organization.representativefunction"
			  customStyle="natural-language"
			  />.
			<br><br>
		</div>

		
		<div
		  v-if="canDisplayButtonNext">
			<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="onContinue"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorOrganizationInfo',
	components: {
		WDGSelect,
		WDGInput,
		WDGButton
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state,
			sharedStatic: store.static,
			sharedProps: store.props
		}
	},
	methods: {
		getFieldDescriptor (fieldID) {
			switch (fieldID) {
				case 'email':
					return i18n.t('account-authentication.organization-infos.ITS_EMAIL_ADDRESS_DESCRIPTOR')
				case 'website':
					return i18n.t('account-authentication.organization-infos.ITS_WEBSITE_DESCRIPTOR')
			}
		}
	},
	computed: {
		canDisplayIDNumber () {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.sharedState.organization.name !== '' && this.sharedState.organization.activity !== '')
		},
		canDisplayLegal () {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayIDNumber && this.sharedState.organization.idnumber !== '' && this.sharedState.organization.email !== '' && this.sharedState.organization.website !== '')
		},
		canDisplayAddress () {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayLegal && this.sharedState.organization.legalform !== '' && this.sharedState.organization.apecode !== '' && this.sharedState.organization.legaltown !== '')
		},
		canDisplayButtonNext () {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayAddress && this.sharedState.organization.address !== '' && this.sharedState.organization.capital !== '' && this.sharedState.organization.representativefunction !== '')
		}
	}
}
</script>

<style>
	div.the-screen-investor-organization-info {
		margin: 50px 0px;
	}
</style>

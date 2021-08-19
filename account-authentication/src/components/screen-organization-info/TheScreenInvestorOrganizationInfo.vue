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
		  :value="sharedState.organization.address.country"
		  v-bind:valueReturn.sync="sharedState.organization.address.country"
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
			<span v-if="sharedState.organization.address.country === 'FR'">
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

			<span v-if="sharedState.organization.address.country === 'FR'">
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
			<div
			  v-if="canDisplaySearchAddress"
			  >
				{{ $t('account-authentication.organization-infos.ITS_ADDRESS') }}
				<WDGInputAddress
				  id="organizationAddressSearch"
				  name="organizationAddressSearch"
				  customStyle="natural-language"
				  :onSelect="onSelectSearchAddressEvent"
				  />
			</div>

			<div
			  v-else
			  >
				{{ $t('account-authentication.organization-infos.ITS_ADDRESS_NUMBER_IS') }}
				<WDGInput
				  id="organizationAddressNumber"
				  name="organizationAddressNumber"
				  :value="sharedState.organization.address.number"
				  v-bind:valueReturn.sync="sharedState.organization.address.number"
				  customStyle="natural-language"
				  />

				<WDGSelect
				  v-if="sharedState.organization.address.country === 'FR'"
				  id="organizationAddressNumberComp"
				  name="organizationAddressNumberComp"
				  :optionItems="sharedStatic.addressNumberComp"
				  :value="sharedState.organization.address.numberComp"
				  v-bind:valueReturn.sync="sharedState.organization.address.numberComp"
				  customStyle="natural-language"
				  />
				<br><br>

				{{ $t('account-authentication.organization-infos.ITS_ADDRESS_IS') }}
				<WDGInput
				  id="organizationAddressStreet"
				  name="organizationAddressStreet"
				  :value="sharedState.organization.address.street"
				  v-bind:valueReturn.sync="sharedState.organization.address.street"
				  customStyle="natural-language"
				  />
				<br><br>

				{{ $t('account-authentication.organization-infos.ITS_ADDRESS_POSTAL_CODE_IS') }}
				<WDGInput
				  id="organizationAddressPostalCode"
				  name="organizationAddressPostalCode"
				  :value="sharedState.organization.address.postalCode"
				  v-bind:valueReturn.sync="sharedState.organization.address.postalCode"
				  :descriptionBelow="getAddressDescriptor('postalCode')"
				  customStyle="natural-language"
				  />

				<WDGInput
				  id="organizationAddressCity"
				  name="organizationAddressPostalCode"
				  :value="sharedState.organization.address.city"
				  v-bind:valueReturn.sync="sharedState.organization.address.city"
				  :descriptionBelow="getAddressDescriptor('city')"
				  customStyle="natural-language"
				  />
				<br><br>
			</div>


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
import WDGInputAddress from '@/../../common/src/components/WDGInputAddress'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorOrganizationInfo',
	components: {
		WDGSelect,
		WDGInput,
		WDGInputAddress,
		WDGButton
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state,
			sharedStatic: store.static,
			sharedProps: store.props,
			canFindAddress: true
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
		},
		getAddressDescriptor(type) {
			switch (type) {
				case 'postalCode':
					return i18n.t('account-authentication.user-infos.POSTAL_CODE')

				case 'city':
					return i18n.t('account-authentication.user-infos.CITY')
			}
			return ''
		},
		onSelectSearchAddressEvent(searchResultItem) {
			if ( searchResultItem !== undefined ) {
				if (searchResultItem === 'cant-find') {
					this.canFindAddress = false
					return
				}

				if (searchResultItem.properties.housenumber !== undefined) {
					if (isNaN(searchResultItem.properties.housenumber)) {
						let splitNum = searchResultItem.properties.housenumber.match(/\d+/g)
						this.sharedState.organization.address.number = splitNum[0]
						let splitNumComp = searchResultItem.properties.housenumber.match(/[a-zA-Z]+/g)
						this.sharedState.organization.address.numberComp = splitNumComp[0]
						switch (this.sharedState.organization.address.numberComp) {
							case 'b':
								this.sharedState.organization.address.numberComp = 'bis'
								break
							case 't':
								this.sharedState.organization.address.numberComp = 'ter'
								break
						}

					} else {
						this.sharedState.organization.address.number = searchResultItem.properties.housenumber
					}
				}
				if (searchResultItem.properties.street !== undefined) {
					this.sharedState.organization.address.street = searchResultItem.properties.street
				} else if (searchResultItem.properties.type === 'street' && searchResultItem.properties.name !== undefined) {
					this.sharedState.organization.address.street = searchResultItem.properties.name
				}
				if (searchResultItem.properties.postcode !== undefined) {
					this.sharedState.organization.address.postalCode = searchResultItem.properties.postcode
				}
				if (searchResultItem.properties.city !== undefined) {
					this.sharedState.organization.address.city = searchResultItem.properties.city
				}
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
		canDisplaySearchAddress() {
			return (this.canDisplayAddress && this.canFindAddress && this.sharedState.organization.address.country === 'FR' && ( this.sharedState.organization.address.street === '' || this.sharedState.organization.address.street === undefined ))
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

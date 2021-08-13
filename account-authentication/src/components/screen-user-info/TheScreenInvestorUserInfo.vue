<template>
	<div class="the-screen-investor-user-info">
		{{ $t('account-authentication.user-infos.I_AM') }}
		<WDGSelect
		  id="userGender"
		  name="userGender"
		  :optionItems="userGenderList"
		  :value="sharedState.user.gender"
		  v-bind:valueReturn.sync="sharedState.user.gender"
		  customStyle="natural-language"
		  >
			<slot slot="placeholder">{{ $t('account-authentication.user-infos.GENDER') }}</slot>
		</WDGSelect>,
		<br><br>

		{{ $t('account-authentication.user-infos.I_AM_BORN') }}
		<WDGInput
		  id="userBirthdayDay"
		  name="userBirthdayDay"
		  :placeholder="getDateTranslation('DD')"
		  :descriptionBelow="getDateDescriptor('DD')"
		  :value="sharedState.user.birthday.day"
		  v-bind:valueReturn.sync="sharedState.user.birthday.day"
		  customStyle="natural-language"
		  />
		<WDGInput
		  id="userBirthdayMonth"
		  name="userBirthdayMonth"
		  :placeholder="getDateTranslation('MM')"
		  :descriptionBelow="getDateDescriptor('MM')"
		  :value="sharedState.user.birthday.month"
		  v-bind:valueReturn.sync="sharedState.user.birthday.month"
		  customStyle="natural-language"
		  />
		<WDGInput
		  id="userBirthdayYear"
		  name="userBirthdayYear"
		  :placeholder="getDateTranslation('YYYY')"
		  :descriptionBelow="getDateDescriptor('YYYY')"
		  :value="sharedState.user.birthday.year"
		  v-bind:valueReturn.sync="sharedState.user.birthday.year"
		  customStyle="natural-language"
		  />,
		<br><br>

		{{ $t('account-authentication.user-infos.IN_THIS_COUNTRY') }}
		<WDGSelect
		  id="userCountry"
		  name="userCountry"
		  :optionItems="sharedStatic.countries"
		  :value="sharedState.user.birthday.country"
		  v-bind:valueReturn.sync="sharedState.user.birthday.country"
		  customStyle="natural-language"
		  />
		<br><br>

		<div v-if="canDisplayCity">
			<div v-if="sharedState.user.birthday.country === 'FR'">
				{{ $t('account-authentication.user-infos.IN_THE_DEPARTMENT') }}
				<WDGSelect
				  id="userDepartment"
				  name="userDepartment"
				  :optionItems="sharedStatic.frenchDepartments"
				  :value="sharedState.user.birthday.department"
				  v-bind:valueReturn.sync="sharedState.user.birthday.department"
				  customStyle="natural-language"
				  />
				<br><br>
			</div>

			{{ $t('account-authentication.user-infos.IN_THIS_CITY') }}
			<WDGInput
			  id="userCity"
			  name="userCity"
			  :value="sharedState.user.birthday.city"
			  v-bind:valueReturn.sync="sharedState.user.birthday.city"
			  customStyle="natural-language"
			  />
			
			<div v-if="canDisplayFrenchDistrict">
				<br><br>

				{{ $t('account-authentication.user-infos.IN_THIS_DISTRICT') }}
				<WDGSelect
				  id="userDistrict"
				  name="userDistrict"
				  :optionItems="getFrenchDistrictNumbersList(sharedState.user.birthday.city)"
				  :value="sharedState.user.birthday.district"
				  v-bind:valueReturn.sync="sharedState.user.birthday.district"
				  customStyle="natural-language"
				  />
			</div>

			<br><br>
		</div>

		<div v-if="canDisplayNationality">
			{{ $t('account-authentication.user-infos.MY_NATIONALITY_IS') }}
			<WDGSelect
			  id="userNationality"
			  name="userNationality"
			  :optionItems="sharedStatic.countries"
			  :value="sharedState.user.birthday.nationality"
			  v-bind:valueReturn.sync="sharedState.user.birthday.nationality"
			  customStyle="natural-language"
			  />.
			<br><br>
		</div>

		<div v-if="canDisplayAddress">
			{{ $t('account-authentication.user-infos.MY_COUNTRY_IS') }}
			<WDGSelect
			  id="userAddressCountry"
			  name="userAddressCountry"
			  :optionItems="sharedStatic.countries"
			  :value="sharedState.user.address.country"
			  v-bind:valueReturn.sync="sharedState.user.address.country"
			  customStyle="natural-language"
			  />
			<br><br>
			
			<div
			  v-if="canDisplaySearchAddress"
			  >
				{{ $t('account-authentication.user-infos.SEARCH_MY_ADRESS') }}
				<WDGInputAddress
				  id="userAddressSearch"
				  name="userAddressSearch"
				  customStyle="natural-language"
				  :onSelect="onSelectSearchAddressEvent"
				  />
			</div>

			<div
			  v-else
			  >
				{{ $t('account-authentication.user-infos.MY_ADDRESS_NUMBER_IS') }}
				<WDGInput
				  id="userAddressNumber"
				  name="userAddressNumber"
				  :value="sharedState.user.address.number"
				  v-bind:valueReturn.sync="sharedState.user.address.number"
				  customStyle="natural-language"
				  />

				<WDGSelect
				  v-if="sharedState.user.address.country === 'FR'"
				  id="userAddressNumberComp"
				  name="userAddressNumberComp"
				  :optionItems="sharedStatic.addressNumberComp"
				  :value="sharedState.user.address.numberComp"
				  v-bind:valueReturn.sync="sharedState.user.address.numberComp"
				  customStyle="natural-language"
				  />
				<br><br>

				{{ $t('account-authentication.user-infos.MY_ADDRESS_IS') }}
				<WDGInput
				  id="userAddressStreet"
				  name="userAddressStreet"
				  :value="sharedState.user.address.street"
				  v-bind:valueReturn.sync="sharedState.user.address.street"
				  customStyle="natural-language"
				  />
				<br><br>

				{{ $t('account-authentication.user-infos.MY_ADDRESS_POSTAL_CODE_IS') }}
				<WDGInput
				  id="userAddressPostalCode"
				  name="userAddressPostalCode"
				  :value="sharedState.user.address.postalCode"
				  v-bind:valueReturn.sync="sharedState.user.address.postalCode"
				  :descriptionBelow="getAddressDescriptor('postalCode')"
				  customStyle="natural-language"
				  />

				<WDGInput
				  id="userAddressCity"
				  name="userAddressPostalCode"
				  :value="sharedState.user.address.city"
				  v-bind:valueReturn.sync="sharedState.user.address.city"
				  :descriptionBelow="getAddressDescriptor('city')"
				  customStyle="natural-language"
				  />
				<br><br>
			</div>
		</div>

		<div v-if="canDisplayTaxCountry">
			{{ $t('account-authentication.user-infos.MY_TAX_COUNTRY_IS') }}
			<WDGSelect
			  id="userTaxCountry"
			  name="userTaxCountry"
			  :optionItems="sharedStatic.countries"
			  :value="sharedState.user.taxCountry"
			  v-bind:valueReturn.sync="sharedState.user.taxCountry"
			  customStyle="natural-language"
			  />
			<br><br>
		</div>

		
		<div v-if="canDisplayNextButton">
			<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="onButtonConfirmUserInfoEvent"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './../../store.js'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGInputAddress from '@/../../common/src/components/WDGInputAddress'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorUserInfo',
	components: {
		WDGSelect,
		WDGInput,
		WDGInputAddress,
		WDGButton
	},
	props: {
		onConfirmUserInfo: Function
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			sharedStatic: store.static,
			userGenderList: [
				{ Id: '', Text: '' },
				{ Id: 'female', Text: i18n.t('account-authentication.user-infos.A_WOMAN') },
				{ Id: 'male', Text: i18n.t('account-authentication.user-infos.A_MAN') }
			]
		}
	},
	methods: {
		getDateTranslation(type) {
			return i18n.t('common.date.'+type)
		},
		getDateDescriptor(type) {
			return i18n.t('common.date.description-'+type)
		},
		getFrenchDistrictNumbersList(city) {
			let buffer = new Array()
			if (city === '' || city === undefined) {
				return buffer
			}

			let nbDistricts = 0
			if (city.indexOf('Paris') > -1) {
				nbDistricts = 20
			}
			if (city.indexOf('Lyon') > -1) {
				nbDistricts = 9
			}
			if (city.indexOf('Marseille') > -1) {
				nbDistricts = 16
			}
			for (let i = 0; i <= nbDistricts; i++) {
				let item = { Id: i.toString(), Text: i.toString() }
				buffer.push(item)
			}
			return buffer
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
				// TODO : Faire une découpe sur bis / ter / etc
				this.sharedState.user.address.number = searchResultItem.properties.housenumber
				// sharedState.user.address.numberComp = searchResultItem.properties.housenumber
				this.sharedState.user.address.street = searchResultItem.properties.street
				this.sharedState.user.address.postalCode = searchResultItem.properties.postcode
				this.sharedState.user.address.city = searchResultItem.properties.city
			}
		},
		onButtonConfirmUserInfoEvent () {
			this.onConfirmUserInfo()
		}
	},
	computed: {
		canDisplayCity() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.sharedState.user.birthday.country !== '')
		},
		canDisplayFrenchDistrict() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.sharedState.user.birthday.city.indexOf('Paris') > -1 || this.sharedState.user.birthday.city.indexOf('Lyon') > -1 || this.sharedState.user.birthday.city.indexOf('Marseille') > -1)
		},
		canDisplayNationality() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayCity && this.sharedState.user.birthday.city !== '')
		},
		canDisplayAddress() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayNationality && this.sharedState.user.birthday.nationality !== '')
		},
		canDisplaySearchAddress() {
			return (this.canDisplayAddress && this.sharedState.user.address.country === 'FR' && ( this.sharedState.user.address.street === '' || this.sharedState.user.address.street === undefined ))
		},
		canDisplayTaxCountry() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayAddress && this.sharedState.user.address.street !== '' && this.sharedState.user.address.city !== '')
		},
		canDisplayNextButton() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.canDisplayTaxCountry && this.sharedState.user.taxCountry !== '')
		}
	}
}
</script>

<style>
	div.the-screen-investor-user-info {
		margin: 50px 0px;
	}
</style>

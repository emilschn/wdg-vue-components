<template>
	<div class="the-screen-investor-user-info">
		<!-- Genre -->
		<span
		  v-if="listError.indexOf('gender') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
		</span>
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

		<!-- Date de naissance -->
		<span
		  v-if="listError.indexOf('birthday-day') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.DATE_DAY') }}<br>
		</span>
		<span
		  v-if="listError.indexOf('birthday-month') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.DATE_MONTH') }}<br>
		</span>
		<span
		  v-if="listError.indexOf('birthday-year') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.DATE_YEAR') }}<br>
		</span>
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

		<!-- Pays de naissance -->
		<span
		  v-if="listError.indexOf('birthday-country') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
		</span>
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

		<!-- Lieu de naissance -->
		<div v-if="canDisplayCity">
			<div v-if="sharedState.user.birthday.country === 'FR'">
				<span
				  v-if="listError.indexOf('birthday-department') > -1"
				  class="error"
				  >
					{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
				</span>
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

			<span
			  v-if="listError.indexOf('birthday-city') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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

				<span
				  v-if="listError.indexOf('birthday-district') > -1"
				  class="error"
				  >
					{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
				</span>
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

		<!-- Nationalité -->
		<div v-if="canDisplayNationality">
			<span
			  v-if="listError.indexOf('birthday-nationality') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
			</span>
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

		<!-- Adresse -->
		<div v-if="canDisplayAddress">
			<span
			  v-if="listError.indexOf('address-country') > -1"
			  class="error addressCountry"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
			</span>
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
			
			<span
			  v-if="listError.indexOf('address-street') > -1"
			  class="error addressStreet"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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

				<span
				  v-if="listError.indexOf('address-city') > -1"
				  class="error addressCity"
				  >
					{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
				</span>
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
			<span
			  v-if="listError.indexOf('address-taxCountry') > -1"
			  class="error addressTaxCountry"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
			</span>
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
			listError: [],
			userGenderList: [
				{ Id: '', Text: '' },
				{ Id: 'female', Text: i18n.t('account-authentication.user-infos.A_WOMAN') },
				{ Id: 'male', Text: i18n.t('account-authentication.user-infos.A_MAN') }
			],
			canFindAddress: true
		}
	},
	methods: {
		/**
		 * Vérifie les informations saisies et affiche des messages d'erreur
		 */
		checkUserInfo() {
			this.listError = []
			if (this.sharedState.user.gender === undefined || this.sharedState.user.gender === '') {
				this.listError.splice(this.listError.length, 0, 'gender')
			}
			if (isNaN(this.sharedState.user.birthday.day) || this.sharedState.user.birthday.day === '' || this.sharedState.user.birthday.day < 1 || this.sharedState.user.birthday.day > 31) {
				this.listError.splice(this.listError.length, 0, 'birthday-day')
			}
			if (isNaN(this.sharedState.user.birthday.month) || this.sharedState.user.birthday.month === '' || this.sharedState.user.birthday.month < 1 || this.sharedState.user.birthday.month > 12) {
				this.listError.splice(this.listError.length, 0, 'birthday-month')
			}
			if (isNaN(this.sharedState.user.birthday.year) || this.sharedState.user.birthday.year === '' || this.sharedState.user.birthday.year < 1850 || this.sharedState.user.birthday.year > 2050) {
				this.listError.splice(this.listError.length, 0, 'birthday-year')
			}
			if (this.sharedState.user.birthday.country === undefined || this.sharedState.user.birthday.country === '') {
				this.listError.splice(this.listError.length, 0, 'birthday-country')
			}
			if (this.sharedState.user.birthday.country === 'FR' && (this.sharedState.user.birthday.department === undefined || this.sharedState.user.birthday.department === '')) {
				this.listError.splice(this.listError.length, 0, 'birthday-department')
			}
			if (this.sharedState.user.birthday.city === undefined || this.sharedState.user.birthday.city === '') {
				this.listError.splice(this.listError.length, 0, 'birthday-city')
			}
			if (this.hasBirthplaceCityDistricts() && (this.sharedState.user.birthday.district === undefined || this.sharedState.user.birthday.district === '')) {
				this.listError.splice(this.listError.length, 0, 'birthday-district')
			}
			if (this.sharedState.user.birthday.nationality === undefined || this.sharedState.user.birthday.nationality === '') {
				this.listError.splice(this.listError.length, 0, 'birthday-nationality')
			}
			if (this.sharedState.user.address.country === undefined || this.sharedState.user.address.country === '') {
				this.listError.splice(this.listError.length, 0, 'address-country')
			}
			if (this.sharedState.user.address.street === undefined || this.sharedState.user.address.street === '') {
				this.listError.splice(this.listError.length, 0, 'address-street')
			}
			if (this.sharedState.user.address.postalCode === undefined || this.sharedState.user.address.postalCode === '') {
				this.listError.splice(this.listError.length, 0, 'address-city')
			}
			if (this.sharedState.user.taxCountry === undefined || this.sharedState.user.taxCountry === '') {
				this.listError.splice(this.listError.length, 0, 'address-taxCountry')
			}

			if (this.listError.length > 0) {
				setTimeout(() => {
					let el = this.$el.getElementsByClassName('error')[0]
					if (el !== undefined && el !== null) {
						el.scrollIntoView({ behavior: 'smooth' })
					}
				})
			}
			
			return (this.listError.length === 0)
		},
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
			for (let i = 1; i <= nbDistricts; i++) {
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
		hasBirthplaceCityDistricts() {
			return (this.sharedState.user.birthday.city.indexOf('Paris') > -1 || this.sharedState.user.birthday.city.indexOf('Lyon') > -1 || this.sharedState.user.birthday.city.indexOf('Marseille') > -1)
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
						this.sharedState.user.address.number = splitNum[0]
						let splitNumComp = searchResultItem.properties.housenumber.match(/[a-zA-Z]+/g)
						this.sharedState.user.address.numberComp = splitNumComp[0]
						switch (this.sharedState.user.address.numberComp) {
							case 'b':
								this.sharedState.user.address.numberComp = 'bis'
								break
							case 't':
								this.sharedState.user.address.numberComp = 'ter'
								break
						}

					} else {
						this.sharedState.user.address.number = searchResultItem.properties.housenumber
					}
				}
				if (searchResultItem.properties.street !== undefined) {
					this.sharedState.user.address.street = searchResultItem.properties.street
				} else if (searchResultItem.properties.type === 'street' && searchResultItem.properties.name !== undefined) {
					this.sharedState.user.address.street = searchResultItem.properties.name
				}
				if (searchResultItem.properties.postcode !== undefined) {
					this.sharedState.user.address.postalCode = searchResultItem.properties.postcode
				}
				if (searchResultItem.properties.city !== undefined) {
					this.sharedState.user.address.city = searchResultItem.properties.city
				}
			}
		},
		onButtonConfirmUserInfoEvent () {
			if (this.checkUserInfo()) {
				this.onConfirmUserInfo()
			}
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
			return this.hasBirthplaceCityDistricts()
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
			return (this.canDisplayAddress && this.canFindAddress && this.sharedState.user.address.country === 'FR' && ( this.sharedState.user.address.street === '' || this.sharedState.user.address.street === undefined ))
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
			return (this.sharedState.user.taxCountry !== '')
		}
	}
}
</script>

<style>
	div.the-screen-investor-user-info {
		margin: 50px 0px;
	}
	div.the-screen-investor-user-info span.error {
		color: red
	}
</style>

<template>
	<div class="the-screen-investor-user-info">
		<div class="user-info-line">
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
				<!-- <slot slot="placeholder">{{ $t('account-authentication.user-infos.GENDER') }}</slot> -->
			</WDGSelect>,
		</div>

		<!-- Date de naissance -->
		<div class="date-of-birth user-info-line">
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
		  	 class="input-description-below"
		  	 :placeholder="getDateTranslation('DD')"
		  	 :descriptionBelow="getDateDescriptor('DD')"
		  	 :value="sharedState.user.birthday.day"
		  	 v-bind:valueReturn.sync="sharedState.user.birthday.day"
		  	 customStyle="natural-language"
		  	/>
			<WDGInput
		  	 id="userBirthdayMonth"
		  	 name="userBirthdayMonth"
		  	 class="input-description-below"
		  	 :placeholder="getDateTranslation('MM')"
		  	 :descriptionBelow="getDateDescriptor('MM')"
		  	 :value="sharedState.user.birthday.month"
		  	 v-bind:valueReturn.sync="sharedState.user.birthday.month"
		  	 customStyle="natural-language"
		  	/>
			<WDGInput class="user-birthday-year input-description-below"
		  	 id="userBirthdayYear"
		  	 name="userBirthdayYear"
		  	 :placeholder="getDateTranslation('YYYY')"
		  	 :descriptionBelow="getDateDescriptor('YYYY')"
		  	 :value="sharedState.user.birthday.year"
		  	 v-bind:valueReturn.sync="sharedState.user.birthday.year"
		  	 customStyle="natural-language"
		  	/>,
		</div>

		<!-- Pays de naissance -->
		<div class="user-info-line">
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
		</div>

		<!-- Lieu de naissance -->
		<div v-if="canDisplayCity" class="user-info-line">
			<div v-if="sharedState.user.birthday.country === 'FR'">
				<span
				  v-if="listError.indexOf('birthday-department') > -1"
				  class="error"
				  >
					{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
				</span>
				<div class="user-info-line">
					{{ $t('account-authentication.user-infos.IN_THE_DEPARTMENT') }}
					<WDGSelect
				 	 id="userDepartment"
				 	 name="userDepartment"
				 	 :optionItems="sharedStatic.frenchDepartments"
				 	 :value="sharedState.user.birthday.department"
				 	 v-bind:valueReturn.sync="sharedState.user.birthday.department"
				 	 customStyle="natural-language"
				  	/>
				</div>
			</div>

			<div class="user-info-line">
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
			</div>
			
			<div v-if="canDisplayFrenchDistrict" class="user-info-line">

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
		</div>

		<!-- Nationalité -->
		<div v-if="canDisplayNationality" class="user-info-line">
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
		</div>

		<!-- Adresse -->
		<div v-if="canDisplayAddress" class="user-info-line">
			<div class="user-info-line">
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
			</div>
			
			<div class="user-info-line">
				<span
			 	 v-if="listError.indexOf('address-street') > -1"
			 	 class="error addressStreet"
			  	>
					{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
				</span>
				<div
			 	 v-if="canDisplaySearchAddress" class="user-info-line"
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
				  <div class="user-info-line address-number-and-comp">
			  		<div class="address-number-container">
						{{ $t('account-authentication.user-infos.MY_ADDRESS_NUMBER_IS') }}
						<WDGInput
				  		 id="userAddressNumber"
				  		 name="userAddressNumber"
				  		 class="input-description-below"
				  		 :value="sharedState.user.address.number"
				  		 v-bind:valueReturn.sync="sharedState.user.address.number"
				  		 :descriptionBelow="getAddressDescriptor('number')"
				  		 customStyle="natural-language"
				  		/>
					</div>

					<WDGSelect
					  v-if="sharedState.user.address.country === 'FR'"
					  id="userAddressNumberComp"
					  name="userAddressNumberComp"
					  :optionItems="sharedStatic.addressNumberComp"
					  :value="sharedState.user.address.numberComp"
					  v-bind:valueReturn.sync="sharedState.user.address.numberComp"
					  :descriptionBelow="getAddressDescriptor('numberComp')"
					  customStyle="natural-language"
					/>
				  </div>

					<div class="user-info-line">
						{{ $t('account-authentication.user-infos.MY_ADDRESS_IS') }}
						<WDGInput
				 		 id="userAddressStreet"
				 		 name="userAddressStreet"
				 		 :value="sharedState.user.address.street"
				 		 v-bind:valueReturn.sync="sharedState.user.address.street"
				 		 customStyle="natural-language"
				  		/>
					</div>

					
						<span
				 		 v-if="listError.indexOf('address-city') > -1"
				 		 class="error addressCity"
				  		>
							{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
						</span>
					<div class="user-info-line postal-code-and-city">
						{{ $t('account-authentication.user-infos.MY_ADDRESS_POSTAL_CODE_IS') }}
						<WDGInput
				 		 id="userAddressPostalCode"
				 		 name="userAddressPostalCode"
				 		 class="input-description-below"
				 		 :value="sharedState.user.address.postalCode"
				 		 v-bind:valueReturn.sync="sharedState.user.address.postalCode"
				 		 :descriptionBelow="getAddressDescriptor('postalCode')"
				 		 customStyle="natural-language"
				  		/>

						<WDGInput
				 		 id="userAddressCity"
				 		 name="userAddressPostalCode"
				 		 class="input-description-below"
				 		 :value="sharedState.user.address.city"
				 		 v-bind:valueReturn.sync="sharedState.user.address.city"
				 		 :descriptionBelow="getAddressDescriptor('city')"
				 		 customStyle="natural-language"
				  		/>
					</div>
				</div>

				<div v-if="canDisplayTaxCountry" class="user-info-line">
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
				</div>
			</div>
		</div>

		
		<div v-if="canDisplayNextButton">
			<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="onButtonConfirmUserInfoEvent"
			  :loading="loading"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
			<div
			  v-if="requestError !== ''"
			  class="request-error"
			  >
				{{ requestErrorText }}
			</div>
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { requests } from './../../requests.js'
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
			canFindAddress: true,
			loading: false,
			requestError: ''
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
				case 'number':
					return i18n.t('account-authentication.user-infos.NUMBER')
				case 'numberComp':
					return i18n.t('account-authentication.user-infos.NUMBER_COMPLEMENT')
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
			// if (this.checkUserInfo()) {
				// En mode dev, on passe directement à la suite
				if (process.env.NODE_ENV === 'development') {
					this.onConfirmUserInfo()
				} else {
					// On attend le retour du serveur pour passer à la suite
					this.loading = true
					this.requestError = ''
					requests.saveUserInfo(this.sharedState, this.onSaveUserInfoReturnEvent)
				}
			// }
		},
		onSaveUserInfoReturnEvent (responseData) {
			this.loading = false
			// Si la sauvegarde est validée, on passe à la suite
			if (responseData.status === 'saved') {
				this.onConfirmUserInfo()

			// Erreur lors de la sauvegarde, on affiche un feedback
			} else {
				this.requestError = responseData.status
				// Problème de login (déconnecté / compte d'organisation)
				if (this.requestError === 'not-logged-in' || this.requestError === 'is-user-organization') {
					// On redirige vers la page donnée par le serveur (la page de connexion) - sauf en mode dev
					if (responseData.redirectUrl !== undefined && responseData.redirectUrl !== '' && process.env.NODE_ENV !== 'development') {
						window.location = responseData.redirectUrl
						this.loading = true
					}
				}
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
		},
		requestErrorText() {
			switch (this.requestError) {
				case 'not-logged-in':
				case 'is-user-organization':
					return i18n.t('account-authentication.requests.errors.LOGIN')
				case 'wrong-birthday-date':
					return i18n.t('account-authentication.requests.errors.DATE')
			}
			return ''
		}
	}
}
</script>

<style>
	div.the-screen-investor-user-info {
		margin: 50px 0px;
	}
	.the-screen-investor-user-info .wdg-select.natural-language span.placeholder {
		left: -245px;
	}
	.the-screen-investor-user-info .input-description-below {
		margin-bottom: 0;
	}
	/* Alignement des champs de formulaire les uns à côté des autres */
	.the-screen-investor-user-info .date-of-birth, .the-screen-investor-user-info .address-number-container, .the-screen-investor-user-info .address-number-and-comp, .the-screen-investor-user-info .postal-code-and-city {
		display: flex;
		align-items: baseline;
	}
	.the-screen-investor-user-info .date-of-birth .wdg-input.natural-language input, .the-screen-investor-user-info .address-number-container .wdg-input.natural-language input {
		width: 40px;
		margin-right: 15px;
	}
	.the-screen-investor-user-info .date-of-birth .wdg-input.natural-language #userBirthdayYear {
		width: 60px;
		margin-right: 0;
	}
	.the-screen-investor-user-info .wdg-input.natural-language #userAddressPostalCode {
		width: 70px;
		margin-right: 15px;
	}
	/* Adapation du input à la taille du select pour un bon alignement */
	.the-screen-investor-user-info .address-number-and-comp .wdg-input input#userAddressNumber {
		height: auto;
		padding: 10px 0px 10px 10px;
	}
	.the-screen-investor-user-info .address-number-and-comp .wdg-select select#userAddressNumberComp {
		width: 120px;
	}
	/* La même marge pour toutes les lignes */
	.the-screen-investor-user-info div.user-info-line {
		margin-bottom: 40px;
	}
	.wdg-button button {
		width: 150px;
	}
	.close .wdg-button button {
		width: auto;
	}
	div.the-screen-investor-user-info span.error {
		border: 1px solid #F8CACA;
		padding: 10px;
		font-size: 14px;
		display: block;
		margin-bottom: 2px;
		width: 30%;
	}
	div.the-screen-investor-user-info span.error:before {
		/* content:url(/../../../common/src/assets/icons/exclamation.png); */
		content:url(D:/Site/wp-content/plugins/wdg-vue-components/common/src/assets/icons/exclamation.png);
		width: 15px;
		display: inline-block;
		vertical-align: middle;
	}
	.the-screen-investor-user-info .date-of-birth {
		display: flex;
		flex-flow: row wrap;
	}
	.the-screen-investor-user-info .date-of-birth .error {
		margin-right: 10px;
	}
	div.the-screen-investor-user-info div.request-error {
		color: red;
		text-align: center;
	}
</style>

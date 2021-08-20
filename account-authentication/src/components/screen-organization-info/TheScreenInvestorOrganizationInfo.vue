<template>
	<div class="the-screen-investor-organization-info">
		<!-- Nom -->
		<span
		  v-if="listError.indexOf('name') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
		</span>
		{{ $t('account-authentication.organization-infos.MY_ORGANIZATION_NAME') }}
		<WDGInput
		  id="organizationName"
		  name="organizationName"
		  :value="sharedState.organization.name"
		  v-bind:valueReturn.sync="sharedState.organization.name"
		  customStyle="natural-language"
		  />,
		<br><br>

		<!-- Pays -->
		<span
		  v-if="listError.indexOf('address-country') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.PLEASE_SELECT') }}<br>
		</span>
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

		<!-- Activité -->
		<span
		  v-if="listError.indexOf('activity') > -1"
		  class="error"
		  >
			{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
		</span>
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
			<!-- Numéro d'identification -->
			<span
			  v-if="listError.indexOf('idnumber') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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

			<!-- Adresse e-mail -->
			<span
			  v-if="listError.indexOf('email') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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

			<!-- Site web -->
			<span
			  v-if="listError.indexOf('website') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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
			<!-- Forme légale -->
			<span
			  v-if="listError.indexOf('legalform') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
			{{ $t('account-authentication.organization-infos.ITS_LEGAL_FORM') }}
			<WDGInput
			  id="organizationLegalForm"
			  name="organizationLegalForm"
			  :value="sharedState.organization.legalform"
			  v-bind:valueReturn.sync="sharedState.organization.legalform"
			  customStyle="natural-language"
			  />,
			<br><br>

			<!-- Code APE -->
			<span
			  v-if="listError.indexOf('apecode') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
			{{ $t('account-authentication.organization-infos.ITS_APE') }}
			<WDGInput
			  id="organizationApe"
			  name="organizationApe"
			  :value="sharedState.organization.apecode"
			  v-bind:valueReturn.sync="sharedState.organization.apecode"
			  customStyle="natural-language"
			  />,
			<br><br>

			<!-- RCS -->
			<span
			  v-if="listError.indexOf('legaltown') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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
			<!-- Adresse -->
			<span
			  v-if="listError.indexOf('address-street') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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
				  :descriptionBelow="getAddressDescriptor('number')"
				  customStyle="natural-language"
				  />

				<WDGSelect
				  v-if="sharedState.organization.address.country === 'FR'"
				  id="organizationAddressNumberComp"
				  name="organizationAddressNumberComp"
				  :optionItems="sharedStatic.addressNumberComp"
				  :value="sharedState.organization.address.numberComp"
				  v-bind:valueReturn.sync="sharedState.organization.address.numberComp"
				  :descriptionBelow="getAddressDescriptor('numberComp')"
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

			<!-- Capital -->
			<span
			  v-if="listError.indexOf('capital') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.organization-infos.error.CAPITAL') }}<br>
			</span>
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

			<!-- Fonction du représentant légal -->
			<span
			  v-if="listError.indexOf('representativefunction') > -1"
			  class="error"
			  >
				{{ $t('account-authentication.user-infos.error.PLEASE_FILL_IN') }}<br>
			</span>
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
			  :clickEvent="onButtonContinueEvent"
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
		onConfirmOrganizationInfo: Function
	},
	data () {
		return {
			sharedState: store.state,
			sharedStatic: store.static,
			sharedProps: store.props,
			listError: [],
			canFindAddress: true,
			loading: false,
			requestError: ''
		}
	},
	methods: {
		/**
		 * Vérifie les informations saisies et affiche des messages d'erreur
		 */
		checkOrganizationInfo() {
			this.listError = []
			if (this.sharedState.organization.name === undefined || this.sharedState.organization.name === '') {
				this.listError.splice(this.listError.length, 0, 'name')
			}
			if (this.sharedState.organization.address.country === undefined || this.sharedState.organization.address.country === '') {
				this.listError.splice(this.listError.length, 0, 'address-country')
			}
			if (this.sharedState.organization.activity === undefined || this.sharedState.organization.activity === '') {
				this.listError.splice(this.listError.length, 0, 'activity')
			}
			if (this.sharedState.organization.idnumber === undefined || this.sharedState.organization.idnumber === '') {
				this.listError.splice(this.listError.length, 0, 'idnumber')
			}
			if (this.sharedState.organization.email === undefined || this.sharedState.organization.email === '') {
				this.listError.splice(this.listError.length, 0, 'email')
			}
			if ( !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.sharedState.organization.email)) {
				this.listError.splice(this.listError.length, 0, 'email')
			}
			if (this.sharedState.organization.website === undefined || this.sharedState.organization.website === '') {
				this.listError.splice(this.listError.length, 0, 'website')
			}
			if (this.sharedState.organization.legalform === undefined || this.sharedState.organization.legalform === '') {
				this.listError.splice(this.listError.length, 0, 'legalform')
			}
			if (this.sharedState.organization.apecode === undefined || this.sharedState.organization.apecode === '') {
				this.listError.splice(this.listError.length, 0, 'apecode')
			}
			if (this.sharedState.organization.legaltown === undefined || this.sharedState.organization.legaltown === '') {
				this.listError.splice(this.listError.length, 0, 'legaltown')
			}
			if (this.sharedState.organization.address.street === undefined || this.sharedState.organization.address.street === '') {
				this.listError.splice(this.listError.length, 0, 'address-street')
			}
			if (this.sharedState.organization.capital === undefined || this.sharedState.organization.capital === '' || isNaN(this.sharedState.organization.capital)) {
				this.listError.splice(this.listError.length, 0, 'capital')
			}
			if (this.sharedState.organization.representativefunction === undefined || this.sharedState.organization.representativefunction === '') {
				this.listError.splice(this.listError.length, 0, 'representativefunction-street')
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
		},
		onButtonContinueEvent() {
			if (this.checkOrganizationInfo()) {
				// En mode dev, on passe directement à la suite
				/* if (process.env.NODE_ENV === 'development') {
					this.onConfirmOrganizationInfo()
				} else { */
					// On attend le retour du serveur pour passer à la suite
					this.loading = true
					this.requestError = ''
					requests.saveOrganizationInfo(this.sharedState, this.onSaveOrganizationInfoReturnEvent)
				// }
			}
		},
		onSaveOrganizationInfoReturnEvent (responseData) {
			this.loading = false
			// Si la sauvegarde est validée, on passe à la suite
			if (responseData.status === 'organization-saved') {
				this.onConfirmOrganizationInfo()

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
			return (this.canDisplayAddress && this.sharedState.organization.address.street !== '' && this.sharedState.organization.capital !== '' && this.sharedState.organization.representativefunction !== '')
		},
		requestErrorText() {
			switch (this.requestError) {
				case 'not-logged-in':
				case 'is-user-organization':
					return i18n.t('account-authentication.requests.errors.LOGIN')
				case 'cant-edit-organization':
					return i18n.t('account-authentication.requests.errors.CANT_EDIT_ORGANIZATION')
				case 'organization-email-exists':
					return i18n.t('account-authentication.requests.errors.ORGANIZATION_EMAIL_EXIST')
				case 'organization-linked-user-creation-error':
				case 'organization-api-creation-error':
					return i18n.t('account-authentication.requests.errors.ORGANIZATION_CREATION_ERROR')
			}
			return ''
		}
	}
}
</script>

<style>
	div.the-screen-investor-organization-info {
		margin: 50px 0px;
	}
	div.the-screen-investor-organization-info span.error {
		color: red
	}
	div.the-screen-investor-user-info div.request-error {
		color: red;
		text-align: center;
	}
</style>

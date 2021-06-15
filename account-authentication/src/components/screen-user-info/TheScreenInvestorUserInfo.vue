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
		  :optionItems="countryList"
		  :value="sharedState.user.birthday.country"
		  v-bind:valueReturn.sync="sharedState.user.birthday.country"
		  customStyle="natural-language"
		  />
		<br><br>

		<div
		  v-if="sharedState.user.birthday.country !== ''">
			<div
			  v-if="sharedState.user.birthday.country === 'FR'"
			  >
				{{ $t('account-authentication.user-infos.IN_THE_DEPARTMENT') }}
				<WDGSelect
				  id="userDepartment"
				  name="userDepartment"
				  :optionItems="frenchDepartmentList"
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
			
			<div
			  v-if="sharedState.user.birthday.city.indexOf('Paris') > -1 || sharedState.user.birthday.city.indexOf('Lyon') > -1 || sharedState.user.birthday.city.indexOf('Marseille') > -1"
			  >
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

		<div
		  v-if="sharedState.user.birthday.country !== '' && sharedState.user.birthday.city !== ''">
			{{ $t('account-authentication.user-infos.MY_NATIONALITY_IS') }}
			<WDGSelect
			  id="userNationality"
			  name="userNationality"
			  :optionItems="countryList"
			  :value="sharedState.user.birthday.nationality"
			  v-bind:valueReturn.sync="sharedState.user.birthday.nationality"
			  customStyle="natural-language"
			  />.
			<br><br>
		</div>

		<div
		  v-if="sharedState.user.birthday.country !== '' && sharedState.user.birthday.city !== '' && sharedState.user.birthday.nationality !== ''">
			{{ $t('account-authentication.user-infos.MY_ADDRESS_IS') }}
			<WDGInputAddress
			  id="userAddress"
			  name="userAddress"
			  :value="sharedState.user.address"
			  v-bind:valueReturn.sync="sharedState.user.address"
			  customStyle="natural-language"
			  :onChange="onAddressChangeEvent"
			  />
			<br><br>
		</div>

		<div
		  v-if="sharedState.user.birthday.country !== '' && sharedState.user.birthday.city !== '' && sharedState.user.birthday.nationality !== '' && sharedState.user.address !== ''">
			{{ $t('account-authentication.user-infos.MY_TAX_COUNTRY_IS') }}
			<WDGSelect
			  id="userTaxCountry"
			  name="userTaxCountry"
			  :optionItems="countryList"
			  :value="sharedState.user.taxCountry"
			  v-bind:valueReturn.sync="sharedState.user.taxCountry"
			  customStyle="natural-language"
			  />
			<br><br>
		</div>

		
		<div
		  v-if="sharedState.user.birthday.country !== '' && sharedState.user.birthday.city !== '' && sharedState.user.birthday.nationality !== '' && sharedState.user.address !== '' && sharedState.user.taxCountry !== ''">
			<WDGButton
			  color="red"
			  type="button"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from './../../store.js'
import { requests } from '../../requests.js'
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
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			userGenderList: [
				{ Id: '', Text: '' },
				{ Id: 'woman', Text: i18n.t('account-authentication.user-infos.A_WOMAN') },
				{ Id: 'man', Text: i18n.t('account-authentication.user-infos.A_MAN') }
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
		onAddressChangeEvent(addressTyped) {
			requests.searchAddressTyped(addressTyped)
		}
	},
	computed: {
		frenchDepartmentList () {
			return [
				{ Id: '', Text: '' },
				{ Id: '01', Text: 'Ain' },
				{ Id: '02', Text: 'Aisne' },
				{ Id: '03', Text: 'Allier' },
				{ Id: '04', Text: 'Alpes-de-Haute-Provence' },
				{ Id: '05', Text: 'Hautes-Alpes' },
				{ Id: '06', Text: 'Alpes-Maritimes' },
				{ Id: '07', Text: 'Ard&egrave;che' },
				{ Id: '08', Text: 'Ardennes' },
				{ Id: '09', Text: 'Ari&egrave;ge' },
				{ Id: '10', Text: 'Aube' },
				{ Id: '11', Text: 'Aude' },
				{ Id: '12', Text: 'Aveyron' },
				{ Id: '13', Text: 'Bouches-du-Rh&ocirc;ne' },
				{ Id: '14', Text: 'Calvados' },
				{ Id: '15', Text: 'Cantal' },
				{ Id: '16', Text: 'Charente' },
				{ Id: '17', Text: 'Charente-Maritime' },
				{ Id: '18', Text: 'Cher' },
				{ Id: '19', Text: 'Corr&egrave;ze' },
				{ Id: '2A', Text: 'Corse-du-Sud' },
				{ Id: '2B', Text: 'Haute-Corse' },
				{ Id: '21', Text: 'C&ocirc;te-d&apos;Or' },
				{ Id: '22', Text: 'C&ocirc;tes d&apos;Armor' },
				{ Id: '23', Text: 'Creuse' },
				{ Id: '24', Text: 'Dordogne' },
				{ Id: '25', Text: 'Doubs' },
				{ Id: '26', Text: 'Dr&ocirc;me' },
				{ Id: '27', Text: 'Eure' },
				{ Id: '28', Text: 'Eure-et-Loir' },
				{ Id: '29', Text: 'Finist&egrave;re' },
				{ Id: '30', Text: 'Gard' },
				{ Id: '31', Text: 'Haute-Garonne' },
				{ Id: '32', Text: 'Gers' },
				{ Id: '33', Text: 'Gironde' },
				{ Id: '34', Text: 'H&eacute;rault' },
				{ Id: '35', Text: 'Ille-et-Vilaine' },
				{ Id: '36', Text: 'Indre' },
				{ Id: '37', Text: 'Indre-et-Loire' },
				{ Id: '38', Text: 'Is&egrave;re' },
				{ Id: '39', Text: 'Jura' },
				{ Id: '40', Text: 'Landes' },
				{ Id: '41', Text: 'Loir-et-Cher' },
				{ Id: '42', Text: 'Loire' },
				{ Id: '43', Text: 'Haute-Loire' },
				{ Id: '44', Text: 'Loire-Atlantique' },
				{ Id: '45', Text: 'Loiret' },
				{ Id: '46', Text: 'Lot' },
				{ Id: '47', Text: 'Lot-et-Garonne' },
				{ Id: '48', Text: 'Loz&egrave;re' },
				{ Id: '49', Text: 'Maine-et-Loire' },
				{ Id: '50', Text: 'Manche' },
				{ Id: '51', Text: 'Marne' },
				{ Id: '52', Text: 'Haute-Marne' },
				{ Id: '53', Text: 'Mayenne' },
				{ Id: '54', Text: 'Meurthe-et-Moselle' },
				{ Id: '55', Text: 'Meuse' },
				{ Id: '56', Text: 'Morbihan' },
				{ Id: '57', Text: 'Moselle' },
				{ Id: '58', Text: 'Ni&egrave;vre' },
				{ Id: '59', Text: 'Nord' },
				{ Id: '60', Text: 'Oise' },
				{ Id: '61', Text: 'Orne' },
				{ Id: '62', Text: 'Pas-de-Calais' },
				{ Id: '63', Text: 'Puy-de-D&ocirc;me' },
				{ Id: '64', Text: 'Pyr&eacute;n&eacute;es-Atlantiques' },
				{ Id: '65', Text: 'Hautes-Pyr&eacute;n&eacute;es' },
				{ Id: '66', Text: 'Pyr&eacute;n&eacute;es-Orientales' },
				{ Id: '67', Text: 'Bas-Rhin' },
				{ Id: '68', Text: 'Haut-Rhin' },
				{ Id: '69', Text: 'Rh&ocirc;ne' },
				{ Id: '70', Text: 'Haute-Sa&ocirc;ne' },
				{ Id: '71', Text: 'Sa&ocirc;ne-et-Loire' },
				{ Id: '72', Text: 'Sarthe' },
				{ Id: '73', Text: 'Savoie' },
				{ Id: '74', Text: 'Haute-Savoie' },
				{ Id: '75', Text: 'Paris' },
				{ Id: '76', Text: 'Seine-Maritime' },
				{ Id: '77', Text: 'Seine-et-Marne' },
				{ Id: '78', Text: 'Yvelines' },
				{ Id: '79', Text: 'Deux-S&egrave;vres' },
				{ Id: '80', Text: 'Somme' },
				{ Id: '81', Text: 'Tarn' },
				{ Id: '82', Text: 'Tarn-et-Garonne' },
				{ Id: '83', Text: 'Var' },
				{ Id: '84', Text: 'Vaucluse' },
				{ Id: '85', Text: 'Vend&eacute;e' },
				{ Id: '86', Text: 'Vienne' },
				{ Id: '87', Text: 'Haute-Vienne' },
				{ Id: '88', Text: 'Vosges' },
				{ Id: '89', Text: 'Yonne' },
				{ Id: '90', Text: 'Territoire de Belfort' },
				{ Id: '91', Text: 'Essonne' },
				{ Id: '92', Text: 'Hauts-de-Seine' },
				{ Id: '93', Text: 'Seine-Saint-Denis' },
				{ Id: '94', Text: 'Val-de-Marne' },
				{ Id: '95', Text: 'Val-d&apos;Oise' },
				{ Id: '971', Text: 'Guadeloupe' },
				{ Id: '972', Text: 'Martinique' },
				{ Id: '973', Text: 'Guyane' },
				{ Id: '974', Text: 'La R&eacute;union' },
				{ Id: '976', Text: 'Mayotte' },
				{ Id: '98', Text: 'Nouvelle Cal&eacute;donie' }
			]
		},
		countryList () {
			return [
				{ Id: '', Text: '' },
				{ Id: 'FR', Text: 'FRANCE' },
				{ Id: 'AF', Text: 'AFGHANISTAN' },
				{ Id: 'AX', Text: 'ÅLAND ISLANDS' },
				{ Id: 'AL', Text: 'ALBANIA' },
				{ Id: 'DZ', Text: 'ALGERIA' },
				{ Id: 'AS', Text: 'AMERICAN SAMOA' },
				{ Id: 'AD', Text: 'ANDORRA' },
				{ Id: 'AO', Text: 'ANGOLA' },
				{ Id: 'AI', Text: 'ANGUILLA' },
				{ Id: 'AQ', Text: 'ANTARCTICA' },
				{ Id: 'AG', Text: 'ANTIGUA AND BARBUDA' },
				{ Id: 'AR', Text: 'ARGENTINA' },
				{ Id: 'AM', Text: 'ARMENIA' },
				{ Id: 'AW', Text: 'ARUBA' },
				{ Id: 'AU', Text: 'AUSTRALIA' },
				{ Id: 'AT', Text: 'AUSTRIA' },
				{ Id: 'AZ', Text: 'AZERBAIJAN' },
				{ Id: 'BS', Text: 'BAHAMAS' },
				{ Id: 'BH', Text: 'BAHRAIN' },
				{ Id: 'BD', Text: 'BANGLADESH' },
				{ Id: 'BB', Text: 'BARBADOS' },
				{ Id: 'BY', Text: 'BELARUS' },
				{ Id: 'BE', Text: 'BELGIUM' },
				{ Id: 'BZ', Text: 'BELIZE' },
				{ Id: 'BJ', Text: 'BENIN' },
				{ Id: 'BM', Text: 'BERMUDA' },
				{ Id: 'BT', Text: 'BHUTAN' },
				{ Id: 'BO', Text: 'BOLIVIA, PLURINATIONAL STATE OF' },
				{ Id: 'BQ', Text: 'BONAIRE, SINT EUSTATIUS AND SABA' },
				{ Id: 'BA', Text: 'BOSNIA AND HERZEGOVINA' },
				{ Id: 'BW', Text: 'BOTSWANA' },
				{ Id: 'BV', Text: 'BOUVET ISLAND' },
				{ Id: 'BR', Text: 'BRAZIL' },
				{ Id: 'IO', Text: 'BRITISH INDIAN OCEAN TERRITORY' },
				{ Id: 'BN', Text: 'BRUNEI DARUSSALAM' },
				{ Id: 'BG', Text: 'BULGARIA' },
				{ Id: 'BF', Text: 'BURKINA FASO' },
				{ Id: 'BI', Text: 'BURUNDI' },
				{ Id: 'KH', Text: 'CAMBODIA' },
				{ Id: 'CM', Text: 'CAMEROON' },
				{ Id: 'CA', Text: 'CANADA' },
				{ Id: 'CV', Text: 'CAPE VERDE' },
				{ Id: 'KY', Text: 'CAYMAN ISLANDS' },
				{ Id: 'CF', Text: 'CENTRAL AFRICAN REPUBLIC' },
				{ Id: 'TD', Text: 'CHAD' },
				{ Id: 'CL', Text: 'CHILE' },
				{ Id: 'CN', Text: 'CHINA' },
				{ Id: 'CX', Text: 'CHRISTMAS ISLAND' },
				{ Id: 'CC', Text: 'COCOS (KEELING) ISLANDS' },
				{ Id: 'CO', Text: 'COLOMBIA' },
				{ Id: 'KM', Text: 'COMOROS' },
				{ Id: 'CG', Text: 'CONGO' },
				{ Id: 'CD', Text: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE' },
				{ Id: 'CK', Text: 'COOK ISLANDS' },
				{ Id: 'CR', Text: 'COSTA RICA' },
				{ Id: 'CI', Text: 'CÔTE D\'IVOIRE' },
				{ Id: 'HR', Text: 'CROATIA' },
				{ Id: 'CU', Text: 'CUBA' },
				{ Id: 'CW', Text: 'CURAÇAO' },
				{ Id: 'CY', Text: 'CYPRUS' },
				{ Id: 'CZ', Text: 'CZECH REPUBLIC' },
				{ Id: 'DK', Text: 'DENMARK' },
				{ Id: 'DJ', Text: 'DJIBOUTI' },
				{ Id: 'DM', Text: 'DOMINICA' },
				{ Id: 'DO', Text: 'DOMINICAN REPUBLIC' },
				{ Id: 'EC', Text: 'ECUADOR' },
				{ Id: 'EG', Text: 'EGYPT' },
				{ Id: 'SV', Text: 'EL SALVADOR' },
				{ Id: 'GQ', Text: 'EQUATORIAL GUINEA' },
				{ Id: 'ER', Text: 'ERITREA' },
				{ Id: 'EE', Text: 'ESTONIA' },
				{ Id: 'ET', Text: 'ETHIOPIA' },
				{ Id: 'FK', Text: 'FALKLAND ISLANDS (MALVINAS)' },
				{ Id: 'FO', Text: 'FAROE ISLANDS' },
				{ Id: 'FJ', Text: 'FIJI' },
				{ Id: 'FI', Text: 'FINLAND' },
				{ Id: 'GF', Text: 'FRENCH GUIANA' },
				{ Id: 'PF', Text: 'FRENCH POLYNESIA' },
				{ Id: 'TF', Text: 'FRENCH SOUTHERN TERRITORIES' },
				{ Id: 'GA', Text: 'GABON' },
				{ Id: 'GM', Text: 'GAMBIA' },
				{ Id: 'GE', Text: 'GEORGIA' },
				{ Id: 'DE', Text: 'GERMANY' },
				{ Id: 'GH', Text: 'GHANA' },
				{ Id: 'GI', Text: 'GIBRALTAR' },
				{ Id: 'GR', Text: 'GREECE' },
				{ Id: 'GL', Text: 'GREENLAND' },
				{ Id: 'GD', Text: 'GRENADA' },
				{ Id: 'GP', Text: 'GUADELOUPE' },
				{ Id: 'GU', Text: 'GUAM' },
				{ Id: 'GT', Text: 'GUATEMALA' },
				{ Id: 'GG', Text: 'GUERNSEY' },
				{ Id: 'GN', Text: 'GUINEA' },
				{ Id: 'GW', Text: 'GUINEA-BISSAU' },
				{ Id: 'GY', Text: 'GUYANA' },
				{ Id: 'HT', Text: 'HAITI' },
				{ Id: 'HM', Text: 'HEARD ISLAND AND MCDONALD ISLANDS' },
				{ Id: 'VA', Text: 'HOLY SEE (VATICAN CITY STATE)' },
				{ Id: 'HN', Text: 'HONDURAS' },
				{ Id: 'HK', Text: 'HONG KONG' },
				{ Id: 'HU', Text: 'HUNGARY' },
				{ Id: 'IS', Text: 'ICELAND' },
				{ Id: 'IN', Text: 'INDIA' },
				{ Id: 'ID', Text: 'INDONESIA' },
				{ Id: 'IR', Text: 'IRAN, ISLAMIC REPUBLIC OF' },
				{ Id: 'IQ', Text: 'IRAQ' },
				{ Id: 'IE', Text: 'IRELAND' },
				{ Id: 'IM', Text: 'ISLE OF MAN' },
				{ Id: 'IL', Text: 'ISRAEL' },
				{ Id: 'IT', Text: 'ITALY' },
				{ Id: 'JM', Text: 'JAMAICA' },
				{ Id: 'JP', Text: 'JAPAN' },
				{ Id: 'JE', Text: 'JERSEY' },
				{ Id: 'JO', Text: 'JORDAN' },
				{ Id: 'KZ', Text: 'KAZAKHSTAN' },
				{ Id: 'KE', Text: 'KENYA' },
				{ Id: 'KI', Text: 'KIRIBATI' },
				{ Id: 'KP', Text: 'KOREA, DEMOCRATIC PEOPLE\'S REPUBLIC OF' },
				{ Id: 'KR', Text: 'KOREA, REPUBLIC OF' },
				{ Id: 'KW', Text: 'KUWAIT' },
				{ Id: 'KG', Text: 'KYRGYZSTAN' },
				{ Id: 'LA', Text: 'LAO PEOPLE\'S DEMOCRATIC REPUBLIC' },
				{ Id: 'LV', Text: 'LATVIA' },
				{ Id: 'LB', Text: 'LEBANON' },
				{ Id: 'LS', Text: 'LESOTHO' },
				{ Id: 'LR', Text: 'LIBERIA' },
				{ Id: 'LY', Text: 'LIBYA' },
				{ Id: 'LI', Text: 'LIECHTENSTEIN' },
				{ Id: 'LT', Text: 'LITHUANIA' },
				{ Id: 'LU', Text: 'LUXEMBOURG' },
				{ Id: 'MO', Text: 'MACAO' },
				{ Id: 'MK', Text: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF' },
				{ Id: 'MG', Text: 'MADAGASCAR' },
				{ Id: 'MW', Text: 'MALAWI' },
				{ Id: 'MY', Text: 'MALAYSIA' },
				{ Id: 'MV', Text: 'MALDIVES' },
				{ Id: 'ML', Text: 'MALI' },
				{ Id: 'MT', Text: 'MALTA' },
				{ Id: 'MH', Text: 'MARSHALL ISLANDS' },
				{ Id: 'MQ', Text: 'MARTINIQUE' },
				{ Id: 'MR', Text: 'MAURITANIA' },
				{ Id: 'MU', Text: 'MAURITIUS' },
				{ Id: 'YT', Text: 'MAYOTTE' },
				{ Id: 'MX', Text: 'MEXICO' },
				{ Id: 'FM', Text: 'MICRONESIA, FEDERATED STATES OF' },
				{ Id: 'MD', Text: 'MOLDOVA, REPUBLIC OF' },
				{ Id: 'MC', Text: 'MONACO' },
				{ Id: 'MN', Text: 'MONGOLIA' },
				{ Id: 'ME', Text: 'MONTENEGRO' },
				{ Id: 'MS', Text: 'MONTSERRAT' },
				{ Id: 'MA', Text: 'MOROCCO' },
				{ Id: 'MZ', Text: 'MOZAMBIQUE' },
				{ Id: 'MM', Text: 'MYANMAR' },
				{ Id: 'NA', Text: 'NAMIBIA' },
				{ Id: 'NR', Text: 'NAURU' },
				{ Id: 'NP', Text: 'NEPAL' },
				{ Id: 'NL', Text: 'NETHERLANDS' },
				{ Id: 'NC', Text: 'NEW CALEDONIA' },
				{ Id: 'NZ', Text: 'NEW ZEALAND' },
				{ Id: 'NI', Text: 'NICARAGUA' },
				{ Id: 'NE', Text: 'NIGER' },
				{ Id: 'NG', Text: 'NIGERIA' },
				{ Id: 'NU', Text: 'NIUE' },
				{ Id: 'NF', Text: 'NORFOLK ISLAND' },
				{ Id: 'MP', Text: 'NORTHERN MARIANA ISLANDS' },
				{ Id: 'NO', Text: 'NORWAY' },
				{ Id: 'OM', Text: 'OMAN' },
				{ Id: 'PK', Text: 'PAKISTAN' },
				{ Id: 'PW', Text: 'PALAU' },
				{ Id: 'PS', Text: 'PALESTINE, STATE OF' },
				{ Id: 'PA', Text: 'PANAMA' },
				{ Id: 'PG', Text: 'PAPUA NEW GUINEA' },
				{ Id: 'PY', Text: 'PARAGUAY' },
				{ Id: 'PE', Text: 'PERU' },
				{ Id: 'PH', Text: 'PHILIPPINES' },
				{ Id: 'PN', Text: 'PITCAIRN' },
				{ Id: 'PL', Text: 'POLAND' },
				{ Id: 'PT', Text: 'PORTUGAL' },
				{ Id: 'PR', Text: 'PUERTO RICO' },
				{ Id: 'QA', Text: 'QATAR' },
				{ Id: 'RE', Text: 'RÉUNION' },
				{ Id: 'RO', Text: 'ROMANIA' },
				{ Id: 'RU', Text: 'RUSSIAN FEDERATION' },
				{ Id: 'RW', Text: 'RWANDA' },
				{ Id: 'BL', Text: 'SAINT BARTHÉLEMY' },
				{ Id: 'SH', Text: 'SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA' },
				{ Id: 'KN', Text: 'SAINT KITTS AND NEVIS' },
				{ Id: 'LC', Text: 'SAINT LUCIA' },
				{ Id: 'MF', Text: 'SAINT MARTIN (FRENCH PART)' },
				{ Id: 'PM', Text: 'SAINT PIERRE AND MIQUELON' },
				{ Id: 'VC', Text: 'SAINT VINCENT AND THE GRENADINES' },
				{ Id: 'WS', Text: 'SAMOA' },
				{ Id: 'SM', Text: 'SAN MARINO' },
				{ Id: 'ST', Text: 'SAO TOME AND PRINCIPE' },
				{ Id: 'SA', Text: 'SAUDI ARABIA' },
				{ Id: 'SN', Text: 'SENEGAL' },
				{ Id: 'RS', Text: 'SERBIA' },
				{ Id: 'SC', Text: 'SEYCHELLES' },
				{ Id: 'SL', Text: 'SIERRA LEONE' },
				{ Id: 'SG', Text: 'SINGAPORE' },
				{ Id: 'SX', Text: 'SINT MAARTEN (DUTCH PART)' },
				{ Id: 'SK', Text: 'SLOVAKIA' },
				{ Id: 'SI', Text: 'SLOVENIA' },
				{ Id: 'SB', Text: 'SOLOMON ISLANDS' },
				{ Id: 'SO', Text: 'SOMALIA' },
				{ Id: 'ZA', Text: 'SOUTH AFRICA' },
				{ Id: 'GS', Text: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' },
				{ Id: 'SS', Text: 'SOUTH SUDAN' },
				{ Id: 'ES', Text: 'SPAIN' },
				{ Id: 'LK', Text: 'SRI LANKA' },
				{ Id: 'SD', Text: 'SUDAN' },
				{ Id: 'SR', Text: 'SURINAME' },
				{ Id: 'SJ', Text: 'SVALBARD AND JAN MAYEN' },
				{ Id: 'SZ', Text: 'SWAZILAND' },
				{ Id: 'SE', Text: 'SWEDEN' },
				{ Id: 'CH', Text: 'SWITZERLAND' },
				{ Id: 'SY', Text: 'SYRIAN ARAB REPUBLIC' },
				{ Id: 'TW', Text: 'TAIWAN, PROVINCE OF CHINA' },
				{ Id: 'TJ', Text: 'TAJIKISTAN' },
				{ Id: 'TZ', Text: 'TANZANIA, UNITED REPUBLIC OF' },
				{ Id: 'TH', Text: 'THAILAND' },
				{ Id: 'TL', Text: 'TIMOR-LESTE' },
				{ Id: 'TG', Text: 'TOGO' },
				{ Id: 'TK', Text: 'TOKELAU' },
				{ Id: 'TO', Text: 'TONGA' },
				{ Id: 'TT', Text: 'TRINIDAD AND TOBAGO' },
				{ Id: 'TN', Text: 'TUNISIA' },
				{ Id: 'TR', Text: 'TURKEY' },
				{ Id: 'TM', Text: 'TURKMENISTAN' },
				{ Id: 'TC', Text: 'TURKS AND CAICOS ISLANDS' },
				{ Id: 'TV', Text: 'TUVALU' },
				{ Id: 'UG', Text: 'UGANDA' },
				{ Id: 'UA', Text: 'UKRAINE' },
				{ Id: 'AE', Text: 'UNITED ARAB EMIRATES' },
				{ Id: 'GB', Text: 'UNITED KINGDOM' },
				{ Id: 'US', Text: 'UNITED STATES' },
				{ Id: 'UM', Text: 'UNITED STATES MINOR OUTLYING ISLANDS' },
				{ Id: 'UY', Text: 'URUGUAY' },
				{ Id: 'UZ', Text: 'UZBEKISTAN' },
				{ Id: 'VU', Text: 'VANUATU' },
				{ Id: 'VE', Text: 'VENEZUELA, BOLIVARIAN REPUBLIC OF' },
				{ Id: 'VN', Text: 'VIET NAM' },
				{ Id: 'VG', Text: 'VIRGIN ISLANDS, BRITISH' },
				{ Id: 'VI', Text: 'VIRGIN ISLANDS, U.S.' },
				{ Id: 'WF', Text: 'WALLIS AND FUTUNA' },
				{ Id: 'EH', Text: 'WESTERN SAHARA' },
				{ Id: 'YE', Text: 'YEMEN' },
				{ Id: 'ZM', Text: 'ZAMBIA' },
				{ Id: 'ZW', Text: 'ZIMBABWE' }
			]
		}
	}
}
</script>

<style>
	div.the-screen-investor-user-info {
		margin: 50px 0px;
	}
</style>

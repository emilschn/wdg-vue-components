<template>
	<div class="the-result-organization-info">
		<strong>{{ $t('project-setup.payment.organization-info.INTRO') }}</strong><br>

		<div class="organization-form">
			<WDGForm>
				{{ $t('project-setup.payment.organization-info.TAX_LABEL') }}
				<WDGInput id="organizationTaxNumber" name="organizationTaxNumber"
					:value="sharedState.organization.taxNumber"
					v-bind:valueReturn.sync="sharedState.organization.taxNumber" customStyle="natural-language" />,
				<br><br>

				{{ $t('project-setup.payment.organization-info.ADDRESS_LABEL') }}
				<br>
				<WDGInput id="organizationAddressNumber" name="organizationAddressNumber"
					:value="sharedState.organization.addressNumber"
					v-bind:valueReturn.sync="sharedState.organization.addressNumber" customStyle="natural-language"
					:placeholder="getTrans('project-setup.payment.organization-info.ADDRESS_NUMBER_PLACEHOLDER')" />

				<WDGSelect id="organizationAddressNumberComplement" name="organizationAddressNumberComplement"
					:optionItems="organizationAddressNumberComplementList"
					:value="sharedState.organization.addressNumberComplement"
					v-bind:valueReturn.sync="sharedState.organization.addressNumberComplement"
					customStyle="natural-language" />
				<br>
				<WDGInput id="organizationAddressStreet" name="organizationAddressStreet"
					:value="sharedState.organization.addressStreet"
					v-bind:valueReturn.sync="sharedState.organization.addressStreet" customStyle="natural-language"
					:placeholder="getTrans('project-setup.payment.organization-info.ADDRESS_STREET_PLACEHOLDER')" />
				<br>
				<WDGInput id="organizationAddressPostalCode" name="organizationAddressPostalCode"
					:value="sharedState.organization.addressPostalCode"
					v-bind:valueReturn.sync="sharedState.organization.addressPostalCode" customStyle="natural-language"
					:placeholder="getTrans('project-setup.payment.organization-info.ADDRESS_POSTAL_CODE_PLACEHOLDER')" />
				<WDGInput id="organizationAddressCity" name="organizationAddressCity"
					:value="sharedState.organization.addressCity"
					v-bind:valueReturn.sync="sharedState.organization.addressCity" customStyle="natural-language"
					:placeholder="getTrans('project-setup.payment.organization-info.ADDRESS_CITY_PLACEHOLDER')" />
				<br>
				<WDGSelect id="organizationAddressCountry" name="organizationAddressCountry" :optionItems="countryList"
					:value="sharedState.organization.addressCountry"
					v-bind:valueReturn.sync="sharedState.organization.addressCountry" customStyle="natural-language" />
				<br><br>

				{{ $t('project-setup.payment.organization-info.EMAIL_LABEL') }}
				<br>
				<WDGInput id="organizationEmail" name="organizationEmail" :value="sharedState.organization.email"
					v-bind:valueReturn.sync="sharedState.organization.email" customStyle="natural-language"
					:placeholder="getTrans('project-setup.payment.organization-info.EMAIL_PLACEHOLDER')" />
				<br><br>

				<WDGCheckbox :value="sharedState.project.acceptTerms"
					v-bind:valueReturn.sync="sharedState.project.acceptTerms">
					<slot slot="label">{{ $t('project-setup.payment.organization-info.AGREE_TERMS') }}</slot>
				</WDGCheckbox>
				<ul>
					<li><a href="https://www.wedogood.co/cgu" target="_blank">{{
							$t('project-setup.payment.organization-info.GENERAL_TERMS')
					}}</a></li>
					<li><a href="https://www.wedogood.co/conditions-particulieres" target="_blank">{{
							$t('project-setup.payment.organization-info.PARTICULAR_TERMS')
					}}</a></li>
					<li>{{ $t('project-setup.payment.organization-info.6_MONTHS_TERMS') }}</li>
					<li>{{ $t('project-setup.payment.organization-info.PAYMENT_TERMS') }}</li>
				</ul>

				<WDGButton v-if="canShowButtonContinue" color="red" type="button" :clickEvent="onContinueClickEvent">
					<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
				</WDGButton>

			</WDGForm>
		</div>
	</div>
</template>

<script>
import { store } from '../../store.js'
import i18n from '@/i18n'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'TheResultOrganizationInfo',
	components: {
		WDGForm,
		WDGInput,
		WDGSelect,
		WDGCheckbox,
		WDGButton
	},
	props: {
	},
	data() {
		return {
			sharedState: store.state,
			organizationAddressNumberComplementList: [
				{ Id: '', Text: '' },
				{ Id: 'bis', Text: i18n.t('project-setup.project-infos.address-number-complements.BIS') },
				{ Id: 'ter', Text: i18n.t('project-setup.project-infos.address-number-complements.TER') },
				{ Id: 'quater', Text: i18n.t('project-setup.project-infos.address-number-complements.QUATER') },
				{ Id: 'quinquies', Text: i18n.t('project-setup.project-infos.address-number-complements.QUINQUIES') }
			]
		}
	},
	computed: {
		countryList() {
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
		},
		canShowButtonContinue() {
			if (process.env.NODE_ENV === 'development') {
				return this.sharedState.project.acceptTerms
			}
			return this.sharedState.project.acceptTerms &&
				this.sharedState.organization.email !== '' && this.sharedState.organization.taxNumber !== '' &&
				this.sharedState.organization.addressStreet !== '' &&
				this.sharedState.organization.addressCity !== '' && this.sharedState.organization.addressCountry !== ''
		}
	},
	methods: {
		getTrans(sId) {
			return i18n.t(sId)
		},
		onContinueClickEvent() {
			store.changeStep('project-payment')
		}
	}
}
</script>

<style>
div.the-result-organization-info {
	padding: 32px;
	background: #FFF;
}

div.the-result-organization-info div.organization-form {
	margin-top: 20px;
}

div.organization-form ul li {
	display: block;
	margin-top: 10px;
	line-height: 1.5;
}

div.organization-form ul li a {
	color: #EA4F51;
	font-weight: 600;
}

div.the-result-organization-info input {
	margin-top: 10px;
}

div.the-result-organization-info .wdg-input.natural-language input {
	padding-left: 0px;
}

div.the-result-organization-info .wdg-select.natural-language select {
	padding: 10px 30px 9px 0px;
}

div.the-result-organization-info input#organizationAddressNumber {
	width: 50px;
	margin-right: 24px;
}

div.the-result-organization-info select#organizationAddressNumberComplement {
	width: 150px;
}

div.the-result-organization-info input#organizationAddressPostalCode {
	width: 100px;
	margin-right: 24px;
}

div.the-result-organization-info input#organizationAddressCity {
	width: 150px;
}
</style>

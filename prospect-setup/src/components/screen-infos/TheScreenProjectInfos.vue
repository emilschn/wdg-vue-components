<template>
	<div class="the-screen-project-infos">
		<TheTabTitle v-bind:hasPictoBalloon="false" :nMinutes="1">
			<slot slot="title">{{ $t('project-setup.project-infos.TITLE') }}</slot>
			<slot slot="subtitle">{{ $t('project-setup.project-infos.SUBTITLE') }}</slot>
		</TheTabTitle>

		<WDGMascot type="face-1" v-if="getMascotType == '1'">
			<slot slot="text">{{ $t('project-setup.project-infos.mascot-text.INIT') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-2" v-if="getMascotType == '2'">
			<slot slot="text">{{ $t('project-setup.project-infos.mascot-text.NEED_EMAIL') }}</slot>
		</WDGMascot>

		<WDGMascot type="side-1" v-if="getMascotType == 'not-created'">
			<slot slot="text">{{ $t('project-setup.project-infos.mascot-text.NOT_CREATED') }}</slot>
		</WDGMascot>

		<WDGMascot type="side-2" v-if="getMascotType == 'microbusiness'">
			<slot slot="text">{{ $t('project-setup.project-infos.mascot-text.MICROBUSINESS') }}</slot>
		</WDGMascot>

		<WDGMascot type="side-1" v-if="getMascotType == 'out-euro'">
			<slot slot="text">{{ $t('project-setup.project-infos.mascot-text.OUT_EURO') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-3" v-if="getMascotType == 'less-10k'">
			<slot slot="text">{{ $t('project-setup.project-infos.mascot-text.LESS_10K') }}</slot>
		</WDGMascot>

		<WDGForm>
			<div>
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_TYPE') }}

				<WDGSelect id="organizationType" name="organizationType" :optionItems="organizationTypeList"
					:value="sharedState.organization.type" v-bind:valueReturn.sync="sharedState.organization.type"
					customStyle="natural-language" v-bind:hasFilter="true" />
			</div>

			<div>
				<span v-if="sharedState.organization.type !== 'not-created'">
					{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_LOCATED') }}
				</span>

				<WDGSelect id="organizationLocation" name="organizationLocation" :optionItems="organizationLocationList"
					:value="sharedState.organization.location"
					v-bind:valueReturn.sync="sharedState.organization.location" customStyle="natural-language"
					v-bind:hasFilter="true" />

				<div v-if="sharedState.organization.location === 'france'">
					{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_REGION') }}

					<WDGSelect id="organizationLocationRegion" name="organizationLocationRegion"
						:optionItems="organizationLocationRegionFrenchList"
						:value="sharedState.organization.locationRegion"
						v-bind:valueReturn.sync="sharedState.organization.locationRegion" customStyle="natural-language"
						v-bind:hasFilter="true" />
				</div>
			</div>

			<div v-if="sharedState.organization.type === 'not-created'">
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_NOT_CREATED_NAME') }}

				<WDGInput id="organizationName" name="organizationName" :value="sharedState.organization.name"
					v-bind:valueReturn.sync="sharedState.organization.name" customStyle="natural-language" />.
			</div>

			<div v-else>
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_CREATED_NAME') }}

				<WDGInput id="organizationName" name="organizationName" :value="sharedState.organization.name"
					v-bind:valueReturn.sync="sharedState.organization.name" customStyle="natural-language" />.
			</div>

			<div>
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_DESCRIPTION') }}

				<WDGInput id="organizationDescription" name="organizationDescription"
					:value="sharedState.organization.description"
					v-bind:valueReturn.sync="sharedState.organization.description" customStyle="natural-language" />
				.<br>

				{{ $t('project-setup.project-infos.FORM_TEXT_AMOUNT_NEEDED') }}

				<WDGInput id="organizationAmountNeeded" name="organizationAmountNeeded"
					:value="sharedState.organization.amountNeeded"
					v-bind:valueReturn.sync="sharedState.organization.amountNeeded" customStyle="natural-language"
					autoFormat="wdg-number" :onChange="onOrganizationAmountNeededChange" /> €.<br>

				{{ $t('project-setup.project-infos.FORM_TEXT_SOURCE_PROSPECT') }}

				<WDGSelect id="organizationSourceProspect" name="organizationSourceProspect"
					:value="sharedState.organization.sourceProspect"
					v-bind:valueReturn.sync="sharedState.organization.sourceProspect" customStyle="natural-language"
					:optionItems="sourceProspectList" />
			</div>

			<div v-if="canShowUserInfos">
				{{ $t('project-setup.project-infos.FORM_TEXT_SOURCE_PROSPECT_DETAILS') }}

				<WDGInput id="organizationSourceProspectDetails" name="organizationSourceProspectDetails"
					:value="sharedState.organization.sourceProspectDetails"
					v-bind:valueReturn.sync="sharedState.organization.sourceProspectDetails"
					customStyle="natural-language" /><br><br>

				{{ $t('project-setup.project-infos.FORM_TEXT_USER_NAME') }}

				<WDGInput id="userName" name="userName" :value="sharedState.user.name"
					v-bind:valueReturn.sync="sharedState.user.name" customStyle="natural-language" />,<br>

				{{ $t('project-setup.project-infos.FORM_TEXT_USER_EMAIL') }}

				<WDGInput id="email" name="email" type="email" :value="sharedState.user.email"
					v-bind:valueReturn.sync="sharedState.user.email" customStyle="natural-language" /><br>

				{{ $t('project-setup.project-infos.FORM_TEXT_USER_PHONE') }}

				<WDGInput id="userPhone" name="userPhone" :value="sharedState.user.phone"
					v-bind:valueReturn.sync="sharedState.user.phone" customStyle="natural-language" />.

				<WDGButton v-if="canShowContinue" color="red" type="button" :clickEvent="changeStep">
					<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
				</WDGButton>
			</div>
		</WDGForm>

		<TheProjectSave v-if="sharedState.user.email != ''" />
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import TheTabTitle from '@/components/common/TheTabTitle'
import TheProjectSave from '@/components/common/TheProjectSave'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'TheScreenProjectInfos',
	components: {
		TheTabTitle,
		TheProjectSave,
		WDGMascot,
		WDGForm,
		WDGInput,
		WDGSelect,
		WDGButton
	},
	props: {
		msg: String
	},
	data() {
		return {
			sharedState: store.state,
			organizationTypeList: [
				{ Id: '', Text: '' },
				{ Id: 'company', Text: i18n.t('project-setup.project-infos.organization-types.COMPANY') },
				{ Id: 'association', Text: i18n.t('project-setup.project-infos.organization-types.ASSOCIATION') },
				{ Id: 'not-created', Text: i18n.t('project-setup.project-infos.organization-types.NOT_CREATED') },
				{ Id: 'microbusiness', Text: i18n.t('project-setup.project-infos.organization-types.MICROBUSINESS') }
			],
			organizationLocationList: [
				{ Id: '', Text: '' },
				{ Id: 'france', Text: i18n.t('project-setup.project-infos.location-types.FRANCE') },
				{ Id: 'euro', Text: i18n.t('project-setup.project-infos.location-types.EURO') },
				{ Id: 'out-euro', Text: i18n.t('project-setup.project-infos.location-types.OUT_EURO') }
			],
			organizationLocationRegionFrenchList: [
				{ Id: '', Text: '' },
				{ Id: 'auvergne-rhone-alpes', Text: 'Auvergne-Rhône-Alpes' },
				{ Id: 'bourgogne-france-comte', Text: 'Bourgogne-Franche-Comté' },
				{ Id: 'bretagne', Text: 'Bretagne' },
				{ Id: 'centre-val-de-loire', Text: 'Centre-Val de Loire' },
				{ Id: 'corse', Text: 'Corse' },
				{ Id: 'grand-est', Text: 'Grand Est' },
				{ Id: 'guadeloupe', Text: 'Guadeloupe' },
				{ Id: 'guyane', Text: 'Guyane' },
				{ Id: 'hauts-de-france', Text: 'Hauts-de-France' },
				{ Id: 'ile-de-france', Text: 'Île-de-France' },
				{ Id: 'la-reunion', Text: 'La Réunion' },
				{ Id: 'martinique', Text: 'Martinique' },
				{ Id: 'mayotte', Text: 'Mayotte' },
				{ Id: 'normandie', Text: 'Normandie' },
				{ Id: 'nouvelle-aquitaine', Text: 'Nouvelle-Aquitaine' },
				{ Id: 'occitanie', Text: 'Occitanie' },
				{ Id: 'pays-de-la-loire', Text: 'Pays de la Loire' },
				{ Id: 'provence-alpes-cote-dazur', Text: 'Provence-Alpes-Côte d\'Azur' }
			],
			sourceProspectList: [
				{ Id: '', Text: '' },
				{ Id: 'event', Text: i18n.t('project-setup.project-infos.source-types.EVENT') },
				{ Id: 'social-networks', Text: i18n.t('project-setup.project-infos.source-types.SOCIAL_NETWORKS') },
				{ Id: 'website', Text: i18n.t('project-setup.project-infos.source-types.WEBSITE') },
				{ Id: 'someone', Text: i18n.t('project-setup.project-infos.source-types.SOMEONE') },
				{ Id: 'post', Text: i18n.t('project-setup.project-infos.source-types.POST') },
				{ Id: 'other', Text: i18n.t('project-setup.project-infos.source-types.OTHER') }
			],
			userName: '',
			userMail: '',
			userPhone: '',
			currentTypedOrganizationAmountNeeded: 0
		}
	},
	methods: {
		changeStep: function (event) {
			store.changeStep('project-funding')
		},
		onOrganizationAmountNeededChange: function () {
			if (store.tabItems[1].Status !== 'complete') {
				let tempAmountNeededStr = this.sharedState.organization.amountNeeded
				tempAmountNeededStr = tempAmountNeededStr.split(',').join('.').split(' ').join('')
				let tempAmountNeededNum = Number(tempAmountNeededStr)
				if (tempAmountNeededStr !== '') {
					this.currentTypedOrganizationAmountNeeded = tempAmountNeededNum
				}
				tempAmountNeededNum = Math.min(500000, Math.max(10000, tempAmountNeededNum))
				this.sharedState.project.amountNeeded = Math.ceil(tempAmountNeededNum / 1000)

				tempAmountNeededStr = tempAmountNeededStr.replace(/[^\d.-]/g, '')
				tempAmountNeededStr = tempAmountNeededStr.split('.').join(',')
				this.sharedState.organization.amountNeeded = tempAmountNeededStr
			}
		}
	},
	computed: {
		canShowUserInfos() {
			if (process.env.NODE_ENV === 'development') {
				return true
			}
			return (this.sharedState.organization.sourceProspect !== '')
		},
		canShowContinue() {
			if (process.env.NODE_ENV === 'development') {
				// return true
			}
			return (
				this.sharedState.organization.type !== '' &&
				this.sharedState.organization.location !== '' &&
				this.sharedState.organization.name !== '' &&
				this.sharedState.organization.amountNeeded !== '' &&
				this.sharedState.organization.description !== '' &&
				this.sharedState.organization.sourceProspect !== '' &&
				this.sharedState.organization.sourceProspectDetails !== '' &&
				this.sharedState.user.name !== '' &&
				this.sharedState.user.email !== '' && this.sharedState.user.email.indexOf('@') > 0 && this.sharedState.user.email.indexOf('@') < this.sharedState.user.email.length - 3 &&
				this.sharedState.user.phone !== ''
			)
		},
		getMascotType() {
			if (this.sharedState.organization.sourceProspect !== '') {
				return '2'
			} else {
				if (this.sharedState.organization.type === 'not-created') {
					return 'not-created'
				} else if (this.sharedState.organization.type === 'microbusiness') {
					return 'microbusiness'
				} else if (this.sharedState.organization.location === 'out-euro') {
					return 'out-euro'
				} else if (this.currentTypedOrganizationAmountNeeded > 0 && this.currentTypedOrganizationAmountNeeded < 10000) {
					return 'less-10k'
				}

				return '1'
			}
		}
	}
}
</script>

<style>
.the-screen-project-infos .wdg-form {
	margin: 40px;
	font-size: 20px;
	line-height: 60px;
	font-weight: 500;
}

.the-screen-project-infos input#organizationDescription {
	width: 370px;
}

.the-screen-project-infos .wdg-form .wdg-button {
	text-align: center;
}

.the-screen-project-infos .wdg-form button {
	margin-top: 40px;
	min-width: 176px;
	width: auto;
	margin-bottom: 0px;
	padding: 0px 24px;
}

.the-screen-project-infos .wdg-mascot.face-2 {
	margin-top: 100px;
}

@media screen and (max-width: 767px) {
	.the-screen-project-infos .wdg-form {
		text-align: center;
		line-height: 40px;
	}

	.the-screen-project-infos .wdg-select.natural-language select,
	.the-screen-project-infos .wdg-input.natural-language input {
		width: 85%;
		margin-bottom: 40px;
		font-size: 18px;
		text-align: center;
	}

	.the-screen-project-infos input#organizationDescription {
		width: 250px;
	}

	.the-screen-project-infos .wdg-form button {
		max-width: 200px;
	}
}
</style>

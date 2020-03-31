<template>
	<div class="the-screen-project-infos">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="1"
		  >
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

		<WDGForm>
			<div>
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_TYPE') }}

				<WDGSelect
				  id="organizationType"
				  name="organizationType"
				  :value="organizationType"
				  customStyle="natural-language"
				  v-bind:hasFilter="true"
				  :optionItems="organizationTypeList"
				  v-bind:valueReturn.sync="organizationType"
				  />
			</div>

			<div>
				<span v-if="organizationType !== 'not-created'">
					{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_LOCATED') }}
				</span>

				<WDGSelect
				  id="organizationLocation"
				  name="organizationLocation"
				  :value="organizationLocation"
				  customStyle="natural-language"
				  v-bind:hasFilter="true"
				  :optionItems="organizationLocationList"
				  v-bind:valueReturn.sync="organizationLocation"
				  />
			</div>

			<div v-if="organizationType === 'not-created'">
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_NOT_CREATED_NAME') }}

				<WDGInput
				  id="organizationName"
				  name="organizationName"
				  :value="organizationName"
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_PROJECT_NAME')"
				  />.
			</div>

			<div v-else>
				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_CREATED_NAME') }}

				<WDGInput
				  id="organizationName"
				  name="organizationName"
				  :value="organizationName"
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_PROJECT_NAME')"
				  />,

				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_ID') }}

				<WDGInput
				  id="organizationID"
				  name="organizationID"
				  :value="organizationID"
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_PROJECT_ID')"
				  />.
			</div>

			<div>
				{{ $t('project-setup.project-infos.FORM_TEXT_AMOUNT_NEEDED') }}

				<WDGInput
				  customStyle="natural-language"
			  	  placeholder="50 000"
				  /> €,<br>

				{{ $t('project-setup.project-infos.FORM_TEXT_ORGANIZATION_DESCRIPTION') }}

				<WDGInput
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_PROJECT_DESCRIPTION')"
				  />.<br>

				{{ $t('project-setup.project-infos.FORM_TEXT_SOURCE_PROSPECT') }}

				<WDGSelect
				  id="sourceProspect"
				  name="sourceProspect"
				  customStyle="natural-language"
				  :value="sourceProspect"
				  :optionItems="sourceProspectList"
				  v-bind:valueReturn.sync="sourceProspect"
				  />
			</div>

			<div v-if="canShowUserInfos">
				{{ $t('project-setup.project-infos.FORM_TEXT_SOURCE_PROSPECT_DETAILS') }}<br>

				<WDGInput
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.FORM_TEXT_SOURCE_PROSPECT_DETAILS_PLACEHOLDER')"
				  /><br><br>

				{{ $t('project-setup.project-infos.FORM_TEXT_USER_NAME') }}

				<WDGInput
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_USER_NAME')"
				  />,<br>

				{{ $t('project-setup.project-infos.FORM_TEXT_USER_EMAIL') }}

				<WDGInput
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_USER_EMAIL')"
				  /><br>

				{{ $t('project-setup.project-infos.FORM_TEXT_USER_PHONE') }}

				<WDGInput
				  customStyle="natural-language"
			  	  :placeholder="$t('project-setup.project-infos.PLACEHOLDER_USER_PHONE')"
				  />.

				<WDGButton
				  color="red"
				  type="button"
            	  :clickEvent="changeStep"
				  >
					<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
				</WDGButton>
			</div>
		</WDGForm>

		<TheProjectSave />
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
	data () {
		return {
			organizationTypeList: [
				{ Id: 'company', Text: i18n.t('project-setup.project-infos.organization-types.COMPANY') },
				{ Id: 'association', Text: i18n.t('project-setup.project-infos.organization-types.ASSOCIATION') },
				{ Id: 'not-created', Text: i18n.t('project-setup.project-infos.organization-types.NOT_CREATED') },
				{ Id: 'microbusiness', Text: i18n.t('project-setup.project-infos.organization-types.MICROBUSINESS') }
			],
			organizationType: '',
			organizationName: '',
			organizationID: '',
			organizationDescription: '',
			organizationLocationList: [
				{ Id: 'france', Text: i18n.t('project-setup.project-infos.location-types.FRANCE') },
				{ Id: 'euro', Text: i18n.t('project-setup.project-infos.location-types.EURO') },
				{ Id: 'out-euro', Text: i18n.t('project-setup.project-infos.location-types.OUT_EURO') }
			],
			organizationLocation: '',
			amountNeeded: 0,
			sourceProspectList: [
				{ Id: 'event', Text: i18n.t('project-setup.project-infos.source-types.EVENT') },
				{ Id: 'social-networks', Text: i18n.t('project-setup.project-infos.source-types.SOCIAL_NETWORKS') },
				{ Id: 'website', Text: i18n.t('project-setup.project-infos.source-types.WEBSITE') },
				{ Id: 'someone', Text: i18n.t('project-setup.project-infos.source-types.SOMEONE') },
				{ Id: 'post', Text: i18n.t('project-setup.project-infos.source-types.POST') },
				{ Id: 'other', Text: i18n.t('project-setup.project-infos.source-types.OTHER') }
			],
			sourceProspect: '',
			userName: '',
			userMail: '',
			userPhone: ''
		}
	},
    methods: {
        changeStep: function (event) {
            store.changeStep('project-funding')
        }
    },
	computed: {
		canShowUserInfos () {
			let buffer = false
			buffer = (this.sourceProspect !== '')
			return buffer
		},
		getMascotType () {
			if (this.sourceProspect !== '') {
				return '2'
			} else {
				if (this.organizationType === 'not-created') {
					return 'not-created'
				} else if (this.organizationType === 'microbusiness') {
					return 'microbusiness'
				} else if (this.organizationLocation === 'out-euro') {
					return 'out-euro'
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
		line-height: 40px;
	}
	.the-screen-project-infos .wdg-form .wdg-button {
		text-align: center;
	}
	.the-screen-project-infos .wdg-form button {
		margin-top: 40px;
		max-width: 320px;
	}
	.the-screen-project-infos .wdg-mascot.face-2 {
		margin-top: 100px;
	}
</style>

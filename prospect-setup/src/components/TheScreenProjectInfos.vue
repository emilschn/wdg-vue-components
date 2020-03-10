<template>
	<div class="the-screen-project-infos">
		<TheTabTitle
		  v-bind:hasPictoBalloon="false"
		  :nMinutes="1"
		  >
			<slot slot="title">{{ $t('project-setup.project-infos.TITLE') }}</slot>
			<slot slot="subtitle">{{ $t('project-setup.project-infos.SUBTITLE') }}</slot>
		</TheTabTitle>

		<WDGMascot type="face-1" v-if="!canShowUserInfos">
			<slot slot="text">{{ $t('project-setup.project-infos.MASCOT_TEXT_1') }}</slot>
		</WDGMascot>

		<WDGMascot type="face-2" v-if="canShowUserInfos">
			<slot slot="text">{{ $t('project-setup.project-infos.MASCOT_TEXT_2') }}</slot>
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
				  /><br>

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
import TheTabTitle from '@/components/TheTabTitle'
import TheProjectSave from '@/components/TheProjectSave'
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
				{ Id: 'not-created', Text: i18n.t('project-setup.project-infos.ORGANIZATION_TYPE_LIST_NOT_CREATED') },
				{ Id: 'sas', Text: i18n.t('project-setup.project-infos.ORGANIZATION_TYPE_LIST_SAS') }
			],
			organizationType: 'not-created',
			organizationName: '',
			organizationID: '',
			organizationDescription: '',
			amountNeeded: 0,
			sourceProspectList: [
				{ Id: 'close-people', Text: 'Le bouche à oreille' },
				{ Id: 'other', Text: 'Autre' }
			],
			sourceProspect: '',
			userName: '',
			userMail: '',
			userPhone: ''
		}
	},
	computed: {
		canShowUserInfos () {
			let buffer = false
			buffer = (this.sourceProspect !== '')
			return buffer
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

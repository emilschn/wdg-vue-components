<template>
  <div class="launch-project">
	<h1>{{ $t('launch-project.TITLE') }}</h1>
	<p class="text-intro">{{ $t('launch-project.TEXT_1') }}</p>
	<p class="text-intro">{{ $t('launch-project.TEXT_2') }}</p>
	<p class="text-intro bold">{{ $t('launch-project.TEXT_3') }}</p>
	<div v-if="existingprojects && existingprojects.projects.length>0" >
		<p class="alert-existing-projects">
			{{ $t('launch-project.ALREADY_EXISTING_PROJECTS') }}<br>
			<ul>
				<li v-for="project in existingprojects.projects"  v-bind:key="project.id">
					<a :href=project.url target="_blank">{{ project.name }}</a>
				</li>
			</ul>
		</p>

		<p>
			{{ $t('launch-project.CREATE_NEW_PROJECT_INDEED') }}
		</p>
	</div>

	<WDGForm
	  name="form-launch-project"
	  :action="ajaxurl"
	  :onSubmitEvent="formSubmit"
	  v-bind:hasFiles="false"
	  :errorFeedback="errorFeedback"
	  :successFeedback="successFeedback"
	  >
		<WDGInput
		  :placeholder="$t('common.FIRSTNAME_PLACEHOLDER')"
		  id="firstname"
		  name="firstname"
		  v-bind:multiline="false"
		  validationRule="required|name"
		  :value="firstname"
		  v-bind:valueReturn.sync="firstname"
		  >
			<slot slot="label">{{ $t('common.FIRSTNAME') }}</slot>
		</WDGInput>
		<WDGInput
		  :placeholder="$t('common.LASTNAME_PLACEHOLDER')"
		  id="lastname"
		  name="lastname"
		  v-bind:multiline="false"
		  validationRule="required|name"
		  :value="lastname"
		  v-bind:valueReturn.sync="lastname"
		  >
			<slot slot="label">{{ $t('common.LASTNAME') }}</slot>
		</WDGInput>
		<WDGInput
		  :placeholder="$t('common.PHONE_NUMBER_PLACEHOLDER')"
		  id="phone_number"
		  name="phone_number"
		  v-bind:multiline="false"
		  validationRule="required|phone_number"
		  :value="phonenumber"
		  v-bind:valueReturn.sync="phonenumber"
		  >
			<slot slot="label">{{ $t('common.PHONE_NUMBER') }}</slot>
		</WDGInput>
		<div v-if="isExistingOrga">
			<WDGSelect
			  id="company_name"
			  name="company_name"
			  :label="$t('common.ORGA_NAME')"
			  :value="firstorga_id"
			  v-bind:isInline="false"
			  v-bind:hasFilter="true"
			  validationRule="required"
			  :optionItems="existingorganisations.organisations"
			  v-bind:valueReturn.sync="select_organame"
			  />
		</div>
		<div v-if="!isExistingOrga || select_organame === 'new_orga'">
			<WDGInput
			  :placeholder="$t('common.ORGA_NAME_PLACEHOLDER')"
			  id="company_name"
			  name="company_name"
			  v-bind:multiline="false"
			  validationRule="required"
			  :value="organame"
			  v-bind:valueReturn.sync="new_organame"
			  >
				<slot slot="label" v-if="!isExistingOrga">{{ $t('common.ORGA_NAME') }}</slot>
			</WDGInput>
			<WDGInput
			  :placeholder="$t('project-setup.payment.organization-info.EMAIL_PLACEHOLDER')"
			  id="email"
			  name="email"
			  v-bind:multiline="false"
			  validationRule="required|email"
			  :value="orgaemail"
			  v-bind:valueReturn.sync="new_orgaemail"
			  >
				<slot slot="label">{{ $t('common.ORGA_EMAIL_ADDRESS') }}</slot>
				<slot slot="comment">{{ $t('launch-project.ORGA_MAIL_DIFFERENT') }}</slot>
			</WDGInput>
		</div>
		<div v-else>
			<br>
		</div>
		<WDGInput
		  :placeholder="$t('launch-project.PROJECT_NAME_PLACEHOLDER')"
		  id="project_name"
		  name="project_name"
		  v-bind:multiline="false"
		  validationRule="required"
		  :value="projectname"
		  v-bind:valueReturn.sync="projectname"
		  >
			<slot slot="label">{{ $t('launch-project.PROJECT_NAME') }}</slot>
		</WDGInput>
		<WDGCheckbox
		  id="validate"
		  v-bind:optional="false"
		  >
			<slot slot="label"><a :href="urlcgu" target="_blank">{{ $t('launch-project.VALIDATE_CONDITIONS') }}</a></slot>
		</WDGCheckbox>

		<div class="required-fields">
			* {{ $t('common.REQUIRED_FIELDS') }}
		</div>
		<WDGButton
		  color="red"
		  v-bind:disabled="loading"
		  >
			<slot slot="label">{{ $t('common.VALIDATE') }}</slot>
		</WDGButton>
	</WDGForm>

  </div>
</template>

<script>
import i18n from '@/i18n'
import axios from 'axios'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGSelect from '@/../../common/src/components/WDGSelect'

export default {
	name: 'LaunchProject',
	components: {
		WDGForm,
		WDGInput,
		WDGCheckbox,
		WDGButton,
		WDGSelect
	},
	props: {
		ajaxurl: { type: String, default: '' },
		firstname: { type: String, default: '' },
		lastname: { type: String, default: '' },
		phonenumber: { type: String, default: '' },
		organame: { type: String, default: '' },
		orgaemail: { type: String, default: '' },
		projectname: { type: String, default: '' },
		urlcgu: { type: String, default: '' },
		existingprojects: { type: Object, default: null },
		existingorganisations: { type: Object, default: null }
	},
	data () {
		return {
			loading: false,
			errorFeedback: '',
			successFeedback: '',
			new_organame: '',
			new_orgaemail: '',
			isExistingOrga: false,
			firstorga_id: null,
			select_organame: ''
		}
	},
	created () {
		if (this.existingorganisations && this.existingorganisations.organisations.length > 0) {
			this.isExistingOrga = true
			this.firstorga_id = this.existingorganisations.organisations[0].Id
			this.select_organame = this.existingorganisations.organisations[0].Id
		}
	},
  	methods: {
		formSubmit () {
			this.loading = true
			let data = new FormData()
			data.append('action', 'create_project_form')
			data.append('firstname', this.firstname)
			data.append('lastname', this.lastname)
			data.append('phone', this.phonenumber)
			if (this.isExistingOrga) {
				if (this.select_organame === 'new_orga') {
					data.append('company-name', this.select_organame)
					if (this.new_organame === '' || this.new_organame === undefined) {
						this.new_organame = this.organame
					}
					data.append('new-company-name', this.new_organame)
					data.append('email-organization', this.new_orgaemail)
				} else {
					let index = this.existingorganisations.organisations.findIndex(object => object.Id === this.select_organame)
					if (index > -1) {
						data.append('company-name', this.select_organame)
						data.append('email-organization', this.existingorganisations.organisations[index].Mail)
					}
				}
			} else {
				if (this.new_organame === '' || this.new_organame === undefined) {
					this.new_organame = this.organame
				}
				data.append('company-name', this.new_organame)
				data.append('email-organization', this.new_orgaemail)
			}
			data.append('project-name', this.projectname)
			data.append('project-terms', 'true')
			axios
				.post (this.ajaxurl, data)
				.then (response => {
					let responseData = response.data
					if (responseData.has_error === '1') {
						this.errorFeedback = getErrorMessage(responseData.error_str, responseData.errors_create_orga)
						this.successFeedback = ''
						console.log('ERROR  ' + responseData.error_str + '--' + responseData.errors_create_orga)
						window.scrollTo(0, 0)
					} else {
						this.errorFeedback = ''
						this.successFeedback = 'Redirection vers ' + responseData.url_redirect
						window.location = responseData.url_redirect
					}
				})
				.catch (error => {
					if (error.response) {
						// The request was made and the server responded with a status code
						// that falls out of the range of 2xx
						console.log(error.response.data)
						console.log(error.response.status)
						console.log(error.response.headers)
					} else if (error.request) {
						// The request was made but no response was received
						// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
						// http.ClientRequest in node.js
						console.log(error.request)
					} else {
						// Something happened in setting up the request that triggered an Error
						console.log('Error', error.message)
					}
    				console.log(error.toJSON())
					console.log(error.config)
					this.errorFeedback = getErrorMessage('request_error')
					this.successFeedback = ''
					window.scrollTo(0, 0)
				})
				.finally (() => {
					this.loading = false
				})
		}
  	}
}
function getErrorMessage (errorCode, errorsCreateOrga) {
	switch (errorCode) {
		case 'errors_create_orga':
			return errorsCreateOrga
		case 'empty_or_wrong_format_field': // ne devrait pas arriver
			return i18n.t('launch-project.EMPTY_OR_WRONG_FORMAT_FIELD')
		case 'request_error':
			return i18n.t('launch-project.REQUEST_ERROR')
		default:
			return errorCode
	}
}
</script>

<style>
	.clear {
		clear: both;
	}
	.launch-project {
		width: 480px;
		margin: auto;
	}
 	.text-intro{
		text-align: center;
	}
	.bold{
		font-weight: bold;
	}
	.alert-existing-projects{
		background-color: #EACDCB;
		padding: 8px;
	}
	.required-fields {
		font-size: 16px;
		margin-bottom: 8px;
	}
	@media screen and (max-width:767px) {
		.launch-project {
			width: calc( 100% - 4px );
			margin: 0px 2px;
		}
	}
</style>

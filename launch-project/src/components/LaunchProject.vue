<template>
  <div class="launch-project">
	<h1>{{ $t('launch-project.TITLE') }}</h1>
	<div v-if="existingprojects && existingprojects.projects.length>0" >
		<p>
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
		action="/launch-project/"
		:onSubmitEvent="formSubmit"
		v-bind:hasFiles="false"
		:errorFeedback="errorFeedback"
		:successFeedback="successFeedback"
	>
		<WDGInput
			placeholder="$t('common.FIRSTNAME_PLACEHOLDER')"
			id="firstname"
			name="firstname"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|name"
			:value="firstname"
		>
			<slot slot="label">{{ $t('common.FIRSTNAME') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('common.LASTNAME_PLACEHOLDER')"
			id="lastname"
			name="lastname"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|name"
			:value="lastname"
		>
			<slot slot="label">{{ $t('common.LASTNAME') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('common.PHONE_NUMBER_PLACEHOLDER')"
			id="phone_number"
			name="phone_number"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|phone_number"
			:value="phonenumber"
		>
			<slot slot="label">{{ $t('common.PHONE_NUMBER') }}</slot>
		</WDGInput>
		<br>
		<!-- Attention, il peut y avoir plusieurs orga existantes pour un meme utilisateur, prévoir le cas avec un select  -->
		<WDGInput
			placeholder="$t('common.ORGA_NAME_PLACEHOLDER')"
			id="company_name"
			name="company_name"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required"
			:value="organame"
		>
			<slot slot="label">{{ $t('common.ORGA_NAME') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('common.EMAIL_ADDRESS_PLACEHOLDER')"
			id="email"
			name="email"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|email"
			:value="email"
			comment="$t('launch-project.ORGA_MAIL_DIFFERENT')"
		>
			<slot slot="label">{{ $t('common.EMAIL_ADDRESS') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('launch-project.PROJECT_NAME_PLACEHOLDER')"
			id="project_name"
			name="project_name"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required"
			:value="projectname"
		>
			<slot slot="label">{{ $t('launch-project.PROJECT_NAME') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('launch-project.PROJECT_DESCRIPTION_PLACEHOLDER')"
			id="project_description"
			name="project_description"
			v-bind:multiline="true"
			v-bind:optional="false"
			validationRule="required"
			:value="projectdescription"
		>
			<slot slot="label">{{ $t('launch-project.PROJECT_DESCRIPTION') }}</slot>
		</WDGInput>
		<br>

		<WDGCheckbox
			id="validate"
			v-bind:optional="false"
		>
			<!-- envoyer home_url -->
			<slot slot="label"><a href="<?php echo home_url('/a-propos/cgu/conditions-particulieres/'); ?>" target="_blank">{{ $t('launch-project.VALIDATE_CONDITIONS') }}</a></slot>
		</WDGCheckbox>

		<div class="required-fields">
			* {{ $t('common.REQUIRED_FIELDS') }}
		</div>
		<WDGButton color="red">
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

export default {
	name: 'LaunchProject',
	components: {
		WDGForm,
		WDGInput,
		WDGCheckbox,
		WDGButton
	},
	props: {
		firstname: { type: String, default: '' },
		lastname: { type: String, default: '' },
		phonenumber: { type: String, default: '' },
		organame: { type: String, default: '' },
		email: { type: String, default: '' },
		projectname: { type: String, default: '' },
		projectdescription: { type: String, default: '' },
		existingprojects: { type: Object, default: null }
	},
	data () {
		return {
			errorFeedback: '',
			successFeedback: ''
		}
	},
  	methods: {
		formSubmit () {
			let data = new FormData()
			data.append('action', 'create_project_form')
			data.append('email', this.email)
			data.append('firstname', this.firstname)
			data.append('lastname', this.lastname)
			data.append('phone', this.phonenumber)
			data.append('organame', this.organame)
			data.append('projectname', this.projectname)
			data.append('projectdescription', this.projectdescription)
			axios
				.post (this.ajaxUrl, data)
				.then (response => {
					let responseData = response.data
					if (responseData.has_error === '1') {
						this.errorFeedback = i18n.t(getErrorMessage(responseData.error_str))
						this.successFeedback = ''
						window.scrollTo(0, 0)
					} else {
						this.errorFeedback = ''
						this.successFeedback = 'Connexion ok pour ' + responseData.user_display_name
					}
				})
				.catch (error => {
					console.log(error)
				})
				.finally (() => {
					this.loading = false
				})
		}
  	}
}
function getErrorMessage (errorCode) {
	switch (errorCode) {
		default:
			return 'test'
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

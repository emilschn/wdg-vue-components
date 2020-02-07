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
		v-bind:hasFiles="false"
	>
		<!-- Créer un composant WDGInput, avec label, obligatoire ou pas, foction de validation des données, champ multiligne ou pas, commentaire -->
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

		<!-- Créer un composant WDGCheckbox -->
		<WDGCheckbox
			id="validate"
			v-bind:optional="false"
		>
			<slot slot="label">{{ $t('launch-project.VALIDATE_CONDITIONS') }}</slot>
		</WDGCheckbox>

		<div class="required-fields">
			* {{ $t('common.REQUIRED_FIELDS') }}
		</div>
		<!-- Créer un composant bouton -->
		<WDGButton color="red">
			<slot slot="label">{{ $t('common.VALIDATE') }}</slot>
		</WDGButton>
	</WDGForm>

  </div>
</template>

<script>
// import i18n from '@/i18n'
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

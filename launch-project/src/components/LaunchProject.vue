<template>
  <div class="launch-project">
	<h1>Lancement de levée de fonds</h1>
	<div v-if="existingprojects && existingprojects.projects.length>0" >
		<p>
			Vous avez déjà créé un (ou des) projet(s) sur la plateforme précédemment :<br>
			<ul>
				<li v-for="project in existingprojects.projects"  v-bind:key="project.id">
					<a :href=project.url target="_blank">{{ project.name }}</a>
				</li>
			</ul>
		</p>

		<p>
			Si vous souhaitez tout de même créer un nouveau projet, veuillez remplir le formulaire ci-dessous.
		</p>
	</div>

	<WDGForm
		name="form-launch-project"
		action="/launch-project/"
		v-bind:hasFiles="false"
	>
		<!-- Créer un composant WDGInput, avec label, obligatoire ou pas, foction de validation des données, champ multiligne ou pas, commentaire -->
		<WDGInput
			placeholder="$t('__FIRSTNAME_PLACEHOLDER')"
			id="firstname"
			name="firstname"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|name"
			:value="firstname"
		>
			<slot slot="label">{{ $t('__FIRSTNAME') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('__LASTNAME_PLACEHOLDER')"
			id="lastname"
			name="lastname"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|name"
			:value="lastname"
		>
			<slot slot="label">{{ $t('__LASTNAME') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="Mon téléphone mobile"
			id="phone_number"
			name="phone_number"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|phone_number"
			:value="phonenumber"
		>
			<slot slot="label">Mon téléphone mobile</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="Nom de mon entreprise"
			id="company_name"
			name="company_name"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required"
			:value="organame"
		>
			<slot slot="label">Nom de mon entreprise</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="$t('__EMAIL_ADDRESS_PLACEHOLDER')"
			id="email"
			name="email"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required|email"
			:value="email"
			comment="Cette adresse doit être différente de celle de votre compte personnel, utilisez une adresse telle que contact@votre-entreprise.fr"
		>
			<slot slot="label">{{ $t('__EMAIL_ADDRESS') }}</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="Nom du projet"
			id="project_name"
			name="project_name"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule="required"
			:value="projectname"
		>
			<slot slot="label">Nom du projet</slot>
		</WDGInput>
		<br>
		<WDGInput
			placeholder="Description du projet"
			id="project_description"
			name="project_description"
			v-bind:multiline="true"
			v-bind:optional="false"
			validationRule="required"
			:value="projectdescription"
		>
			<slot slot="label">Description du projet</slot>
		</WDGInput>
		<br>

		<!-- Créer un composant WDGCheckbox -->
		<WDGCheckbox
			id="validate"
			v-bind:optional="false"
		>
			<slot slot="label">Je valide les conditions particulières</slot>
		</WDGCheckbox>

		<div class="required-fields">
			* {{ $t('__REQUIRED_FIELDS') }}
		</div>
		<!-- Créer un composant bouton -->
		<WDGButton color="red">
			<slot slot="label">Valider</slot>
		</WDGButton>
	</WDGForm>

  </div>
</template>

<script>
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
	props: ['firstname', 'lastname', 'phonenumber', 'organame', 'email', 'projectname', 'projectdescription', 'existingprojects']
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

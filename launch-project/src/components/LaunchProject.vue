<template>
  <div class="launch-project">
	<h1>Lancement de levée de fonds</h1>
	<p>
		Vous avez déjà créé un (ou des) projet(s) sur la plateforme précédemment :<br>
		<!-- Utiliser un composant pour générer la liste ? -->
        - Projet de création Hélène
	</p>

    <p>
        Si vous souhaitez tout de même créer un nouveau projet, veuillez remplir le formulaire ci-dessous.
    </p>

	<WDGForm formName="form-launch-project" formAction="/launch-project/" v-bind:hasFiles="false">
		<!-- Créer un composant WDGInput, avec label, obligatoire ou pas, foction de validation des données, champ multiligne ou pas, commentaire -->
		<WDGInput labelInput="Mon prénom" idInput="firstname" nameInput="firstname" v-bind:multiline="false" v-bind:optional="false" validationRule="required|name" :valueInput=firstname></WDGInput>
		<br>
		<WDGInput labelInput="Mon nom" idInput="lastname" nameInput="lastname" v-bind:multiline="false" v-bind:optional="false" validationRule="required|name" :valueInput=lastname></WDGInput>
		<br>
		<WDGInput labelInput="Mon téléphone mobile" idInput="phone_number" nameInput="phone_number" v-bind:multiline="false" v-bind:optional="false" validationRule="required|phone_number"  :valueInput=phonenumber></WDGInput>
		<br>
		<WDGInput labelInput="Nom de mon entreprise" idInput="company_name" nameInput="company_name" v-bind:multiline="false" v-bind:optional="false" validationRule="required" :valueInput=organame></WDGInput>
		<br>
		<WDGInput labelInput="E-mail de contact" idInput="email" nameInput="email" v-bind:multiline="false" v-bind:optional="false" validationRule="required|email"  :valueInput=email comment="Cette adresse doit être différente de celle de votre compte personnel, utilisez une adresse telle que contact@votre-entreprise.fr"></WDGInput>
		<br>
		<WDGInput labelInput="Nom du projet" idInput="project_name" nameInput="project_name" v-bind:multiline="false" v-bind:optional="false" validationRule="required"  :valueInput=projectname></WDGInput>
		<br>
		<WDGInput labelInput="Description du projet" idInput="project_description" nameInput="project_description" v-bind:multiline="true" v-bind:optional="false" validationRule="required" :valueInput=projectdescription></WDGInput>
		<br>

		<!-- Créer un composant WDGCheckbox -->
		<WDGCheckbox labelCheckbox="Je valide les conditions particulières" v-bind:optional="false"></WDGCheckbox>

		<div>
			* Champs obligatoires
		</div>
		<!-- Créer un composant bouton -->
		<WDGButton labelButton="Valider"></WDGButton>
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
	props: ['firstname', 'lastname', 'phonenumber', 'organame', 'email', 'projectname', 'projectdescription']
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
	@media screen and (max-width:767px) {
		.launch-project {
			width: calc( 100% - 4px );
			margin: 0px 2px;
		}
	}
</style>

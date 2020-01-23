<template>
	<div class="signin">
		<h1>Connexion sur WE DO GOOD</h1>

		<WDGForm formName="form-signin" formAction="/connexion/" v-bind:hasFiles="false">
			<WDGInput labelInput="E-mail ou identifiant" idInput="coucou" nameInput="coucou" typeInput="text" v-bind:multiline="false" v-bind:optional="false"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="pouicpouic" nameInput="pouicpouic" typeInput="password" v-bind:multiline="false" v-bind:optional="false"></WDGInput>

			<WDGInput labelInput="E-mail ou identifiant" idInput="email" nameInput="email" typeInput="text" v-bind:multiline="false" v-bind:optional="true" v-bind:honeypot="true"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="password" nameInput="password" typeInput="password" v-bind:multiline="false" v-bind:optional="true" v-bind:honeypot="true"></WDGInput>

			<div>
				<a href="/mot-de-passe-oublie/">(Mot de passe oublié)</a>
			</div>

			<!-- Créer un composant WDGCheckbox -->
			<WDGCheckbox idCheckbox="rememberme" nameCheckbox="rememberme" labelCheckbox="Se souvenir de moi" v-bind:optional="true"></WDGCheckbox>

			<div>
				* Champs obligatoires
			</div>

			<!-- Créer un composant bouton -->
			<WDGButton labelButton="Connexion" colorButton="red"></WDGButton>
		</WDGForm>

		<WDGSeparator labelSeparator="ou"></WDGSeparator>

		<WDGButton labelButton="Se connecter avec Facebook" colorButton="blue"></WDGButton>

		<WDGSeparator labelSeparator="ou"></WDGSeparator>

		<WDGButton labelButton="Créer mon compte" colorButton="transparent"></WDGButton>
	</div>
</template>

<script>
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGSeparator from '@/../../common/src/components/WDGSeparator'

export default {
  name: 'Signin',
  components: {
    WDGForm,
    WDGInput,
    WDGCheckbox,
    WDGButton,
    WDGSeparator
  },
  /* data () {
  }, */
  methods: {
  },
  mounted () {
  }
}
</script>

<style>
.signin {
	width: 480px;
	margin: auto;
}
@media screen and (max-width:767px) {
	.signin {
		width: calc( 100% - 4px );
		margin: 0px 2px;
	}
}
</style>

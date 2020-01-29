<template>
	<div class="signin">
		<h1>Connexion sur WE DO GOOD</h1>

		<WDGForm formName="form-signin" :onSubmitEvent="formSubmit" v-bind:hasFiles="false">
			<WDGInput labelInput="E-mail ou identifiant" idInput="coucou" nameInput="coucou" typeInput="text" v-bind:multiline="false" v-bind:optional="false" v-bind:valueReturn.sync="email"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="pouicpouic" nameInput="pouicpouic" typeInput="password" v-bind:multiline="false" v-bind:optional="false" v-bind:valueReturn.sync="password"></WDGInput>

			<WDGInput labelInput="E-mail ou identifiant" idInput="email" nameInput="email" typeInput="text" v-bind:multiline="false" v-bind:optional="true" v-bind:honeypot="true" v-bind:valueReturn.sync="honeypot1"></WDGInput>

			<WDGInput labelInput="Mot de passe" idInput="password" nameInput="password" typeInput="password" v-bind:multiline="false" v-bind:optional="true" v-bind:honeypot="true" v-bind:valueReturn.sync="honeypot2"></WDGInput>

			<div>
				<a href="/mot-de-passe-oublie/">(Mot de passe oublié)</a>
			</div>

			<!-- Créer un composant WDGCheckbox -->
			<WDGCheckbox labelCheckbox="Se souvenir de moi" idCheckbox="rememberme" nameCheckbox="rememberme" :valueCheckbox="rememberme" v-bind:optional="true"></WDGCheckbox>

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
import axios from 'axios'
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
  props: {
	ajaxUrl: { type: String, default: '' }
  },
  data () {
	  return {
		email: '',
		password: '',
		honeypot1: '',
		honeypot2: '',
		rememberme: false
	  }
  },
  methods: {
	formSubmit () {
		console.log(this.email)
		console.log(this.password)
		console.log(this.honeypot1)
		console.log(this.honeypot2)
		console.log(this.rememberme)
		console.log(this.ajaxUrl)
		axios
			.get (this.ajaxUrl)
			.then (console.log('then'))
			.catch (console.log('error'))
			.finally (console.log('finally'))
	}
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

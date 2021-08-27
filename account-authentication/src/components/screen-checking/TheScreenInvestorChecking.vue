<template>
	<div class="the-screen-investor-checking">
		<div class="title-container">
			{{ $t('account-authentication.checking.DOCUMENTS_IMPORTED') }}
		</div>

		<WDGMascot
		  type="face-4"
		  alignMascot="left"
		  :displayText="false"
		  />
		
		<div class="description">
			<div class="description-bg">
			{{ $t('account-authentication.checking.YOUR_DOCUMENTS_MUST_BE_VALIDATED_BY_LEMONWAY') }}<br><br>

			{{ $t('account-authentication.checking.YOUR_DOCUMENTS_CAN_BE_FOUND_IN_YOUR_ACCOUNT') }}<br><br>

			<!-- Maintenant, nous allons compléter votre profil investisseur. Pour investir sur WE DO GOOD, il faut nous assurer que vous compreniez le risque de perte de votre investissement. -->
			</div>
			<br>
			<WDGForm>
				<WDGCheckbox
					id="userNotification"
					name="userNotification"
					v-bind:valueReturn.sync="sharedState.user.notification"
					>
					<slot slot="label">{{ $t('account-authentication.checking.SEND_ME_AUTHENTIFICATION_SMS') }}</slot>
				</WDGCheckbox>
				<div v-if="sharedState.user.notification === true">
					{{ $t('account-authentication.checking.TITLE_PHONE') }}
					<span
						v-if="phoneError"
						class="error"
						>
						{{ $t('account-authentication.checking.PHONE_ERROR') }}<br>
					</span>
					
					<WDGSelect
						id="userPhoneCode"
						name="userPhoneCode"
						:optionItems="sharedStatic.phoneCodes"
						:value="sharedState.user.phone.code"
						v-bind:valueReturn.sync="sharedState.user.phone.code"
						customStyle="natural-language"
						:onSelect="onPhoneCodeSelectEvent"
						/>&nbsp;
					<WDGInput
						id="userPhoneNumber"
						name="userPhoneNumber"
						:value="sharedState.user.phone.number"
						v-bind:valueReturn.sync="sharedState.user.phone.number"
						customStyle="natural-language"
						eventNameToListen="onPhoneCodeChangeEvent"
						/>					
				</div>
				<br>
				<WDGButton
					color="red"
					type="button"
					:clickEvent="onContinue"
					>
					<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
				</WDGButton>
			</WDGForm>
		</div>
	</div>
</template>

<script>
import { requests } from './../../requests.js'
import { store } from './../../store.js'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorType',
	components: {
		WDGMascot,
		WDGForm,
		WDGCheckbox,
		WDGSelect,
		WDGInput,
		WDGButton
	},
	props: {
		onConfirmUserInfo: Function
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			sharedStatic: store.static,
			loading: false,
			phoneError: false,
			requestError: ''
		}
	},
	computed: {
		getAccountUrl () {
			// TODO : récupérer home_url et la langue
			if (process.env.NODE_ENV === 'development') {
				return 'http://wedogood.local/mon-compte/'
			} else {
				return 'https://www.wedogood.co/mon-compte/'
			}
		}
	},
	methods: {
		// TODO : mettre le sélecteur de code directement sur le pays de l'utilisateur
     	getPhoneCodeByCountryCode (arrayName, value) {  
			var keyName = '';
			var index = -1;
			for (var i = 0; i < arrayName.length; i++) { 
				var obj = arrayName[i]; 
				for (var key in obj) {          
					if (obj[key] == value) { 
						keyName = key; 
						index = i;
					} 
				} 
			}
			return index;
		},
		onPhoneCodeSelectEvent (sSelectedCode) {
			// quand on choisit un indicatif on l'assigne par défaut au numéro de téléphone			
			var index = this.getPhoneCodeByCountryCode(this.sharedStatic.phoneCodes, sSelectedCode)
			this.sharedState.user.phone.number = this.sharedStatic.phoneCodes[index].dial_code + ' '
			this.$root.$emit('onPhoneCodeChangeEvent', this.sharedState.user.phone.number)
		},
		checkPhoneNumber() {
			// si on ne veut pas recevoir de sms, on ne vérifie pas le numéro de téléphone
			if (!this.sharedState.user.notification) {
				// TODO : si on ne veut pas être notifié, on file directement à la suite ? ou on met à jour quand même les meta ?
				window.location = this.getAccountUrl
				return false
			} else {
				// TODO : on vérifie le numéro de téléphone
				if (this.sharedState.user.phone.number.length > this.sharedState.user.phone.code.length){
					return true
				} else {
					this.phoneError = true
					return false
				}
			}
		},
		onContinue() {
			// on clique sur le bouton continuer
			console.log('onContinue :: this.sharedState.user.notification = ' + this.sharedState.user.notification)
			console.log('onContinue :: this.sharedState.user.phone.number = ' + this.sharedState.user.phone.number)
			console.log('onContinue :: this.checkPhoneNumber()= ' + this.checkPhoneNumber())
			this.phoneError = false
			if (this.checkPhoneNumber()) {
				// On attend le retour du serveur pour passer à la suite
				this.loading = true
				this.requestError = ''
				console.log('onContinue :: this.sharedState = ' + this.sharedState)
				requests.saveUserPhone(this.sharedState, this.onSaveUserPhoneReturnEvent)
			} 
		},
		onSaveUserPhoneReturnEvent (responseData) {
			console.log('onSaveUserPhoneReturnEvent :: responseData = ' + responseData)
			this.loading = false
			// Si la sauvegarde est validée, on passe à la suite
			if (responseData.status === 'saved') {
				// TODO : rediriger vers Mon Compte ?
				window.location = responseData.url_redirect
			} else {
				// Erreur lors de la sauvegarde, on affiche un feedback
				this.requestError = responseData.status
				// Problème de login (déconnecté / compte d'organisation)
				if (this.requestError === 'not-logged-in' || this.requestError === 'is-user-organization') {
					// On redirige vers la page donnée par le serveur (la page de connexion) - sauf en mode dev
					if (responseData.redirectUrl !== undefined && responseData.redirectUrl !== '' && process.env.NODE_ENV !== 'development') {
						window.location = responseData.redirectUrl
						this.loading = true
					}
				}
			}
		}
	}
}
</script>

<style>
	div.the-screen-investor-checking {
		margin: 50px 0px;
	}
	div.the-screen-investor-checking div.description {
		float: left;
		width: 650px;
	}
	div.the-screen-investor-checking div.description-bg {
		padding: 50px;
		background: #ebebeb;
	}
	div.the-screen-investor-checking div.description .wdg-select.natural-language select {
		width: 65px;
		padding: 10px 30px 11px 0px;
	}
	div.the-screen-investor-checking span.error {
		color: red
	}


</style>

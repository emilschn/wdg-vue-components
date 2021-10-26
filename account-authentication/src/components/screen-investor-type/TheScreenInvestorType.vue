<template>
	<div class="the-screen-investor-type">
		<WDGMascot type="face-1" alignMascot="left" :displayText="false" />
		<div class="question">
			<div class="question-bg">
				{{ $t('account-authentication.INVEST_FOR_ORGANIZATION') }}
			</div>
			<WDGRadioButton
			  name="need-orga"
			  value="1"
			  :groupValue="userNeedOrga"
			  :onChange="onNeedOrgaChangeLocalEvent"
			  >
				<slot slot="label-after">{{ $t('common.YES') }}</slot>
			</WDGRadioButton>
			<WDGRadioButton
			  name="need-orga"
			  value="0"
			  :groupValue="userNeedOrga"
			  :onChange="onNeedOrgaChangeLocalEvent"
			  >
				<slot slot="label-after">{{ $t('common.NO') }}</slot>
			</WDGRadioButton>

			<WDGMessage
			  v-if="userNeedOrga === '1'"
			  iconSVG="warning.svg"
			  iconColor="pink"
			  >
				<slot slot="label">{{ $t('account-authentication.YOU_MUST_REPRESENT_ORGANIZATION') }}</slot>
			</WDGMessage>

			<WDGButton
			  v-if="userNeedOrga !== ''"
			  color="red"
			  type="button"
			  :clickEvent="onButtonConfirmInvestorTypeEvent"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>
	</div>
</template>

<script>
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGRadioButton from '@/../../common/src/components/WDGRadioButton'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenInvestorType',
	components: {
		WDGMascot,
		WDGRadioButton,
		WDGMessage,
		WDGButton
	},
	props: {
		onConfirmUserType: Function
	},
	data () {
		return {
			userNeedOrga: ""
		}
	},
	methods: {
		onNeedOrgaChangeLocalEvent (newValue) {
			this.userNeedOrga = newValue
		},
		onButtonConfirmInvestorTypeEvent () {
			this.onConfirmUserType(this.userNeedOrga)
		}
	}
}
</script>

<style>
	div.the-screen-investor-type {
		margin: 90px;
	}
	div.the-screen-investor-type div.question {
		float: left;
		width: 500px;
		margin-left: 20px;
	}
	div.the-screen-investor-type div.question-bg {
		padding: 36px;
		background: #ebebeb;
		margin-bottom: 30px;
	}
	div.the-screen-investor-type .wdg-button button {
		margin-bottom: 40px;
		width: 150px;
	}

	/*******/
	/* CUSTOMISATION DU BOUTON RADIO */
	/*******/

	/* Customisation du container */
	.wdg-radiobutton label {
		display: block;
		position: relative;
		padding-left: 35px;
		margin-bottom: 16px;
		cursor: pointer;
		user-select: none;
	}
	/* Masquage du bouton par défaut */
	.wdg-radiobutton label input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}
	/* Nouveau bouton personnalisé */
	.the-screen-investor-type .checkmark, .the-screen-investor-user-documents .checkmark {
		position: absolute;
		top: -2px;
		left: 0;
		height: 18px;
		width: 18px;
		border: 2px solid #c2c2c2;
		border-radius: 50%;
	}
	/* Cercle à l'intérieur du bouton caché si pas coché */
	.the-screen-investor-type .checkmark:after,  .the-screen-investor-user-documents .checkmark:after {
  		content: "";
  		position: absolute;
  		display: none;
	}
	/* Cercle a l'intérieur du bouton si coché */
	.wdg-radiobutton input:checked ~ .checkmark:after {
		display: block;
	}
	/* Customisation du cercle à l'intérieur */
	.wdg-radiobutton .checkmark:after {
		border-radius: 50%;
		background: #00879B;
		top: 4px;
		left: 4px; 
		width: 10px;
		height: 10px;
	}
@media screen and (max-width: 767px) {
	div.the-screen-investor-type {
		margin: 0;
		margin-top: 50px;
	}
	div.the-screen-investor-type div.question {
		width: auto;
		margin-right: 24px;
		margin-bottom: 50px;
	}
}
@media screen and (min-width: 768px) and (max-width: 959px) {
	div.the-screen-investor-type div.question {
		margin-bottom: 50px;
	}
	div.the-screen-investor-type div.wdg-message {
		width: auto;
	}
}
</style>

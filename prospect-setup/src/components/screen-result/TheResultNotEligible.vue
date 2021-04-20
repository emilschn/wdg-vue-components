<template>
	<div class="the-result-not-eligible">
		<div class="intro">
			<svg width="11" height="30">
				<image xlink:href="@/../../common/src/assets/icons/info-blue.svg" src="@/../../common/src/assets/icons/info-blue.png" width="11" height="30"></image>
			</svg><br>
			{{ $t( "project-setup.project-result.not-eligible.PROJECT_DOESNT_SEEM_ELIGIBLE" ) }}
		</div>

		<div v-if="isRejectReasonMicroBusiness" class="margin-top">
			{{ $t("project-setup.project-result.not-eligible.MICROBUSINESS") }}
			<a
			  v-if="isKnowMoreDisplayed"
			  href="https://support.wedogood.co/je-suis-auto-entrepreneur-puis-je-faire-une-lev%C3%A9e-de-fonds-en-royalties-avec-we-do-good"
			  target="_blank"
			  >
				{{ $t("project-setup.project-result.not-eligible.KNOW_MORE") }}
			</a>
		</div>
		<div v-if="isRejectReasonOutEuro" class="margin-top">
			{{ $t("project-setup.project-result.not-eligible.OUT_EURO") }}
			<a
			  v-if="isKnowMoreDisplayed"
			  href="https://support.wedogood.co/faut-il-que-mon-entreprise-soit-immatricul%C3%A9e-en-france"
			  target="_blank"
			  >
				{{ $t("project-setup.project-result.not-eligible.KNOW_MORE") }}
			</a>
		</div>
		<div v-if="isRejectReasonRoyalties" class="margin-top">
			{{ $t("project-setup.project-result.not-eligible.NOT_ADAPTED") }}
			<a
			  v-if="isKnowMoreDisplayed"
			  href="https://support.wedogood.co/fr/comment-est-calcul%C3%A9-le-niveau-de-royalties-%C3%A0-verser"
			  target="_blank"
			  >
				{{ $t("project-setup.project-result.not-eligible.KNOW_MORE") }}
			</a>
		</div>
		<div v-if="isRejectReasonCommunication" class="margin-top">
			{{ $t("project-setup.project-result.not-eligible.NEED_LOVEMONEY") }}
			<a
			  v-if="isKnowMoreDisplayed"
			  href="https://support.wedogood.co/comment-animer-ma-campagne-de-financement/comment-communiquer-aupr%C3%A8s-de-quelle-cible/comment-dois-je-d%C3%A9finir-mes-cibles"
			  target="_blank"
			  >
				{{ $t("project-setup.project-result.not-eligible.KNOW_MORE") }}
			</a>
		</div>

		<br>
		{{ $t("project-setup.project-result.not-eligible.MADE_MISTAKE") }}<br>
		<WDGButton
			  color="red"
			  type="button"
			  :clickEvent="onCorrectClickEvent"
			  >
				<slot slot="label">{{ $t("project-setup.project-result.not-eligible.CORRECT_MISTAKE") }}</slot>
		</WDGButton>

		<br>
		{{ $t("project-setup.project-result.not-eligible.SPECIFIC_PROJECT") }}<br>
		{{ $t("project-setup.project-result.not-eligible.SEND_EMAIL") }}<br>
	</div>
</template>

<script>
import { store } from '../../store.js'
import i18n from '@/i18n'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheResultNotEligible',
	components: {
		WDGButton
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	computed: {
		// On considère qu'une micro-entreprise ne peut pas lever des fonds
		isRejectReasonMicroBusiness () {
			return (this.sharedState.organization.type === 'microbusiness')
		},
		// On considère qu'une entreprise en dehors de la zone Euro ne peut pas lever de fonds
		isRejectReasonOutEuro () {
			return (this.sharedState.organization.location === 'out-euro')
		},
		// Si le modèle des royalties n'est pas correct dans les calculs
		isRejectReasonRoyalties () {
			return (!this.sharedState.project.royaltiesOK)
		},
		// Si le PP n'est pas prêt à communiquer
		isRejectReasonCommunication () {
			return (!this.sharedState.project.readyToCommunicate)
		},
		// Définit si on affiche bien le lien "En savoir plus"
		isKnowMoreDisplayed () {
			return (i18n.locale === 'fr')
		}
	},
	methods: {
		onCorrectClickEvent () {
			// Si le projet n'est pas du bon type ou localisation, on revient à la saisie d'infos
			if (this.isRejectReasonMicroBusiness || this.isRejectReasonOutEuro) {
				store.changeStep('project-infos')

			// Si les royalties ne conviennent pas, on revient au calcul
			} else if (this.isRejectReasonRoyalties) {
				store.changeStep('project-funding')

			// Si le PP n'est pas prêt à communiquer, on revient à la classification des investisseurs
			} else if (this.isRejectReasonCommunication) {
				store.changeStep('project-investors')
			}
		}
	}
}
</script>

<style>
div.the-result-not-eligible {
  margin: 32px 0px;
  padding: 30px;
  border: 1px solid #B3DAE1;
  text-align: center;
}
div.the-result-not-eligible .intro {
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
}
div.the-result-not-eligible .intro svg {
	margin-bottom: 10px;
}
div.the-result-not-eligible .wdg-button {
	max-width: 300px;
	margin: 8px auto;
}
div.the-result-not-eligible div.margin-top {
	margin-top:26px;
	margin-bottom: 10px;
}
div.the-result-not-eligible div.margin-top a {
	color: #EA4F51;
	font-weight: 600;
}
</style>

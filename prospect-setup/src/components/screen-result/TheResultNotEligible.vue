<template>
	<div class="the-result-not-eligible">
		<div class="intro">
			{{ $t( "project-setup.project-result.not-eligible.PROJECT_DOESNT_SEEM_ELIGIBLE" ) }}
		</div>

		<div v-if="isRejectReasonMicroBusiness">
			{{ $t("project-setup.project-result.not-eligible.MICROBUSINESS") }}
		</div>
		<div v-if="isRejectReasonOutEuro">
			{{ $t("project-setup.project-result.not-eligible.OUT_EURO") }}
		</div>
		<div v-if="isRejectReasonRoyalties">
			{{ $t("project-setup.project-result.not-eligible.NOT_ADAPTED") }}
		</div>
		<div v-if="isRejectReasonCommunication">
			{{ $t("project-setup.project-result.not-eligible.NEED_LOVEMONEY") }}
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
			} else if (this.isRejectReasonRoyalties) {
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
}
div.the-result-not-eligible .intro {
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
}
div.the-result-not-eligible .wdg-button {
	max-width: 300px;
	margin-top: 8px;
}
</style>

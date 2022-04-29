<template>
	<div class="the-screen-knowledge">
		<h3>{{ $t('user-investment-capacity.knowledge.SELECT') }}</h3>

		<WDGForm name="checkKnowledge">
			<WDGCheckbox
			  name="know1"
			  :value="sharedState.knowledge.risks"
			  v-bind:valueReturn.sync="sharedState.knowledge.risks"
			  :onChange="onCheckboxChangeEvent"
			  eventNameToListen="updateKnowledgeRisks"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.knowledge.RISKS') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="know2"
			  :value="sharedState.knowledge.crowdfunding"
			  v-bind:valueReturn.sync="sharedState.knowledge.crowdfunding"
			  :onChange="onCheckboxChangeEvent"
			  eventNameToListen="updateKnowledgeCrowdfunding"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.knowledge.CROWDFUNDING') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="know3"
			  :value="sharedState.knowledge.transactions"
			  v-bind:valueReturn.sync="sharedState.knowledge.transactions"
			  :onChange="onCheckboxChangeEvent"
			  eventNameToListen="updateKnowledgeTransactions"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.knowledge.TRANSACTIONS') }}</slot>
			</WDGCheckbox>

			<div class="noneOfTheKnowledges">
				<WDGCheckbox
				  name="none"
				  :value="noneOfTheKnowledges"
				  v-bind:valueReturn.sync="noneOfTheKnowledges"
				  :onChange="onCheckboxChangeEvent"
				  eventNameToListen="updateKnowledgeNone"
				  >
					<slot slot="label-after">
						{{ $t('user-investment-capacity.knowledge.NONE') }}
						<br>
						<span class="description">{{ $t('user-investment-capacity.knowledge.NO_WORRIES') }}</span>
					</slot>
				</WDGCheckbox>
			</div>
		</WDGForm>

		<div class="clear"></div>

		<WDGButton v-if="canDisplayButton" :clickEvent="onContinueClickEvent">
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGForm from '@/../../common/src/components/WDGForm'

export default {
	name: 'TheScreenKnowledge',
	components: {
		WDGButton,
		WDGCheckbox,
		WDGForm
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state,
			noneOfTheKnowledges: false
		}
	},
	methods: {
		onCheckboxChangeEvent (name, value) {
			if (name === 'none') {
				if (this.noneOfTheKnowledges) {
					this.sharedState.knowledge.risks = false
					this.$root.$emit('updateKnowledgeRisks', false)
					this.sharedState.knowledge.crowdfunding = false
					this.$root.$emit('updateKnowledgeCrowdfunding', false)
					this.sharedState.knowledge.transactions = false
					this.$root.$emit('updateKnowledgeTransactions', false)
				}
			} else {
				if (this.oneOfTheKnowledges) {
					this.noneOfTheKnowledges = false
					this.$root.$emit('updateKnowledgeNone', false)
				}
			}
		},
		onContinueClickEvent () {
			this.onContinue('profession')
		}
	},
	computed: {
		oneOfTheKnowledges () {
			return this.sharedState.knowledge.risks || this.sharedState.knowledge.crowdfunding || this.sharedState.knowledge.transactions
		},
		canDisplayButton () {
			return this.noneOfTheKnowledges || this.oneOfTheKnowledges
		}
	}
}
</script>

<style>
	div.clear {
		clear: both;
	}

	div.the-screen-knowledge {
		margin: 80px;
		font-size: 15px;
	}

	div.the-screen-knowledge h3 {
		font-size: 20px;
		font-weight: normal;
	}

	div.the-screen-knowledge .wdg-checkbox {
		max-width: 600px;
		padding: 20px;
		border: 1px solid #a8a8a8;
	}

	div.the-screen-knowledge .wdg-checkbox label {
		width: auto;
	}

	div.the-screen-knowledge .wdg-checkbox .checkmark {
		top: 13px;
	}

	div.the-screen-knowledge div.noneOfTheKnowledges .wdg-checkbox span.description {
		font-size: 13px;
		font-style: italic;
	}

	div.the-screen-knowledge .wdg-button {
		max-width: 300px;
		margin: auto;
	}
</style>

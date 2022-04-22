<template>
	<div class="the-screen-knowledge">
		<h3>{{ $t('user-investment-capacity.knowledge.SELECT') }}</h3>

		<WDGForm name="checkKnowledge">
			<WDGCheckbox
			  name="know1"
			  :value="sharedState.knowledge.know1"
			  v-bind:valueReturn.sync="sharedState.knowledge.know1"
			  :onChange="onCheckboxChangeEvent"
			  eventNameToListen="updateKnowledge1"
			  >
				<slot slot="label-after">K1</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="know2"
			  :value="sharedState.knowledge.know2"
			  v-bind:valueReturn.sync="sharedState.knowledge.know2"
			  :onChange="onCheckboxChangeEvent"
			  eventNameToListen="updateKnowledge2"
			  >
				<slot slot="label-after">K2</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="know3"
			  :value="sharedState.knowledge.know3"
			  v-bind:valueReturn.sync="sharedState.knowledge.know3"
			  :onChange="onCheckboxChangeEvent"
			  eventNameToListen="updateKnowledge3"
			  >
				<slot slot="label-after">K3</slot>
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
					this.sharedState.knowledge.know1 = false
					this.$root.$emit('updateKnowledge1', false)
					this.sharedState.knowledge.know2 = false
					this.$root.$emit('updateKnowledge2', false)
					this.sharedState.knowledge.know3 = false
					this.$root.$emit('updateKnowledge3', false)
				}
			} else {
				if (this.oneOfTheKnowledges) {
					this.noneOfTheKnowledges = false
					this.$root.$emit('updateKnowledgeNone', false)
				}
			}
		},
		onContinueClickEvent () {
			console.log('')
		}
	},
	computed: {
		oneOfTheKnowledges () {
			return this.sharedState.knowledge.know1 || this.sharedState.knowledge.know2 || this.sharedState.knowledge.know3
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

	div.the-screen-knowledge div.noneOfTheKnowledges .wdg-checkbox .checkmark {
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

<template>
	<div class="the-screen-objectives">
		<h3>{{ $t('user-investment-capacity.objectives.TITLE') }}</h3>

		<WDGForm name="checkObjectives">
			{{ $t('user-investment-capacity.objectives.DURATIONS') }}

			<WDGCheckbox
			  name="oneyear"
			  :value="sharedState.objectives.duration.oneyear"
			  v-bind:valueReturn.sync="sharedState.objectives.duration.oneyear"
			  :onChange="onCheckboxDurationChangeEvent"
			  eventNameToListen="updateDurationOne"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.duration.ONEYEAR') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="threeyears"
			  :value="sharedState.objectives.duration.threeyears"
			  v-bind:valueReturn.sync="sharedState.objectives.duration.threeyears"
			  :onChange="onCheckboxDurationChangeEvent"
			  eventNameToListen="updateDurationThree"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.duration.THREEYEARS') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="fiveyears"
			  :value="sharedState.objectives.duration.fiveyears"
			  v-bind:valueReturn.sync="sharedState.objectives.duration.fiveyears"
			  :onChange="onCheckboxDurationChangeEvent"
			  eventNameToListen="updateDurationFive"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.duration.FIVEYEARS') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="whateveryear"
			  :value="sharedState.objectives.duration.whatever"
			  v-bind:valueReturn.sync="sharedState.objectives.duration.whatever"
			  :onChange="onCheckboxDurationChangeEvent"
			  eventNameToListen="updateDurationWhatever"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.duration.WHATEVER') }}</slot>
			</WDGCheckbox>
			<br>

			{{ $t('user-investment-capacity.objectives.RISK_PROFILE') }}

			<WDGSelect
			  id="riskProfile"
			  name="riskProfile"
			  :optionItems="riskProfiles"
			  :value="sharedState.objectives.riskProfile"
			  v-bind:valueReturn.sync="sharedState.objectives.riskProfile"
			  customStyle="natural-language"
			  />
			<br><br><br>

			{{ $t('user-investment-capacity.objectives.IMPACTS') }}

			<WDGCheckbox
			  name="economic"
			  :value="sharedState.objectives.impactTypes.economic"
			  v-bind:valueReturn.sync="sharedState.objectives.impactTypes.economic"
			  :onChange="onCheckboxImpactChangeEvent"
			  eventNameToListen="updateImpactEconomic"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.impact-types.ECONOMIC') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="social"
			  :value="sharedState.objectives.impactTypes.social"
			  v-bind:valueReturn.sync="sharedState.objectives.impactTypes.social"
			  :onChange="onCheckboxImpactChangeEvent"
			  eventNameToListen="updateImpactSocial"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.impact-types.SOCIAL') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="environmental"
			  :value="sharedState.objectives.impactTypes.environmental"
			  v-bind:valueReturn.sync="sharedState.objectives.impactTypes.environmental"
			  :onChange="onCheckboxImpactChangeEvent"
			  eventNameToListen="updateImpactEnvironmental"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.impact-types.ENVIRONMENTAL') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="whateverimpact"
			  :value="sharedState.objectives.impactTypes.whatever"
			  v-bind:valueReturn.sync="sharedState.objectives.impactTypes.whatever"
			  :onChange="onCheckboxImpactChangeEvent"
			  eventNameToListen="updateImpactWhatever"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.impact-types.WHATEVER') }}</slot>
			</WDGCheckbox>
			<br>

			{{ $t('user-investment-capacity.objectives.PURPOSES') }}

			<WDGCheckbox
			  name="projectowner"
			  :value="sharedState.objectives.purposeTypes.projectOwner"
			  v-bind:valueReturn.sync="sharedState.objectives.purposeTypes.projectOwner"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.purpose-types.PROJECT_OWNER') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="sectors"
			  :value="sharedState.objectives.purposeTypes.sectors"
			  v-bind:valueReturn.sync="sharedState.objectives.purposeTypes.sectors"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.purpose-types.SECTORS') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="diversify"
			  :value="sharedState.objectives.purposeTypes.diversify"
			  v-bind:valueReturn.sync="sharedState.objectives.purposeTypes.diversify"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.purpose-types.DIVERSIFY') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="impacts"
			  :value="sharedState.objectives.purposeTypes.impacts"
			  v-bind:valueReturn.sync="sharedState.objectives.purposeTypes.impacts"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.purpose-types.IMPACTS') }}</slot>
			</WDGCheckbox>

			<WDGCheckbox
			  name="local"
			  :value="sharedState.objectives.purposeTypes.local"
			  v-bind:valueReturn.sync="sharedState.objectives.purposeTypes.local"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.purpose-types.LOCAL') }}</slot>
			</WDGCheckbox>
			<br><br>

			<WDGCheckbox
			  name="newsletter"
			  :value="sharedState.objectives.purposeTypes.newsletter"
			  v-bind:valueReturn.sync="sharedState.objectives.purposeTypes.newsletter"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.objectives.NEWLETTER') }}</slot>
			</WDGCheckbox>

			<WDGButton v-if="canDisplayButton" :clickEvent="onContinueClickEvent">
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>

		</WDGForm>
		<br><br>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGForm from '@/../../common/src/components/WDGForm'

export default {
	name: 'TheScreenKnowledge',
	components: {
		WDGButton,
		WDGCheckbox,
		WDGSelect,
		WDGForm
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			sharedState: store.state
		}
	},
	methods: {
		onCheckboxDurationChangeEvent (name, value) {
			if (name === 'whateveryear') {
				if (this.sharedState.objectives.duration.whatever) {
					this.sharedState.objectives.duration.oneyear = false
					this.$root.$emit('updateDurationOne', false)
					this.sharedState.objectives.duration.threeyears = false
					this.$root.$emit('updateDurationThree', false)
					this.sharedState.objectives.duration.fiveyears = false
					this.$root.$emit('updateDurationFive', false)
				}
			} else {
				if (this.oneOfTheDurations) {
					this.sharedState.objectives.duration.whatever = false
					this.$root.$emit('updateDurationWhatever', false)
				}
			}
		},
		onCheckboxImpactChangeEvent (name, value) {
			if (name === 'whateverimpact') {
				if (this.sharedState.objectives.impactTypes.whatever) {
					this.sharedState.objectives.impactTypes.economic = false
					this.$root.$emit('updateImpactEconomic', false)
					this.sharedState.objectives.impactTypes.social = false
					this.$root.$emit('updateImpactSocial', false)
					this.sharedState.objectives.impactTypes.environmental = false
					this.$root.$emit('updateImpactEnvironmental', false)
				}
			} else {
				if (this.oneOfTheImpacts) {
					this.sharedState.objectives.impactTypes.whatever = false
					this.$root.$emit('updateImpactWhatever', false)
				}
			}
		},
		onContinueClickEvent () {
			this.onContinue('result')
		}
	},
	computed: {
		oneOfTheDurations () {
			return this.sharedState.objectives.duration.oneyear || this.sharedState.objectives.duration.threeyears || this.sharedState.objectives.duration.fiveyears
		},
		oneOfTheImpacts () {
			return this.sharedState.objectives.impactTypes.economic || this.sharedState.objectives.impactTypes.social || this.sharedState.objectives.impactTypes.environmental
		},
		canDisplayButton () {
			let firstQuestion = (this.oneOfTheDurations || this.sharedState.objectives.duration.whatever)
			let secondQuestion = (this.sharedState.objectives.riskProfile !== '')
			let thirdQuestion = (this.oneOfTheImpacts || this.sharedState.objectives.impactTypes.whatever)
			let fourthQuestion = (this.sharedState.objectives.purposeTypes.projectOwner || this.sharedState.objectives.purposeTypes.sectors || this.sharedState.objectives.purposeTypes.diversify || this.sharedState.objectives.purposeTypes.impacts || this.sharedState.objectives.purposeTypes.local)
			return firstQuestion && secondQuestion && thirdQuestion && fourthQuestion
		},
		riskProfiles () {
			return [
				{ Id: '', Text: '' },
				{ Id: 'careful', Text: i18n.t('user-investment-capacity.objectives.risk-profile.CAREFUL') },
				{ Id: 'intermediate', Text: i18n.t('user-investment-capacity.objectives.risk-profile.INTERMEDIATE') },
				{ Id: 'dynamic', Text: i18n.t('user-investment-capacity.objectives.risk-profile.DYNAMIC') }
			]
		}
	}
}
</script>

<style>
	div.clear {
		clear: both;
	}

	div.the-screen-objectives {
		margin: 80px;
		font-size: 15px;
	}

	div.the-screen-objectives h3 {
		font-size: 20px;
		font-weight: normal;
	}

	div.the-screen-objectives .wdg-form .wdg-checkbox {
		margin-top: 8px;
		margin-bottom: 8px;
	}

	div.the-screen-objectives .wdg-button {
		max-width: 300px;
		margin: auto;
	}
</style>

<template>
	<div class="the-screen-profession">
		<h3>{{ $t('user-investment-capacity.profession.INFO') }}</h3>

		{{ $t('user-investment-capacity.profession.CURRENT_JOB') }}

		<WDGSelect
		  id="currentJob"
		  name="currentJob"
		  :optionItems="professionTypes"
		  :value="sharedState.profession.type"
		  v-bind:valueReturn.sync="sharedState.profession.type"
		  customStyle="natural-language"
		  />
		<br><br>

		{{ $t('user-investment-capacity.profession.LEVEL_EDUCATION') }}

		<WDGSelect
		  id="levelEducation"
		  name="levelEducation"
		  :optionItems="educationLevels"
		  :value="sharedState.profession.levelEducation"
		  v-bind:valueReturn.sync="sharedState.profession.levelEducation"
		  customStyle="natural-language"
		  />
		<br><br><br>

		<WDGForm name="checkKnowledge">
			<WDGCheckbox
			  name="financejob"
			  :value="sharedState.profession.hasFinanceJob"
			  v-bind:valueReturn.sync="sharedState.profession.hasFinanceJob"
			  >
				<slot slot="label-after">{{ $t('user-investment-capacity.profession.FINANCE_JOB') }}</slot>
			</WDGCheckbox>
		</WDGForm>
		<br><br>

		{{ $t('user-investment-capacity.profession.CROWDFUNDING') }}
		<br>

		<WDGInput
		  id="crowdfundingExperience"
		  name="crowdfundingExperience"
		  :value="sharedState.profession.crowdfundingExperience"
		  v-bind:valueReturn.sync="sharedState.profession.crowdfundingExperience"
		  customStyle="natural-language"
		  />

		<div class="clear"></div>
		<br><br>

		<WDGButton v-if="canDisplayButton" :clickEvent="onContinueClickEvent">
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGForm from '@/../../common/src/components/WDGForm'

export default {
	name: 'TheScreenKnowledge',
	components: {
		WDGButton,
		WDGCheckbox,
		WDGInput,
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
		onContinueClickEvent () {
			this.onContinue('objectives')
		}
	},
	computed: {
		canDisplayButton () {
			return this.sharedState.profession.type !== '' && this.sharedState.profession.levelEducation !== ''
		},
		professionTypes () {
			return [
				{ Id: '', Text: '' },
				{ Id: 'employee', Text: i18n.t('user-investment-capacity.profession.EMPLOYEE') },
				{ Id: 'liberal', Text: i18n.t('user-investment-capacity.profession.LIBERAL') },
				{ Id: 'entrepreneur', Text: i18n.t('user-investment-capacity.profession.ENTREPRENEUR') },
				{ Id: 'craftsman', Text: i18n.t('user-investment-capacity.profession.CRAFTSMAN') },
				{ Id: 'retired', Text: i18n.t('user-investment-capacity.profession.RETIRED') },
				{ Id: 'other', Text: i18n.t('user-investment-capacity.profession.OTHER') }
			]
		},
		educationLevels () {
			return [
				{ Id: '', Text: '' },
				{ Id: 'cap', Text: i18n.t('user-investment-capacity.profession.CAP') },
				{ Id: 'bac', Text: i18n.t('user-investment-capacity.profession.BAC') },
				{ Id: 'bac2', Text: i18n.t('user-investment-capacity.profession.BAC2') },
				{ Id: 'bac3', Text: i18n.t('user-investment-capacity.profession.BAC3') },
				{ Id: 'bac4', Text: i18n.t('user-investment-capacity.profession.BAC4') },
				{ Id: 'bac5', Text: i18n.t('user-investment-capacity.profession.BAC5') },
				{ Id: 'bac8', Text: i18n.t('user-investment-capacity.profession.BAC8') }
			]
		}
	}
}
</script>

<style>
	div.clear {
		clear: both;
	}

	div.the-screen-profession {
		margin: 80px;
		font-size: 15px;
	}

	div.the-screen-profession h3 {
		font-size: 20px;
		font-weight: normal;
	}

	div.the-screen-profession .wdg-checkbox {
		max-width: 600px;
		padding: 20px;
		border: 1px solid #a8a8a8;
	}

	div.the-screen-profession .wdg-checkbox label {
		width: auto;
	}

	div.the-screen-profession .wdg-checkbox .checkmark {
		top: 13px;
	}

	div.the-screen-profession .wdg-input input {
		width: 100%;
		max-width: 630px;
	}

	div.the-screen-profession .wdg-button {
		max-width: 300px;
		margin: auto;
	}
</style>

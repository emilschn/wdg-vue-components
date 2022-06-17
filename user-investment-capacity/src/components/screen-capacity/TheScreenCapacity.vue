<template>
	<div class="the-screen-capacity">
		<div class="form">
			<h3>{{ $t('user-investment-capacity.capacity.FINANCIAL_AVAILABILITY') }}</h3>

			<p class="description">
				{{ $t('user-investment-capacity.capacity.FINANCIAL_AVAILABILITY_DESCRIPTION') }}
			</p>

			<p>
				{{ $t('user-investment-capacity.capacity.NET_REVENUES') }}

				<WDGInput id="monthlyRevenue" name="monthlyRevenue" :value="sharedState.monthlyRevenue"
					v-bind:valueReturn.sync="sharedState.monthlyRevenue" customStyle="natural-language"
					autoFormat="wdg-number" :isRequired=true />

				{{ $t('user-investment-capacity.capacity.EURO_PER_MONTH') }}

				<strong>
					<span class="yearlyRevenue">{{ yearlyRevenue }}</span>
					{{ $t('user-investment-capacity.capacity.EURO_PER_YEAR') }}
				</strong>.
				<br>
				<br>

				{{ $t('user-investment-capacity.capacity.COMPLEMENTARY_REVENUES') }}

				<WDGInput id="complementaryRevenue" name="complementaryRevenue"
					:value="sharedState.complementaryRevenue" v-bind:valueReturn.sync="sharedState.complementaryRevenue"
					customStyle="natural-language" autoFormat="wdg-number" :isRequired=true />

				{{ $t('user-investment-capacity.capacity.EURO_PER_YEAR') }}
				<br>
				<br>

				{{ $t('user-investment-capacity.capacity.INVESTMENTS') }}

				<WDGInput id="investmentsValue" name="investmentsValue" :value="sharedState.investmentsValue"
					v-bind:valueReturn.sync="sharedState.investmentsValue" customStyle="natural-language"
					autoFormat="wdg-number" :isRequired=true />

				€.
				<br>
				<br>
				<br>
			</p>

			<div v-if="canDisplayExpenses" class="financial-commitments">
				<h3>{{ $t('user-investment-capacity.capacity.FINANCIAL_COMMITMENT') }}</h3>

				{{ $t('user-investment-capacity.capacity.RECURRING_COMMITMENT') }}

				<WDGInput id="commitmentValue" name="commitmentValue" :value="sharedState.commitmentValue"
					v-bind:valueReturn.sync="sharedState.commitmentValue" customStyle="natural-language"
					autoFormat="wdg-number" :isRequired=true />

				{{ $t('user-investment-capacity.capacity.EURO_PER_MONTH') }}

				<strong>
					<span class="yearlyCommitment">{{ yearlyCommitment }}</span>
					{{ $t('user-investment-capacity.capacity.EURO_PER_YEAR') }}
				</strong>.
				<br><br>
			</div>

			<div class="result" v-if="canDisplayResult">
				<strong>{{ $t('user-investment-capacity.capacity.MAX_INVESTMENT') }}</strong>
				<br><br>

				<span class="yearlyCapacityAmount">
					<span>{{ yearlyCapacityAmountFormatted }}</span>
					{{ $t('user-investment-capacity.capacity.EURO_PER_YEAR') }}
				</span>
				<br><br>

				<p class="description">
					{{ $t('user-investment-capacity.capacity.MAX_INVESTMENT_DESCRIPTION') }}
					<br>
					{{ $t('user-investment-capacity.capacity.MAX_INVESTMENT_DESCRIPTION_DETAILS') }}
				</p>

				<a href="#" target="_blank">{{ $t('common.KNOW_MORE') }}</a>
			</div>

			<WDGForm name="confirmResult">
				<WDGCheckbox v-if="canDisplayResult" v-bind:valueReturn.sync="confirmResult">
					<slot slot="label-after">{{ $t('user-investment-capacity.capacity.ITS_OK') }}</slot>
				</WDGCheckbox>
			</WDGForm>
		</div>

		<WDGMascot type="side-1">
			<slot slot="text">{{ $t('user-investment-capacity.capacity.MASCOT') }}</slot>
		</WDGMascot>

		<div class="clear"></div>

		<WDGButton v-if="canDisplayButton" :clickEvent="onContinueClickEvent">
			<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import { number } from '@/../../common/src/helpers/number.js'
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGMascot from '@/../../common/src/components/WDGMascot'

export default {
	name: 'TheScreenCapacity',
	components: {
		WDGButton,
		WDGCheckbox,
		WDGForm,
		WDGInput,
		WDGMascot
	},
	props: {
		onContinue: Function
	},
	data() {
		return {
			sharedState: store.state,
			confirmResult: false
		}
	},
	methods: {
		onContinueClickEvent: function (event) {
			this.onContinue('knowledge')
		},
		getYearlyValue: function (nInput) {
			if (isNaN(nInput)) {
				return 0
			}

			// Arrondi à deux chiffres après la virgule
			nInput = Math.round(nInput * 12 * 100) / 100

			return number.formatStr(nInput, 'money')
		},
		isValidNumberValue: function (nValue) {
			return nValue !== '' && !isNaN(nValue)
		},
		setYearlyCapacityAmount: function () {
			// Total de revenus annuels
			let totalYearlyRevenues = Number(this.sharedState.monthlyRevenue) * 12 + Number(this.sharedState.complementaryRevenue) + Number(this.sharedState.investmentsValue)
			// Total de charges annuelles
			let totalYearlyCommitment = Number(this.sharedState.commitmentValue) * 12
			// 10% de la différence entre les deux
			this.sharedState.yearlyCapacityAmount = Math.round(totalYearlyRevenues - totalYearlyCommitment) * 10 / 100
			// Minimum 0 €
			this.sharedState.yearlyCapacityAmount = Math.max(0, this.sharedState.yearlyCapacityAmount)
		}
	},
	computed: {
		yearlyRevenue() {
			return this.getYearlyValue(this.sharedState.monthlyRevenue)
		},
		yearlyCommitment() {
			return this.getYearlyValue(this.sharedState.commitmentValue)
		},
		yearlyCapacityAmountFormatted() {
			this.setYearlyCapacityAmount()
			return this.getYearlyValue(this.sharedState.yearlyCapacityAmount / 12)
		},
		canDisplayExpenses() {
			return this.isValidNumberValue(this.sharedState.monthlyRevenue) && this.isValidNumberValue(this.sharedState.complementaryRevenue) && this.isValidNumberValue(this.sharedState.investmentsValue)
		},
		canDisplayResult() {
			return this.canDisplayExpenses && this.isValidNumberValue(this.sharedState.commitmentValue)
		},
		canDisplayButton() {
			return this.canDisplayResult && this.confirmResult
		}
	}
}
</script>

<style>
div.clear {
	clear: both;
}

div.the-screen-capacity {
	margin: 80px;
	font-size: 15px;
}

div.the-screen-capacity h3 {
	font-size: 20px;
	font-weight: normal;
}

div.the-screen-capacity p.description {
	color: #a8a8a8;
}

div.the-screen-capacity div.form {
	float: left;
	max-width: 550px;
}

div.the-screen-capacity div.form div.result {
	padding: 20px;
	border: 1px solid #00879B;
}

div.the-screen-capacity div.form div.result span.yearlyCapacityAmount {
	color: #00879B;
	font-size: 25px;
	font-weight: bold;
}

div.the-screen-capacity div.form input#monthlyRevenue,
div.the-screen-capacity div.form input#complementaryRevenue,
div.the-screen-capacity div.form input#investmentsValue,
div.the-screen-capacity div.form input#commitmentValue {
	width: 80px;
}

div.the-screen-capacity a {
	color: #EA4F51;
	font-weight: 600;
}

div.the-screen-capacity form#confirmResult {
	margin-top: 20px;
}

div.the-screen-capacity .wdg-button {
	max-width: 300px;
	margin: auto;
}
</style>

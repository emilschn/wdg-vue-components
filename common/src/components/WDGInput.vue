<template>
  	<div
      v-show="!honeypot"
	  class="wdg-input"
	  :class="customStyle"
	  >
		<label :for="id">
			<slot name="label"></slot>
			<span v-if="showRequiredStar"> *</span>
		</label>
		<div v-if="showComment" class="wdg-input-comment">
			<slot name="comment"></slot>
		</div>

    	<ValidationProvider
		  :rules="validationRule"
		  v-slot="v"
		  >
      		<span
			  v-if="(validationRule && v.errors[0])"
			  class="wdg-message error"
			  >
				{{ v.errors[0] }}
			</span>

			<input
			  v-if="!multiline"
			  :id="id"
			  v-model="valueReturn"
			  :placeholder="placeholder"
			  :disabled="disabled"
			  :required="isRequired"
			  :type="type"
			  @input="onInputLocalEvent"
			  @change="onChangeLocalEvent"
			  />

			<textarea
			  v-else
			  :id="id"
			  v-model="valueReturn"
			  :disabled="disabled"
			  :required="isRequired"
			  @input="onInputLocalEvent"
			  />
		</ValidationProvider>
  	</div>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
	name: 'WDGInput',
	components: {
		ValidationProvider
	},
	props: {
		id: { type: String, default: null },
		name: { type: String, default: null },
		value: { type: [String, Number], default: null },
		type: { type: String, default: 'text' },
		customStyle: { type: String, default: '' },
		autoFormat: { type: String },
		placeholder: { type: String, default: '' },
		multiline: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		honeypot: { type: Boolean, default: false },
		eventNameToListen: { type: String, default: '' },
		validationRule: { type: String, default: '' },
		onChange: Function
	},
	data () {
		return {
			valueReturn: this.value,
			isRequired: (this.validationRule.indexOf('required') > -1)
		}
	},
	mounted () {
		if (this.eventNameToListen !== '') {
			this.$root.$on(this.eventNameToListen, this.updateValue)
		}
	},
	methods: {
		onInputLocalEvent () {
			this.$emit('update:valueReturn', this.valueReturn)
			if (this.onChange !== undefined) {
				this.onChange(this.valueReturn)
			}
		},
		onChangeLocalEvent () {
			if (this.autoFormat === 'wdg-number') {
				this.valueReturn = this.getAutoFormatWDGNumber(this.valueReturn)
			}
		},
		updateValue (newValue) {
			this.valueReturn = newValue
		},
		getAutoFormatWDGNumber (nInput) {
			// On passe les entiers en float avec .00 pour qu'ils soient reconnus par le pattern en dessous
			if (nInput === parseInt(nInput, 10)) {
				nInput = parseFloat(nInput).toFixed(2)
			}
			let sInput = nInput.toString()
			// Remplacement . par , pour les décimales
			sInput = sInput.split('.').join(',')
			// Suppression des caractères non-numériques
			sInput = sInput.replace(/[^\d,-]/g, '')
			// Ecarts pour les milliers
			sInput = sInput.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

			// Si c'est en fait un entier, on enlève les chiffres après la virgule
			let aCutDecimals = sInput.split(',')
			if (aCutDecimals[ 1 ] === '00') {
				sInput = aCutDecimals[ 0 ]
			}
			return sInput
		}
	},
	computed: {
		showRequiredStar () {
			return this.isRequired && !!this.$slots.label
		},
		showComment () {
			return !!this.$slots.comment
		}
	}
}
</script>

<style>
	.wdg-input {
		margin-bottom: 16px;
	}

	.wdg-input-comment {
		margin-bottom: 16px;
	}

	.wdg-input input {
		width: -webkit-calc(100% - 16px);
		width: -moz-calc(100% - 16px);
		width: calc(100% - 16px);
		height: 48px;
		padding: 4px 8px;
		border: none;
		background: #FFF;
		font-size: 16px;
	}

	.wdg-input textarea {
		width: 100%;
		border: none;
		resize: none;
	}

	.wdg-input.natural-language {
		display: inline;
	}

	.wdg-input.natural-language label {
		display: none;
	}

	.wdg-input.natural-language input {
		display: inline-block;
		width: 250px;
		height: 40px;
		padding: 0px;
		color: #00879B;
		border-bottom: 2px solid #00879B;
		padding-left: 10px;
		font-weight: 500;
	}
</style>

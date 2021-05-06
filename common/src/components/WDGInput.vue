<template>
  	<div
      v-show="!honeypot"
	  class="wdg-input"
	  :class="customStyle + ' ' + suffixClass"
	  >
		<label :for="id">
			<slot name="label"></slot>
			<span v-if="showRequiredStar"> *</span>
		</label>
		<div v-if="showComment" class="wdg-input-comment">
			<slot name="comment"></slot>
		</div>

    	<ValidationProvider
		  v-if="validationRule !== ''"
		  :rules="validationRule"
		  v-slot="v"
		  >
      		<span
			  v-if="(validationRule && v.errors[0])"
			  class="wdg-message error"
			  >
				{{ v.errors[0] }}
			</span>

			<span
			  v-if="!multiline && prefix !== ''"
			  class="input-prefix"
			  >
			  {{ prefix }}
			</span>

			<input
			  v-if="!multiline"
			  ref="input"
			  :id="id"
			  v-model="valueReturn"
			  :placeholder="placeholder"
			  :disabled="disabled"
			  :required="isRequired"
			  :type="type"
			  :class="suffixClass"
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

			<span
			  v-if="!multiline && suffix !== ''"
			  class="input-suffix"
			  >
			  {{ suffix }}
			</span>
			<span class="input-icon">
				<span
					v-if="loading"
					:class="[ 'glyphicon', `glyphicon-hourglass` ]"
					>
				</span>
				<span
					v-else-if="!multiline && icon && iconVisibility && !loading"
					:class="[ 'glyphicon', `glyphicon-${icon}` ]"
					>
				</span>
			</span>
		</ValidationProvider>

		<span v-else>
      		<span
			  v-if="(validationRule && v.errors[0])"
			  class="wdg-message error"
			  >
				{{ v.errors[0] }}
			</span>

			<span
			  v-if="!multiline && prefix !== ''"
			  class="input-prefix"
			  >
			  {{ prefix }}
			</span>

			<input
			  v-if="!multiline"
			  :id="id"
			  ref="input"
			  v-model="valueReturn"
			  :placeholder="placeholder"
			  :disabled="disabled"
			  :required="isRequired"
			  :type="type"
			  :class="suffixClass"
			  @input="onInputLocalEvent"
			  @change="onChangeLocalEvent"
			  />

			<textarea
			  v-else
			  :id="id"
			  :placeholder="placeholder"
			  v-model="valueReturn"
			  :disabled="disabled"
			  :required="isRequired"
			  @input="onInputLocalEvent"
			  />

			<span
			  v-if="!multiline && suffix !== ''"
			  class="input-suffix"
			  >
			  {{ suffix }}
			</span>
			<span class="input-icon">
				<span
					v-if="loading"
					:class="[ 'glyphicon', `glyphicon-hourglass` ]"
					>
				</span>
				<span
					v-else-if="!multiline && this.icon && this.iconVisibility"
					:class="[ 'glyphicon', `glyphicon-${this.icon}` ]"
					>
				</span>
			</span>
		</span>
  	</div>
</template>

<script>
// Je ne tire aucune gloire de cet affreux copier-coller de balises ci-dessus,
// Mais suite à une MAJ des dépendances, il avait un warning à chaque modification d'input
// Ce warning est provoqué par vee-validate
// Il est de type : $listeners is readonly.
// OU : $attrs is readonly.
// Cela viendrait du fait que 2 instances de Vue sont chargées
// cf : https://stackoverflow.com/questions/53206078/vue-warn-listeners-and-attrs-is-readonly?noredirect=1&lq=1
// On est censé pouvoir contrer ça en appliquant une modification sur le fichier de config
// Cela ne fonctionne pas
// J'ai passé environ 4h dessus, j'en avais marre...
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
		prefix: { type: String, default: '' },
		suffix: { type: String, default: '' },
		eventNameToListen: { type: String, default: '' },
		validationRule: { type: String, default: '' },
        icon: { type: String, default: '' },
		iconVisibility: { type: Boolean, default: false },
		loading: { type: Boolean, default: false },
		onChange: Function
	},
	data () {
		return {
			valueReturn: this.getAutoFormat(this.value),
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
			this.valueReturn = this.getAutoFormat(this.valueReturn)
		},
		updateValue (newValue) {
			this.valueReturn = newValue
		},
		getAutoFormat (nInput) {
			if (this.autoFormat === 'wdg-number' || this.autoFormat === 'wdg-percent') {
				return this.getAutoFormatWDGNumber(nInput)
			}
			return nInput
		},
		getAutoFormatWDGNumber (nInput) {
			console.log('wdgInput getAutoFormatWDGNumber nInput = ' + nInput)
			// On passe les entiers en float avec .00 pour qu'ils soient reconnus par le pattern en dessous
			if (nInput === parseInt(nInput, 10)) {
				nInput = parseFloat(nInput).toFixed(2)
			}
			let sInput = nInput.toString()
			// Suppression des caractères non-numériques
			sInput = sInput.split(',').join('.')
			sInput = sInput.replace(/[^\d.-]/g, '')
			// Si pourcent, on reste entre 0 et 100
			if (this.autoFormat === 'wdg-percent') {
				console.log('wdgInput getAutoFormatWDGNumber sInput = ' + sInput)
				if (Number(sInput) < 0) {
					sInput = '0'
				}
				if (Number(sInput) > 100) {
					sInput = '100'
				}
			}
			// Remplacement . par , pour les décimales
			sInput = sInput.split('.').join(',')
			// Ecarts pour les milliers
			sInput = sInput.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

			// Si c'est en fait un entier, on enlève les chiffres après la virgule
			let aCutDecimals = sInput.split(',')
			if (aCutDecimals[ 1 ] === '00') {
				sInput = aCutDecimals[ 0 ]
			}
			return sInput
		},
		// utilisé pour mettre le focus sur ce champ à partir du parent
		focus: function () {
			this.$refs.input.focus()
		}
	},
	computed: {
		showRequiredStar () {
			return this.isRequired && !!this.$slots.label
		},
		showComment () {
			return !!this.$slots.comment
		},
		suffixClass () {
			let buffer = (this.suffix !== '' ? 'has-suffix' : '')
			buffer += ' ' + (this.prefix !== '' ? 'has-prefix' : '')
			return buffer
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
		outline: none;
	}

	.wdg-input.natural-language input .placeholder {
		color: #B3DAE1;
	}

	.wdg-input.natural-language.admin input {
		color: #F1A074;
		border-bottom: 2px solid #F1A074;
	}

	.wdg-input input.has-prefix {
		width: -webkit-calc(100% - 32px);
		width: -moz-calc(100% - 32px);
		width: calc(100% - 32px);
		padding-left: 24px;
	}
	.wdg-input input.has-suffix {
		width: -webkit-calc(100% - 32px);
		width: -moz-calc(100% - 32px);
		width: calc(100% - 32px);
		padding-right: 24px;
	}
	.wdg-input input.has-suffix.has-prefix {
		width: -webkit-calc(100% - 64px);
		width: -moz-calc(100% - 64px);
		width: calc(100% - 64px);
	}

	.wdg-input span.input-prefix, .wdg-input span.input-suffix {
		float: right;
		height: 0px;
		line-height: 40px;
		position: relative;
		top: -40px;
		left: -8px;
		font-size: 16px;
	}
	.wdg-input span.input-prefix {
		float: left;
		top: 0px;
		left: 0px;
	}
	.wdg-input.has-suffix.has-prefix span.input-suffix {
		top: 0px;
		left: -16px;
	}

	.wdg-input.natural-language.admin span.input-prefix, .wdg-input.natural-language.admin span.input-suffix {
		color: #F1A074;
	}
	.wdg-input span.input-icon {
		position: relative;
		left: -16px;
		color: #CEE9C0;
	}
	.wdg-input span.input-icon span.glyphicon-hourglass {
		color: #EBEBEB;
	}
</style>

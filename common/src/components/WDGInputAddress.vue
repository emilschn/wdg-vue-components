<template>
  	<div
	  class="wdg-input-address"
	  :class="customStyle + ' ' + suffixClass"
	  >
		<label :for="id">
			<slot name="label"></slot>
			<span v-if="showRequiredStar"> *</span>
		</label>

		<span>
			<span
			  v-if="prefix !== ''"
			  class="input-prefix"
			  >
			  {{ prefix }}
			</span>

			<input
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

			<span
			  v-if="suffix !== ''"
			  class="input-suffix"
			  >
			  {{ suffix }}
			</span>
			<span class="input-icon">
				<span
					v-if="loading"
					class="fas fa-hourglass"
					>
				</span>
				<span
					v-else-if="icon && iconVisibility"
					:class="[ 'fas', `fa-${icon}` ]"
					>
				</span>
			</span>
		</span>
  	</div>
</template>

<script>
export default {
	name: 'WDGInputAddresss',
	components: {
	},
	props: {
		id: { type: String, default: null },
		name: { type: String, default: null },
		value: { type: [String, Number], default: null },
		type: { type: String, default: 'text' },
		customStyle: { type: String, default: '' },
		autoFormat: { type: String },
		placeholder: { type: String, default: '' },
		disabled: { type: Boolean, default: false },
		isRequired: { type: Boolean, default: false },
		prefix: { type: String, default: '' },
		suffix: { type: String, default: '' },
		eventNameToListen: { type: String, default: '' },
        icon: { type: String, default: '' },
		iconVisibility: { type: Boolean, default: false },
		loading: { type: Boolean, default: false },
		onChange: Function
	},
	data () {
		return {
			valueReturn: this.value
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
			/*
			if (this.onChange !== undefined) {
				this.onChange(this.valueReturn)
			} */
			this.onChange(this.valueReturn)
		},
		onChangeLocalEvent () {
			this.onChange(this.valueReturn)
		},
		updateValue (newValue) {
			this.valueReturn = newValue
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
		background-color: #fff; /* permet de ne pas se superposer au texte si l'adresse est longue */
		padding-left: 5px;
	}
	.wdg-input span.input-icon span.fa-hourglass {
		color: #c2c2c2;
		animation-duration: 2.5s;
  		animation-name: anim-hourglass;
		animation-iteration-count: infinite;
	}

	@keyframes anim-hourglass {
		0% {
       		-webkit-transform: rotate(0deg);
    	}
    	50% {
        	-webkit-transform: rotate(180deg);
    	}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
</style>

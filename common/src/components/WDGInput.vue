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
		<slot name="comment"></slot>

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
		placeholder: { type: String, default: 'Default placeholder' },
		multiline: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false },
		honeypot: { type: Boolean, default: false },
		validationRule: { type: String, default: '' },
		inputEvent: Function
	},
	data () {
		return {
			valueReturn: this.value,
			isRequired: (this.validationRule.indexOf('required') > -1)
		}
	},
	methods: {
		onInputLocalEvent () {
			this.$emit('update:valueReturn', this.valueReturn)
		}
	},
	computed: {
		showRequiredStar () {
			return this.isRequired && !!this.$slots.label
		}
	}
}
</script>

<style>
	.wdg-input {
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
		padding: 0px;
		color: #00879B;
		border-bottom: 2px solid #00879B;
	}
</style>

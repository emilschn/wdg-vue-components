<template>
	<div class="wdg-input-password">
		<WDGInput
		  id="password"
		  name="password"
		  ref="inputPassword"
		  :customStyle="customStyle"
		  :type="typeValue"
		  icon="check"
		  :iconVisibility="isValidPassword(valueReturn) && displayValidPassword"
		  :value="valueReturn"
		  v-bind:valueReturn.sync="valueReturn"
		  :onChange="onChangePassEvent"
		  />
		<slot
		  v-if="!disableToggle"
		  name="password-toggle"
		  :toggle="togglePassword"
		  >
			<button
			  type="button"
			  :class=getClassToggle(valueReturn)
			  @click="togglePassword"
			  >
				<span name="password-hide" v-if="this.typeValue === 'text'">
					<span class="fas fa-eye-slash"></span>
				</span>
				<span name="password-show" v-else>
					<span class="fas fa-eye"></span>
				</span>
			</button>
		</slot>
	</div>
</template>
<script>
import WDGInput from '@/../../common/src/components/WDGInput'

export default {
	name: 'WDGInputPassword',
	components: {
		WDGInput
	},
	props: {
		customStyle: { type: String, default: '' },
		type: { type: String, default: 'password' },
		value: { type: [String, Number], default: null },
		displayValidPassword: { type: Boolean, default: true },
		disableToggle: { type: Boolean, default: false },
		onChange: Function,
		onValidatePassword: Function
	},
	data () {
		return {
			typeValue: this.type,
			valueReturn: this.value
		}
	},
	methods: {
		onChangePassEvent () {
			this.$emit('update:valueReturn', this.valueReturn)
			if (this.onChange !== undefined) {
				this.onChange(this.valueReturn)
			}
		},
		isValidPassword (value) {
			const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm
			if (regex.test(value)) {
				if (this.onValidatePassword !== undefined) {
					this.onValidatePassword(value)
				}
				return true
			} else {
				return false
			}
		},
		togglePassword () {
			this.typeValue = this.typeValue === 'password' ? 'text' : 'password'
			this.$refs.inputPassword.focus()
		},
		getClassToggle (value) {
			if (this.isValidPassword(value) && this.displayValidPassword) {
				return 'input-icon-toggle veryleft'
			} else {
				return 'input-icon-toggle'
			}
		}
	}
}
</script>
<style>
	.wdg-input-password .input-icon-toggle {
		position: relative;
		width: 22px;
		left: 5px;
		height: 100%;
		border: 0px solid #FFF;
		background: #FFF;
		color: #00879B;
	}

</style>

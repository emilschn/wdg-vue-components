<template>
    <div class="wdg-input-password">
        <WDGInput
            id="password"
            name="password"
            ref="inputPassword"
            :customStyle="customStyle"
            :type="typeValue"
            icon="ok"
            :iconVisibility=isValidPassword(valueReturn)
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
                :class=getClassToggle(valueReturn)
                @click="togglePassword"
                >
                <span name="password-hide" v-if="this.typeValue === 'text'">
                    <span class="glyphicon glyphicon-eye-close"></span>
                </span>
                <span name="password-show" v-else>
                    <span class="glyphicon glyphicon-eye-open"></span>
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
        disableToggle: { type: Boolean, default: false },
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
            if (this.isValidPassword(value)) {
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
		left: -42px;
        height: 100%;
        border: 0px solid #FFF;
        background: #FFF;
        color: #00879B;
	}
	.wdg-input-password .veryleft {
		left: -56px;
	}
</style>

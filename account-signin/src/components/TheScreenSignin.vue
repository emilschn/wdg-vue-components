<template>
	<div class="the-screen-signin">
        <WDGMascot type="face-2" v-if="getMascotType == 'ask-email'">
            <slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WEDOGOOD') }}</slot>
        </WDGMascot>
        <WDGMascot type="face-1" v-if="getMascotType == 'connexion'">
            <slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WELCOME') }}{{ sharedState.user.name }} !</slot>
        </WDGMascot>
		<WDGMascot type="side-1" v-if="getMascotType == 'create-account'">
			<slot slot="text">
                <span>
                    <span class="title">{{ $t('account-signin.MASCOT_TEXT_NOTICE_1') }}</span><br><br>
                    <span class="title">{{ $t('account-signin.MASCOT_TEXT_NOTICE_2') }}</span>
                    <span class="title"><b>{{ $t('account-signin.MASCOT_TEXT_NOTICE_2bis') }}</b></span><br><br>
                    <span class="title"><i>{{ $t('account-signin.MASCOT_TEXT_NOTICE_3') }}</i></span>
                </span>
            </slot>
		</WDGMascot>
		<WDGMascot type="side-2" v-if="getMascotType == 'is-orga'">
            <slot slot="text">{{ $t('account-signin.MASCOT_TEXT_WELCOME') }}{{ orgaName }} !</slot>
		</WDGMascot>
        <WDGForm>
			<div>
				{{ $t('account-signin.LABEL_MAIL') }}<br>
				<WDGInput
				  id="email"
				  name="email"
				  type="email"
                  icon="ok"
                  :iconVisibility=validateEmail(sharedState.user.email)
				  :value="sharedState.user.email"
				  v-bind:valueReturn.sync="sharedState.user.email"
				  customStyle="natural-language"
		          :onChange="onChangeEmailEvent"
		          eventNameToListen="changeEmailAccount"
			  	  /><br>
                <WDGInput
                    placeholder=""
                    id="email1"
                    name="email1"
                    validationRule="length:0"
                    v-bind:honeypot="true"
                    v-bind:valueReturn.sync="honeypot1"
                    />
            </div>
			<div v-if="loginEmailStep === 'orga-account'">
                <!-- le compte existe et c'est une organization -->
		        <br>
                <WDGMessage
				  id="message"
                  iconSVG="info.svg"
                  >
					<slot slot="label">{{ $t('account-signin.SIGNIN_ERROR_ORGA') }}</slot>
                </WDGMessage><br>
                {{ $t('account-signin.LABEL_ORGA') }} {{orgaName}}
                <WDGButton
                    color="transparent"
                    type="button"
                    icon="user"
                    v-for="account in orgaAccounts"
                    :name="account.name"
                    :id="account.email"
                    v-bind:key="account.email"
                    :clickEvent="switchOrgaAccount"
                    >
                    <slot slot="label">{{ account.name }}</slot>
                </WDGButton>
            </div>
			<div v-else-if="loginEmailStep === 'facebook-account'">
                <!-- le compte existe et c'est une connexion via facebook -->
                <WDGButton
                color="facebook"
                type="button"
                >
                    <slot slot="label">{{ $t('account-signin.CONNECT_TO_FACEBOOK') }}</slot>
                </WDGButton>
            </div>
			<div v-else-if="loginEmailStep === 'not-existing-account'">
                <!-- le compte n'existe pas, on doit le créer -->
		        <br>
                <WDGMessage
				  id="message"
                  iconSVG="info.svg"
                  >
					<slot slot="label">{{ $t('account-signin.SIGNIN_ERROR_NOT_FOUND') }}</slot>
                </WDGMessage>
                <br>
                <div>
                    {{ $t('account-signin.LABEL_CREATE_PASSWORD') }}<br>
                    <WDGInputPassword
                        type="password"
                        :value="sharedState.user.password"
                        v-bind:valueReturn.sync="sharedState.user.password"
                        customStyle="natural-language"
		                :onChange="onChangePasswordEvent"
		                :onValidatePassword="onValidatePasswordEvent"
                        />
                    <div class="info">{{ $t('account-signin.NOTICE_PASSWORD') }}</div><br>
                </div>
                <div v-if="sharedState.user.password !== '' && passwordIsValid === true">
                    {{ $t('account-signin.LABEL_NAME') }}<br>
                    <div class="name">
                        <WDGInput
                        id="userFirstName"
                        name="userFirstName"
                        :placeholder="$t('common.FIRSTNAME')"
                        :value="sharedState.user.firstname"
                        v-bind:valueReturn.sync="sharedState.user.firstname"
                        customStyle="natural-language"
                        />
                        <WDGInput
                        id="userLastName"
                        name="userLastName"
                        :placeholder="$t('common.LASTNAME')"
                        :value="sharedState.user.lastname"
                        v-bind:valueReturn.sync="sharedState.user.lastname"
                        customStyle="natural-language"
                        />
                    </div>
                </div>
                <div class="cgu" v-if="sharedState.user.password !== '' && passwordIsValid === true && sharedState.user.firstname !== '' && sharedState.user.lastname !== ''">
                     <vue-recaptcha
                        ref="recaptcha"
                        @verify="onCaptchaVerified"
                        @expired="onCaptchaExpired"
                        :sitekey="sitekey"
                        :loadRecaptchaScript="true"
                        >
                    </vue-recaptcha>
                    <br>
                    <WDGCheckbox
                    id="acceptterms"
                    name="acceptterms"
                    validationRule="required"
                    v-bind:valueReturn.sync="acceptterms"
                    >
                    <slot slot="label">{{ $t('account-signin.I_ACCEPT_THE') }} <a href="/cgu/" target="_blank">{{ $t('account-signin.GENERAL_USE_TERMS') }}</a></slot>
                    </WDGCheckbox>
                </div>
                <WDGButton
                    v-if="canShowCreateAccount"
                    color="red"
                    type="button"
                    :clickEvent="createAccount"
                    >
                    <slot slot="label">{{ $t('common.CONTINUE') }}</slot>
                </WDGButton>
            </div>
			<div v-else-if="loginEmailStep === 'existing-account'">
                <!-- le compte existe on se connecte avec mot de passe -->
                <WDGButton
                    color="transparent"
                    type="button"
                    icon="user"
                    :name="sharedState.user.name"
                    :id="sharedState.user.email"
                    v-bind:key="sharedState.user.email"
                    >
                    <slot slot="label">{{ sharedState.user.name }}</slot>
                </WDGButton>
                <br><br>
                <div>
                    {{ $t('account-signin.LABEL_WRITE_PASSWORD') }}<br>
                    <WDGInputPassword
                        type="password"
                        :value="sharedState.user.password"
                        v-bind:valueReturn.sync="sharedState.user.password"
                        customStyle="natural-language"
		                :onChange="onChangePasswordEvent"
		                :onValidatePassword="onValidatePasswordEvent"
                        />
                    <br><br>
                    <div class="forgotten-password">
                        <a @click="onForgottenPassword">{{ $t('account-signin.FORGOTTEN_PASSWORD') }}</a>
                    </div><br>
                    <WDGCheckbox
                    id="rememberme"
                    name="rememberme"
                    v-bind:valueReturn.sync="rememberme"
                    >
                    <slot slot="label">{{ $t('account-signin.REMEMBER_ME') }}</slot>
                    </WDGCheckbox>
                    <WDGButton
                        v-if="canShowConnexion"
                        color="red"
                        type="button"
                        :clickEvent="connectAccount"
                        >
                        <slot slot="label">{{ $t('account-signin.CONNECTION') }}</slot>
                    </WDGButton>
                </div>
            </div>
        </WDGForm>
	</div>
</template>

<script>
// import i18n from '@/i18n'
import { store } from '../store.js'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGForm from '@/../../common/src/components/WDGForm'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGInputPassword from '@/../../common/src/components/WDGInputPassword'
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
import VueRecaptcha from 'vue-recaptcha'
export default {
	name: 'TheScreenSignin',
	components: {
		WDGForm,
		WDGInput,
		WDGMascot,
        WDGMessage,
        WDGCheckbox,
        WDGButton,
        WDGInputPassword,
        VueRecaptcha
	},
	props: {
        // define('RECAPTCHA_SECRET', '6LcoHRIUAAAAALw2iKHxMCvfyZ_6eKai92vF4bog');
	},
	data () {
		return {
		    loginEmailStep: { type: String, default: 'empty-email' },
			sharedState: store.state,
			userMail: '',
		    acceptterms: false,
            acceptcaptcha: false,
            orgaAccounts: { type: Array },
            orgaName: '',
            rememberme: false,
		    passwordIsValid: { type: Boolean, default: false },
            sitekey: '6LcoHRIUAAAAALw2iKHxMCvfyZ_6eKai92vF4bog',
            honeypot1: ''
		}
	},
    methods: {
        validateEmail (value) {
            if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
                return true
            } else {
                return false
            }
        },
        onChangeEmailEvent () {
            if (this.sharedState.user.email === '') {
                this.loginEmailStep = 'empty-email'
            } else if (!this.validateEmail(this.sharedState.user.email)) {
                this.loginEmailStep = 'bad-email'
            } else {
                // on vérifie d'abord si le compte existe
                if (this.isExistingAccount()) {
                    this.loginEmailStep = 'existing-account'
                    if (this.isOrgaAccount()) {
                        this.loginEmailStep = 'orga-account'
                        this.getOrgaAccount()
                        this.getOrgaName()
                    } else if (this.isFacebookConnection()) {
                        this.loginEmailStep = 'facebook-account'
                    }
                } else {
                    this.loginEmailStep = 'not-existing-account'
                    //
                }
            }
        },
        onChangePasswordEvent (value) {
            this.passwordIsValid = false
        },
        onValidatePasswordEvent (value) {
            this.passwordIsValid = true
        },
        getOrgaName () {
            // TODO : aller chercher le nom de cette orga
            this.orgaName = 'YPROJECT'
        },
        getOrgaAccount () {
            // TODO : aller chercher les comptes liés à cette orga
            this.orgaAccounts = [
				{ email: 'thomas@wadogood.co', name: 'Thomas Dupont' },
				{ email: 'marianne@wadogood.co', name: 'Marianne Alberti' }
			]
           // return this.orgaAccounts
        },
        switchOrgaAccount: async function (...args) {
            this.sharedState.user.email = args[0].id
            this.sharedState.user.name = args[0].name
            this.$root.$emit('changeEmailAccount', this.sharedState.user.email)
            this.loginEmailStep = 'existing-account'
            if (this.isFacebookConnection()) {
                this.loginEmailStep = 'facebook-account'
            }
        },
		isExistingAccount () {
            // TODO : vérifier si un compte avec ce mail existe
            if (this.sharedState.user.email === 'helene@wedogood.co' || this.sharedState.user.email === 'orga@wedogood.co' || this.sharedState.user.email === 'facebook@wedogood.co' || this.sharedState.user.email === 'thomas@wadogood.co' || this.sharedState.user.email === 'marianne@wadogood.co') {
                return true
            }
			return false
		},
        isOrgaAccount () {
            // TODO : vérifier ce mail correspond à une orga
            if (this.sharedState.user.email === 'orga@wedogood.co') {
                this.sharedState.isOrgaAccount = true
                return true
            }
			return false
        },
        isFacebookConnection () {
            // TODO : vérifier  ce mail correspond à une connexion avec facebook
            if (this.sharedState.user.email === 'facebook@wedogood.co' || this.sharedState.user.email === 'marianne@wadogood.co') {
                this.sharedState.isFacebookAccount = true
                return true
            }
			return false
        },
		createAccount: function (event) {
            store.setCreationTag(true)
			store.changeStep('confirmation')
		},
		connectAccount: function (event) {
            store.setCreationTag(false)
			store.changeStep('confirmation')
		},
        onForgottenPassword: function () {
			store.changeStep('forgotten-pass')
        },
        onCaptchaVerified: function (recaptchaToken) {
            console.log('onCaptchaVerified: ' + recaptchaToken)
        //   const self = this;
        //   self.status = "submitting";
        //   self.$refs.recaptcha.reset();
        //   axios.post("https://vue-recaptcha-demo.herokuapp.com/signup", {
        //     email: self.email,
        //     password: self.password,
        //     recaptchaToken: recaptchaToken
        //   }).then((response) => {
        //     self.sucessfulServerResponse = response.data.message;
        //   }).catch((err) => {
        //     self.serverError = getErrorMessage(err);
        //     //helper to get a displayable message to the user
        //     function getErrorMessage(err) {
        //       let responseBody;
        //       responseBody = err.response;
        //       if (!responseBody) {
        //         responseBody = err;
        //       }
        //       else {
        //         responseBody = err.response.data || responseBody;
        //       }
        //       return responseBody.message || JSON.stringify(responseBody);
        //     }

        //   }).then(() => {
        //     self.status = "";
        //   });
        },
        onCaptchaExpired: function () {
            console.log('onCaptchaExpired: ')
            this.$refs.recaptcha.reset()
        }
    },
	computed: {
		getMascotType () {
            if (this.loginEmailStep === 'existing-account' || this.loginEmailStep === 'facebook-account') {
				return 'connexion'
            } else if (this.loginEmailStep === 'orga-account') {
				return 'is-orga'
            } else if (this.loginEmailStep === 'not-existing-account') {
				return 'create-account'
			} else {
				return 'ask-email'
			}
		},
		canShowCreateAccount () {
			if (process.env.NODE_ENV === 'development') {
				// return true
			}
            return (
				this.sharedState.user.email !== '' &&
				this.sharedState.user.password !== '' &&
				this.sharedState.user.firstname !== '' &&
				this.sharedState.user.lastname !== '' &&
				this.acceptterms !== false
			)
        },
        canShowConnexion () {
			if (process.env.NODE_ENV === 'development') {
				// return true
			}
            return (
				this.sharedState.user.email !== '' &&
				this.sharedState.user.password !== ''
			)
        }
	}
}
</script>

<style>
    .the-screen-signin .wdg-form {
		margin: 40px;
		/* font-size: 20px; */
		/* line-height: 60px; */
		font-weight: 500;
	}
	.the-screen-signin input#email {
		width: 370px;
	}
	.the-screen-signin input#password {
		width: 370px;
	}
	.the-screen-signin div .info {
		width: 400px;
        font-size: 12px;
		font-weight: 400;
        color: #C2C2C2;
        margin-top: 10px;
	}
	.the-screen-signin .name {
        display: flex;
        justify-content: space-between;
	}
	.the-screen-signin .cgu {
		width: 400px;
        font-size: 12px;
		font-weight: 400;
        color: #C2C2C2;
        margin-top: 10px;
	}
	.wdg-message {
        width: 370px;
        left: 242.5498046875px;
        top: 344px;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
	}
    .the-screen-signin button {
        margin-top: 10px;
        max-width: 370px;
    }
    div.the-screen-signin a {
        color: #EA4F51;
        text-decoration: underline;
        cursor: pointer;
    }
    .the-screen-signin .wdg-mascot{
        max-width: 300px;
    }
@media only screen and (max-width: 767px) {
    .the-screen-signin .content {
        flex-direction: column;
    }
    .the-screen-signin .time {
        margin-bottom: 50px;
    }
    .wdg-mascot {
        display: none;
    }
    .the-screen-signin button {
        max-width: 200px;
    }
}
</style>

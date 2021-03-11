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
				  :value="sharedState.user.email"
				  v-bind:valueReturn.sync="sharedState.user.email"
				  customStyle="natural-language"
		          :onChange="onChangeEmailEvent"
		            eventNameToListen="changeEmailAccount"
			  	  /><br>
            </div>
			<div v-if="loginEmailStep === 'orga-account'">
                <!-- le compte existe et c'est une organization -->
		        <br>
                <WDGMessage
				  id="message"
                  icon="info.svg"
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
                  icon="info.svg"
                  >
					<slot slot="label">{{ $t('account-signin.SIGNIN_ERROR_NOT_FOUND') }}</slot>
                </WDGMessage>
                <br>
                <div>
                    {{ $t('account-signin.LABEL_CREATE_PASSWORD') }}<br>
                    <WDGInput
                    id="password"
                    name="password"
                    type="password"
                    :value="sharedState.user.password"
                    v-bind:valueReturn.sync="sharedState.user.password"
                    customStyle="natural-language"
                    /><br>
                    <div class="info">{{ $t('account-signin.NOTICE_PASSWORD') }}</div><br>
                </div>
                <div v-if="sharedState.user.password !== '' && isValidPassword(sharedState.user.password)">
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
                <div class="cgu" v-if="sharedState.user.password !== '' && isValidPassword(sharedState.user.password) && sharedState.user.firstname !== '' && sharedState.user.lastname !== ''">
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
                    <WDGInput
                    id="password"
                    name="password"
                    type="password"
                    :value="sharedState.user.password"
                    v-bind:valueReturn.sync="sharedState.user.password"
                    customStyle="natural-language"
                    /><br><br>
                    <div class="forgotten-password">
                        <a href="/mot-de-passe-oublie/">{{ $t('account-signin.FORGOTTEN_PASSWORD') }}</a>
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
import WDGMessage from '@/../../common/src/components/WDGMessage'
import WDGCheckbox from '@/../../common/src/components/WDGCheckbox'
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheScreenSignin',
	components: {
		WDGForm,
		WDGInput,
		WDGMascot,
        WDGMessage,
        WDGCheckbox,
        WDGButton
	},
	props: {
	},
	data () {
		return {
		    loginEmailStep: { type: String, default: 'empty-email' },
			sharedState: store.state,
			userMail: '',
		    acceptterms: false,
            orgaAccounts: { type: Array },
            orgaName: '',
            rememberme: false
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
        isValidPassword (value) {
            const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/gm
            if (regex.test(value)) {
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
                return true
            }
			return false
        },
        isFacebookConnection () {
            // TODO : vérifier  ce mail correspond à une connexion avec facebook
            if (this.sharedState.user.email === 'facebook@wedogood.co' || this.sharedState.user.email === 'marianne@wadogood.co') {
                return true
            }
			return false
        },
		createAccount: function (event) {
			//
		},
		connectAccount: function (event) {
			//
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
    .wdg-mascot{
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

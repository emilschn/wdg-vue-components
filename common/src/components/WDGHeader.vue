<template>
	<div class="header">
		<span class="logo">
			<a :href="getHomeURL"><img src="@/../../common/src/assets/logos/logo-wdg.png"  alt="WE DO GOOD" /></a>
		</span>
		<span
		  v-if="hasTitle === true"
		  class="title"
		  >
			<slot name="title"></slot>
		</span>
		<transition name="fade">
			<span
			v-if="hasAlert"
			class="alert"
			>
				{{ alertContent }}
			</span>
		</transition>
		<span
		  v-if="langSelector === true"
		  class="lang"
		  >
			<WDGSelect
				id="lang-select"
				name="lang-select"
				:optionItems="langList"
				:value="$i18n.locale"
				v-bind:valueReturn.sync="$i18n.locale"
		  		:onSelect="onLangSelectEvent"
			  />
		</span>
		<span
		  v-if="backButtonVisible"
		  class="back"
		  >
			<WDGButton
			  color="transparent"
			  type="button"
			  :clickEvent="onBackEvent"
			  >
				<slot slot="label"><img src="@/../../common/src/assets/icons/previous.png"  alt="Précédent"/></slot>
			</WDGButton>
		</span>
		<span
		  v-if="closeButton === true"
		  class="close"
		  >
			<WDGButton
			  color="transparent"
			  type="button"
			  :clickEvent="onCloseEvent"
			  >
				<slot slot="label"><img src="@/../../common/src/assets/icons/close.png"  alt="Fermer"/></slot>
			</WDGButton>
		</span>
        <hr>
	</div>
</template>

<script>
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'WDGHeader',
	components: {
		WDGSelect,
		WDGButton
	},
	props: {
		langSelector: { type: Boolean, default: false },
		backButtonVisible: { type: Boolean, default: false },
		onBack: {type: Function},
		onLangSelect: {type: Function},
		closeButton: {type: Boolean, default: false},
		hasTitle: {type: Boolean, default: true}
	},
	data () {
		return {
			langList: [
				{ 'Id': 'fr', 'Text': 'FR' },
				{ 'Id': 'en', 'Text': 'EN' }
			],
			hasAlert: false,
			alertContent: '',
			alertTimeoutId: 0
		}
	},
	computed: {
		getHomeURL () {
			// TODO : récupérer home_url
			if (process.env.NODE_ENV === 'development') {
				return 'http://wedogood.local/'
			} else {
				return 'https://www.wedogood.co/'
			}
		}
	},
	mounted () {
		this.$root.$on('headerAlert', this.onHeaderAlertEvent)
	},
	methods: {
		onBackEvent: function () {
			this.onBack()
		},
		onCloseEvent: function () {
			// home URL ou page précédente ?
			location.href = this.getHomeURL
		},
		onLangSelectEvent (sSelectedLang) {
			this.onLangSelect(sSelectedLang)
		},
		onHeaderAlertEvent (sNewAlertContent, nTimeout) {
			this.alertContent = sNewAlertContent
			this.hasAlert = true
			if (nTimeout > 0) {
				this.alertTimeoutId = setTimeout(() => { this.onHeaderAlertTimeoutEvent() }, nTimeout)
			}
		},
		onHeaderAlertTimeoutEvent () {
			this.hasAlert = false
		}
	}
}
</script>

<style>
.header{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	padding-top: 15px;
	align-items: center;
}
.header .logo {
	width: 35%;
}
.header .title {
	font-size: 23px;
	font-weight: bold;
	color: #00879b;
	width: 45%;
	text-align: right;
}
.header .alert {
	width: 10%;
}
hr {
	border: 1;
	height: 0;
	margin-top: 16px;
	margin-bottom: 0px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	border-bottom: 1px solid #f4f2f2;
	width: 100%;
}
.close .wdg-button button, .back .wdg-button button {
	border: 0;
	margin-bottom: 0;
}
.close img, .back img {
	width: 20px;
	height: 20px;
}
.lang {
	align-self: center;
	width: 45%;
	text-align: right;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: 767px) {
	.header {
		align-items: center;
	}
	.header .logo {
		width: 40%;
	}
	.header .logo img {
		width: 70%;
		margin-left: 20px;
	}
	.header .title{
		font-size: 16px;
		width: 40%;
		margin-right: 20px;
	}
	.header .lang {
		width: 30%;
	}
	.header .close {
		margin: 0px 15px;
	}
	.header .back {
		margin-left: 15px;
	}
}
</style>

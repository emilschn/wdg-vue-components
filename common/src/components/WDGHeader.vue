<template>
	<div class="header">
        <span class="logo">
            <a :href="getHomeURL"><img src="@/../../common/src/assets/logos/logo-wdg.png"  alt="WE DO GOOD" /></a>
        </span>
		<span class="title" v-if="hasTitle === true">
			<slot name="title"></slot>
		</span>
		<span class="lang" v-if="langSelector === true">
			<WDGSelect
			  id="lang-select"
			  name="lang-select"
			  :optionItems="langList"
			  :value="$i18n.locale"
			  v-bind:valueReturn.sync="$i18n.locale"
			  />
		</span>
		<span class="close" v-if="closeButton === true">
			<WDGButton
			color="transparent"
			type="button"
			:clickEvent="closeApp"
			>
				<slot slot="label">X</slot>
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
		closeButton: {type: Boolean, default: false},
		hasTitle: {type: Boolean, default: true}
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
	data () {
		return {
			langList: [
				{ 'Id': 'fr', 'Text': 'FR' },
				{ 'Id': 'en', 'Text': 'EN' }
			]
		}
	},
	methods: {
		closeApp: function () {
			// home URL ou page précédente ?
        	location.href = this.getHomeURL
		},
		onLangSelect (sSelectedLang) {
			console.log('onLangSelect sSelectedLang = ' + sSelectedLang)
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
}
.header .logo {
	width: 45%;
}
.header .title {
	font-size: 23px;
    font-weight: bold;
    color: #00879b;
	width: 45%;
	text-align: right;
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
.close .wdg-button button {
	border: 0;
}
.lang {
	align-self: center;
	width: 45%;
	text-align: right;
}

@media screen and (max-width: 767px) {
.header {
	align-items: center;
}
.header .logo img {
	width: 70%;
	margin-left: 20px;
}
.header .title{
	font-size: 16px;
	width: 120px;
	margin-right: 20px;
}
}
</style>

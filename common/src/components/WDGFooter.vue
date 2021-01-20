<template>
	<div>
		<div class="footer" :class="['bg-'+BGColor, 'text-'+TextColor]">
			<!-- TODO : avoir différents styles de footer  -->
			<div>
				<span class="title">{{ $t('project-setup.footer.SUCCESS_TEXT_1') }}</span><br>
				<span class="text">{{ $t('project-setup.footer.SUCCESS_TEXT_2') }}</span><br>
			</div>
			<div>
				<span class="title">{{ $t('project-setup.footer.TIME_TEXT_1') }}</span><br>
				<span class="text">{{ $t('project-setup.footer.TIME_TEXT_2') }}</span>
			</div>
			<div class="logo_ifp">
				<a href="https://acpr.banque-france.fr/agrements-et-autorisations/le-financement-participatif-crowdfunding.html"><img src="@/../../common/src/assets/logos/ifp.png"  alt="WE DO GOOD" /></a>
			</div>
			<div class="logo_bcorp">
				<a href="https://bcorporation.net/directory/we-do-good">
					<img src="@/../../common/src/assets/logos/bcorp.png" alt="CERTIFIE B CORPS" v-if="$i18n.locale === 'fr'" />
					<img src="@/../../common/src/assets/logos/bcorp-en.png" alt="CERTIFIED B CORPS" v-if="$i18n.locale !== 'fr'" />
				</a>
			</div>
		</div>
		<div class="subfooter">
			<WDGSelect
			  id="lang-select"
			  name="lang-select"
			  :optionItems="langList"
			  :value="$i18n.locale"
			  v-bind:valueReturn.sync="$i18n.locale"
			  />
		</div>
	</div>
</template>

<script>
import WDGSelect from './WDGSelect'

export default {
	name: 'WDGFooter',
	components: {
		WDGSelect
	},
	props: {
        BGColor: { type: String, default: 'black' },
        TextColor: { type: String, default: 'black' }
	},
	computed: {
		langList: function () {
			return [
				{ Id: 'en', Text: 'English' },
				{ Id: 'fr', Text: 'Français' }
			]
		}
	}
}
</script>

<style>
.footer {
	background: #333333;
	width: 100%;
	height: 160px;
	display: flex;
	justify-content: space-around;
	align-items: center;
}
.footer .logo_bcorp img {
	width: 60px;
	filter: invert(100%);
}
.footer .logo_ifp img {
	width: 100px;
}
.footer .title {
	color: #FFFFFF;
	font-size: 24px;
	font-weight: 100;
	text-align: center;
	display: inline-block;
	width:160px;
}
.footer .text {
	color: #FFFFFF;
	font-weight: 500;
	text-align: center;
	display: inline-block;
	width:160px;
}
.footer.bg-blue {
    background: #00879B;
}
.footer.bg-red {
    background: #EA4F51;
}
.footer.bg-yellow {
    background: #EBCE67;
}
.footer.bg-green {
    background: #5EB82C;
}
.footer.bg-grey {
    background: #e1e2e3;
}
.footer.bg-pink {
    background: #F9CBCB;
}
.footer.title.text-black {
    color: #333333;
    background: #fff;
}
.footer.title.text-blue {
    color: #00879B;
}
.footer.title.text-red {
    color: #EA4F51;
}
.footer.title.text-yellow {
    color: #EBCE67;
}
.footer.title.text-green {
    color: #5EB82C;
}
.footer.title.text-grey {
    color: #e1e2e3;
}
.footer.title.text-pink {
    color: #F9CBCB;
}
.subfooter {
	width: 100%;
	padding: 16px 0px;
	text-align: center;
	background: #333333;
	color: #FFF;
}
@media only screen and (max-width: 767px) {
	.footer {
		flex-wrap: wrap;
		height: 220px;
	}
	.footer div {
		width: 45%;
		text-align: center;
	}
	.footer .title {
		font-size: 18px;
		width: 140px;
		margin-top: 20px;
	}
	.footer .text {
		font-size: 12px;
		width: 140px;
		margin-bottom: 20px;
	}
	.footer .logo_ifp img {
		width: 75px;
	}
	.footer .logo_bcorp img {
		width: 50px;
	}
}
</style>

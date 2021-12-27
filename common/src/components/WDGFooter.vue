<template>
	<div>
        <div class="footer" :class="['bg-'+BGColor, 'text-'+TextColor]" v-if="FooterStyle == 'prospect-setup'">
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
					<img src="@/../../common/src/assets/logos/bcorp.png" alt="Certifié B Corp" v-if="$i18n.locale === 'fr'" />
					<img src="@/../../common/src/assets/logos/bcorp-en.png" alt="Certified B Corp" v-if="$i18n.locale !== 'fr'" />
				</a>
			</div>
        </div>
        <div class="footer" :class="['bg-'+BGColor, 'text-'+TextColor]" v-else-if="FooterStyle == 'account'">
            <div class="logo_ifp">
                <a href="https://acpr.banque-france.fr/agrements-et-autorisations/le-financement-participatif-crowdfunding.html"><img src="@/../../common/src/assets/logos/bw_ifp.svg"  alt="WE DO GOOD" /></a>
            </div>
            <div class="logo_fpf">
                <a href="https://financeparticipative.org/"><img src="@/../../common/src/assets/logos/bw_FPF.svg"  alt="WE DO GOOD" /></a>
            </div>
            <div class="logo_fi">
                <a href="https://finance-innovation.org/"><img src="@/../../common/src/assets/logos/bw_fi.svg"  alt="WE DO GOOD" /></a>
            </div>
            <div class="logo_lw">
                <a href="https://www.lemonway.com/"><img src="@/../../common/src/assets/logos/bw_lemonway.svg"  alt="WE DO GOOD" /></a>
            </div>
            <div class="logo_bcorp">
                <a href="https://bcorporation.net/directory/we-do-good"><img src="@/../../common/src/assets/logos/bw_bcorp.svg"  alt="CERTIFIE B CORPS" /></a>
            </div>
        </div>
		<!-- <div class="subfooter" v-if="FooterStyle == 'prospect-setup'">
			<WDGSelect
			  id="lang-select"
			  name="lang-select"
			  :optionItems="langList"
			  :value="$i18n.locale"
			  v-bind:valueReturn.sync="$i18n.locale"
			  :onSelect="onLangSelect"
			  />
		</div> -->
	</div>
</template>

<script>
// import WDGSelect from './WDGSelect'

export default {
	name: 'WDGFooter',
	// components: {
	// 	WDGSelect
	// },
	props: {
        BGColor: { type: String, default: 'black' },
        TextColor: { type: String, default: 'white' },
        FooterStyle: { type: String, default: 'prospect-setup' },
        onLangSelect: { type: Function }
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
	background: #EBEBEB;
	width: 100%;
	height: 160px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-top: 1.5px solid #C2C2C2;
}
.footer .logo_bcorp img {
	width: 60px;
}
.footer.bg-black .logo_bcorp img {
	filter: invert(100%);
}
.footer .logo_ifp img {
	width: 100px;
}
.footer .title {
	color: #333;
	font-size: 24px;
	font-weight: 100;
	text-align: center;
	display: inline-block;
	width:160px;
}
.footer .text {
	color: #333;
	font-weight: 500;
	text-align: center;
	display: inline-block;
	width:160px;
}
.footer.bg-black {
    background: #333333;
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
.footer.text-white {
    color: #FFFFFF;
}
.footer.text-black {
    color: #333333;
}
.footer.text-blue {
    color: #00879B;
}
.footer.text-red {
    color: #EA4F51;
}
.footer.text-yellow {
    color: #EBCE67;
}
.footer.text-green {
    color: #5EB82C;
}
.footer.text-grey {
    color: #e1e2e3;
}
.footer.text-pink {
    color: #F9CBCB;
}
.subfooter {
	width: 100%;
	padding: 16px 0px;
	text-align: center;
	background: #e1e2e3;
	color: #FFF;
}
@media only screen and (max-width: 767px) {
	.footer {
		flex-wrap: wrap;
		height: auto;
	}
	.footer div {
		width: 45%;
		text-align: center;
		margin: 10px;
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

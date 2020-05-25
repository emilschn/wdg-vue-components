<template>
	<div class="footer">
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
            <a href="https://bcorporation.net/directory/we-do-good"><img src="@/../../common/src/assets/bcorp.png"  alt="CERTIFIE B CORPS" /></a>
        </div>
	</div>
</template>

<script>

export default {
	name: 'WDGFooter',
	components: {
	},
	props: {
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
@media only screen and (max-width: 767px) {
.footer {
    flex-wrap: wrap;
    height: 220px;
    overflow: hidden;
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

<template>
	<div class="header">
        <span class="logo">
            <!-- TODO : récupérer home_url -->
            <a href="https://www.wedogood.co/"><img src="@/../../common/src/assets/logo-wdg.png"  alt="WE DO GOOD" /></a>
        </span>
        <!-- TODO : prévoir qu'on puisse afficher le menu ou juste un titre -->
		<span class="title">
			<slot name="title"></slot>
		</span>
        <hr>
	</div>
</template>

<script>

export default {
	name: 'WDGHeader',
	components: {
	},
	props: {
	}
}
</script>

<style>
.header .logo {
	text-align: left;
}
.header .title {
	font-size: 30px;
    font-weight: bold;
	float: right;
    color: #00879b;
}
hr {
    border: 1;
    height: 0;
	margin-top: 16px;
	margin-bottom: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid #f4f2f2;
}
</style>

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
</style>

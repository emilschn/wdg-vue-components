<template>
    <div class="wdg-separator">
        <hr>
		<div
		v-if="labelSeparator"
		>
		{{ labelSeparator }}
		</div>
    </div>
</template>

<script>
export default {
	name: 'WDGSeparator',
	props: {
		labelSeparator: { type: String, default: '' }
    },
    computed: {
    }
}
</script>

<style>
.wdg-separator {
	text-align: center;
}
.wdg-separator hr {
	margin: 16px 0px;
	-moz-border-bottom-colors: none;
	-moz-border-left-colors: none;
	-moz-border-right-colors: none;
	-moz-border-top-colors: none;
	border-color: -moz-use-text-color;
	border-image: none;
	border-right: 0 none;
	border-style: solid none none;
	border-width: 2px 0 0;
	color: #333;
}
.wdg-separator div {
	display: inline-block;
	position: relative;
	top: -27px;
	padding: 0px 8px;
	background: #f2f2f2;
}
</style>

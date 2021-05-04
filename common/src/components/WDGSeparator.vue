<template>
    <div class="wdg-separator">
        <hr>
		<div
		  v-if="label"
		  >
			{{ label }}
		</div>
    </div>
</template>

<script>
export default {
	name: 'WDGSeparator',
	props: {
		label: { type: String, default: '' }
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
	border: 1.5px solid #C2C2C2;
}
</style>

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
</style>

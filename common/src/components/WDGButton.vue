<template>
    <div class="wdg-button">
        <button
        :type="typeButton"
        :id="idButton"
        v-bind="$attrs"
        :disabled="disabled"
        >
		{{ labelButton }}
        </button>
    </div>
</template>

<script>
export default {
	name: 'WDGButton',
	props: {
		labelButton: { type: String, default: 'Enter text' },
		idButton: { type: String, default: null },
		typeButton: { type: String, default: 'submit' },
		colorButton: { type: String, default: 'red' },
        nameButton: { type: String, default: null },
        disabled: { type: Boolean, default: false },
        action: Function
    },
    computed: {
    }
}
</script>

<style>
</style>

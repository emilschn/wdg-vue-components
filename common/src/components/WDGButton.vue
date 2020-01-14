<template>
    <div class="wdg-button">
        <input
        type="button"
        :id="idButton"
        v-model="labelButton"
        v-bind="$attrs"
        :placeholder="labelButton"
        :disabled="disabled"
        >
    </div>
</template>

<script>
export default {
	name: 'WDGButton',
	props: {
		labelButton: { type: String, default: 'Enter text' },
		idButton: { type: String, default: null },
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
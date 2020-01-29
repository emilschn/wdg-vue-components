<template>
    <form
	:id="formName"
	:name="formName"
	:action="formAction"
	:enctype="hasFiles ? 'multipart/form-data' : undefined"
	@submit.prevent="onSubmitEvent()"
	method="POST"
	class="wdg-form">
        <slot></slot>
    </form>
</template>

<script>
export default {
	name: 'WDGForm',
	props: {
		formName: { type: String, default: '' },
		formAction: { type: String, default: '' },
		onSubmitEvent: { type: Function },
		hasFiles: { type: Boolean, default: false }
    },
	mounted () {
    }
}
</script>

<style>
.wdg-form label, .wdg-form input, .wdg-form button {
	width: 100%;
}
.wdg-form input[type=checkbox], .wdg-form input[type=radio] {
	width: auto;
}
</style>

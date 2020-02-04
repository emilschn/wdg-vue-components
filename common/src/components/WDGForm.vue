<template>
    <form
	:id="formName"
	:name="formName"
	:action="formAction"
	:enctype="hasFiles ? 'multipart/form-data' : undefined"
	@submit.prevent="onSubmitEvent"
	method="POST"
	class="wdg-form">
		<span v-if="(errorFeedback !== '')"><span class="error-feedback">{{ errorFeedback }}</span><br></span>
		<span v-if="(successFeedback !== '')"><span class="success-feedback">{{ successFeedback }}</span><br></span>
        <slot></slot>
    </form>
</template>

<script>
import '../../validationRules.js'

export default {
	name: 'WDGForm',
	props: {
		formName: { type: String, default: '' },
		formAction: { type: String, default: '' },
		onSubmitEvent: { type: Function },
		hasFiles: { type: Boolean, default: false },
		errorFeedback: { type: String, default: '' },
		successFeedback: { type: String, default: '' }
    }
}

</script>

<style>
.wdg-form, .wdg-form .wdg-input, .wdg-form .wdg-checkbox {
	margin-bottom: 16px;
}

.wdg-form label {
	display: block;
	width: 100%;
	margin-bottom: 8px;
	font-weight: bold;
}

.wdg-form input {
	width: -webkit-calc(100% - 16px);
	width: -moz-calc(100% - 16px);
	width: calc(100% - 16px);
	height: 48px;
	padding: 4px 8px;
	border: none;
	background: #FFF;
	font-size: 16px;
}

.wdg-form textarea {
	width: 100%;
}
.wdg-form input[type=radio] {
	width: auto;
}

.wdg-form span.wdg-message.error {
	display: block;
	width: 100%;
	margin-bottom: 8px;
	padding: 8px 0px;
	text-transform: uppercase;
	text-align: center;
	background: #EACDCB;
	color: #333333;
}

.wdg-form .wdg-checkbox label {
  position: relative;
  padding-left: 32px;
  line-height: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.wdg-form .wdg-checkbox label input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}
.wdg-form .wdg-checkbox label .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #ffffff;
  border: 1px solid #333;
}
.wdg-form .wdg-checkbox label input:checked ~ .checkmark {
  background-color: #333;
}
.wdg-form .wdg-checkbox label.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.wdg-form .wdg-checkbox label input:checked ~ .checkmark:after {
  display: block;
}
</style>

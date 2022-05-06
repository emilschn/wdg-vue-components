<template>
    <form
	  :id="name"
	  :name="name"
	  :action="action"
	  :enctype="hasFiles ? 'multipart/form-data' : undefined"
	  @submit.prevent="onLocalSubmitEvent"
	  method="POST"
	  class="wdg-form"
	  >
		<span v-if="(errorFeedback !== '')">
			<span class="wdg-message error">{{ errorFeedback }}</span>
			<br>
		</span>
		<span v-if="(successFeedback !== '')">
			<span class="wdg-message success">{{ successFeedback }}</span>
			<br>
			</span>
        <slot></slot>
    </form>
</template>

<script>
import '../../validationRules.js'

export default {
	name: 'WDGForm',
	props: {
		name: { type: String, default: '' },
		action: { type: String, default: '' },
		onSubmitEvent: { type: Function },
		hasFiles: { type: Boolean, default: false },
		errorFeedback: { type: String, default: '' },
		successFeedback: { type: String, default: '' }
    },
	methods: {
		onLocalSubmitEvent () {
			if (this.onSubmitEvent !== undefined) {
				this.onSubmitEvent()
			}
		}
	}
}

</script>

<style>
	.wdg-form {
		margin-bottom: 16px;
	}

	.wdg-form label {
		display: block;
		width: 100%;
		margin-bottom: 8px;
		font-weight: 500;
	}

	.wdg-form input[type=radio] {
		width: auto;
	}

	.wdg-form span.wdg-message {
		display: block;
		width: 100%;
		margin-bottom: 8px;
		padding: 8px 0px;
		text-transform: uppercase;
		text-align: center;
	}
	.wdg-form span.wdg-message.error {
		background: #EACDCB;
		color: #333333;
	}
	.wdg-form span.wdg-message.success {
		background: #8BC79C;
		color: #FFFFFF;
	}
</style>

<template>
	<div class="wdg-upload">
			<WDGButton
				color="document-upload"
				icon="file-upload"
				:clickEvent="onClickLocalEvent"
				>
				<slot slot="label">{{ $t('common.SEND_FILE') }}</slot>
			</WDGButton>
			{{ $t('common.SEND_FILE_DESCRIPTOR') }}
	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'WDGUpload',
	components: {
		WDGButton
	},
	props: {
		id: { type: String, default: null },
		color: { type: String, default: 'red' },
		name: { type: String, default: null },
		clickEvent: Function
	},
	computed: {
	},
	methods: {
		onClickLocalEvent () {
			if (this.clickEvent !== undefined) {
				this.clickEvent(this._props)
			}
		}
	}
}
</script>

<style>
button {
	width: 100%;
	height: 48px;
	margin-bottom: 16px;
	padding: 0px;
	text-transform: uppercase !important; /* ajout de important sinon c'est écrasé par normalize.less */
	cursor: pointer;
}

</style>

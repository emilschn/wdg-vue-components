<template>
	<div class="the-result-payment-complete">
		<div class="message-confirmation">
			<svg width="48" height="48">
				<image xlink:href="@/../../common/src/assets/icons/check.svg" src="@/../../common/src/assets/icons/check.png" width="48" height="48"></image>
			</svg><br>
			{{ $t('project-setup.payment.complete.CONFIRMATION') }}
		</div>

		<div class="message-create">
			{{ $t('project-setup.payment.complete.THANK_YOU') }}
			<br>
			{{ $t('project-setup.payment.complete.CREATE') }}
		</div>
		<br><br>

		<WDGButton
		  color="red"
		  type="button"
		  :link="continueLink"
		  >
			<slot slot="label">{{ $t('project-setup.CONTINUE') }}</slot>
		</WDGButton>

		<div class="message-admin"  v-if="sharedProps.capacities.edit_bundles === '1'">
			<WDGFileList
				id="files"
				name="files"
				textColor="grey"
				disabled="true"
				:initFileList="sharedProps.initFileList"
				>
			</WDGFileList>
			<div>
				{{sharedState.project}}
			</div>
		</div>
		<br><br>

	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGFileList from '@/../../common/src/components/WDGFileList'
export default {
	name: 'TheResultPaymentComplete',
	components: {
		WDGButton,
		WDGFileList
	},
	props: {
		guid: { type: String, default: '' }
	},
	methods: {
	},
	computed: {
		continueLink () {
			return 'https://www.wedogood.co/lancement/?guid=' + this.guid
		}
	},
	data () {
		return {
			sharedState: store.state,
			sharedProps: store.props,
			fileList: []
		}
	}
}
</script>

<style>
div.the-result-payment-complete {
	margin: auto;
	padding: 30px;
	text-align: center;
	width: 70%;
}
div.the-result-payment-complete .message-confirmation {
	border: 1px solid #B3DAE1;
	color: #333;
	padding: 20px 0px;
	font-size: 20px;
	font-weight: 500;
	margin-bottom: 25px;
}
div.the-result-payment-complete .message-confirmation svg {
	text-align: center;
}
div.the-result-payment-complete .wdg-button button.red {
	width: 170px;
}
div.the-result-payment-complete .message-admin {
	background-color: #F1A074;
	color: #fff;
	padding: 20px 0px;
	margin-bottom: 25px;
}
</style>

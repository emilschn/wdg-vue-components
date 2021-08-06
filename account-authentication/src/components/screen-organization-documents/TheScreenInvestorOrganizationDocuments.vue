<template>
	<div class="the-screen-investor-organization-documents">

		<div class="button-container">
			<div class="title-container">
				<span v-if="step === 'upload-kbis'">{{ $t('account-authentication.organization-documents.SEND_YOUR_KBIS') }}</span>
				<span v-if="step === 'upload-status'">{{ $t('account-authentication.organization-documents.SEND_YOUR_STATUS') }}</span>
				<span v-if="step === 'upload-capital-allocation'">aaa</span>
				
			</div>

			<WDGUpload
			  :onFileChange="onFileUploadChangeEvent"
			  />

			<WDGButton
			  v-if="isContinueButtonDisplayed"
			  :clickEvent="onContinueButtonClickEvent"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>

		<WDGMascot type="side-1">
			<slot slot="text">
				{{ $t('account-authentication.user-documents.YOUR_DOCUMENT_SHOULD_BE') }}
				<br>
				<ul>
					<li>{{ $t('account-authentication.user-documents.DOCUMENT_READABLE') }}</li>
					<li>{{ $t('account-authentication.user-documents.DOCUMENT_TYPE') }}</li>
					<li>{{ $t('account-authentication.user-documents.DOCUMENT_SIZE') }}</li>
				</ul>
				<br>
				<span v-html="$t('account-authentication.user-documents.USE_WECOMPRESS')"></span>
			</slot>
		</WDGMascot>
	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'
import WDGMascot from '@/../../common/src/components/WDGMascot'
import WDGUpload from '@/../../common/src/components/WDGUpload'
export default {
	name: 'TheScreenInvestorOrganizationDocuments',
	components: {
		WDGButton,
		WDGMascot,
		WDGUpload
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			step: 'upload-kbis',
			fileKBIS: [],
			fileStatus: []
		}
	},
	methods: {
		onFileUploadChangeEvent (idUploadDocument, files) {
			if ( this.step === 'upload-kbis' ) {
				this.fileKBIS.splice(0, 1, files)
			} else if ( this.step === 'upload-status' ) {
				this.fileStatus.splice(0, 1, files)
			}
		},
		onContinueButtonClickEvent () {
			if ( this.step === 'upload-kbis' ) {
				this.step = 'upload-status'
			} else if ( this.step === 'upload-status' ) {
				this.step = 'upload-capital-allocation'
			} else {
				this.onContinue()
			}
		}
	},
	computed: {
		isContinueButtonDisplayed () {
			if ( this.step === 'upload-kbis' && this.fileKBIS.length > 0 ) {
				return true
			}
			if ( this.step === 'upload-status' && this.fileStatus.length > 0 ) {
				return true
			}
			return false
		}
	}
}
</script>

<style>
	div.the-screen-investor-organization-documents {
		margin: 50px 0px;
	}
	div.the-screen-investor-organization-documents div.title-container {
		margin-bottom: 20px;
	}
	div.the-screen-investor-organization-documents div.button-container {
		float: left;
		width: 600px;
	}
</style>

<template>
	<div class="the-screen-investor-organization-documents">

		<WDGMascot
		  v-if="step.indexOf('upload') == -1"
		  type="face-1"
		  alignMascot="left"
		  :displayText="false"
		  />

		<div class="button-container">
			<div class="title-container">
				<span v-if="step === 'upload-kbis'">
					{{ $t('account-authentication.organization-documents.SEND_YOUR_KBIS') }}<br>
					{{ $t('account-authentication.organization-documents.SEND_YOUR_KBIS_DESCRIPTION') }}
				</span>
				<span v-if="step === 'upload-status'">
					{{ $t('account-authentication.organization-documents.SEND_YOUR_STATUS') }}<br>
					{{ $t('account-authentication.organization-documents.SEND_YOUR_STATUS_DESCRIPTION') }}
				</span>
				<span v-if="step === 'ask-capital-allocation'">{{ $t('account-authentication.organization-documents.DO_YOU_NEED_TO_SEND_CAPITAL_ALLOCATION') }}</span>
				<span v-if="step === 'upload-capital-allocation'">{{ $t('account-authentication.organization-documents.SEND_YOUR_CAPITAL_ALLOCATION') }}</span>
				<span v-if="step === 'ask-other-people'">{{ $t('account-authentication.organization-documents.DO_YOU_NEED_TO_SEND_OTHER_PEOPLE') }}</span>
				<span v-if="step === 'upload-other-people'">{{ $t('account-authentication.organization-documents.SEND_OTHER_PEOPLE') }}</span>
				
			</div>


			<div class="capital-allocation-buttons-container"
			  v-if="step === 'ask-capital-allocation'"
			  >
				<WDGButton
				  :clickEvent="onContinueButtonClickEvent"
				  >
					<slot slot="label">{{ $t('common.YES') }}</slot>
				</WDGButton>

				<WDGButton
				  :clickEvent="onUploadCapitalAllocationButtonClickEvent"
				  >
					<slot slot="label">{{ $t('common.NO') }}</slot>
				</WDGButton>
			</div>

			<div class="other-people-buttons-container"
			  v-else-if="step === 'ask-other-people'"
			  >
				<WDGButton
				  :clickEvent="onUploadOtherPeopleButtonClickEvent"
				  >
					<slot slot="label">{{ $t('common.YES') }}</slot>
				</WDGButton>

				<WDGButton
				  :clickEvent="onContinueButtonClickEvent"
				  >
					<slot slot="label">{{ $t('common.NO') }}</slot>
				</WDGButton>
			</div>

			<TheScreenInvestorOrganizationOtherPeopleDocuments
			  v-else-if="step === 'upload-other-people'"
			  :onContinue="onContinueButtonClickEvent"
			  />

			<WDGUpload
			  v-else
			  :onFileChange="onFileUploadChangeEvent"
			  />


			<WDGButton
			  v-if="isContinueButtonDisplayed"
			  :clickEvent="onContinueButtonClickEvent"
			  >
				<slot slot="label">{{ $t('common.CONTINUE') }}</slot>
			</WDGButton>
		</div>

		<WDGMascot
		  v-if="step.indexOf('upload') > -1"
		  type="side-1"
		  >
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
import TheScreenInvestorOrganizationOtherPeopleDocuments from '@/components/screen-organization-documents/TheScreenInvestorOrganizationOtherPeopleDocuments.vue'
export default {
	name: 'TheScreenInvestorOrganizationDocuments',
	components: {
		WDGButton,
		WDGMascot,
		WDGUpload,
		TheScreenInvestorOrganizationOtherPeopleDocuments
	},
	props: {
		onContinue: Function
	},
	data () {
		return {
			step: 'upload-kbis',
			fileKBIS: [],
			fileStatus: [],
			fileCapitalAllocation: []
		}
	},
	methods: {
		onFileUploadChangeEvent (idUploadDocument, files) {
			if ( this.step === 'upload-kbis' ) {
				this.fileKBIS.splice(0, 1, files)
			} else if ( this.step === 'upload-status' ) {
				this.fileStatus.splice(0, 1, files)
			} else if ( this.step === 'upload-capital-allocation' ) {
				this.fileCapitalAllocation.splice(0, 1, files)
			}
		},
		onContinueButtonClickEvent () {
			this.$root.$emit('resetUploadFile', '')
			if ( this.step === 'upload-kbis' ) {
				this.step = 'upload-status'
			} else if ( this.step === 'upload-status' ) {
				this.step = 'ask-capital-allocation'
			} else if ( this.step === 'ask-capital-allocation' || this.step === 'upload-capital-allocation' ) {
				this.step = 'ask-other-people'
			} else if ( this.step === 'ask-other-people' || this.step === 'upload-other-people' ) {
				this.onContinue()
			} else {
				this.onContinue()
			}
		},
		onUploadCapitalAllocationButtonClickEvent () {
			this.step = 'upload-capital-allocation'
		},
		onUploadOtherPeopleButtonClickEvent () {
			this.step = 'upload-other-people'
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
			if ( this.step === 'upload-capital-allocation' && this.fileCapitalAllocation.length > 0 ) {
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
		font-size: 20px;
		width: 100%;
	}
	div.the-screen-investor-organization-documents div.button-container {
		float: left;
		width: 600px;
	}
	div.the-screen-investor-organization-documents .document-upload-container {
		border: 1px solid #c2c2c2;
		text-transform: none !important;
		padding: 15px;
		width: 50%;
		margin: 40px 0 20px 0;
	}
	div.the-screen-investor-organization-documents .document-upload-container span:before {
		content: url("../../../../common/src/assets/icons/upload.png");
		margin-right: 10px;
		display: inline-block;
		vertical-align: middle;
	}
	div.the-screen-investor-organization-documents .wdg-upload>span {
		color: #c2c2c2;
		display: inline-block;
		width: 50%;
	}
	div.the-screen-investor-organization-documents .capital-allocation-buttons-container, div.the-screen-investor-organization-documents .other-people-buttons-container {
		display: flex;
	}
	div.the-screen-investor-organization-documents .capital-allocation-buttons-container .wdg-button:nth-of-type(2), div.the-screen-investor-organization-documents .other-people-buttons-container .wdg-button:nth-of-type(2) {
		margin-left: 30px;
	}
</style>

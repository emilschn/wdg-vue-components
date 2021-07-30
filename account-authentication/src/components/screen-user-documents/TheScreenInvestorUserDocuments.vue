<template>
	<div class="the-screen-investor-user-documents">

		<div class="button-container" 
			v-if="!isDocumentChosen"
			>
			<div class="title-container">
				{{ $t('account-authentication.user-documents.CHOOSE_A_DOCUMENT_TO_SEND') }}
			</div>
			<WDGButton 
				color="document-upload"
				icon="address-card"
				iconStyle="r"
				:clickEvent="onChooseTypeEvent"
				id="id"
				>
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_ID') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.DESCRIPTOR_ID') }}</slot>
			</WDGButton>

			<WDGButton 
				color="document-upload"
				icon="passport"
				:clickEvent="onChooseTypeEvent"
				id="passport"
				>
				<slot slot="label">{{ $t('account-authentication.user-documents.TITLE_PASSPORT') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.DESCRIPTOR_PASSPORT') }}</slot>
			</WDGButton>
		</div>

		<div class="upload-container" 
		 	v-if="isDocumentChosen"
			 >
			<div class="title-container">
				{{ $t('account-authentication.user-documents.SEND_ID') }} <br>
				{{ $t('account-authentication.user-documents.CHOOSE_DOCUMENT_TYPE') }}
			</div>
			<WDGRadioButton
				name="nb-file"
				value="1"
				:groupValue="nbFile"
				:onChange="onChooseNbFileEvent"
				>
				<slot slot="label-after">{{ $t('account-authentication.user-documents.ONE_FILE') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.ONE_FILE_DESCRIPTOR') }}</slot>
			</WDGRadioButton>
			<WDGRadioButton
				name="nb-file"
				value="2"
				:groupValue="nbFile"
				:onChange="onChooseNbFileEvent"
				>
				<slot slot="label-after">{{ $t('account-authentication.user-documents.TWO_FILE') }}</slot>
				<slot slot="description">{{ $t('account-authentication.user-documents.TWO_FILE_DESCRIPTOR') }}</slot>
			</WDGRadioButton>
			<WDGUpload 
		 	v-if="nbFiles>=1">
			</WDGUpload>
			<WDGUpload 
		 	v-if="nbFiles>1">
			</WDGUpload>
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
import WDGRadioButton from '@/../../common/src/components/WDGRadioButton'
import WDGUpload from '@/../../common/src/components/WDGUpload'
export default {
	name: 'TheScreenInvestorUserDocuments',
	components: {
		WDGButton,
		WDGMascot,
		WDGRadioButton,
		WDGUpload
	},
	props: {
		onUploadDoc: Function
	},
	data () {
		return {
			firstDocumentType: '',
			isDocumentChosen: false,
			// isNbChosen: false,
			nbFiles: 0
		}
	},
	methods: {
		onChooseTypeEvent: async function (...args) {
			console.log(args[0].id)
			this.isDocumentChosen = true
			this.firstDocumentType = args[0].id
		},
		onChooseNbFileEvent (newValue) {
			this.nbFiles = newValue
		}
	}
}
</script>

<style>
	div.the-screen-investor-user-documents {
		margin: 50px 0px;
	}
	div.the-screen-investor-user-documents div.title-container {
		margin-bottom: 20px;
	}
	div.the-screen-investor-user-documents div.button-container {
		float: left;
		width: 600px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button {
		float: left;
		width: 270px;
		margin-right: 20px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button {
		height: 200px;
		font-size: 20px;
		font-weight: bold;
		text-transform: unset !important;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button .far, .fas{
		padding: 5px;
	}
	div.the-screen-investor-user-documents div.button-container div.wdg-button button span.description {
		display: block;
		font-size: 15px;
		font-weight: normal;
		color: #EBEBEB;
	}
	div.the-screen-investor-user-documents div.upload-container {
		float: left;
		width: 600px;
	}
	div.the-screen-investor-user-documents div.upload-container div.wdg-radiobutton {
		float: left;
		width: 270px;
		margin-right: 20px;
	}
	div.the-screen-investor-user-documents div.upload-container div.wdg-radiobutton label {
		height: 200px;
	}
	div.the-screen-investor-user-documents div.upload-container div.wdg-radiobutton label span.description {
		display: block;
		font-size: 15px;
		font-weight: normal;
		color: #EBEBEB;
		margin-left: 20px;
	}
</style>

<template>
	<div class="the-screen-investor-user-documents">
		<div class="title-container">
			{{ $t('account-authentication.user-documents.CHOOSE_A_DOCUMENT_TO_SEND') }}
		</div>

		<div class="button-container">
			<WDGButton color="document-upload">
				<slot slot="label">Carte d'identité</slot>
				<slot slot="description">Recto-verso, en cours de validité, avec bande MRZ lisible en intégralité</slot>
			</WDGButton>

			<WDGButton color="document-upload">
				<slot slot="label">Passeport</slot>
				<slot slot="description">En cours de validité, avec bande MRZ lisible en intégralité</slot>
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
export default {
	name: 'TheScreenInvestorUserDocuments',
	components: {
		WDGButton,
		WDGMascot
	},
	props: {
	},
	data () {
		return {
		}
	},
	methods: {
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
	div.the-screen-investor-user-documents div.button-container div.wdg-button button span.description {
		display: block;
		font-size: 15px;
		font-weight: normal;
		color: #EBEBEB;
	}
</style>

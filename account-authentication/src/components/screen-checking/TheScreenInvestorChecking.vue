<template>
	<div class="the-screen-investor-type">
		<div class="title">
			{{ $t('account-authentication.checking.DOCUMENTS_IMPORTED') }}
		</div>

		<WDGMascot
		  type="face-4"
		  alignMascot="left"
		  :displayText="false"
		  />
		
		<div class="documents-sent-description">
		{{ $t('account-authentication.checking.YOUR_DOCUMENTS_MUST_BE_VALIDATED_BY_LEMONWAY') }}<br><br>

		{{ $t('account-authentication.checking.YOUR_DOCUMENTS_CAN_BE_FOUND_IN_YOUR_ACCOUNT') }}
		</div>

		<!-- Maintenant, nous allons compléter votre profil investisseur. Pour investir sur WE DO GOOD, il faut nous assurer que vous compreniez le risque de perte de votre investissement. -->
	</div>
</template>

<script>
import WDGMascot from '@/../../common/src/components/WDGMascot'
export default {
	name: 'TheScreenInvestorType',
	components: {
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
div.the-screen-investor-type {
	display: flex;
	flex-flow: row wrap;
	align-items: center;
}
div.the-screen-investor-type div.title {
	font-family: 'Trebuchet MS', sans-serif;
	font-size: 22px;
	text-transform: uppercase;
	text-align: center;
	font-weight: bold;
	margin-bottom: 40px;
	width: 100%;
}
div.documents-sent-description {
	background-color: #ebebeb;
	padding: 40px;
	width: 55%;
	height: max-content;
}
</style>

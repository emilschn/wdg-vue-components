<template>
	<div class="the-screen-investor-type">
		<div>
			{{ $t('account-authentication.checking.DOCUMENTS_IMPORTED') }}
		</div>

		<WDGMascot
		  type="face-1"
		  alignMascot="left"
		  :displayText="false"
		  />
		
		{{ $t('account-authentication.checking.YOUR_DOCUMENTS_MUST_BE_VALIDATED_BY_LEMONWAY') }}<br><br>

		{{ $t('account-authentication.checking.YOUR_DOCUMENTS_CAN_BE_FOUND_IN_YOUR_ACCOUNT') }}<br><br>

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
</style>

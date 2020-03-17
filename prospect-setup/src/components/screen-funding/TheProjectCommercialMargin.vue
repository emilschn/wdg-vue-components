<template>
	<div class="the-project-commercial-margin project-funding-subpart">
		<h3>
			{{ $t('project-setup.project-funding.commercial-margin.TITLE') }}
			<WDGToolTip>
				<slot slot="text">{{ $t('project-setup.project-funding.commercial-margin.TOOLTIP') }}</slot>
			</WDGToolTip>
		</h3>

		<WDGInput
			placeholder="1 %"
			id="commercial-margin"
			name="commercial-margin"
			v-bind:multiline="false"
			v-bind:optional="false"
			validationRule=""
		>
			<slot slot="label">{{ $t('project-setup.project-funding.commercial-margin.INPUT_LABEL') }}</slot>
		</WDGInput>
	</div>
</template>

<script>
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGToolTip from '@/../../common/src/components/WDGToolTip'

export default {
	name: 'TheProjectCommercialMargin',
	components: {
		WDGInput,
		WDGToolTip
	}
}
</script>

<style>
div.the-project-commercial-margin .wdg-input {
	margin-top: 16px;
}
div.the-project-commercial-margin .wdg-input input {
	height: 32px;
	margin-top: 8px;
}
</style>

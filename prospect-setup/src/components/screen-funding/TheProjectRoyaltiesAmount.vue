<template>
	<div class="the-project-royalties-amount project-funding-subpart">
		<h3>
			{{ $t('project-setup.project-funding.royalties-amount.TITLE') }}
		</h3>

		<WDGInput
		  id="royalties-amount"
		  name="royalties-amount"
		  :value="sharedState.project.royaltiesAmount"
		  v-bind:valueReturn.sync="sharedState.project.royaltiesAmount"
		  v-bind:multiline="false"
		  v-bind:optional="false"
		  :onChange="onChange"
		  />

		<div class="royalties-for-5-years">
			{{ $t('project-setup.project-funding.royalties-amount.OF_MY_QUARTERLY_TURNOVER') }}
		</div>

		<div class="advice default" v-if="royaltiesPercentType == 'default'">
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_DEFAULT', { adviceMinPercent: minPercent, adviceMaxPercent: maxPercent }) }}
		</div>
		<div class="advice warning-over" v-if="royaltiesPercentType == 'warning-over'">
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_WARNING_OVER', { adviceMinPercent: minPercent, adviceMaxPercent: maxPercent }) }}
			<a href="#">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>
		<div class="advice warning-under" v-if="royaltiesPercentType == 'warning-under'">
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_WARNING_UNDER', { adviceMinPercent: minPercent, adviceMaxPercent: maxPercent }) }}
			<a href="#">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>
		<div class="advice custom" v-if="royaltiesPercentType == 'custom'">
			{{ $t('project-setup.project-funding.royalties-amount.ROYALTIES_PERCENT_CUSTOM', { adviceMinPercent: minPercent, adviceMaxPercent: maxPercent }) }}
			<a href="#">{{ $t('project-setup.project-funding.royalties-amount.VIEW_ADVICE') }}</a>
		</div>

		<WDGButton>
			<slot slot="label">{{ $t('project-setup.project-funding.royalties-amount.VIEW_DETAILS') }}</slot>
		</WDGButton>

		<svg width="20" height="20" v-if="royaltiesPercentType != 'default'">
			<image xlink:href="@/../../common/src/assets/icons/refresh.svg" src="@/../../common/src/assets/icons/refresh.png" width="20" height="20" />
		</svg>
		<a href="#" class="reinit" v-if="royaltiesPercentType != 'default'">{{ $t('project-setup.project-funding.royalties-amount.REINIT_PARAMETERS') }}</a>
	</div>
</template>

<script>
import { store } from '../../store.js'
import WDGInput from '@/../../common/src/components/WDGInput'
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'TheProjectRoyaltiesAmount',
	components: {
		WDGInput,
		WDGButton
	},
	props: {
		onChange: { type: Function },
		minPercent: { type: Number, default: 1 },
		maxPercent: { type: Number, default: 2 }
	},
	data () {
		return {
			'royaltiesPercentType': 'custom',
			sharedState: store.state
		}
	}
}
</script>

<style>
div.the-project-royalties-amount {
	text-align: center;
}
div.the-project-royalties-amount .wdg-input {
	margin-top: 16px;
}
div.the-project-royalties-amount .wdg-input input {
	width: 160px;
	font-size: 32px;
	text-align: center;
}
div.the-project-royalties-amount .royalties-for-5-years {
	margin-bottom: 16px;
	font-size: 14px;
	color: #555;
}
div.the-project-royalties-amount .advice {
	margin: 16px 0px;
}
div.the-project-royalties-amount .advice.default {
	color: #8BC79C;
}
div.the-project-royalties-amount .advice.warning-over, div.the-project-royalties-amount .advice.warning-under, div.the-project-royalties-amount .advice.warning-over a, div.the-project-royalties-amount .advice.warning-under a {
	color: #EA4F51;
}
div.the-project-royalties-amount .advice.custom, div.the-project-royalties-amount .advice.custom a {
	color: #B4B4B4;
}
div.the-project-royalties-amount a.reinit {
	font-size: 14px;
	color: #B4B4B4;
}
</style>

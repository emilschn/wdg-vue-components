<template>
	<div class="the-project-advice">
		<h3>
			{{ $t('project-setup.project-funding.advice.TITLE') }}
		</h3>

		<div class="advice-subtitle">
			{{ $t('project-setup.project-funding.advice.SUBTITLE') }}
		</div>
		<div class="advice-item-container">
			<div class="advice-item">
				<div class="advice-item-title">{{ $t('project-setup.project-funding.advice.ADVICE1_TITLE') }}</div>
				<div class="advice-item-text">{{ $t('project-setup.project-funding.advice.ADVICE1_TEXT') }}</div>
			</div>

			<div class="advice-item">
				<div class="advice-item-title">{{ $t('project-setup.project-funding.advice.ADVICE2_TITLE') }}</div>
			</div>

			<div class="advice-item">
				<div class="advice-item-title">{{ $t('project-setup.project-funding.advice.ADVICE3_TITLE') }}</div>
			</div>
		</div>

		<div class="clear"></div>

		<div class="advice-none">
			{{ $t('project-setup.project-funding.advice.NO_SOLUTION1') }}
			{{ $t('project-setup.project-funding.advice.NO_SOLUTION2') }}
		</div>

		<div class="advice-percent">
			{{ $t('project-setup.project-funding.advice.ADVICE_PERCENT') }}
			<div class="advice-percent-amount">{{ adviceAmount }} %</div>
		</div>

		<WDGButton
		  :clickEvent="onReinitParameters"
		  color="transparent"
		  type="button"
		  >
			<slot slot="label">{{ $t('project-setup.project-funding.advice.TEST_PERCENT') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'
export default {
	name: 'TheProjectAdvice',
	components: {
		WDGButton
	},
	props: {
		onReinitParameters: { type: Function },
		adviceAmount: { type: Number, default: 1 }
	}
}
</script>

<style>
div.the-project-advice {
	text-align: center;
}
div.the-project-advice h3 {
	margin: 72px auto 16px;
	font-size: 22px;
}
div.the-project-advice div.advice-subtitle {
	font-size: 17px;
	margin-bottom: 16px;
}
div.the-project-advice div.advice-item-container {
	display: flex;
	justify-content: space-between;
}
div.the-project-advice div.advice-item {
	width: 35%;
}
div.the-project-advice div.advice-item div.advice-item-title {
	margin: 20px;
	font-size: 19px;
	line-height: 28px;
	text-align: left;
}
div.the-project-advice div.advice-item div.advice-item-title::before {
	content: "\002713";
	width: 40px;
	margin-right: 18px;
	font-size: 32px;
	color: #00879B;
	font-weight: 700;
}
div.the-project-advice div.advice-item div.advice-item-text {
	margin: 16px 20px;
	font-size: 15px;
	line-height: 20px;
	text-align: left;
	color: #B4B4B4;
}
div.clear {
	clear: both;
}
div.the-project-advice div.advice-none {
	width: 500px;
	max-width: 100%;
	margin: 24px auto;
	padding-bottom: 16px;
	border-bottom: 2px solid #f4f2f2;
	font-size: 18px;
}
div.the-project-advice div.advice-percent {
	font-size: 21px;
	font-weight: bold;
	color: #00879B;
}
div.the-project-advice div.advice-percent div.advice-percent-amount {
	font-size: 40px;
}
div.the-project-advice div.wdg-button {
	width: 300px;
	max-width: 100%;
	margin: 16px auto;
}
div.the-project-advice div.wdg-button button {
	border-color: #00879B;
	color: #00879B;
	font-weight: 500;
}
</style>

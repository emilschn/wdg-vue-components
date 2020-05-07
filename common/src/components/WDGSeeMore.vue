<template>
	<div class="wdg-see-more">
		<div class="see-more-title">
			<slot name="title"></slot>
		</div>

		<div class="see-more-text">
			<slot name="text"></slot>
		</div>

		<div
		  v-if="amount > -1"
		  class="see-more-amount"
		  >
			{{ amount }} € <span class="without-tax">{{ $t('common.WITHOUT_TAXES_LETTERS') }}</span>
			<div class="discount-young-business" v-if="amountReduction !== ''">
				{{ amountReduction }}
			</div>
		</div>

		<WDGButton
		  color="transparent"
		  type="button"
		  v-if="!expanded"
		  :clickEvent="collapse"
		  >
			<slot slot="label">+ {{ $t('common.VIEW_MORE') }}</slot>
		</WDGButton>

		<div v-if="expanded" class="collapsable-content">
			<div v-for="item in uncheckedItems" :key="item" class="collapse-item">
				{{ item }}
			</div>
			<div v-for="item in checkedItems" :key="item" class="collapse-item checked">
				{{ item }}
			</div>
		</div>

		<WDGButton
		  color="transparent"
		  type="button"
		  v-if="expanded"
		  :clickEvent="collide"
		  >
			<slot slot="label">- {{ $t('common.VIEW_LESS') }}</slot>
		</WDGButton>
	</div>
</template>

<script>
import WDGButton from '@/../../common/src/components/WDGButton'

export default {
	name: 'WDGSeeMore',
	components: {
		WDGButton
	},
	props: {
		amount: { type: String, default: -1 },
		amountReduction: { type: String, default: '' },
		uncheckedItems: { type: Array, default: () => [] },
		checkedItems: { type: Array, default: () => [] }
	},
	data () {
		return {
			expanded: false
		}
	},
	methods: {
		collapse: function () {
			this.expanded = true
		},
		collide: function () {
			this.expanded = false
		}
	}
}
</script>

<style>
.wdg-see-more {
	margin-bottom: 56px;
	padding: 24px 24px 0px 24px;
	background: #ffffff;
}

.wdg-see-more .see-more-title {
	margin-bottom: 8px;
	font-size: 18px;
	font-weight: bold;
}

.wdg-see-more .see-more-text {
	margin-bottom: 8px;
	font-size: 14px;
}

.wdg-see-more .see-more-amount {
	margin-bottom: 16px;
	font-size: 22px;
	text-align: right;
	font-weight: 700;
}
.wdg-see-more .see-more-amount span.without-tax {
	font-size: 12px;
}
.wdg-see-more .see-more-amount .discount-young-business {
	font-size: 16px;
	font-weight: 500;
}
.wdg-see-more .wdg-button {
	height: 24px;
}

.wdg-see-more .collapsable-content {
	margin-bottom: 16px;
}

.wdg-see-more .collapsable-content .collapse-item {
	font-size: 15px;
	line-height: 20px;
	margin-bottom: 16px;
	color: #827F7F;
}
.wdg-see-more .collapsable-content .collapse-item.checked::before {
	content: "\002713";
	color: #00879b;
	font-weight: 700;
}
</style>

<template>
	<div class="the-result-bundle-editor">
		<div
		  v-if="!isEditing"
		  class="btn-edit"
		  >
			<button
			  @click="toggleEdit"
			  >
				<svg width="20" height="20">
					<image xlink:href="@/../../common/src/assets/icons/pencil.svg" src="@/../../common/src/assets/icons/pencil.png" width="20" height="20" />
				</svg>
			</button>
		</div>

		<div
		  v-if="isEditing"
		  class="bundle-editor"
		  >
			<WDGSelect
			  id="bundleType"
			  name="bundleType"
			  :optionItems="bundleTypeList"
			  :value="bundleTypeResult"
			  v-bind:valueReturn.sync="bundleTypeResult"
			  customStyle="natural-language admin"
			  />
			<br><br>

			<div>Total</div>
			<div>
				<span class="amount">{{priceWithoutDiscount}}</span>
				<span>&nbsp;€&nbsp;</span>
				<span>{{ $t('common.WITHOUT_TAXES_LETTERS') }}</span>
			</div>
			<br>

			<div class="admin">Réduction</div>
			<div>
				<WDGInput
				  id="discount"
				  name="discount"
				  :value="discountResult"
				  v-bind:valueReturn.sync="discountResult"
				  customStyle="natural-language admin"
				  prefix="-"
				  suffix="%"
				  />
			</div>
			<br>

			<div class="admin">Raison de la réduction</div>
			<WDGInput
			  id="discountReason"
			  name="discountReason"
			  :value="discountReasonResult"
			  v-bind:valueReturn.sync="discountReasonResult"
			  customStyle="natural-language admin"
			  />
			<br>
			<br>

			<button
			  @click="toggleEdit"
			  >
				Enregistrer
			</button>
		</div>
	</div>
</template>

<script>
import i18n from '@/i18n'
import { store } from '../../store.js'
import WDGSelect from '@/../../common/src/components/WDGSelect'
import WDGInput from '@/../../common/src/components/WDGInput'

export default {
	name: 'TheResultBundleEditor',
	components: {
		WDGSelect,
		WDGInput
	},
	props: {
		onEdit: { type: Function },
		onSave: { type: Function },
		bundleIndex: { type: String, default: '0' },
		bundleType: { type: String, default: '' },
		discount: { type: String, default: '0' },
		discountReason: { type: String, default: '' }
	},
	data () {
		return {
			sharedState: store.state,
			isEditing: false,
			bundle1TypeList: [
				{ Id: 'lovemoney', Text: i18n.t('project-setup.project-result.formulas.lovemoney.TITLE') },
				{ Id: 'private', Text: i18n.t('project-setup.project-result.formulas.private.TITLE') },
				{ Id: 'crowdfunding', Text: i18n.t('project-setup.project-result.formulas.crowdfunding.TITLE') }
			],
			bundle2TypeList: [
				{ Id: 'basic', Text: i18n.t('project-setup.project-result.options.basic.TITLE') },
				{ Id: 'standard', Text: i18n.t('project-setup.project-result.options.standard.TITLE') },
				{ Id: 'complete', Text: i18n.t('project-setup.project-result.options.complete.TITLE') }
			],
			bundleTypeResult: this.bundleType,
			discountResult: this.discount,
			discountReasonResult: this.discountReason
		}
	},
	computed: {
		priceWithoutDiscount () {
			if (this.bundleIndex === '2') {
				switch (this.bundleType) {
					case 'basic':
						return 0
					case 'standard':
						return 500
					case 'complete':
						return 1700
				}
			}
			return 500
		},
		bundleTypeList () {
			if (this.bundleIndex === '1') {
				return this.bundle1TypeList
			}
			return this.bundle2TypeList
		}
	},
	methods: {
		toggleEdit () {
			if (this.isEditing) {
				this.onSave(this.bundleIndex, this.bundleTypeResult, this.discountResult, this.discountReasonResult)
			}
			this.isEditing = !this.isEditing
			this.onEdit(this.bundleIndex, this.isEditing)
		}
	}
}
</script>

<style>
div.the-result-bundle-editor .admin {
	color: #F1A074;
}

div.the-result-bundle-editor .btn-edit button {
	position: relative;
	top: -25px;
	right: -25px;
	float: right;
	width: 50px;
	border-radius: 25px;
	border: 0px;
	background: #F1A074;
	color: #FFF;
}

div.the-result-bundle-editor div.bundle-editor {
	margin-bottom: 8px;
	padding: 8px;
	background: #FFF;
}

div.the-result-bundle-editor div.bundle-editor button {
	margin-top: 8px;
	border: 0px;
	background: #F1A074;
	color: #FFF;
}

div.the-result-bundle-editor div.btn-edit button svg {
	vertical-align: middle;
}
</style>

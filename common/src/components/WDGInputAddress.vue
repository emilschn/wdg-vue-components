<template>
  	<div
	  class="wdg-input-address"
	  :class="customStyle + ' ' + suffixClass"
	  >
		<WDGInput
		  id="inputAddress"
		  name="inputAddress"
		  :loading="loading"
		  :customStyle="customStyle"
		  :onChange="onSearchAddressChangeEvent"
		  />

		<ul
		  v-if="searchResults.length > 0"
		  class="result-list"
		  >
			<li
			  v-for="resultItem in searchResults"
			  :key="resultItem.properties.label"
			  @click="onResultItemSelectEvent(resultItem)"
			  class="result-item"
			  >
				{{ resultItem.properties.label }}
			</li>
			<li
			  key="cant-find"
			  @click="onResultItemSelectEvent('cant-find')"
			  class="result-item"
			  >
				{{ $t('common.CANT_FIND_ADDRESS') }}
			</li>
		</ul>
  	</div>
</template>

<script>
import { requests } from '@/requests.js'
import WDGInput from '@/../../common/src/components/WDGInput'
export default {
	name: 'WDGInputAddress',
	components: {
		WDGInput
	},
	props: {
		id: { type: String, default: null },
		name: { type: String, default: null },
		customStyle: { type: String, default: '' },
		suffixClass: { type: String, default: '' },
		onSelect: Function
	},
	data () {
		return {
			loading: false,
			searchAddress: '',
			searchAddressTimeoutID: 0,
			searchResults: []
		}
	},
	mounted () {
		if (this.eventNameToListen !== '') {
			this.$root.$on(this.eventNameToListen, this.updateValue)
		}
	},
	methods: {
		onSearchAddressChangeEvent (addressTyped) {
			this.searchAddress = addressTyped
			if (this.searchAddressTimeoutID > 0) {
				clearTimeout(this.searchAddressTimeoutID)
			}
			this.searchAddressTimeoutID = setTimeout(() => { this.onSearchAddressChangeTimeoutEvent() }, 500)
			this.loading = true
		},
		onSearchAddressChangeTimeoutEvent () {
			requests.searchAddressTyped(this.searchAddress, this.onAddressSearchResultEvent)
		},
		onAddressSearchResultEvent (requestResult) {
			this.loading = false
			if (requestResult !== 'error') {
				let resultParsed = JSON.parse(requestResult)
				this.searchResults = resultParsed.features
			}
		},
		onResultItemSelectEvent (resultItem) {
			this.onSelect(resultItem)
		}
	}
}
</script>

<style>
	.wdg-input-address.natural-language {
		display: inline;
	}

	.wdg-input-address .result-list {
		border: 1px solid #c2c2c2;
		padding: 15px;
		width: 600px;
		margin-left: 173px;
		margin-top: 0;
		font-size: 14px;
	}
	.wdg-input-address ul li.result-item {
		display: block;
		height: 30px;
		line-height: 30px;
		list-style: none;
		cursor: pointer;
	}
	.wdg-input-address ul li:last-of-type {
		color: #EA4F51;
		font-style: italic;
		text-decoration: underline;
	}
	.wdg-input-address ul.result-list li:last-of-type:hover {
		background: none;
	}

	.wdg-input-address ul li.result-item:hover {
		background: #B3DAE1;
	}
</style>

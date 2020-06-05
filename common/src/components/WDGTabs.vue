<template>
	<div class="wdg-tabs">
		<ul>
			<li
			  v-for="tabItem in tabItems"
			  :key="tabItem.Id"
			  :class="{ selected: (tabItem.Id == currentTab), expanded: isExpanded }"
			  >
				<div @click="onClickMenu(tabItem.Id)">
					<svg width="48" height="48" v-if="tabItem.Status == 'incomplete'">
						<image xlink:href="@/../../common/src/assets/icons/incomplete.svg" src="@/../../common/src/assets/icons/incomplete.png" width="48" height="48" />
					</svg>

					<svg width="48" height="48" v-if="tabItem.Status == 'complete'">
						<image xlink:href="@/../../common/src/assets/icons/complete.svg" src="@/../../common/src/assets/icons/complete.png" width="48" height="48" />
					</svg>

					<span class="tab-label">
						<span v-if="tabItem.Index">{{ tabItem.Index }}.</span>
						{{ tabItem.Label }}
						<span class="subtitle" v-if="tabItem.Subtitle">{{ tabItem.Subtitle }}</span>
						<a @click="onClickLocalEvent(tabItem.Id)" v-if="tabItem.LinkLabel">{{ tabItem.LinkLabel }}</a>
					</span>
					<svg width="25" height="25" class="chevron-down"><image xlink:href="@/../../common/src/assets/icons/chevron-down-solid.svg" src="@/../../common/src/assets/icons/chevron-down-solid.png" width="25" height="25" /></svg>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'WDGTabs',
	props: {
		tabItems: Array,
		currentTab: String,
		clickEvent: Function
	},
	data () {
		return {
			isExpanded: false
		}
	},
	methods: {
		onClickLocalEvent (tabId) {
			if (this.clickEvent !== undefined) {
				this.clickEvent(tabId)
			}
		},
		onClickMenu (tabId) {
			if (tabId === this.currentTab) {
				this.isExpanded = !this.isExpanded
			}
		}
	}
}
</script>

<style>
.wdg-tabs {
	margin-top: -1px;
}
.wdg-tabs ul {
	display: table;
	width: 100%;
	height: 48px;
	padding: 0px;
	margin: 0px;
}
.wdg-tabs ul li {
	display: table-cell;
	width: 25%;
	padding: 16px 0px;
	margin: 0px;
	list-style: none;
	border-bottom: 4px solid #B4B4B4;
	background: #f4f2f2;
	color: #B4B4B4;
}
.wdg-tabs ul li.selected {
	background: #fff;
	border-bottom: 4px solid #00879B;
	border-right: 0px;
	color: #333;
}
.wdg-tabs ul li div {
	height: 52px;
	border-right: 1px solid #B4B4B4;
}
.wdg-tabs ul li.selected div, .wdg-tabs ul li:last-child div {
	border-right: 0px;
}
.wdg-tabs ul li div svg {
	float: left;
	margin-left: 8px;
}
.wdg-tabs ul li div span.tab-label {
	margin-left: 10px;
	font-weight: 600;
	font-size: 17px;
}
.wdg-tabs ul li div span.tab-label span.subtitle, .wdg-tabs ul li div span.tab-label a {
	display: block;
	margin-top: 8px;
	margin-left: 65px;
	font-size: 13px;
	font-weight: 400;
	color: #B4B4B4;
}
.wdg-tabs ul li div span.tab-label span.subtitle {
	text-decoration: none;
}
.wdg-tabs ul li div span.tab-label:last-of-type .subtitle {
	margin-left: 10px;
}
.wdg-tabs ul li div span.tab-label a {
	text-decoration: underline;
	cursor: pointer;
}
.wdg-tabs .chevron-down {
	display: none;
}

@media screen and (max-width: 767px) {
	.wdg-tabs ul {
		display: flex;
		flex-direction: column;
		height: auto;
		width: 80%;
		margin: auto;
	}
	.wdg-tabs ul li {
		display: none;
		width: 100%;
		border-bottom: 1px solid #B4B4B4;
		padding: 10px 5px;
	}
	.wdg-tabs ul li.selected {
		display: block;
		border-bottom: 4px solid #00879B;
	}
	.wdg-tabs ul li.selected div {
		border-right: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.wdg-tabs ul li.expanded {
		display: block;
	}
	.wdg-tabs ul li.expanded div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.wdg-tabs ul li div {
		border-right: none;
	}
	.wdg-tabs ul li div span.tab-label {
		font-size: 18px;
	}
	.wdg-tabs ul li div span.tab-label a {
		display: none;
	}
	.wdg-tabs ul li div span.tab-label span.subtitle {
		margin-left: 20px;
	}
	.wdg-tabs svg, .wdg-tabs image {
		width: 35px;
		height: 35px;
	}
	.wdg-tabs .chevron-down, .wdg-tabs .chevron-down image {
		display: block;
		float: none;
		width: 25px;
		height: 25px;
	}
}
</style>

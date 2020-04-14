<template>
	<div class="wdg-tabs">
		<ul>
			<li
			  v-for="tabItem in tabItems"
			  :key="tabItem.Id"
			  :class="(tabItem.Id == currentTab) ? 'selected' : ''"
			  >
				<div>
					<svg width="48" height="48" v-if="tabItem.Status == 'incomplete'">
						<image xlink:href="@/../../common/src/assets/icons/incomplete.svg" src="@/../../common/src/assets/icons/incomplete.png" width="48" height="48" />
					</svg>

					<svg width="48" height="48" v-if="tabItem.Status == 'complete'">
						<image xlink:href="@/../../common/src/assets/icons/complete.svg" src="@/../../common/src/assets/icons/complete.png" width="48" height="48" />
					</svg>

					<span class="tab-label">
						<span v-if="tabItem.Index">{{ tabItem.Index }}.</span>
						{{ tabItem.Label }}<br>
						<span class="subtitle" v-if="tabItem.Subtitle">{{ tabItem.Subtitle }}</span>
						<a @click="onClickLocalEvent(tabItem.Id)" v-if="tabItem.LinkLabel">{{ tabItem.LinkLabel }}</a>
					</span>
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
	methods: {
		onClickLocalEvent (tabId) {
			if (this.clickEvent !== undefined) {
				this.clickEvent(tabId)
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
	padding-left: 16px;
	font-weight: bold;
	font-size: 17px;
}
.wdg-tabs ul li div span.tab-label span.subtitle, .wdg-tabs ul li div span.tab-label a {
	display: inline-block;
	margin-top: 8px;
	margin-left: 36px;
	font-size: 13px;
	color: #B4B4B4;
}
.wdg-tabs ul li div span.tab-label span.subtitle {
	text-decoration: none;
}
.wdg-tabs ul li div span.tab-label a {
	text-decoration: underline;
	cursor: pointer;
}
</style>

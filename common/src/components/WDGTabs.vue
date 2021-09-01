<template>
	<div class="wdg-tabs">
		<ul>
			<li
			  v-for="tabItem in tabItems"
			  :key="tabItem.Id"
			  :class="{ selected: (tabItem.Id == currentTab), expanded: isExpanded }"
			  >
				<div @click="onClickMenu(tabItem.Id)">

					<span class="tab-label">
						<span v-if="tabItem.Index">{{ tabItem.Index }}.&nbsp;</span>
						<span class="full-size">{{ tabItem.Label }}</span>
						<span class="responsive">
							<span v-if="tabItem.LinkLabel && tabItem.Id !== currentTab"><a @click="onClickLocalEvent(tabItem.Id)">{{ tabItem.Label }}</a></span>
							<span v-else>{{ tabItem.Label }}</span>
						</span>
						<span class="subtitle" v-if="tabItem.Subtitle">{{ tabItem.Subtitle }}</span>
						<a @click="onClickLocalEvent(tabItem.Id)" v-if="tabItem.LinkLabel">{{ tabItem.LinkLabel }}</a>
					</span>

					<svg width="20" height="20" v-if="tabItem.Status == 'complete'">
						<image xlink:href="@/../../common/src/assets/icons/check-grey.svg" src="@/../../common/src/assets/icons/check-grey.png" width="20" height="20"/>
					</svg>

					<svg width="25" height="25" class="points-menu"><image xlink:href="@/../../common/src/assets/icons/points-menu.svg" src="@/../../common/src/assets/icons/points-menu.png" width="25" height="25" /></svg>
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
.responsive {
	display: none;
}
.wdg-tabs {
	margin-top: -1px;
}
.wdg-tabs ul {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0px;
	margin: 0px;
}
.wdg-tabs ul li {
	display: table-cell;
	width: 33%;
	padding: 20px 16px;
	margin: 0px;
	list-style: none;
	border-bottom: 1px solid #C2C2C2;
	color: #C2C2C2;
}
.wdg-tabs ul li.selected {
	background: #fff;
	border-bottom: 4px solid #B3DAE1;
	border-right: 0px;
	color: #333;
}
.wdg-tabs ul li div {
	display: flex;
}
.wdg-tabs ul li div svg {
	margin: 0px 10px;
}
.wdg-tabs ul li div span.tab-label {
	font-weight: 300;
	font-size: 17px;
}
.wdg-tabs ul li.selected div span.tab-label {
	font-weight: 600;
}
.wdg-tabs ul li div span.tab-label span.subtitle, .wdg-tabs ul li div span.tab-label a {
	display: block;
	margin-top: 8px;
	font-size: 15px;
	font-weight: 600;
	color: #333;
	text-transform: none;
	font-family: 'Arial', sans-serif;

}
.wdg-tabs ul li div span.tab-label span.subtitle {
	text-decoration: none;
}
.wdg-tabs ul li div span.tab-label:last-of-type .subtitle {
	color: #C2C2C2;
}
.wdg-tabs ul li div span.tab-label a {
	text-decoration: underline;
	cursor: pointer;
}
div.wdg-tabs li.selected div span.tab-label a {
	visibility: hidden;
}
.wdg-tabs .points-menu {
	display: none;
}

@media screen and (max-width: 767px) {
	.full-size {
		display: none;
	}
	span.responsive {
		display: inline;
	}
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
		border-bottom: 1px solid #C2C2C2;
		padding: 16px 5px;
	}
	.wdg-tabs ul li.selected {
		display: block;
		border-bottom: 4px solid #B3DAE1;
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
	}
	.wdg-tabs ul li div {
		border-right: none;
	}
	.wdg-tabs ul li div span.tab-label a {
		display: none;
	}
	.wdg-tabs ul li div span.tab-label span.responsive a {
		display: inline;
		margin: 0px;
		font-weight: 600;
		font-size: 17px;
		font-family: 'Trebuchet MS', sans-serif;
		text-decoration: none;
		text-transform: uppercase;
	}
	.wdg-tabs svg, .wdg-tabs image {
		width: 20px;
		height: 20px;
	}
	.wdg-tabs .points-menu, .wdg-tabs .points-menu image {
		display: block;
		float: none;
		width: 25px;
		height: 25px;
	}
	.wdg-tabs .expanded .points-menu {
		display: none;
	}
	.wdg-tabs .selected.expanded .points-menu {
		display: block;
	}
}
</style>

import WDGTabs from './../../../common/src/components/WDGTabs';

export default {
  title: 'WDGTabs',
  component: WDGTabs,
};

export const Default = () => ({
  components: { WDGTabs },
  template: '<WDGTabs class="wdg-tabs"><ul><li><div><svg width="48" height="48"><image xlink:href="@/../../common/src/assets/icons/incomplete.svg" src="@/../../common/src/assets/icons/incomplete.png" width="48" height="48" /></svg><svg width="48" height="48"><image xlink:href="@/../../common/src/assets/icons/complete.svg" src="@/../../common/src/assets/icons/complete.png" width="48" height="48" /></svg><span class="tab-label"><span v-if="tabItem.Index"></span><span class="full-size"></span><span class="responsive"><span><a></a></span><span></span></span><span class="subtitle"></span><a></a></span><svg width="25" height="25" class="points-menu"><image xlink:href="@/../../common/src/assets/icons/points-menu.svg" src="@/../../common/src/assets/icons/points-menu.png" width="25" height="25" /></svg></div></li></ul></WDGTabs>',
});
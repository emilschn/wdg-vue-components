import WDGTabs from './../../../common/src/components/WDGTabs';

export default {
  title: 'WDGTabs',
  component: WDGTabs,
};

const tabItems = [
	{ Id: '1', Index: '1', Status: 'incomplete', Label: 'First label' },
	{ Id: '2', Index: '2', Status: 'incomplete', Label: 'Second label', LinkLabel: 'My link' },
	{ Id: '3', Index: '3', Status: 'incomplete', Label: 'Third label', Subtitle: 'Third subtitle' },
];

export const Default = () => ({
  components: { WDGTabs },
  template: '<WDGTabs :tabItems="tabItems"></WDGTabs>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});
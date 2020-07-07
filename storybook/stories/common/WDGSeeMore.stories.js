import WDGSeeMore from './../../../common/src/components/WDGSeeMore';
import { i18n } from '../../src/plugins/i18n';

export default {
  title: 'WDGSeeMore',
  component: WDGSeeMore,
};

const checkedItems = [
	'checked item 1',
	'checked item 2',
	'checked item 3'
];

const uncheckedItems = [
	'unchecked item 1',
	'unchecked item 2',
	'unchecked item 3'
];

export const Default = () => ({ // comment faire pour faire dérouler un texte comme sur l'IP?
  components: { WDGSeeMore },
  template: '<WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore>',
  i18n,
});

export const Items = () => ({ // comment faire pour faire dérouler un texte comme sur l'IP?
  components: { WDGSeeMore },
  template: '<WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore>',
  i18n,
  props: {
	checkedItems: {
		default: () => checkedItems
	},
	uncheckedItems: {
		default: () => uncheckedItems
	}
  },
});
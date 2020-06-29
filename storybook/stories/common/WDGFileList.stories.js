import WDGFileList from './../../../common/src/components/WDGFileList';
import { i18n } from '../../src/plugins/i18n';

export default {
  title: 'WDGFileList',
  component: WDGFileList,
};

const listOneFile = [
	{ id: '1', url: 'https://www.wedogood.co' }
];
const listMultipleFile = [
	{ id: '1', url: 'https://www.wedogood.co' },
	{ id: '2', url: 'https://www.wedogood.co' },
	{ id: '3', url: 'https://www.wedogood.co' }
];

export const Empty = () => ({
	components: { WDGFileList },
	template: '<WDGFileList><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
	i18n,
});

export const OneFile = () => ({
	components: { WDGFileList },
	template: '<WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const MultipleFile = () => ({
	components: { WDGFileList },
	template: '<WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});

export const OneFileBlackBackground = () => ({
	components: { WDGFileList },
	template: '<div style="background: black;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listOneFile
		}
	},
});

export const MultipleFileBlackBackground = () => ({
	components: { WDGFileList },
	template: '<div style="background: black;"><WDGFileList :initFileList="initFileList"><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList></div>',
	i18n,
	props: {
		initFileList: {
			default: () => listMultipleFile
		}
	},
});
import WDGSelect from './../../../common/src/components/WDGSelect';

export default {
	title: 'WDGSelect',
	component: WDGSelect,
};

const listMultipleItems = [
	{ Id: '1', Text: 'First item' },
	{ Id: '2', Text: 'Second item' },
	{ Id: '3', Text: 'Third item' }
];

const listMultipleItemsLong = [
	{ Id: '1', Text: 'First long long long long item' },
	{ Id: '2', Text: 'Second long long long long item' },
	{ Id: '3', Text: 'Third long long long long item' }
];

export const Default = () => ({
	components: { WDGSelect },
	template: '<WDGSelect></WDGSelect>',
});

export const DefaultItems = () => ({
	components: { WDGSelect },
	template: '<WDGSelect :optionItems="optionItems"></WDGSelect>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const DefaultItemsSelected = () => ({
	components: { WDGSelect },
	template: '<WDGSelect :optionItems="optionItems" value="2"></WDGSelect>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const DefaultItemsLong = () => ({
	components: { WDGSelect },
	template: '<WDGSelect :optionItems="optionItems"></WDGSelect>',
	props: {
		optionItems: {
			default: () => listMultipleItemsLong
		}
	},
});

export const NaturalLanguage = () => ({
	components: { WDGSelect },
	template: '<WDGSelect customStyle="natural-language"></WDGSelect>',
});
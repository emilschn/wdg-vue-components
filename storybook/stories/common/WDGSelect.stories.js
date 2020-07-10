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

export const NaturalLanguageNoItems = () => ({
	components: { WDGSelect },
	template: '<WDGSelect customStyle="natural-language"></WDGSelect>',
});

export const NaturalLanguage = () => ({
	components: { WDGSelect },
	template: '<WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageItemsLong = () => ({
	components: { WDGSelect },
	template: '<WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect>',
	props: {
		optionItems: {
			default: () => listMultipleItemsLong
		}
	},
});

export const NaturalLanguageGreyBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #e1e2e3"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageBlackBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #333"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageRedBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #EA4F51"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageBlueBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #00879B"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageGreenBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #5EB82C"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageYellowBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #EBCE67"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguagePinkBG = () => ({
	components: { WDGSelect },
	template: '<div style="background: #F9CBCB"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageUppercase = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="text-transform: uppercase"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageUnderline = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="text-decoration: underline"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageItalic = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="font-style: italic"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageBold = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="font-weight: bold"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageAlignCenter = () => ({
	components: { WDGSelect },
	template: '<div style="text-align: center"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageAlignRight = () => ({
	components: { WDGSelect },
	template: '<div style="text-align: right"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageMargin = () => ({
	components: { WDGSelect },
	template: '<div style="margin: 20px"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageGreyText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #e1e2e3"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageBlackText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #333"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageRedText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #EA4F51"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageBlueText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #00879B"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageGreenText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #5EB82C"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguageYellowText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #EBCE67"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});

export const NaturalLanguagePinkText = () => ({ // ne fonctionne pas
	components: { WDGSelect },
	template: '<div style="color: #F9CBCB"><WDGSelect :optionItems="optionItems" customStyle="natural-language"></WDGSelect></div>',
	props: {
		optionItems: {
			default: () => listMultipleItems
		}
	},
});
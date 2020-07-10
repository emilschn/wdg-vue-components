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

const tabItemsLong = [
	{ Id: '1', Index: '1', Status: 'incomplete', Label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at ante ac tortor eleifend ultrices ac a odio. Maecenas magna mi, varius vitae pretium non, fringilla non risus. ' },
	{ Id: '2', Index: '2', Status: 'incomplete', Label: 'Praesent quam ex, molestie at neque eu, porta bibendum magna. Suspendisse semper nisl lorem. Vivamus laoreet dapibus sapien, in facilisis dui faucibus mollis. ', LinkLabel: 'My link' },
	{ Id: '3', Index: '3', Status: 'incomplete', Label: 'Nulla augue augue, mollis non nulla ac, feugiat hendrerit tellus.', Subtitle: 'Donec gravida mauris sed libero vulputate, euismod bibendum metus ornare.' },
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

export const DefaultLongItems = () => ({
  components: { WDGTabs },
  template: '<WDGTabs :tabItems="tabItemsLong"></WDGTabs>',
  props: {
	tabItems: {
		default: () => tabItemsLong
	}
  },
});

export const BlackBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #333; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const WhiteBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #fff; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const RedBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #EA4F51; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const BlueBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #00879B; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const GreenBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #5EB82C; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const YellowBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #EBCE67; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const PinkBG = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="background: #F9CBCB; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const Uppercase = () => ({ 
  components: { WDGTabs },
  template: '<div style="text-transform: uppercase; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const Underline = () => ({ 
  components: { WDGTabs },
  template: '<div style="text-decoration: underline; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const Italic = () => ({ 
  components: { WDGTabs },
  template: '<div style="font-style: italic; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const NormalWeight = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="font-weight: 400; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const AlignCenter = () => ({ 
  components: { WDGTabs },
  template: '<div style="text-align: center; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const AlignRight = () => ({ 
  components: { WDGTabs },
  template: '<div style="text-align: right; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const Margin = () => ({ 
  components: { WDGTabs },
  template: '<div style="margin: 20px; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const BlackText = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #333; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const GreyText = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #e1e2e3; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const RedText= () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #EA4F51; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const BlueText = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #00879B; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const GreenText = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #5EB82C; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const YellowText = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #EBCE67; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});

export const PinkText = () => ({ // ne fonctionne pas
  components: { WDGTabs },
  template: '<div style="color: #F9CBCB; font-family: Trebuchet MS"><WDGTabs :tabItems="tabItems"></WDGTabs></div>',
  props: {
	tabItems: {
		default: () => tabItems
	}
  },
});


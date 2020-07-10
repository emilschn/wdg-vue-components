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

const checkedItemsLong = [
	'Sed at vulputate urna, ut tristique augue. Donec a elit a tortor posuere venenatis. Nullam imperdiet ac libero quis mollis. Curabitur quis felis dignissim, fringilla nisi vestibulum, ornare ipsum.',
	'Pellentesque malesuada quam in tellus pellentesque porttitor. Nunc sit amet luctus diam. Aenean cursus, urna eu egestas rutrum, dui erat fermentum leo, nec facilisis sem purus sit amet nisl. Quisque sed tempus enim. Quisque at neque viverra, accumsan enim quis, tempor ex. Morbi et sapien id sapien consectetur finibus.',
	'Cras sit amet porta enim. In hac habitasse platea dictumst.'
];

const uncheckedItemsLong = [
	'Sed at vulputate urna, ut tristique augue. Donec a elit a tortor posuere venenatis. Nullam imperdiet ac libero quis mollis. Curabitur quis felis dignissim, fringilla nisi vestibulum, ornare ipsum.',
	'Pellentesque malesuada quam in tellus pellentesque porttitor. Nunc sit amet luctus diam. Aenean cursus, urna eu egestas rutrum, dui erat fermentum leo, nec facilisis sem purus sit amet nisl. Quisque sed tempus enim. Quisque at neque viverra, accumsan enim quis, tempor ex. Morbi et sapien id sapien consectetur finibus.',
	'Cras sit amet porta enim. In hac habitasse platea dictumst.'
];

export const Default = () => ({ 
  components: { WDGSeeMore },
  template: '<WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore>',
  i18n,
});

export const Items = () => ({ 
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

export const BlackBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #333; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const GreyBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #e1e2e3; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const RedBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #EA4F51; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const BlueBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #00879B; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const GreenBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #5EB82C; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const YellowBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #EBCE67; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const PinkBG = () => ({ // ne couvre pas tout le fond pour le default, ne change pas du tout le fond pour le items
	components: { WDGSeeMore },
	template: '<div style="background: #F9CBCB; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const Uppercase = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="text-transform: uppercase; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const Italic = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="font-style: italic; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const Bold = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="font-weight: bold; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const Underline = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="text-decoration: underline; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const LongText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque sit amet mi id pellentesque. Nunc egestas gravida leo nec lacinia. Integer dignissim arcu et volutpat pretium.</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">Pellentesque at volutpat tellus. Vivamus at leo non diam semper commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ut pulvinar lorem, eget commodo risus. Mauris auctor arcu et augue luctus auctor. Curabitur ac augue odio. Nullam sem nibh, feugiat vel lacus ac, convallis eleifend ligula. Sed sed nibh mi. In auctor mi sollicitudin mauris tincidunt, vel condimentum risus finibus.</slot></WDGSeeMore></div>',
	i18n,
	props: {
		checkedItems: {
			default: () => checkedItemsLong
		},
		uncheckedItems: {
			default: () => uncheckedItemsLong
		}
	  },
  });

  export const AlignCenter = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="text-align: center; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const AlignRight = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="text-align: right; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const GreyText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="color: #e1e2e3; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const RedText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="color: #EA4F51; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const BlueText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="color: #00879B; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const GreenText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="color: #5EB82C; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const YellowText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="color: #EBCE67; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const PinkText = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="color: #F9CBCB; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const Margin = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="margin: 20px; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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

  export const MaxWidth400 = () => ({ 
	components: { WDGSeeMore },
	template: '<div style="max-width: 400px; font-family: Trebuchet MS"><WDGSeeMore><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore><WDGSeeMore :checkedItems="checkedItems" :uncheckedItems="uncheckedItems"><slot slot="title">My Title</slot><slot slot="text">My text</slot></WDGSeeMore></div>',
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
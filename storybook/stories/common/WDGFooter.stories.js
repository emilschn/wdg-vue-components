import WDGFooter from './../../../common/src/components/WDGFooter';
import { i18n } from '../../src/plugins/i18n';

export default {
  title: 'WDGFooter',
  component: WDGFooter,
};

export const Default = () => ({
	components: { WDGFooter },
	template: '<WDGFooter><div class="footer"></div></WDGFooter>',
	i18n,
});

export const RedBG = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="background: #EA4F51; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const BlueBG = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="background: #EA4F51; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const GreenBG = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="background: #EA4F51; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const YellowBG = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="background: #EA4F51; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const UppercaseText = () => ({ 
	components: { WDGFooter },
	template: '<div style="text-transform: uppercase; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const ItalicText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-style: italic; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const UnderlineText = () => ({  // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="text-decoration: underline; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const BlackText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #333; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const RedText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #EA4F51; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const BlueText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #00879B; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const GreenText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #5EB82C; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const YellowText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #EBCE67; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const GreyText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #E1E2E3; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const PinkText = () => ({ // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="color: #F9CBCB; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const Margin = () => ({ 
	components: { WDGFooter },
	template: '<div style="margin: 20px; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const Responsive = () => ({ // les textes se superposent
	components: { WDGFooter },
	template: '<div style="max-width: 767px; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const MaxWidth400 = () => ({ // les éléments se superposent 
	components: { WDGFooter },
	template: '<div style="max-width: 400px; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});
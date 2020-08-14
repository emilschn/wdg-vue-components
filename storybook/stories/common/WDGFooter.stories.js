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

export const RedBG = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter BGColor="red"></WDGFooter></div>',
	i18n,
});

export const BlueBG = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter BGColor="blue"></WDGFooter></div>',
	i18n,
});

export const GreenBG = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter BGColor="green"></WDGFooter></div>',
	i18n,
});

export const YellowBG = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter BGColor="yellow"></WDGFooter></div>',
	i18n,
});

export const PinkBG = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter BGColor="pink"></WDGFooter></div>',
	i18n,
});

export const GreyBG = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter BGColor="grey"></WDGFooter></div>',
	i18n,
});

export const UppercaseText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const ItalicText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const UnderlineText = () => ({  // ne fonctionne pas
	components: { WDGFooter },
	template: '<div style="text-decoration: underline; font-family: Trebuchet MS"><WDGFooter></WDGFooter></div>',
	i18n,
});

export const BlackText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="black"></WDGFooter></div>',
	i18n,
});

export const RedText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="red"></WDGFooter></div>',
	i18n,
});

export const BlueText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="blue"></WDGFooter></div>',
	i18n,
});

export const GreenText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="green"></WDGFooter></div>',
	i18n,
});

export const YellowText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="yellow"></WDGFooter></div>',
	i18n,
});

export const GreyText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="grey"></WDGFooter></div>',
	i18n,
});

export const PinkText = () => ({ 
	components: { WDGFooter },
	template: '<div style="font-family: Trebuchet MS"><WDGFooter TextColor="pink"></WDGFooter></div>',
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
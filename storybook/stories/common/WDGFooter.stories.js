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
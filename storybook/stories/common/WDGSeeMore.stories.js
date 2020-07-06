import WDGSeeMore from './../../../common/src/components/WDGSeeMore';
import { i18n } from '../../src/plugins/i18n';

export default {
  title: 'WDGSeeMore',
  component: WDGSeeMore,
};

export const Default = () => ({ // comment faire pour faire dérouler un texte comme sur l'IP?
  components: { WDGSeeMore },
  template: '<WDGSeeMore><div class="wdg-see-more"><div class="see-more-title"><slot name="title">Voir plus</slot></div></div></WDGSeeMore>',
  i18n,
});
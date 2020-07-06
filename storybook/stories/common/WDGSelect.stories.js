import WDGSelect from './../../../common/src/components/WDGSelect';

export default {
    title: 'WDGSelect',
    component: WDGSelect,
  };

  export const Empty = () => ({
    components: { WDGSelect },
    template: '<WDGSelect></WDGSelect>',
  });

  export const Default = () => ({ // pas de style qui s'applique
    components: { WDGSelect },
    template: '<div class="wdg-form"><WDGSelect class="wdg-select"><label:for="id">Une liste déroulante</label><select><option>Le choix numéro 1</option></select></WDGSelect></div>',
  });
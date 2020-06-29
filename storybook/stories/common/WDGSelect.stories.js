import WDGSelect from './../../../common/src/components/WDGSelect';

export default {
    title: 'WDGSelect',
    component: WDGSelect,
  };

  export const SelectNaturalLanguage = () => ({
    components: { WDGSelect },
    template: '<select id="organizationType" name="organizationType" style="display: inline-block; width: 250px; padding: 10px 30px 5px 10px; font-weight: 500; font-size: 16px; -webkit-appearance: none; -moz-appearance: none; background-image:linear-gradient(45deg, transparent 50%, #00879B 50%),linear-gradient(135deg, #00879B 50%, transparent 50%);background-position:calc(100% - 20px) calc(1em + 2px),calc(100% - 15px) calc(1em + 2px),calc(100% - 2.5em) 0.5em; background-size:5px 5px,5px 5px,1px 1.5em; background-repeat: no-repeat; color: #00879B; border: 0px; border-bottom: 2px solid #00879B; cursor: pointer;"></select>',
  });
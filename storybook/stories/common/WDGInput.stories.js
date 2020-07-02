import WDGInput from './../../../common/src/components/WDGInput';

export default {
  title: 'WDGInput',
  component: WDGInput,
};

export const Default = () => ({
    components: { WDGInput },
    template: '<WDGInput><div class="wdg-input><label :for="id"><div class="wdg-input-comment><slot name="comment"></slot></div><span class="input-suffix"></span></label></div></WDGInput>',
  });
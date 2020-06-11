import WDGToolTip from './../../../common/src/components/WDGToolTip';

export default {
  title: 'WDGToolTip',
  component: WDGToolTip,
};

export const WithoutMargin = () => ({
  components: { WDGToolTip },
  template: '<WDGToolTip><slot slot="text">Information</slot></WDGToolTip>',
});

export const MarginTop = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopLongText = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px"><WDGToolTip><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna turpis. Morbi consequat sit amet nibh at rhoncus. Interdum. </slot></WDGToolTip></div>',
});

export const MarginTopAndLeft = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});
import WDGSeparator from './../../../common/src/components/WDGSeparator';

export default {
  title: 'WDGSeparator',
  component: WDGSeparator,
};

export const Default = () => ({
  components: { WDGSeparator },
  template: '<WDGSeparator></WDGSeparator>',
});

export const Red = () => ({
  components: { WDGSeparator },
  template: '<WDGSeparator style="background-color: #EA4F51;"></WDGSeparator>',
});

export const Blue = () => ({
  components: { WDGSeparator },
  template: '<WDGSeparator style="background-color: #00879B;"></WDGSeparator>',
});

export const Black = () => ({
  components: { WDGSeparator },
  template: '<WDGSeparator style="background-color: #333;"></WDGSeparator>',
});

export const Green = () => ({ // vert de la nouvelle charte
  components: { WDGSeparator },
  template: '<WDGSeparator style="background-color: #5EB82C;"></WDGSeparator>',
});

export const Yellow = () => ({ // jaune de la nouvelle charte
  components: { WDGSeparator },
  template: '<WDGSeparator style="background-color: #EBCE67;"></WDGSeparator>',
});

export const Pink = () => ({ // rose de la nouvelle charte
  components: { WDGSeparator },
  template: '<WDGSeparator style="background-color: #F9CBCB;"></WDGSeparator>',
});

export const MaxWidth = () => ({
  components: { WDGSeparator },
  template: '<WDGSeparator style="max-width: 400px;"></WDGSeparator>',
});
export const Margin = () => ({
  components: { WDGSeparator },
  template: '<WDGSeparator style="margin: 20px;"></WDGSeparator>',
});
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
  template: '<div style="background-color: #EA4F51;"><WDGSeparator></WDGSeparator></div>',
});

export const Blue = () => ({
  components: { WDGSeparator },
  template: '<div style="background-color: #00879B;"><WDGSeparator></WDGSeparator></div>',
});

export const Black = () => ({
  components: { WDGSeparator },
  template: '<div style="background-color: #333;"><WDGSeparator></WDGSeparator></div>',
});

export const Green = () => ({ // vert de la nouvelle charte
  components: { WDGSeparator },
  template: '<div style="background-color: #5EB82C;"><WDGSeparator></WDGSeparator></div>',
});

export const Yellow = () => ({ // jaune de la nouvelle charte
  components: { WDGSeparator },
  template: '<div style="background-color: #EBCE67;"><WDGSeparator></WDGSeparator></div>',
});

export const Pink = () => ({ // rose de la nouvelle charte
  components: { WDGSeparator },
  template: '<div style="background-color: #F9CBCB;"><WDGSeparator></WDGSeparator></div>',
});

export const MaxWidth = () => ({
  components: { WDGSeparator },
  template: '<div style="max-width: 400px;"><WDGSeparator></WDGSeparator></div>',
});
export const Margin = () => ({
  components: { WDGSeparator },
  template: '<div style="margin: 20px;"><WDGSeparator></WDGSeparator></div>',
});
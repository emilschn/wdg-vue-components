import WDGButton from './../../../common/src/components/WDGButton';

export default {
  title: 'WDGButton',
  component: WDGButton,
};

export const Default = () => ({
  components: { WDGButton },
  template: '<WDGButton><slot slot="label">Continuer</slot></WDGButton>',
});

export const NoLabel = () => ({
  components: { WDGButton },
  template: '<WDGButton></WDGButton>',
});

export const Red = () => ({
  components: { WDGButton },
  template: '<WDGButton color="red"><slot slot="label">Continuer</slot></WDGButton>',
}); 

export const Blue = () => ({
  components: { WDGButton },
  template: '<WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton>',
});

export const Facebook = () => ({
  components: { WDGButton },
  template: '<WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton>',
});

export const Transparent = () => ({
  components: { WDGButton },
  template: '<WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton>',
});

export const DefaultAlignCenter = () => ({
  components: { WDGButton },
  template: '<WDGButton style="text-align: center;"><slot slot="label">Continuer</slot></WDGButton>',
});

export const DefaultAlignRight = () => ({
  components: { WDGButton },
  template: '<WDGButton style="text-align: right;"><slot slot="label">Continuer</slot></WDGButton>',
});

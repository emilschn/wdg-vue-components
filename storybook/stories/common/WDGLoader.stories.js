import WDGLoader from './../../../common/src/components/WDGLoader';

export default {
  title: 'WDGLoader',
  component: WDGLoader,
};

export const Default = () => ({
    components: { WDGLoader },
    template: '<WDGLoader></WDGLoader>',
  });

export const BlackBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #333"><WDGLoader></WDGLoader></div>',
  });

export const RedBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #EA4F51"><WDGLoader></WDGLoader></div>',
  });

export const BlueBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #00879B"><WDGLoader></WDGLoader></div>',
  });

export const GreyBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #e1e2e3"><WDGLoader></WDGLoader></div>',
  });

export const GreenBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #5EB82C"><WDGLoader></WDGLoader></div>',
  });

export const PinkBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #F9CBCB"><WDGLoader></WDGLoader></div>',
  });

export const YellowBackground = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #EBCE67"><WDGLoader></WDGLoader></div>',
  });

export const BlackBackgroundAlignCenter = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #333; text-align: center;"><WDGLoader></WDGLoader></div>',
  });

export const BlackBackgroundAlignRight = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #333; text-align: right;"><WDGLoader></WDGLoader></div>',
  });

export const BlackBackgroundMargin = () => ({
    components: { WDGLoader },
    template: '<div style="background-color: #333; margin: 20px"><WDGLoader></WDGLoader></div>',
  });


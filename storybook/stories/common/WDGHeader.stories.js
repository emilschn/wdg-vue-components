import WDGHeader from './../../../common/src/components/WDGHeader';

export default {
  title: 'WDGHeader',
  component: WDGHeader,
};

export const Default = () => ({
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const WithoutTitle = () => ({
    components: { WDGHeader },
    template: '<WDGHeader></WDGHeader>',
  });

export const Responsive = () => ({
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; max-width: 767px; align-items: center;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const GreyBackground = () => ({ // gris de la nouvelle charte
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; background-color: #e1e2e3"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const BlackBackground = () => ({ // le logo n'est plus visible et le titre est pas très contrasté
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; background-color: #333"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const PinkBackground = () => ({ // rose de la nouvelle charte
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; background-color: #F9CBCB"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });
  
export const GreenBackground = () => ({ // vert de la nouvelle charte, le titre n'est plus très lisible
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; background-color: #5EB82C"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const YellowBackground = () => ({ // jaune de la nouvelle charte
  components: { WDGHeader },
  template: '<div style="font-family: Trebuchet MS; background-color: #EBCE67"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
});

export const LongTitle = () => ({
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS;"><WDGHeader><slot slot="title">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</slot></WDGHeader></div>',
  });

export const TitleUppercase = () => ({
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; text-transform: uppercase;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const TitleNormal = () => ({ // ne fonctionne pas
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; font-weight: normal;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const TitleItalic = () => ({
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; font-style: italic;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const TitleUnderline = () => ({
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; text-decoration: underline #00879B;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const BlackTitle = () => ({ // ne fonctionne pas
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; color: #333;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const RedTitle = () => ({ // ne fonctionne pas
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; color: #EA4F51;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const GreyTitle = () => ({ // ne fonctionne pas + gris de la nouvelle charte
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; color: #E1e2e3;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const GreenTitle = () => ({ // ne fonctionne pas + vert de la nouvelle charte
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; color: #5EB82C;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const YellowTitle = () => ({ // ne fonctionne pas + jaune de la nouvelle charte
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; color: #EBCE67;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });

export const PinkTitle = () => ({ // ne fonctionne pas + rose de la nouvelle charte
    components: { WDGHeader },
    template: '<div style="font-family: Trebuchet MS; color: #F9CBCB;"><WDGHeader><slot slot="title">Le titre du header</slot></WDGHeader></div>',
  });
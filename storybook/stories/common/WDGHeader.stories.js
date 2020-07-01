import WDGHeader from './../../../common/src/components/WDGHeader';

export default {
  title: 'WDGHeader',
  component: WDGHeader,
};

export const Default = () => ({
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const WithoutTitle = () => ({
    components: { WDGHeader },
    template: '<WDGHeader></WDGHeader>',
  });

export const Responsive = () => ({
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; max-width: 767px; align-items: center;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const GreyBackground = () => ({ // gris de la nouvelle charte
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; background-color: #e1e2e3"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const BlackBackground = () => ({ // le logo n'est plus visible et le titre est pas très contrasté
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; background-color: #333"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const PinkBackground = () => ({ // rose de la nouvelle charte
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; background-color: #F9CBCB"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });
  
export const GreenBackground = () => ({ // vert de la nouvelle charte, le titre n'est plus très lisible
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; background-color: #5EB82C"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const YellowBackground = () => ({ // jaune de la nouvelle charte
  components: { WDGHeader },
  template: '<WDGHeader style="font-family: Trebuchet MS; background-color: #EBCE67"><slot slot="title">Le titre du header</slot></WDGHeader>',
});

export const LongTitle = () => ({
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS;"><slot slot="title">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</slot></WDGHeader>',
  });

export const TitleUppercase = () => ({
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; text-transform: uppercase;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const TitleNormal = () => ({ // ne fonctionne pas
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; font-weight: normal;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const TitleItalic = () => ({
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; font-style: italic;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const TitleUnderline = () => ({
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; text-decoration: underline #00879B;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const BlackTitle = () => ({ // ne fonctionne pas
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; color: #333;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const RedTitle = () => ({ // ne fonctionne pas
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; color: #EA4F51;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const GreyTitle = () => ({ // ne fonctionne pas + gris de la nouvelle charte
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; color: #E1e2e3;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const GreenTitle = () => ({ // ne fonctionne pas + vert de la nouvelle charte
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; color: #5EB82C;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const YellowTitle = () => ({ // ne fonctionne pas + jaune de la nouvelle charte
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; color: #EBCE67;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });

export const PinkTitle = () => ({ // ne fonctionne pas + rose de la nouvelle charte
    components: { WDGHeader },
    template: '<WDGHeader style="font-family: Trebuchet MS; color: #F9CBCB;"><slot slot="title">Le titre du header</slot></WDGHeader>',
  });
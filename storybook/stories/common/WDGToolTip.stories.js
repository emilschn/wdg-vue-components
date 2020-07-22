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

export const MarginTopWithLink = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px"><WDGToolTip><slot slot="text">Information <a href="#">le lien</a></slot></WDGToolTip></div>',
});

export const MarginTopLongText = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px"><WDGToolTip><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna turpis. Morbi consequat sit amet nibh at rhoncus. Interdum. </slot></WDGToolTip></div>',
});

export const MarginTopAndLeft = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftNoLabel = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px;"><WDGToolTip><slot slot="text"></slot></WDGToolTip></div>',
});

export const MarginTopAndLeftLongText = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px;"><WDGToolTip><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec magna turpis. Morbi consequat sit amet nibh at rhoncus. Interdum. </slot></WDGToolTip></div>',
});

export const MarginTopAndLeftBlackBackground = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #333"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftGreyBackground = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #e1e2e3"><WDGToolTip TextBGColor="grey"><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftRedBackground = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #EA4F51"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftBlueBackground = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #00879B"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftGreenBackground = () => ({ // vert de la nouvelle charte
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #5EB82C"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftYellowBackground = () => ({ // jaune de la nouvelle charte
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #EBCE67"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftPinkBackground = () => ({ // rose de la nouvelle charte
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; background-color: #F9CBCB"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftUppercase = () => ({
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; text-transform: uppercase; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftBold = () => ({ // ne change rien
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; font-weight: 700; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftUnderline = () => ({ // ne fonctionne pas
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; text-decoration: underline; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftItalic = () => ({ 
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; font-style: italic; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAlignCenter = () => ({ // aligne aussi le texte au centre
  components: { WDGToolTip },
  template: '<div style="text-align: center; margin-top: 150px; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndRightAlignRight = () => ({ // aligne aussi le texte à droite
  components: { WDGToolTip },
  template: '<div style="text-align: right; margin-top: 150px; margin-right: 150px;font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftBlackText = () => ({ // ne fonctionne pas
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #333; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftRedText = () => ({ // ne fonctionne pas
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #EA4F51; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftBlueText = () => ({ // ne fonctionne pas
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #00879B; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftGreenText = () => ({ // ne fonctionne pas + vert de la nouvelle charte
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #5EB82C; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftYellowText = () => ({ // ne fonctionne pas + jaune de la nouvelle charte
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #EBCE67; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftGreyText = () => ({ // ne fonctionne pas
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #e1e2e3; font-family: Trebuchet MS;"><WDGToolTip TextColor="grey"><slot slot="text">Information</slot></WDGToolTip></div>',
});

export const MarginTopAndLeftPinkText = () => ({ // ne fonctionne pas + rose de la nouvelle charte
  components: { WDGToolTip },
  template: '<div style="margin-top: 150px; margin-left: 50px; color: #F9CBCB; font-family: Trebuchet MS;"><WDGToolTip><slot slot="text">Information</slot></WDGToolTip></div>',
});
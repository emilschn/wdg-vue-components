import WDGCheckbox from './../../../common/src/components/WDGCheckbox';

export default {
  title: 'WDGCheckbox',
  component: WDGCheckbox,
};

export const UncheckedBefore = () => ({
  components: { WDGCheckbox },
  template: '<WDGCheckbox :value="false"><slot slot="label">J\'accepte !</slot></WDGCheckbox>',
});

export const CheckedBefore = () => ({
  components: { WDGCheckbox },
  template: '<WDGCheckbox :value="true"><slot slot="label">J\'accepte</slot></WDGCheckbox>',
});

export const UncheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox>',
});

export const CheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox>',
});

////////
// In Form Unchecked After //
////////

export const InFormUncheckedNoLabel = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false"></WDGCheckbox><WDGCheckbox :value="true"></WDGCheckbox></div>',
});

export const InFormUncheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormGreyBG = () => ({ // gris de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; background-color: #e1e2e3;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormBlackBG = () => ({ // la case cochée devient invisible sur fond noir
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; background-color: #333; color: #fff;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormPinkBG = () => ({ // rose de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; background-color: #f9cbcb;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormGreenBG = () => ({ // vert de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; background-color: #5EB82C;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormYellowBG = () => ({ // jaune de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; background-color: #EBCE67;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormLongText = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS;"><WDGCheckbox :value="false"><slot slot="label-after">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet turpis arcu. In pellentesque enim eget libero gravida porta. Duis porttitor sollicitudin metus, eu vehicula odio eleifend eget. Cras congue consequat elit ut ornare.</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet turpis arcu. In pellentesque enim eget libero gravida porta. Duis porttitor sollicitudin metus, eu vehicula odio eleifend eget. Cras congue consequat elit ut ornare.</slot></WDGCheckbox></div>',
});

export const InFormUppercase = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; text-transform: uppercase;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormBold = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; font-weight: 700;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormAlignCenter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; text-align:center;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormAlignRight = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; text-align:right;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormItalic= () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; font-style: italic;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUnderline= () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; text-decoration: underline;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormGreyText= () => ({ // gris de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #e1e2e3;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormWhiteText= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #fff;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormRedText= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #EA4F51;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormBlueText= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #00879B;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormGreenText= () => ({ // vert de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #5EB82C;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormPinkText= () => ({ // rose de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #F9CBCB;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormYellowText= () => ({ // jaune de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; color: #EBCE67;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormMargin= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form" style="font-family: Trebuchet MS; margin: 20px;"><WDGCheckbox :value="false"><slot slot="label-after">J\'accepte</slot></WDGCheckbox><WDGCheckbox :value="true"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

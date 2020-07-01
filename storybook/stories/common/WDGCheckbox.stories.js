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
  template: '<div class="wdg-form"><WDGCheckbox :value="false"></WDGCheckbox></div>',
});

export const InFormUncheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterGreyBackground = () => ({ // gris de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; background-color: #e1e2e3;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterBlackBackground = () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; background-color: #333; color: #fff;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterPinkBackground = () => ({ // rose de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; background-color: #f9cbcb;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterGreenBackground = () => ({ // vert de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; background-color: #5EB82C;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterYellowBackground = () => ({ // jaune de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; background-color: #EBCE67;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterLongText = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS;"><slot slot="label-after">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet turpis arcu. In pellentesque enim eget libero gravida porta. Duis porttitor sollicitudin metus, eu vehicula odio eleifend eget. Cras congue consequat elit ut ornare.</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterUppercase = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; text-transform: uppercase;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterBold = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; font-weight: 700;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterAlignCenter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; text-align:center;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterAlignRight = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; text-align:right;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterItalic= () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; font-style: italic;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterUnderline= () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; text-decoration: underline;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterGreyText= () => ({ // gris de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #e1e2e3;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterWhiteText= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #fff;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterRedText= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #EA4F51;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterBlueText= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #00879B;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterGreenText= () => ({ // vert de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #5EB82C;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterPinkText= () => ({ // rose de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #F9CBCB;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterYellowText= () => ({ // jaune de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; color: #EBCE67;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormUncheckedAfterMargin= () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS; margin: 20px;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

////////
// In Form Checked After //
////////

export const InFormCheckedNoLabel = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true"></WDGCheckbox></div>',
});

export const InFormCheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterGreyBackground = () => ({ // gris de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; background-color: #e1e2e3;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterBlackBackground = () => ({ // la case cochée devient invisible sur fond noir
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; background-color: #333; color: #fff;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterPinkBackground = () => ({ // rose de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; background-color: #f9cbcb;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterGreenBackground = () => ({ // vert de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; background-color: #5EB82C;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterYellowBackground = () => ({ // jaune de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; background-color: #EBCE67;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterLongText = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS;"><slot slot="label-after">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet turpis arcu. In pellentesque enim eget libero gravida porta. Duis porttitor sollicitudin metus, eu vehicula odio eleifend eget. Cras congue consequat elit ut ornare.</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterUppercase = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; text-transform: uppercase;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterBold = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; font-weight: 700;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterAlignCenter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; text-align: center;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterAlignRight = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; text-align: right;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterItalic = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; font-style: italic;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterUnderline = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; text-decoration: underline;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterGreyText = () => ({ // gris de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #e1e2e3"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterWhiteText = () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #fff"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterRedText = () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #EA4F51"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterBlueText = () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #00879B"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterGreenText = () => ({  // vert de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #5EB82C"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterPinkText = () => ({ // rose de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #F9CBCB"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterYellowText = () => ({ // jaune de la nouvelle charte
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; color: #EBCE67"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfterMargin = () => ({ 
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS; margin: 20px"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});
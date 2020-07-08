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

export const DefaultLongText = () => ({ // va à la ligne à cause de la largeur fixe
  components: { WDGButton },
  template: '<WDGButton><slot slot="label">Découvrir tous les projets</slot></WDGButton>', 
});

export const DefaultAlignCenter = () => ({
  components: { WDGButton },
  template: '<div style="text-align: center;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const DefaultAlignRight = () => ({
  components: { WDGButton },
  template: '<div style="text-align: right;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const BlackBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #333; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const GreyBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #e1e2e3; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const RedBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #EA4F51; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const BlueBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #00879B; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const GreenBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #5EB82C; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const YellowBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #EBCE67; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const PinkBG = () => ({
  components: { WDGButton },
  template: '<div style="background: #F9CBCB; width: 100%; height: 300px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="facebook"><slot slot="label">Continuer</slot></WDGButton><WDGButton color="transparent"><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const DefaultMargin= () => ({  
  components: { WDGButton },
  template: '<div style="margin: 20px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

//// Cas ne fonctionnant pas mais pas dans la charte graphique

export const Black = () => ({ 
  components: { WDGButton },
  template: '<div style="color: #333;"><WDGButton style="color: #333;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const Grey = () => ({ 
  components: { WDGButton },
  template: '<div style="color: #e1e2e3;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const Pink = () => ({ 
  components: { WDGButton },
  template: '<div style="color: #f9cbcb;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const Green = () => ({ 
  components: { WDGButton },
  template: '<div style="color: #5EB82C;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const Yellow = () => ({ 
  components: { WDGButton },
  template: '<div style="color: #EBCE67;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const DefaultLowercase = () => ({ 
  components: { WDGButton },
  template: '<div style="text-transform: none;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const DefaultNormalWeight = () => ({ 
  components: { WDGButton },
  template: '<div style="font-weight: 400;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const DefaultItalic = () => ({ 
  components: { WDGButton },
  template: '<div style="font-style: italic;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});

export const DefaultUnderline= () => ({  
  components: { WDGButton },
  template: '<div style="text-decoration: underline;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>', 
});


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

export const AlignCenter = () => ({
  components: { WDGButton },
  template: '<div style="text-align: center;"><WDGButton color="red"><slot slot="label">Continuer</slot></WDGButton><br><br><br><WDGButton color="blue"><slot slot="label">Continuer</slot></WDGButton></div>',
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
  template: '<div style="background: #333; width: 100%; height: 100px;"><WDGButton><slot slot="label">Continuer</slot></WDGButton></div>',
});

export const Black = () => ({ // ne fonctionne pas
  components: { WDGButton },
  template: '<WDGButton style="color: #333;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const Grey = () => ({ // ne fonctionne pas + gris de la nouvelle charte
  components: { WDGButton },
  template: '<WDGButton style="color: #e1e2e3;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const Pink = () => ({ // ne fonctionne pas + rose de la nouvelle charte
  components: { WDGButton },
  template: '<WDGButton style="color: #f9cbcb;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const Green = () => ({ // ne fonctionne pas + vert de la nouvelle charte
  components: { WDGButton },
  template: '<WDGButton style="color: #5EB82C;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const Yellow = () => ({ // ne fonctionne pas + jaune de la nouvelle charte
  components: { WDGButton },
  template: '<WDGButton style="color: #EBCE67;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const DefaultLowercase = () => ({ // ne fonctionne pas
  components: { WDGButton },
  template: '<WDGButton style="text-transform: none;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const DefaultNormalWeight = () => ({ // ne fonctionne pas
  components: { WDGButton },
  template: '<WDGButton style="font-weight: 400;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const DefaultItalic = () => ({ // ne fonctionne pas
  components: { WDGButton },
  template: '<WDGButton style="font-style: italic;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const DefaultUnderline= () => ({  // ne fonctionne pas
  components: { WDGButton },
  template: '<WDGButton style="text-decoration: underline;"><slot slot="label">Continuer</slot></WDGButton>', 
});

export const DefaultMargin= () => ({  
  components: { WDGButton },
  template: '<WDGButton style="margin: 20px;"><slot slot="label">Continuer</slot></WDGButton>', 
});
import WDGMascot from './../../../common/src/components/WDGMascot';

export default {
  title: 'WDGMascot',
  component: WDGMascot,
};

export const Face1 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-1"></WDGMascot>',
});

export const Face1ShortText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot>',
});

export const Face1LongText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-1"><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sagittis est, ut pharetra lectus. Aliquam accumsan quam ut auctor aliquet. Fusce dolor mi, mattis vel scelerisque non, vulputate et velit. In varius, diam ac sagittis tincidunt, ex neque aliquet orci, eget blandit metus augue sed tellus. Vestibulum tincidunt arcu. </slot></WDGMascot>',
});

export const Face2 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-2"></WDGMascot>',
});

export const Face2ShortText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-2"><slot slot="text">Hello !</slot></WDGMascot>',
});

export const Face2LongText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-2"><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sagittis est, ut pharetra lectus. Aliquam accumsan quam ut auctor aliquet. Fusce dolor mi, mattis vel scelerisque non, vulputate et velit. In varius, diam ac sagittis tincidunt, ex neque aliquet orci, eget blandit metus augue sed tellus. Vestibulum tincidunt arcu. </slot></WDGMascot>',
});

export const Face3 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-3"></WDGMascot>',
});

export const Face3ShortText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-3"><slot slot="text">Hello !</slot></WDGMascot>',
});

export const Face3LongText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-3"><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sagittis est, ut pharetra lectus. Aliquam accumsan quam ut auctor aliquet. Fusce dolor mi, mattis vel scelerisque non, vulputate et velit. In varius, diam ac sagittis tincidunt, ex neque aliquet orci, eget blandit metus augue sed tellus. Vestibulum tincidunt arcu. </slot></WDGMascot>',
});

export const Side1 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-1"></WDGMascot>',
});

export const Side1ShortText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-1"><slot slot="text">Hello !</slot></WDGMascot>',
});

export const Side1LongText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-1"><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sagittis est, ut pharetra lectus. Aliquam accumsan quam ut auctor aliquet. Fusce dolor mi, mattis vel scelerisque non, vulputate et velit. In varius, diam ac sagittis tincidunt, ex neque aliquet orci, eget blandit metus augue sed tellus. Vestibulum tincidunt arcu. </slot></WDGMascot>',
});

export const Side2 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-2"></WDGMascot>',
});

export const Side2ShortText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-2"><slot slot="text">Hello !</slot></WDGMascot>',
});

export const Side2LongText = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-2"><slot slot="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at sagittis est, ut pharetra lectus. Aliquam accumsan quam ut auctor aliquet. Fusce dolor mi, mattis vel scelerisque non, vulputate et velit. In varius, diam ac sagittis tincidunt, ex neque aliquet orci, eget blandit metus augue sed tellus. Vestibulum tincidunt arcu. </slot></WDGMascot>',
});

export const Face1GreyBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #e1e2e3"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlackBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #333"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1RedBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #EA4F51"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlueBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #00879B"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1GreenBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #5EB82C"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1YellowBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #EBCE67"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1PinkBG = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="background: #F9CBCB"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1Uppercase = () => ({ 
  components: { WDGMascot },
  template: '<div style="text-transform: uppercase; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1Underline = () => ({ 
  components: { WDGMascot },
  template: '<div style="text-decoration: underline; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1NormalFont = () => ({ // reste en italique
  components: { WDGMascot },
  template: '<div style="font-style: normal; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1Bold = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="font-weight: bold; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1TextAlignCenter = () => ({ 
  components: { WDGMascot },
  template: '<div style="text-align: center; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1TextAlignRight = () => ({ 
  components: { WDGMascot },
  template: '<div style="text-align: right; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1Margin = () => ({ 
  components: { WDGMascot },
  template: '<div style="margin: 20px; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1GreyText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #e1e2e3"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlackText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #333"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1RedText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #EA4F51"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlueText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #00879B"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1GreenText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #5EB82C"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1YellowText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #EBCE67"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1PinkText = () => ({ // ne fonctionne pas
  components: { WDGMascot },
  template: '<div style="color: #F9CBCB"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

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

export const Face1GreyBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #e1e2e3"><WDGMascot type="face-1" BGColor="grey"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlackBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #333"><WDGMascot type="face-1" BGColor="black"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1RedBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #EA4F51"><WDGMascot type="face-1" BGColor="red"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlueBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #00879B"><WDGMascot type="face-1" BGColor="blue"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1GreenBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #5EB82C"><WDGMascot type="face-1" BGColor="green"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1YellowBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #EBCE67"><WDGMascot type="face-1" BGColor="yellow"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1PinkBG = () => ({ 
  components: { WDGMascot },
  template: '<div style="background: #F9CBCB"><WDGMascot type="face-1" BGColor="pink"><slot slot="text">Hello !</slot></WDGMascot></div>',
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

export const Face1TextAlignLeft = () => ({ 
  components: { WDGMascot },
  template: '<div style="font-family: Trebuchet MS"><WDGMascot type="face-1" alignMascot="left"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1TextAlignCenter = () => ({ 
  components: { WDGMascot },
  template: '<div style="font-family: Trebuchet MS; text-align: center;"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1TextAlignRight = () => ({ 
  components: { WDGMascot },
  template: '<div style="text-align: right; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1Margin = () => ({ 
  components: { WDGMascot },
  template: '<div style="margin: 20px; font-family: Trebuchet MS"><WDGMascot type="face-1"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1GreyText = () => ({
  components: { WDGMascot },
  template: '<div style="color: #e1e2e3"><WDGMascot type="face-1" TextColor="grey"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1RedText = () => ({ 
  components: { WDGMascot },
  template: '<div style="color: #EA4F51"><WDGMascot type="face-1" TextColor="red"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1BlueText = () => ({
  components: { WDGMascot },
  template: '<div style="color: #00879B"><WDGMascot type="face-1" TextColor="blue"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1GreenText = () => ({ 
  components: { WDGMascot },
  template: '<div style="color: #5EB82C"><WDGMascot type="face-1" TextColor="green"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1YellowText = () => ({ 
  components: { WDGMascot },
  template: '<div style="color: #EBCE67"><WDGMascot type="face-1" TextColor="yellow"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

export const Face1PinkText = () => ({ 
  components: { WDGMascot },
  template: '<div style="color: #F9CBCB"><WDGMascot type="face-1" TextColor="pink"><slot slot="text">Hello !</slot></WDGMascot></div>',
});

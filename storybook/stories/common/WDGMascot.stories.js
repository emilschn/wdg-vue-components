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

export const Face3 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="face-3"></WDGMascot>',
});

export const Side1 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-1"></WDGMascot>',
});

export const Side2 = () => ({
  components: { WDGMascot },
  template: '<WDGMascot type="side-2"></WDGMascot>',
});
import WDGMascot from './../../../common/src/components/WDGMascot';

export default {
  title: 'WDGMascot',
  component: WDGMascot,
};

export const Default = () => ({
  components: { WDGMascot },
  template: '<WDGMascot><div class="wdg-mascot"><div><slot name="text">Coucou</slot></div><svg width="281" height="256" v-if="type == \'face-1\'"><image xlink:href="@./../../../common/src/assets/mascot/front/1.svg" src="@./../../../common/src/assets/mascot/front/1.png" width="281" height="256" /></svg></div></WDGMascot>',
});
import WDGSlider from './../../../common/src/components/WDGSlider';

export default {
  title: 'WDGSlider',
  component: WDGSlider,
};

export const Default = () => ({ // n'affiche rien
  components: { WDGSlider },
  template: '<div class="wdg-slider"><VueSlideBar><template slot="tooltip"><div class="tooltipPerso">1000€</div></template></VueSlideBar></div>',
});
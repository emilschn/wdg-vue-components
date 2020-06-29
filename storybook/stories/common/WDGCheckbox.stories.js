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

export const InFormUncheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="false" style="font-family: Trebuchet MS;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});

export const InFormCheckedAfter = () => ({
  components: { WDGCheckbox },
  template: '<div class="wdg-form"><WDGCheckbox :value="true" style="font-family: Trebuchet MS;"><slot slot="label-after">J\'accepte</slot></WDGCheckbox></div>',
});
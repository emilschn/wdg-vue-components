import WDGFileList from './../../../common/src/components/WDGFileList';

export default {
  title: 'WDGFileList',
  component: WDGFileList,
};

export const Default = () => ({
  components: { WDGFileList },
  template: '<WDGFileList><div class="wdg-file-list"><label :for="id"><slot name="label">Hello</slot></label></div></WDGFileList>',
});

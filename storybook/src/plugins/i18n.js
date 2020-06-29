import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export let i18n = new VueI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
});
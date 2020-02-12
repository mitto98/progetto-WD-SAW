import Vue from "vue";
import VueI18n from 'vue-i18n';


Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'it',
  fallbackLocale: 'en',
  messages: {
    it: require('../locales/it'),
    en: require('../locales/en'),
  }
});

export default i18n;

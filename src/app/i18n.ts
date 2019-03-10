import i18n from 'i18next';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import * as tr_en from '../locales/en/translations.json';
import * as tr_ru from '../locales/ru/translations.json';

i18n.use(LanguageDetector).init({
  resources: {
    en: { translations: tr_en as any },
    ru: { translations: tr_ru as any },
  },

  fallbackLng: 'en',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: '.',

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;

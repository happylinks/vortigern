const i18n = require('i18next');
// import XHR from 'i18next-xhr-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

let resGetPath = '/locales/__lng__/__ns__.json';
// if (window.__commit) {
//   resGetPath = `/locales/${window.__commit}/__lng__/__ns__.json`;
// }

i18n
// .use(XHR)
// .use(LanguageDetector)
.init({
  lng: 'nl',
  fallbackLng: 'nl',

  nsSeparator: false,
  keySeparator: false,
  resGetPath,

  interpolation: {
    escapeValue: false, // not needed for react.
  },
});

export default i18n;

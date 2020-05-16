import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

/* Eventually use a language detector, like i18next-browser-languagedetector
 * to set the language. For now, hard-code to 'en'.
 */

/* Eventually use a backend, like i18next-http-backend to load
 * translation files from server. For now, manually load the
 * english, 'translation' namespace.
 */
const resources = { en: {} };
resources.en.translation = require('./locales/en-translation.json');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;

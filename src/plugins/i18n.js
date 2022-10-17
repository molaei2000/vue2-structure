import Vue from "vue";
import VueI18n from "vue-i18n";
import app from "../tools/App";

Vue.use(VueI18n);

function loadLocales() {
  const context = require.context("@/packages", true, /index.locales.js$/i);
  return context
    .keys()
    .map(context) // import module
    .map((m) => m.default); // get `default` export from each resolved module
}

const resourceLocales = loadLocales();
let generalLocales = require("./../locales");

resourceLocales.forEach((locale) => {
  for (const item in locale) {
    if (locale[item].key !== undefined) {
      let package_key = locale[item].key;
      generalLocales[item][package_key] = locale[item][package_key];
    }
    generalLocales[item].attribute = {
      ...generalLocales[item].attribute,
      ...locale[item].attribute,
    };
    generalLocales[item].placeholder = {
      ...generalLocales[item].placeholder,
      ...locale[item].placeholder,
    };
    generalLocales[item].label = {
      ...generalLocales[item].label,
      ...locale[item].label,
    };
  }
});
const i18n = new VueI18n({
  locale: app.default_lang || process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: "en" || process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  silentLocallationWarn: true,
  formatFallbackMessages: true,
  messages: generalLocales,
});
export default i18n;

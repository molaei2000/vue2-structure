import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./plugins/i18n";
import translator from "./plugins/translator";
import date_formatter from "./plugins/date-formatter";
import currency_formatter from "./plugins/currency-formatter";
import unit_formatter from "./plugins/unit-formatter";
import dynamic_image_loader from "./plugins/dynamic-image-loader";
import goBackNavigator from "./plugins/goBackNavigator";
import Vuelidate from "vuelidate";
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";
import vuetify from "./plugins/vuetify";
import storage from "@/tools/Storage";
import app from "@/tools/App";

Vue.config.productionTip = false;
Vue.use(translator);
Vue.use(date_formatter);
Vue.use(currency_formatter);
Vue.use(unit_formatter);
Vue.use(dynamic_image_loader);
Vue.use(goBackNavigator);
Vue.use(Vuelidate);
Vue.use(vuelidateErrorExtractor, {
  /**
   * Optionally provide the template in the configuration.
   * or register like so Vue.component("FormField", templates.singleErrorExtractor.foundation6)
   */
  template: templates.singleErrorExtractor.foundation6,
  i18n: "validations", // Path to validation messages. Can be deeply.nested.property.
});
require("@/router/middlewares");
i18n.locale = storage.get('lang') ?? app.default_lang;
new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

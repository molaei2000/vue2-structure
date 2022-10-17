import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import theme from "@/plugins/colors/theme";
// import "@/styles/variables.scss";

Vue.use(Vuetify);

const options = {
  theme: theme,
};
export default new Vuetify(options);

// initial state
import app from "@/tools/App";
import i18n from "@/plugins/i18n";

const state = () => ({
  font: app.fonts.en,
  lang: app.default_lang || process.env.VUE_APP_I18N_LOCALE,
  locales: [],
});

// getters
const getters = {
  font: (state) => state.font,
  lang: (state) => state.lang,
  locales: (state) => state.locales,
};

// mutations
const mutations = {
  setFont(state, value) {
    state.font = value;
  },
  setLang(state, value) {
    state.lang = value;
  },
  setLocales(state, value) {
    state.locales = value;
  },
};

// actions
const actions = {
  setSiteFont({ commit }, lang) {
    if (lang === "fa") commit("setFont", app.fonts.fa);
    else commit("setFont", app.fonts.en);
  },
  setI18nLang({ commit }, lang) {
    i18n.locale = lang;
    commit("setLang", lang);
  },
  setLangLocales({ commit }, locales) {
    commit("setLocales", locales);
  },
};

export default {
  namespaced: true,
  name: "lang",
  state,
  getters,
  actions,
  mutations,
};

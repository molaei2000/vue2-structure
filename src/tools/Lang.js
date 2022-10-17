import i18n from "@/plugins/i18n";

// Lang
// control locale

const lang = {
  t(text, values = null) {
    return i18n.t(text, values);
  },

  locale() {
    return i18n.locale;
  },
};

export default lang;

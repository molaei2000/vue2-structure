import moment from "moment";
import jalali_moment from "moment-jalaali";
import store from "@/store/index";

export default {
  install(Vue) {
    // an instance method
    Vue.prototype.$_date = function (date, type = "short") {
      let lang = store.getters["lang/lang"];
      let format_type = "YYYY-MM-DD";
      if (type === "long") format_type = "YYYY-MM-DD, h:mm a";
      if (lang === "en") return moment(date).format(format_type);
      else if (lang === "fa") {
        format_type = "jYYYY/jMM/jDD";
        if (type === "long") format_type = "jYYYY/jMM/jDD , h:mm a";
        return jalali_moment(date).locale("fa").format(format_type);
      }
      else return moment(date).locale("sv").format(format_type);
    };
  },
};

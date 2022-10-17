import { _t } from "@/tools/Utils.js";
export default {
  install(Vue) {
    // an instance method
    Vue.prototype.$_t = function (key, values = null) {
      return _t(key, values);
    };
  },
};

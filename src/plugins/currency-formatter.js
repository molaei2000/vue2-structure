export default {
  install(Vue) {
    // an instance method
    Vue.prototype.$_currency = function (
      number,
      local = "ir-IR",
      currency = "IRR"
    ) {
      return new Intl.NumberFormat(`${local}`, {
        style: "currency",
        currency: `${currency}`,
      }).format(number);
    };
  },
};

export default {
  install(Vue) {
    // an instance method
    Vue.prototype.$_unit = function (number, local = "ir-IR", unit = "gram") {
      return new Intl.NumberFormat(`${local}`, {
        style: "unit",
        unit: `${unit}`,
      }).format(number);
    };
  },
};

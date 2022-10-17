export default {
  install(Vue) {
    // an instance method
    Vue.prototype.$_dynamic_image_loader = function (
      img,
      base_url = "img/app/coins/",
      default_image = "BNB.webp"
    ) {
      try {
        return require("@/assets/" + base_url + img);
      } catch (e) {
        return require("@/assets/" + base_url + default_image);
      }
    };
  },
};

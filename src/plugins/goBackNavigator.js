export default {
  install(Vue) {
    // an instance method
    Vue.prototype.$_backNavigator = function () {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    };
  },
};

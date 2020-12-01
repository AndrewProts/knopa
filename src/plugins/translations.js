window.translations = {};

export default {
  install(Vue) {
    Vue.prototype.$t = slug => {
      return window.translations[window.location.pathname.split("/")[1]][slug] || slug;
    };
  }
};

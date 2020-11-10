import translations from "../../public/data/translations";

export default {
  install(Vue) {
    Vue.prototype.$t = (slug) => {
      return translations[window.location.pathname.split('/')[1]][slug];
    };
  },
};

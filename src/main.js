import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/scss/main.scss";
import translations from "./plugins/translations";

Vue.use(translations);

Vue.config.productionTip = false;

const requireComponent = require.context(
  "../public/icons",
  false,
  /(Icon)[A-Z]\w+\.(svg)$/
);

requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename);
  const componentName = filename
    .split("/")
    .pop()
    .replace(/\.\w+$/, "");
  Vue.component(componentName, componentConfig.default || componentConfig);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

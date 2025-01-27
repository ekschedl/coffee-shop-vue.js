import Vue from "vue";
import App from "./App.vue";

import router from "./router";

import store from "./store";

import "./assets/scss/style.scss"; //global'
import "./filters";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

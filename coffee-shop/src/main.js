import Vue from 'vue'
import App from './App.vue'
import './assets/scss/style.scss' //global
//import FirstComponent from './components/FirstComponent.vue'  -global

Vue.config.productionTip = false

// Vue.component('first-component', FirstComponent) - global

new Vue({
  render: h => h(App),
}).$mount('#app')

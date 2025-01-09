import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import GoodsPageView from '../views/GoodsPageView.vue'
import ContactView from '../views/ContactView.vue'
import ThankYouView from '../views/ThankYouView.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HeroView },
  { path: '/goods', component: GoodsPageView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/contact', component: ContactView },
  { path: '/thank-you', component: ThankYouView },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
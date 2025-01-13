import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/', 
    component: () => import(/* webpackChunkName: "hero-view" */ '../views/HeroView.vue') 
  },
  { 
    path: '/goods', 
    component: () => import(/* webpackChunkName: "goods-page-view" */ '../views/GoodsPageView.vue') 
  },
  { 
    path: '/our-coffee', 
    component: () => import(/* webpackChunkName: "our-coffee-view" */ '../views/OurCoffeeView.vue') 
  },
  { 
    path: '/contact', 
    component: () => import(/* webpackChunkName: "contact-view" */ '../views/ContactView.vue') 
  },
  { 
    path: '/thank-you', 
    component: () => import(/* webpackChunkName: "thank-you-view" */ '../views/ThankYouView.vue') 
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
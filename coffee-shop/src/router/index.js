import Vue from "vue";
import VueRouter from "vue-router";
import CoffeeItemPageView from "../views/CoffeeItemPageView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "hero-view" */ "../views/HeroView.vue"),
  },
  {
    path: "/goods",
    component: () =>
      import(
        /* webpackChunkName: "goods-page-view" */ "../views/GoodsPageView.vue"
      ),
  },
  {
    path: "/our-coffee",
    component: () =>
      import(
        /* webpackChunkName: "our-coffee-view" */ "../views/OurCoffeeView.vue"
      ),
  },
  {
    path: "/contact",
    component: () =>
      import(/* webpackChunkName: "contact-view" */ "../views/ContactView.vue"),
  },
  {
    path: "/thank-you",
    component: () =>
      import(
        /* webpackChunkName: "thank-you-view" */ "../views/ThankYouView.vue"
      ),
  },
  {
    name: "coffee",
    path: "/our-coffee/:id",
    component: () =>
      import(
        /* webpackChunkName: "coffee-item-page-view" */ "../views/CoffeeItemPageView"
      ),
  },
  {
    name: "goods",
    path: "/goods/:id",
    component: () =>
      import(
        /* webpackChunkName: "coffee-item-page-view" */ "../views/CoffeeItemPageView"
      ),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

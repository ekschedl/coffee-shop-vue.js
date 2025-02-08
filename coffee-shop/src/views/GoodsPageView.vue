<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <titel-header :classTitel="'title-big'" :text="pageTitle" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                v-for="good in goods"
                :key="good.id"
                classItem="shop__item"
                :card="good"
                @onNavigate="navigate"
              ></card-component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "../components/NavBarComponent.vue";
import CardComponent from "../components/CardComponent.vue";
import TitelHeader from "@/components/TitelHeader.vue";
import { v4 as uuidv4 } from "uuid";
import { navigate } from "../mixins/navigate";

export default {
  components: { NavBarComponent, CardComponent, TitelHeader },

  computed: {
    goods() {
      return this.$store.getters["getGoodsCard"].goods;
    },
  },
  data() {
    return {
      pageTitle: "For your pleasure",
      name: "goods",
    };
  },
  mixins: [navigate],
};
</script>

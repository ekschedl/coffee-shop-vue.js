<template>
  <main>
    <div class="preview">
      <div class="container">
        <div class="row">
          <div class="col">
            <nav-bar-component />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <titel-header :classTitel="'title-big'" :text="pageTitle" />
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo.svg"
              alt="Beans logo"
            />
            <div class="preview__subtitle">
              We makes every day full of energy and taste
            </div>
            <div class="preview__subtitle">Want to try our beans?</div>
            <a
              href="./coffeepage.html"
              @click.prevent="smoothScroll"
              class="preview__btn"
              >More
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="about" id="about" ref="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="title">About Us</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="about__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible. Afraid at highly months do things on at.
              Situation recommend objection do intention so questions. As
              greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered
              followed. At it went is song that held help face.<br /><br />

              Now residence dashwoods she excellent you. Shade being under his
              bed her, Much read on as draw. Blessing for ignorant exercise any
              yourself unpacked. Pleasant horrible but confined day end
              marriage. Eagerness furniture set preserved far recommend. Did
              even but nor are most gave hope. Secure active living depend son
              repair day ladies now.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="best">
      <div class="container">
        <div class="title" ref="ourBest">
          Our best
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="best__wrapper">
                <card-component
                  v-for="bestseller in bestsellers"
                  :key="bestseller.id"
                  classItem="best__item"
                  :card="bestseller"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import CardComponent from "@/components/CardComponent.vue";
import TitelHeader from "@/components/TitelHeader.vue";
import { v4 as uuidv4 } from "uuid";
import { log10 } from "core-js/core/number";
import { scrollIntoView } from "seamless-scroll-polyfill";

export default {
  components: { NavBarComponent, CardComponent, TitelHeader },
  computed: {
    bestsellers() {
      return this.$store.getters["getBestsellersCard"].bestsellers;
    },
  },
  data() {
    return {
      pageTitle: "Everything You Love About Coffee",
    };
  },

  methods: {
    smoothScroll() {
      // this.$refs.ourBest.scrollIntoView({ #  bad fo Safari
      //     block:'start',
      //     behavior: 'smooth'
      // })

      //cross-browser:
      scrollIntoView(this.$refs.ourBest, {
        behavior: "smooth",
        block: "start",
      });
    },
  },
  mounted() {
    fetch("http://localhost:3000/bestsellers")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setBestellersData", data);
      });
  },
};
</script>

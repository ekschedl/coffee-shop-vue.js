<!--OurCoffeeView.vue -->
<template>
  <main>
    <div class="banner coffepage-banner">
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
              src="@/assets/img/coffee_girl.jpg"
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
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                v-model="searchValue"
              />
              <button type="button" @click="clearFilters">Clear filters</button>
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">
                  Brazil
                </button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">
                  Kenya
                </button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">
                  Columbia
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <card-component
                v-for="coffeeItem in coffee"
                :key="coffeeItem.id"
                classItem="shop__item"
                :card="coffeeItem"
                @onNavigate="navigate"
              />

              <!-- /our-coffee/item -->
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
import { navigate } from "../mixins/navigate";
import debounce from "debounce";

export default {
  components: { NavBarComponent, CardComponent, TitelHeader },
  computed: {
    coffee() {
      return this.$store.getters["getCoffeeCard"].coffee;
    },
    searchValue: {
      get() {
        return this.$store.getters["getSearchValue"];
      },
      set: debounce(function (value) {
        this.$store.dispatch("setSearchValue", value);
      }, 300), // 300 мс задержка перед обновлением состояния
    },
  },
  data() {
    return {
      name: "coffee",
      pageTitle: "Our Coffee",
    };
  },
  mixins: [navigate],
  mounted() {
    fetch("http://localhost:3000/coffee")
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch("setCoffeeData", data);
      });
  },
  methods: {
    onSort(value) {
      this.$store.dispatch("setSortValue", value);
    },
    clearFilters() {
      this.$store.dispatch("setSearchValue", "");
      this.$store.dispatch("setSortValue", "");
    },
  },
};
</script>

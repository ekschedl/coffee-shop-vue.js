<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <router-link :to="links[0].link">
          <img
            :src="require(`@/assets/logo/${links[0].icon}`)"
            :alt="links[0].icon"
          />
        </router-link>
      </li>

      <list-item
        :link="links[1].link"
        :text="links[1].text"
        :classList="'header__item'"
      ></list-item>

      <list-item
        :link="links[2].link"
        :text="links[2].text"
        :classList="'header__item'"
      ></list-item>

      <list-item
        :link="links[3].link"
        :text="links[3].text"
        :classList="'header__item'"
      ></list-item>
    </ul>
  </header>
</template>
<script>
import ListItem from "@/components/ListItem";

export default {
  components: { ListItem },
  data() {
    return {
      links: [
        {
          id: 0,
          icon: "Logo.svg",
          link: "/",
        },
        {
          id: 1,
          text: "Our Coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/goods",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contact",
        },
      ],
    };
  },
};
</script>

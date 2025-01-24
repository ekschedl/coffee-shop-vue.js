<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <list-item
          :link="links.header.link"
          :classList="'header__item'"
          >
          <img
              :src="require(`@/assets/logo/${links.header.icon}`)"
              :alt="links.header.icon"
            />
      </list-item>
      <list-item
          v-for="link in links.other"
          :key="link.id"
          :link="link.link"
          :text="link.text"
          :classList="'header__item'"
        ></list-item>


    </ul>
  </header>
</template>
<script>
import ListItem from "@/components/ListItem";

export default {
  components: { ListItem },
  // data() {
  //   return {
  //     links: {
  //       header:  {
  //         id: 0,
  //         icon: "Logo.svg",
  //         link: "/",
  //       },
  //       other:[
  //       {
  //         id: 1,
  //         text: "Our Coffee",
  //         link: "/our-coffee",
  //       },
  //       {
  //         id: 2,
  //         text: "For your pleasure",
  //         link: "/goods",
  //       },
  //       {
  //         id: 3,
  //         text: "Contact us",
  //         link: "/contact",
  //       },
  //     ],
  //     }
  //   };
  // },
  computed: {
    links() {
      return this.$store.getters["getHeaderslinks"];
    },
  },
};
</script>

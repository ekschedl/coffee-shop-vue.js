<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <li class="footer__item">
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
              :classList="'footer__item'"
            ></list-item>

            <list-item
              :link="links[2].link"
              :text="links[2].text"
              :classList="'footer__item'"
            ></list-item>

            <list-item
              :link="links[3].link"
              :text="links[3].text"
              :classList="'footer__item'"
            ></list-item>
          </ul>
        </div>
      </div>
      <img
        class="beanslogo"
        src="@/assets/logo/Beans_logo_dark.svg"
        alt="Beans logo"
      />
    </div>
  </footer>
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
          icon: "Logo_black.svg",
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

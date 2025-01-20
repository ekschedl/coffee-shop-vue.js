<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
              <list-item
                  :link="links.header.link"
                  :classList="'footer__item'"
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
      links: {
        header:  {
            id: 0,
            icon: "Logo_black.svg",
            link: "/",
          },
        other:
          [
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
      },
    };
  },
};
</script>

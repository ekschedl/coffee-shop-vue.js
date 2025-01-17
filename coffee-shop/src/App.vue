<template>
  <div class="wrapper">
    <router-view />

    <footer-component />
  </div>
</template>

<script>
import HeroView from "@/views/HeroView.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ListItem from "@/components/ListItem.vue";
export default {
  components: { HeroView, FooterComponent, ListItem },
};
</script>

<style></style>

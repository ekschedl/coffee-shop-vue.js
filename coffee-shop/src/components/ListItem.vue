<template>
  <li :class="classList">
    <router-link :to="link">
      {{ text }} <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
      type: String,
    },
    text: {
      required: false,
      type: String,
    },
    classList: {
      type: String,
      required: true,
    },
  },
};
</script>

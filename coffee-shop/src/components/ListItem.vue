<template>
  <li :class="classList">
    <router-link :to="link">
      {{ text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    link: {
      type: String,
    },
    classList: {
      type: String,
      required: true,
    },
  },
};
</script>

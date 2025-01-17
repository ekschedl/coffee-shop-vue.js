<template>
  <li :class="classLi">
    <router-link :to="links[1].link">
      {{ links[1].text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    classLi: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <h1 :class="classTitel">
    {{ text }}
  </h1>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
    classTitel: {
      type: String,
      required: true,
    },
  },
};
</script>

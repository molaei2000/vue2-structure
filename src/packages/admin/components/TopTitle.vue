<template>
  <p class="d-inline text-h5 font-weight-bold">
    {{ title }}
  </p>
</template>

<script>
export default {
  name: "TopTitle",
  props: {
    title: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped></style>

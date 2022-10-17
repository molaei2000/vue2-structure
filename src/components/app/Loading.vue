<template>
  <v-progress-linear
    v-if="loading"
    indeterminate
    color="primary"
  ></v-progress-linear>
</template>

<script>
export default {
  name: "loading",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped></style>

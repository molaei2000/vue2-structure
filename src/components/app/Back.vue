<template>
  <v-btn
    top
    left
    absolute
    icon
    color="primary"
    class="text-uppercase white--text"
    @click="backPage"
  >
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "Back",
  methods: {
    backPage() {
      return this.$_backNavigator();
    },
  },
};
</script>

<style scoped></style>

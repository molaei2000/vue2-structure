<template>
  <v-card
    class="mt-3 mx-auto main-card d-flex justify-center"
    min-height="500px"
    elevation="0"
    outlined
  >
    <p>Welcome</p>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "upcoming",
  data: () => ({
  }),
  computed: {
    ...mapGetters({
      loading: "loading/is_loading",
    }),
  },
};
</script>
<style scoped>

</style>

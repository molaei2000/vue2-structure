<template>
  <v-app :style="'font-family: ' + font" fluid class="p-0 m-0">
    <router-view :key="$route.path" />
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "@/components/app/Snackbar";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { Snackbar },
  data: () => ({
    model: true,
    color: "success",
  }),
  computed: {
    ...mapGetters({
      font: "lang/font",
    }),
  },
};
</script>

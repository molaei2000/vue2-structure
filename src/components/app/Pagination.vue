<template>
  <v-container class="max-width" v-if="total_pages !== 0">
    <v-pagination
      v-model="page"
      class="my-4"
      :length="total_pages"
      :total-visible="5"
      @input="changePage"
      @next="changePage"
      @previous="changePage"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pagination",

  computed: {
    ...mapGetters({
      current_page: "pagination/current_page",
      total_pages: "pagination/total_pages",
    }),
    page: {
      get: function () {
        return this.current_page;
      },
      set: function (page) {
        this.setCurrentPage(page);
      },
    },
  },
  methods: {
    ...mapActions({
      setCurrentPage: "pagination/setCurrentPage",
    }),
    changePage() {
      this.$emit("change-page", this.current_page);
    },
  },
};
</script>

<style scoped></style>

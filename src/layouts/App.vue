<template>
  <v-app>
    <Header class="d-none d-lg-block" />
    <MobileHeader class="d-block d-lg-none" />
    <v-main>
      <v-container class="px-xl-15 pt-0">
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/app/Header.vue";
import Footer from "@/components/app/Footer.vue";
import MobileHeader from "@/components/app/MobileHeader";

export default {
  components: { MobileHeader, Header, Footer },
};
</script>

<style lang="scss" scoped></style>

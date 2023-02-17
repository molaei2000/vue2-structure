<template>
  <v-main>
    <Header />
    <v-container>
      <router-view :key="$route.path" />
    </v-container>
  </v-main>
</template>
<script>
import Header from "@/components/app/Header";
export default {
  components: { Header },
};
</script>

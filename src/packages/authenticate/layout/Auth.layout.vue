<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-layout align-center justify-center fill-height column>
          <v-flex xs12 md5 class="text-center">
            <router-view :key="$route.path"> </router-view>
          </v-flex>
        </v-layout>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Auth.layout",
};
</script>

<style scoped></style>

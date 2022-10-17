<template>
  <v-app>
    <v-main class="pt-10">
      <v-container fluid>
        <v-row>
          <v-col cols="12" class="pt-10 pb-11">
            <v-layout align-center justify-center fill-height column>
              <v-flex xs12 md5 class="text-center">
                <router-view :key="$route.path"> </router-view>
                <p class="pt-3" style="color: #797979">
                  {{ $_t("authentication.components.auth.copy_right") }}
                </p>
              </v-flex>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Auth.layout",
};
</script>

<style scoped></style>

<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <v-menu v-model="menu" :close-on-content-click="false" top offset-y>
    <template v-slot:activator="{ attrs, on }">
      <div v-bind="attrs" v-on="on">
        <v-avatar v-bind="$attrs" v-on="on" @mouseover="menu = !menu">
          <v-img :src="asset_url + avatar" />
        </v-avatar>
      </div>
    </template>

    <v-card>
      <v-list>
        <user-item top color="primary" />
      </v-list>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn small text @click="logout"> Logout </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import UserItem from "./UserItem";
import { mapGetters } from "vuex";
import AuthenticationServices from "@/packages/authenticate/services/auth.service";
export default {
  components: {
    UserItem,
  },
  computed: {
    ...mapGetters({
      avatar: "authentication/avatar",
      asset_url: "assets_url/assets_url",
      refresh_token: "authentication/refresh_token",
    }),
  },
  data: () => ({
    Auth: new AuthenticationServices(),
    fav: true,
    menu: false,
    message: false,
    hints: true,
  }),
  mounted() {
    this.load();
  },

  methods: {
    async logout() {
      await this.Auth.logout({ refresh_token: this.refresh_token });
    },
  },
};
</script>
